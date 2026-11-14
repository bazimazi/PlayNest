//! PlayNest's Tauri shell: the same web build as the browser, PWA and Capacitor versions, in a native window.
//!
//! The web app owns everything. The shell only adds what a webview can't do well on its own: saving a backup file
//! where the parent chooses, and opening links and phone numbers in the system's own apps (see `src/platform`).

use std::path::PathBuf;
use tauri_plugin_dialog::DialogExt;

/// Asks where to save the backup, then writes it. Returns `false` if the parent cancelled.
///
/// Async so the blocking dialog runs off the main thread, as the dialog plugin requires.
#[tauri::command]
async fn save_backup(
    app: tauri::AppHandle,
    name: String,
    contents: String,
) -> Result<bool, String> {
    let picked = app
        .dialog()
        .file()
        .set_file_name(&name)
        .add_filter("PlayNest backup", &["txt", "json"])
        .blocking_save_file();
    let Some(path) = picked else { return Ok(false) };
    let path: PathBuf = path.into_path().map_err(|e| e.to_string())?;
    std::fs::write(&path, contents).map_err(|e| e.to_string())?;
    Ok(true)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![save_backup])
        .run(tauri::generate_context!())
        .expect("error while running PlayNest");
}
