# ToolBox
 使用tauri2.0开发的小工具合集，前端用的react,软件复制的图吧工具箱

## tauri指南
https://v2.tauri.app/zh-cn/start/create-project/

## UI框架
使用的是腾讯的tdesign

https://tdesign.tencent.com/react/overview

## 项目启动
1. 克隆项目
```bash
git clone https://github.com/cong-zc/ToolBox.git
```
2. 进入项目目录
3. 安装依赖
```bash
npm i
```
4. 启动项目
```bash
npm run tauri dev
```
5. 打包项目
```bash
npm run tauri build
```
## 项目结构
```
ToolBox
├── public # 公共资源
├── src #react代码
│   ├── assets/ #静态资源
│   ├── components/ #组件
│   ├── pages/ #页面
│   ├── App.tsx
│   ├── index.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
├── tauri #tauri配置
│   ├── resources/ #放置工具的文件夹
│   ├── src/ #rust代码
│   ├── Cargo.toml #rust配置文件
│   ├── tauri.conf.json #tauri配置文件

## 功能实现
1.硬件信息:只搭建结构,未实现数据
2.cpu工具:基本完成
3.内存工具:基本完成
4.硬盘工具:缺少图标
5.屏幕工具:缺少图标
6.综合检测:缺少图标
7.外设工具:缺少图标
8.烤鸡工具:缺少图标
9.其他工具:缺少图标
10.选项设置:计划显示版本号等信息,以及皮肤设置,图标设置等功能

 使用tauri开发的小工具合集，前端用的react,软件复制的图吧工具箱
 
 部分软件实在太古老了，图标也没有做完，后续会接着更新，并丰富一下功能