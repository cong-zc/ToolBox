use std::{env, process::Command};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {

    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command] // 标记该函数为Tauri命令，可以从前端调用
fn 打开外部程序(程序目录: &str) { // 定义函数，接受一个字符串参数表示程序目录
    Command::new(程序目录) // 创建一个新的命令对象，指定要执行的程序
        .spawn() // 异步启动该程序
        .expect("sh command failed to start"); // 如果启动失败，输出错误信息并panic
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, 打开外部程序])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
