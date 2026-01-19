# 📂 My Homelab Configs

Welcome to the configuration backup for my home server setup. This repository hosts themes, scripts, and config files for my self-hosted services (running on Linux/Raspberry Pi).

> *Warning: These configs are tailored to my personal setup. Feel free to adapt them, but check the code before deploying!* 🛠️

## 🦎 Memos (v0.25+)

My custom "Dark Glass" modification for [Memos](https://usememos.com/).
My custom "Dark Glass" modification for [Memos](https://usememos.com/).<img width="1756" height="929" alt="screenshot" src="https://github.com/user-attachments/assets/597857cb-d3ed-4f10-8fa6-e42c032612e6" />
### 1. Dark Glass Theme (`/memos/theme.css`)
A complete visual overhaul that replaces the standard flat UI with a translucent, frosted glass aesthetic.

* **Fixed Background:** Keeps the wallpaper static with a dimming overlay for better text readability.
* **Glass Cards:** Applies a `backdrop-filter: blur` to notes and the sidebar.
* **"Thicc" Mode:** Increases the timeline width to **1200px** (95%) to utilize wide monitors effectively.
* **Settings Fix:** Restores visibility to the Settings container, which often breaks in transparent themes.
* **High Contrast Menus:** Forces all dropdowns, popups, and dialogs to **opaque black** (the "Nuclear Option") to prevent z-index layering bugs in v0.25.

### 🖼️ How to get the Direct Image Link from GitHub
If you uploaded your wallpaper to this repository and want to use it in Memos, follow these steps to get the correct URL:

1.  Navigate to the image file in this repository (e.g., `memos/lizard.jpg`).
2.  Click on the filename to open the image view.
3.  Look for the **"Download"** button or the **"Raw"** button above the image.
4.  **Right-click** that button and select **"Copy link address"**.
5.  The link should look like this: `https://raw.githubusercontent.com/YourUsername/my-homelab-configs/main/memos/lizard.jpg`
6.  Paste this link into your `theme.css` inside the `url('...')` block.

**Installation:**
1.  Copy the content of `memos/theme.css`.
2.  Paste it into **Settings > System > Custom CSS** in your Memos instance.
3.  Use the "Raw" link obtained above for the background image.

### 2. "Angry Tab" Script (`/memos/script.js`)
A lightweight JavaScript snippet for the **Custom Script** section.

* **Behavior:** When you switch away from the Memos tab, the browser title changes to `😡 Come back!`. When you return, the original title is instantly restored.

---

## 🎨 Credits
* **Wallpaper:** Found on the web (Artist unknown). This theme was built around this specific visual style. If you are the creator of the background image, please contact me so I can provide proper credit or remove it if requested.

---

## 🚀 Future Plans
I plan to add configurations for other services I use, including:
* **Homepage** (`services.yaml`, `widgets.yaml`)
* **Docker Compose** snippets
* **Bash scripts** for system maintenance

---
*Created for personal use, shared for the community.* 🖤
