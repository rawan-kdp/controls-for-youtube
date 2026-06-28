// YouTube Skip Controls - Cross-browser (Chrome, Firefox, Edge, Brave, Opera)
(function () {

  function getVideo() {
    return document.querySelector("video");
  }

  function skip(seconds) {
    const video = getVideo();
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(video.duration || 0, video.currentTime + seconds));
    showToast(seconds);
  }

  function showToast(seconds) {
    const existing = document.querySelector(".yt-skip-toast");
    if (existing) existing.remove();
    const toast = document.createElement("div");
    toast.className = "yt-skip-toast";
    toast.textContent = (seconds > 0 ? "+" : "") + seconds + "s";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 700);
  }

  function buildButtons() {
    const group = document.createElement("div");
    group.id = "yt-skip-controls";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", "Skip controls");

    const steps = [15, 10, 5];

    // Back buttons
    steps.forEach(s => {
      const btn = document.createElement("button");
      btn.className = "yt-skip-btn yt-skip-back ytp-button";
      btn.title = `Back ${s}s`;
      btn.setAttribute("aria-label", `Rewind ${s} seconds`);
      btn.innerHTML = `
        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M18 7V2L11 9l7 7v-5c5.52 0 10 4.48 10 10s-4.48 10-10 10S8 26.52 8 21H6c0 6.63 5.37 12 12 12s12-5.37 12-12S24.63 7 18 7z"/>
          <text x="18" y="25" text-anchor="middle" font-size="11" font-weight="700" fill="white" font-family="Roboto,Arial,sans-serif">${s}</text>
        </svg>`;
      btn.addEventListener("click", (e) => { e.stopPropagation(); skip(-s); });
      group.appendChild(btn);
    });

    // Forward buttons
    steps.slice().reverse().forEach(s => {
      const btn = document.createElement("button");
      btn.className = "yt-skip-btn yt-skip-fwd ytp-button";
      btn.title = `Forward ${s}s`;
      btn.setAttribute("aria-label", `Skip forward ${s} seconds`);
      btn.innerHTML = `
        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M18 7V2l7 7-7 7v-5C12.48 11 8 15.48 8 21s4.48 10 10 10 10-4.48 10-10h2c0 6.63-5.37 12-12 12S6 27.63 6 21s5.37-12 12-12z"/>
          <text x="18" y="25" text-anchor="middle" font-size="11" font-weight="700" fill="white" font-family="Roboto,Arial,sans-serif">${s}</text>
        </svg>`;
      btn.addEventListener("click", (e) => { e.stopPropagation(); skip(s); });
      group.appendChild(btn);
    });

    return group;
  }

  function inject() {
    if (document.getElementById("yt-skip-controls")) return;

    const leftControls = document.querySelector(".ytp-left-controls");
    if (!leftControls) return;

    const volumePanel = leftControls.querySelector(".ytp-volume-panel");
    if (!volumePanel) return;

    const group = buildButtons();
    volumePanel.insertAdjacentElement("afterend", group);
  }

  function tryInject() {
    if (document.querySelector(".ytp-volume-panel")) {
      inject();
    }
  }

  // SPA navigation + DOM change watcher
  let lastUrl = location.href;
  new MutationObserver(() => {
    const cur = location.href;
    if (cur !== lastUrl) {
      lastUrl = cur;
      document.getElementById("yt-skip-controls")?.remove();
      setTimeout(tryInject, 1800);
    }
    if (!document.getElementById("yt-skip-controls")) {
      tryInject();
    }
  }).observe(document.body, { childList: true, subtree: true });

  setTimeout(tryInject, 1500);
})();
