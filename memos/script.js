/**
 * === MEMOS CUSTOM SCRIPT: "ANGRY TAB" ===
 * Description: Dynamically changes the browser tab title when the user switches windows.
 * behavior:
 * - Active: Shows the normal page title.
 * - Inactive: Shows "😡 Come back!" (or any custom text).
 * * Why use this?
 * Memos is a Single Page Application (SPA). The title changes dynamically 
 * as you navigate. This script respects that by caching the title *immediately* * before the user leaves.
 */

// 1. Initialize a variable to store the valid document title.
let cacheTitle = document.title;

// 2. Event Listener: Window Blur
// This triggers when the user clicks away, minimizes the browser, or switches tabs.
window.addEventListener("blur", () => {
  
  // CRITICAL STEP: Update the cache right before changing the title.
  // Since Memos changes titles dynamically (e.g. "Memo #123" vs "Timeline"),
  // we must capture exactly what was on screen before the user left.
  cacheTitle = document.title;

  // Set the temporary "Angry" message
  // You can replace the emoji with anything: 🥺, 🔪, ⚡️
  document.title = "😡 Come back!";
});

// 3. Event Listener: Window Focus
// This triggers when the user returns to the tab.
window.addEventListener("focus", () => {
  
  // Restore the original title from our cache.
  // This ensures the user sees exactly what they were looking at before.
  document.title = cacheTitle;
});
