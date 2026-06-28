# ⏩ YouTube Skip Controls
#controls for youtube

> Adds **5s, 10s, and 15s** rewind and forward buttons directly inside YouTube's player — right next to the volume button, where they belong.

---

## ✨ Features

- ⏪ **Rewind** 5, 10, or 15 seconds with one click
- ⏩ **Forward** 5, 10, or 15 seconds with one click
- 🎯 Buttons appear **inside YouTube's native player controls** (not a floating popup)
- 💬 On-screen toast shows how much you skipped (e.g. `+10s`)
- 🌐 Works on **Chrome, Firefox, Edge, Brave, and Opera**
- 🪶 Lightweight — no tracking, no permissions, no data collected

---

## 📸 Preview

> Buttons appear in the player bar after the volume slider:
```
▶  ⏸  🔊————  ↺15  ↺10  ↺5  |  ↻5  ↻10  ↻15   •  0:32 / 10:45
```

---

## 🚀 Install Without a Store (All Browsers)

### Chrome / Brave / Opera / Edge (Chromium)

1. Download this repo → click the green **Code** button → **Download ZIP**
2. Unzip the folder
3. Open your browser and go to the extensions page:
   - Chrome / Brave: `chrome://extensions`
   - Edge: `edge://extensions`
   - Opera: `opera://extensions`
4. Enable **Developer Mode** (toggle in the top right)
5. Click **Load Unpacked**
6. Select the unzipped folder
7. Open YouTube — the buttons appear automatically ✅

### Firefox

1. Download this repo → click the green **Code** button → **Download ZIP**
2. Unzip the folder
3. Open Firefox and go to `about:debugging`
4. Click **This Firefox** on the left
5. Click **Load Temporary Add-on**
6. Open the unzipped folder and select `manifest.json`
7. Open YouTube — the buttons appear automatically ✅

> ⚠️ Note: Firefox temporary add-ons are removed when you close the browser. For a permanent install on Firefox, use the link below.

---

## 🏪 Install from Official Stores

| Browser | Store | Status |
|---|---|---|
| Firefox | [Mozilla Add-ons](https://addons.mozilla.org) | Coming soon |
| Edge | [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons) | Coming soon |
| Opera | [Opera Add-ons](https://addons.opera.com) | Coming soon |

---

## 🔒 Privacy

This extension:
- ✅ Does **not** collect any data
- ✅ Does **not** send anything to any server
- ✅ Does **not** require any special permissions
- ✅ Only runs on `youtube.com`

---

## 📁 Files

| File | Purpose |
|---|---|
| `manifest.json` | Extension config, works on all browsers |
| `content.js` | Injects skip buttons into YouTube's player |
| `style.css` | Styles the buttons to match YouTube's UI |
| `icon.png` | Extension icon |

---

## 🛠️ Built With

- Vanilla JavaScript (no frameworks)
- Chrome Manifest V3 (compatible with all modern browsers)

---

## 📄 License

MIT License — free to use, share, and modify.
