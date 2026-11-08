/**
 * Reads the source code the way a compiler does, for the tests and the tooling: which strings are translated, and which
 * words on screen were left out.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import ts from 'typescript';

const ROOT = join(__dirname, '..');

function sourceFiles(dir = ROOT): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return name === 'i18n' || name === 'assets' ? [] : sourceFiles(p);
    // The labels in model.ts are translated with `localize()`, like the rest of the content.
    return /\.tsx?$/.test(name) && !/\.test\.tsx?$/.test(name) && name !== 'model.ts' ? [p] : [];
  });
}

export interface Use {
  /** The catalog key: the English itself, or `one|other` for a plural. */
  key: string;
  file: string;
  line: number;
}

export interface Leak {
  text: string;
  file: string;
  line: number;
}

const literal = (n: ts.Node | undefined): string | null => (n && (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) ? n.text : null);

/** Words a parent would read. Identifiers, class names, paths and CSS don't have spaces and capitals together. */
const looksLikeWords = (s: string) => /[A-Za-z]{2}/.test(s) && (/[A-Za-z] [A-Za-z]/.test(s) || /^[A-Z][a-z]+/.test(s));

/** JSX props that hold code rather than words. */
const CODE_PROPS = new Set([
  'className', 'to', 'href', 'id', 'd', 'fill', 'stroke', 'viewBox', 'style', 'type', 'role', 'key', 'name', 'size', 'tone', 'world', 'icon', 'emoji', 'e',
  'htmlFor', 'aria-labelledby', 'aria-describedby', 'aria-controls', 'aria-hidden', 'aria-live', 'autoComplete', 'inputMode', 'lang', 'dir', 'mode', 'value',
  'rel', 'target', 'accept', 'download', 'transform', 'points', 'clipPath', 'mood', 'variant', 'kind', 'preload', 'src', 'path', 'pattern', 'enterKeyHint',
  'fallback', 'data-testid', 'strokeLinecap', 'strokeLinejoin', 'fillRule', 'clipRule', 'textAnchor', 'gradientUnits', 'gradientTransform', 'offset', 'stopColor', 'loading', 'decoding', 'capture', 'color',
]);

/** Plain strings that are safe to leave: only code reads them. */
const CODE_CALLS = new Set(['import', 'require', 'console', 'matchMedia', 'getElementById', 'querySelector', 'querySelectorAll', 'closest', 'addEventListener', 'removeEventListener', 'createElement', 'getItem', 'setItem', 'removeItem', 'getAttribute', 'setAttribute', 'Error', 'haptic']);

export function scanSource(files: string[] = sourceFiles()): { uses: Use[]; dynamic: Leak[]; leaks: Leak[] } {
  const uses: Use[] = [];
  const dynamic: Leak[] = [];
  const leaks: Leak[] = [];

  for (const path of files) {
    const text = readFileSync(path, 'utf8');
    const file = relative(ROOT, path).replace(/\\/g, '/');
    // Content is translated with `localize()`, so its words aren't leaks. A few of its functions do call `t()`.
    const isContent = file.startsWith('data/');
    if (isContent && !/import \{[^}]*\b(t|tn)\b[^}]*\} from/.test(text)) continue;
    const sf = ts.createSourceFile(path, text, ts.ScriptTarget.Latest, true, path.endsWith('x') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
    const lineOf = (n: ts.Node) => sf.getLineAndCharacterOfPosition(n.getStart()).line + 1;
    const ignored = (n: ts.Node) => {
      const line = sf.getLineAndCharacterOfPosition(n.getStart()).line;
      const lines = text.split('\n');
      return /i18n-ignore/.test(lines[line]) || /i18n-ignore/.test(lines[line - 1] ?? '');
    };
    const leak = (n: ts.Node, s: string) => {
      if (!isContent && !ignored(n)) leaks.push({ text: s.trim().replace(/\s+/g, ' '), file, line: lineOf(n) });
    };

    const visit = (node: ts.Node, skip = false): void => {
      if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node) || ts.isTypeNode(node) || ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) return;

      if (ts.isCallExpression(node)) {
        const callee = node.expression.getText(sf);
        if (callee === 'tc') {
          const context = literal(node.arguments[0]);
          const source = literal(node.arguments[1]);
          if (context === null || source === null) dynamic.push({ text: node.getText(sf).slice(0, 80), file, line: lineOf(node) });
          else uses.push({ key: `${context}|${source}`, file, line: lineOf(node) });
          node.arguments.slice(2).forEach((a) => visit(a));
          return;
        }
        if (callee === 't' || callee === 'rich' || callee === 'tn') {
          const first = literal(node.arguments[0]);
          const second = callee === 'tn' ? literal(node.arguments[1]) : null;
          const third = callee === 'tn' ? literal(node.arguments[2]) : null;
          if (callee === 't' || callee === 'rich') {
            if (first === null) dynamic.push({ text: node.getText(sf).slice(0, 80), file, line: lineOf(node) });
            else uses.push({ key: first, file, line: lineOf(node) });
          } else if (second === null || third === null) dynamic.push({ text: node.getText(sf).slice(0, 80), file, line: lineOf(node) });
          else uses.push({ key: `${second}|${third}`, file, line: lineOf(node) });
          // Later arguments are params, and may hold more calls.
          node.arguments.slice(callee === 'tn' ? 3 : 1).forEach((a) => visit(a));
          return;
        }
        const name = ts.isPropertyAccessExpression(node.expression) ? node.expression.name.text : callee;
        if (CODE_CALLS.has(name) || callee.startsWith('console.')) return;
      }
      if (ts.isNewExpression(node) && node.expression.getText(sf) === 'Error') return;

      if (ts.isJsxText(node)) {
        if (/\p{L}/u.test(node.text)) leak(node, node.text);
        return;
      }
      if (ts.isJsxAttribute(node)) {
        const name = node.name.getText(sf);
        const isCode = CODE_PROPS.has(name) || name.startsWith('data-');
        const init = node.initializer;
        if (init && ts.isStringLiteral(init)) {
          if (!isCode && looksLikeWords(init.text)) leak(init, init.text);
          return;
        }
        // Plain strings in a code prop are code, but a translated label can still be passed through one.
        if (init) ts.forEachChild(init, (c) => visit(c, skip || isCode));
        return;
      }
      if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
        // Comparisons and switch labels are code, whatever they look like.
        const up = node.parent;
        const compared = up && ts.isBinaryExpression(up) && [ts.SyntaxKind.EqualsEqualsEqualsToken, ts.SyntaxKind.ExclamationEqualsEqualsToken].includes(up.operatorToken.kind);
        if (!skip && !compared && !(up && ts.isCaseClause(up)) && looksLikeWords(node.text)) leak(node, node.text);
        return;
      }
      if (ts.isTemplateExpression(node)) {
        const words = [node.head.text, ...node.templateSpans.map((s) => s.literal.text)].join(' ');
        if (looksLikeWords(words) && !skip) leak(node, node.getText(sf));
        node.templateSpans.forEach((s) => visit(s.expression, skip));
        return;
      }
      ts.forEachChild(node, (c) => visit(c, skip));
    };
    visit(sf);
  }
  return { uses, dynamic, leaks };
}
