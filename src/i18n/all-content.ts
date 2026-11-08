/**
 * Loads everything that can be translated, so the tooling and the tests can see it all. The app itself never imports
 * this: it would load every content file at startup, which the chunks are there to avoid.
 */
import '../data/activities';
import '../data/adaptations';
import '../data/celebrations';
import '../data/coach';
import '../data/crying';
import '../data/domains';
import '../data/firstaid';
import '../data/firsts';
import '../data/guides';
import '../data/helplines';
import '../data/milestones';
import '../data/packs';
import '../data/routines';
import '../data/songs';
import '../data/stages';
import '../data/stories';
import '../data/talk';
import '../data/tips';
import '../data/types';
import '../store/model';

export { registry } from './index';
