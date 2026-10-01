(function () {
  "use strict";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function typeInto(node, full, speed, done) {
    node.textContent = "";
    node.classList.add("is-typing");
    var i = 0;
    function tick() {
      if (i <= full.length) {
        node.textContent = full.slice(0, i);
        i += 2;
        window.setTimeout(tick, speed || 8);
      } else {
        node.textContent = full;
        node.classList.remove("is-typing");
        if (done) done();
      }
    }
    tick();
  }

  function typeBlock(root, speed, done) {
    var nodes = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    while (walker.nextNode()) {
      var n = walker.currentNode;
      if (n.parentElement && n.parentElement.closest("[hidden], .timeline__plan")) continue;
      if (n.parentElement && n.parentElement.classList.contains("timeline__toggle")) continue;
      nodes.push(n);
    }
    var idx = 0;
    root.classList.add("is-typing");
    function next() {
      if (idx >= nodes.length) {
        root.classList.remove("is-typing");
        root.classList.add("is-revealed");
        if (done) done();
        return;
      }
      var n = nodes[idx++];
      var full = n.textContent;
      n.textContent = "";
      var i = 0;
      function tick() {
        if (i <= full.length) {
          n.textContent = full.slice(0, i);
          i += 2;
          window.setTimeout(tick, speed || 5);
        } else {
          n.textContent = full;
          window.setTimeout(next, 40);
        }
      }
      tick();
    }
    next();
  }

  function renderTimeline(timelineRoot, items) {
    timelineRoot.textContent = "";
    var list = el("ol", "timeline__list");

    items.forEach(function (item, index) {
      var li = el("li", "timeline__item");
      li.setAttribute("data-id", item.id || String(index));
      li.setAttribute("data-role", item.aiRole || "");

      var head = el("div", "timeline__head");
      head.appendChild(el("time", "timeline__date", item.date));
      var role = el("span", "timeline__role", item.roleLabel || item.aiRole || "");
      role.setAttribute("data-role", item.aiRole || "");
      head.appendChild(role);

      var body = el("div", "timeline__body");
      body.appendChild(el("h3", "timeline__title", item.title));
      body.appendChild(el("p", "timeline__summary", item.summary));

      if (item.planDetails && item.planDetails.length) {
        var detailsId = "plan-" + (item.id || index);
        var wrap = el("div", "timeline__details");
        var btn = el("button", "timeline__toggle", "Show plan details");
        btn.type = "button";
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-controls", detailsId);

        var panel = el("ul", "timeline__plan");
        panel.id = detailsId;
        panel.hidden = true;

        item.planDetails.forEach(function (d) {
          var row = el("li", "timeline__plan-row");
          row.appendChild(el("span", "timeline__plan-label", d.label));
          var text = el("span", "timeline__plan-text");
          text.setAttribute("data-full", d.text);
          text.textContent = d.text;
          row.appendChild(text);
          panel.appendChild(row);
        });

        btn.addEventListener("click", function () {
          var opening = panel.classList.contains("is-open") === false;
          if (opening) {
            panel.hidden = false;
            void panel.offsetHeight;
            panel.classList.add("is-open");
            btn.setAttribute("aria-expanded", "true");
            btn.textContent = "Hide plan details";
            panel.querySelectorAll(".timeline__plan-text").forEach(function (r, ri) {
              var full = r.getAttribute("data-full") || r.textContent;
              window.setTimeout(function () {
                typeInto(r, full, 10);
              }, ri * 280);
            });
          } else {
            panel.classList.remove("is-open");
            btn.setAttribute("aria-expanded", "false");
            btn.textContent = "Show plan details";
            window.setTimeout(function () {
              if (!panel.classList.contains("is-open")) panel.hidden = true;
            }, 320);
          }
        });

        wrap.appendChild(btn);
        wrap.appendChild(panel);
        body.appendChild(wrap);
      }

      li.appendChild(head);
      li.appendChild(body);
      list.appendChild(li);
    });

    timelineRoot.appendChild(list);
  }

  function renderSources(sourcesRoot, items) {
    sourcesRoot.textContent = "";
    items.forEach(function (src) {
      var li = el("li", "source");
      li.appendChild(el("div", "source__title", src.displayText || src.label));
      if (src.url) {
        var a = el("a", "source__link", src.url);
        a.href = src.url;
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        li.appendChild(a);
      } else {
        li.appendChild(el("p", "source__fallback", src.label || "Source"));
      }
      if (src.note) li.appendChild(el("p", "source__note", src.note));
      sourcesRoot.appendChild(li);
    });
  }

  function init() {
    var data = window.CASE_DATA || { timeline: [], sources: [] };
    var timelineRoot = document.getElementById("timeline-root");
    var sourcesRoot = document.getElementById("sources-root");
    if (timelineRoot) {
      if (data.timeline && data.timeline.length) renderTimeline(timelineRoot, data.timeline);
      else timelineRoot.textContent = "Timeline data missing.";
    }
    if (sourcesRoot) {
      if (data.sources && data.sources.length) renderSources(sourcesRoot, data.sources);
      else sourcesRoot.textContent = "Sources missing.";
    }
  }

  function decodeTitle() {
    var node = document.querySelector(".hero__title");
    if (!node) return;
    var final = node.textContent;
    var glyphs = "!<>-_\\[]{}=+*^?#";
    var settled = 0;
    var frame = 0;
    function tick() {
      var out = "";
      for (var i = 0; i < final.length; i++) {
        if (i < settled) out += final[i];
        else if (final[i] === " ") out += " ";
        else out += glyphs.charAt(Math.floor(Math.random() * glyphs.length));
      }
      node.textContent = out;
      frame++;
      if (frame % 2 === 0) settled++;
      if (settled <= final.length) requestAnimationFrame(tick);
      else node.textContent = final;
    }
    requestAnimationFrame(tick);
  }

  function revealCase() {
    var main = document.getElementById("case");
    if (!main) return;
    if (main.dataset.unlocked === "1") {
      main.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    main.hidden = false;
    main.classList.remove("is-locked");
    main.dataset.unlocked = "1";
    var foot = document.querySelector(".site-footer");
    if (foot) foot.classList.remove("footer-locked");
    main.scrollIntoView({ behavior: "smooth", block: "start" });

    var blocks = Array.prototype.slice.call(
      document.querySelectorAll(".timeline__item, .source, .verdict__line")
    );
    blocks.forEach(function (n) {
      n.classList.remove("is-revealed");
      n.classList.add("is-queued");
    });
    var step = 0;
    function next() {
      if (step >= blocks.length) return;
      var n = blocks[step++];
      n.classList.remove("is-queued");
      typeBlock(n, 4, function () {
        window.setTimeout(next, 100);
      });
    }
    window.setTimeout(next, 180);
  }

  function wireUi() {
    var cta = document.getElementById("open-case");
    if (cta) {
      cta.addEventListener("click", function (e) {
        e.preventDefault();
        revealCase();
      });
    }
    if (location.hash === "#timeline" || location.hash === "#case") {
      revealCase();
    }
    window.addEventListener("hashchange", function () {
      if (location.hash === "#timeline" || location.hash === "#case") revealCase();
    });
  }

  function boot() {
    document.documentElement.classList.add("fx-on");
    var main = document.getElementById("case");
    if (main) {
      main.hidden = true;
      main.classList.add("is-locked");
    }
    var foot = document.querySelector(".site-footer");
    if (foot) foot.classList.add("footer-locked");
    decodeTitle();
    wireUi();
  }

  function start() {
    init();
    boot();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
