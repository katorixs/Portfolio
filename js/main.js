(function () {
  const artboard = document.querySelector(".artboard");

  const mobileMq = window.matchMedia("(max-width: 860px)");

  function fit() {
    if (mobileMq.matches) {
      artboard.style.transform = "none";
      artboard.style.marginBottom = "0px";
      return;
    }
    const width = document.documentElement.clientWidth;
    const scale = width / 1400;
    const height = artboard.offsetHeight;
    artboard.style.transformOrigin = "top center";
    artboard.style.transform = "scale(" + scale + ")";
    artboard.style.marginBottom = height * (scale - 1) + "px";
  }

  fit();
  window.addEventListener("resize", fit);
  if (mobileMq.addEventListener) {
    mobileMq.addEventListener("change", fit);
  } else {
    mobileMq.addListener(fit);
  }

  const scrollReveals = document.querySelectorAll(".reveal-on-scroll");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    scrollReveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    scrollReveals.forEach(function (el) {
      io.observe(el);
    });
  }

  const rest = document.querySelector("[data-bio-rest]");
  if (!rest) return;

  const source = rest.textContent;
  rest.textContent = "";
  const chars = [];
  for (const part of source.split(/(\s+)/)) {
    if (!part) continue;
    if (/^\s+$/.test(part)) {
      rest.appendChild(document.createTextNode(part));
      continue;
    }
    const word = document.createElement("span");
    word.className = "bio-word";
    for (const ch of part) {
      const span = document.createElement("span");
      span.className = "bio-ch";
      span.textContent = ch;
      word.appendChild(span);
      chars.push(span);
    }
    rest.appendChild(word);
  }

  function paintBio() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      chars.forEach(function (el) {
        el.classList.add("is-ink");
      });
      return;
    }
    const rect = rest.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.82;
    const end = vh * 0.28;
    let progress = (start - rect.top) / (rect.height + (start - end));
    progress = Math.max(0, Math.min(1, progress));
    const n = Math.round(progress * chars.length);
    chars.forEach(function (el, i) {
      el.classList.toggle("is-ink", i < n);
    });
  }

  paintBio();
  window.addEventListener("scroll", paintBio, { passive: true });
  window.addEventListener("resize", paintBio);
})();
