# 📂 My Homelab Configs

Welcome to the configuration backup for my home server setup. This repository hosts themes, scripts, and config files for my self-hosted services (running on Linux/Raspberry Pi).

> *Warning: These configs are tailored to my personal setup. Feel free to adapt them, but check the code before deploying!* 🛠️

## 🦎 Memos (v0.25+)

My custom "Dark Glass" modification for [Memos](https://usememos.com/).<img width="1756" height="929" alt="screenshot" src="https://github.com/user-attachments/assets/597857cb-d3ed-4f10-8fa6-e42c032612e6" />


### 1. Dark Glass Theme (`/memos/theme.css`)
A complete visual overhaul that replaces the standard flat UI with a translucent, frosted glass aesthetic.

* **Fixed Background:** Keeps the wallpaper static with a dimming overlay for better text readability.
* **Glass Cards:** Applies a `backdrop-filter: blur` to notes and the sidebar.
* **"Thicc" Mode:** Increases the timeline width to **1200px** (95%) to utilize wide monitors effectively.
* **Settings Fix:** Restores visibility to the Settings container, which often breaks in transparent themes.
* **High Contrast Menus:** Forces all dropdowns, popups, and dialogs to **opaque black** (the "Nuclear Option") to prevent z-index layering bugs in v0.25.

**Installation:**
1.  Copy the content of `memos/theme.css`.
2.  Paste it into **Settings > System > Custom CSS** in your Memos instance.
3.  **Important:** Search for `background-image: url(...)` in the code and replace the placeholder with the URL of your own wallpaper.

### 2. "Angry Tab" Script (`/memos/script.js`)
A lightweight JavaScript snippet for the **Custom Script** section.

* **Behavior:** When you switch away from the Memos tab, the browser title changes to `😡 Come back!`. When you return, the original title is instantly restored.
* **Why:** To help locate the Memos tab quickly among many open windows and add a bit of personality.

**Installation:**
1.  Copy the content of `memos/script.js`.
2.  Paste it into **Settings > System > Custom Script**.
3.  Save and refresh the page.

## 🎨 Credits
* Wallpaper: Found on the web (Artist unknown). If you are the creator, please let me know so I can provide proper credit!
---

## 🚀 Future Plans
I plan to add configurations for other services I use, including:
* **Homepage** (`services.yaml`, `widgets.yaml`)
* **Docker Compose** snippets
* **Bash scripts** for system maintenance

---
*Created for personal use, shared for the community.* 🖤
