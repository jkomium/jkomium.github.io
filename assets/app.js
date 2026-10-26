(function () {
"use strict";

const D = window.CONFIG;
const body = document.body;
const ROOT = body.dataset.root || "";
const PAGE = body.dataset.page || "index";
const SECS = ["juegos", "sistemas", "equipos"];
const PER_PAGE = 6;
const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
const canHover = window.matchMedia("(hover:hover)").matches;

/* ---------- idioma ---------- */
const S = {
  en: {
    nav_juegos: "Games", nav_sistemas: "Systems", nav_equipos: "Teams",
    nav_services: "Services", nav_about: "About", nav_contact: "Contact",
    role: "Roblox scripter. I build <b>complete game frameworks, standalone systems and interfaces</b> — modular, optimized and made to be extended.",
    cta_hire: "Start a project", cta_work: "See the work",
    stat_avail: "Available", stat_avail_sub: "for new projects",
    stat_tz: "GMT -3", stat_tz_sub: "Argentina",
    stat_years: "years as a scripter",
    h_juegos: "Games", sub_juegos: "Complete games I've built and scripted.",
    h_sistemas: "Systems", sub_sistemas: "Standalone systems that drop into any game.",
    h_equipos: "Teams", sub_equipos: "Studios and groups I've worked with.",
    sort_new: "Newest first ↓", sort_old: "Oldest first ↑",
    kind_juegos: "Game", kind_sistemas: "System", kind_equipos: "Team",
    back_juegos: "All games", back_sistemas: "All systems", back_equipos: "All teams",
    view: "View project →", hover: "Hover for details",
    open_roblox: "Open in Roblox", open_link: "See more",
    h_svc: "What I can build for you",
    sub_svc: "One-off projects, scoped and delivered. I work directly in Roblox Studio — no Rojo or Wally.",
    h_about: "Background",
    about_p: "I've been scripting on Roblox for two and a half years. I like building things that are meant to grow: modular frameworks, standalone systems and clean interfaces that other people can extend without having to read my mind. I take on one-off projects, with a clear scope and a clear delivery, and I am also open to long-term work.",
    h_contact: "Let's work together",
    sub_contact: "Tell me what you need, your deadline and any references.",
    contact_empty: "Contact links are coming soon.",
    foot: "Available for one-off and long-term projects.",
    d_about: "About", d_includes: "What it includes", d_stack: "Stack", d_links: "Links",
    d_related: "Related", d_cta: "Need something like this?",
    play: "Play video", copied: "Copied", prev: "Previous", next: "Next",
    price_label: "Minimum hiring price",
    price_note: "No project below this amount.",
    pay_label: "Accepted payment methods",
    tax_note: "Taxes and payment fees are covered by the client.",
    notfound: "This page doesn't exist."
  },
  es: {
    nav_juegos: "Juegos", nav_sistemas: "Sistemas", nav_equipos: "Equipos",
    nav_services: "Servicios", nav_about: "Sobre mí", nav_contact: "Contacto",
    role: "Scripter de Roblox. Construyo <b>frameworks de juegos completos, sistemas independientes e interfaces</b> — modulares, optimizados y hechos para extenderse.",
    cta_hire: "Empezar un proyecto", cta_work: "Ver los trabajos",
    stat_avail: "Disponible", stat_avail_sub: "para nuevos proyectos",
    stat_tz: "GMT -3", stat_tz_sub: "Argentina",
    stat_years: "años como scripter",
    h_juegos: "Juegos", sub_juegos: "Juegos completos que construí y programé.",
    h_sistemas: "Sistemas", sub_sistemas: "Sistemas independientes que se integran a cualquier juego.",
    h_equipos: "Equipos", sub_equipos: "Estudios y grupos con los que trabajé.",
    sort_new: "Más nuevo primero ↓", sort_old: "Más antiguo primero ↑",
    kind_juegos: "Juego", kind_sistemas: "Sistema", kind_equipos: "Equipo",
    back_juegos: "Todos los juegos", back_sistemas: "Todos los sistemas", back_equipos: "Todos los equipos",
    view: "Ver proyecto →", hover: "Pasa el mouse para ver más",
    open_roblox: "Abrir en Roblox", open_link: "Ver más",
    h_svc: "Lo que puedo construir para ti",
    sub_svc: "Proyectos puntuales, con alcance y entrega claros. Trabajo directamente en Roblox Studio — sin Rojo ni Wally.",
    h_about: "Sobre mí",
    about_p: "Llevo dos años y medio haciendo scripting en Roblox. Me gusta construir cosas pensadas para crecer: frameworks modulares, sistemas independientes e interfaces limpias que otras personas puedan extender sin tener que adivinar qué pensé. Tomo proyectos puntuales, con un alcance claro y una entrega clara, y también estoy abierto a trabajos a largo plazo.",
    h_contact: "Trabajemos juntos",
    sub_contact: "Cuéntame qué necesitas, tu fecha límite y tus referencias.",
    contact_empty: "Los enlaces de contacto llegarán pronto.",
    foot: "Disponible para proyectos puntuales y a largo plazo.",
    d_about: "Acerca de", d_includes: "Qué incluye", d_stack: "Stack", d_links: "Enlaces",
    d_related: "Relacionado", d_cta: "¿Necesitas algo así?",
    play: "Reproducir video", copied: "Copiado", prev: "Anterior", next: "Siguiente",
    price_label: "Precio mínimo de contratación",
    price_note: "No tomo proyectos por debajo de este monto.",
    pay_label: "Métodos de pago disponibles",
    tax_note: "Los impuestos y comisiones de pago los cubre el cliente.",
    notfound: "Esta página no existe."
  }
};
let lang = "en";
/* siempre inglés al entrar; el cambio a ES vale solo durante la visita (pestaña actual) */
try { localStorage.removeItem("lang"); const l = sessionStorage.getItem("lang"); if (l === "es" || l === "en") lang = l; } catch (e) {}
const t = k => (S[lang][k] != null ? S[lang][k] : S.en[k]) || "";
const tx = v => v == null ? "" : (typeof v === "string" ? v : (v[lang] || v.en || v.es || ""));
const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

/* ---------- utilidades ---------- */
const PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>';
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>';
const app = document.getElementById("app");
const base = PAGE === "index" ? "" : ROOT + "index.html";

const vurl = (f, at) => ROOT + "videos/" + encodeURIComponent(f) + (at ? "#t=" + at : "");
const yid = u => { const m = String(u || "").match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/)([\w-]{11})/); return m ? m[1] : null; };
/* id de YouTube de un video: el link propio (yt) o el de la tabla CONFIG.youtube, indexada por nombre de archivo */
const ytOf = v => v ? yid(v.yt || (v.file && (D.youtube || {})[v.file])) : null;
const href = (k, it) => ROOT + k + "/" + it.id + ".html";
const corners = () => '<i class="corner c1"></i><i class="corner c2"></i><i class="corner c3"></i><i class="corner c4"></i>';
const initials = s => String(s).split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
const paras = s => String(s || "").split(/\n\n+/).filter(Boolean).map(p => "<p>" + esc(p) + "</p>").join("");
const items = k => (D[k] || []);

let toastTimer;
function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg; el.classList.add("on");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("on"), 1600);
}

/* ---------- orden y paginado por sección ---------- */
const order = {}, pages = {};
SECS.forEach(k => {
  order[k] = "new"; pages[k] = 1;
  try { const o = sessionStorage.getItem("order_" + k); if (o === "old" || o === "new") order[k] = o; } catch (e) {}
});
function sorted(k) {
  const a = items(k).slice();
  a.sort((x, y) => order[k] === "new"
    ? String(y.fecha).localeCompare(String(x.fecha))
    : String(x.fecha).localeCompare(String(y.fecha)));
  return a;
}

/* ---------- tarjetas ---------- */
function media(it) {
  const v = it.cover ? { file: it.cover } : (it.videos && it.videos[0]);
  const id = ytOf(v);
  if (id) return '<img src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg" alt="" loading="lazy">';
  if (v && v.file) return '<video class="cv" muted loop playsinline preload="metadata" tabindex="-1" src="' + esc(vurl(v.file, "1")) + '"></video>';
  if (it.img) return '<img src="' + esc(ROOT + it.img) + '" alt="' + esc(it.titulo) + '" loading="lazy">';
  return '<div class="ph"><span>' + esc(initials(it.titulo)) + '</span></div>';
}

function card(k, it) {
  const n = (it.videos || []).length;
  if (n) {
    return '<a class="card" href="' + esc(href(k, it)) + '">' + corners() +
      '<figure>' + media(it) + '<span class="badge">' + PLAY + n + '</span></figure>' +
      '<div class="body"><div class="kind">' + t("kind_" + k) + '</div><h3>' + esc(it.titulo) + '</h3>' +
      '<p>' + esc(tx(it.desc)) + '</p><span class="open">' + t("view") + '</span></div></a>';
  }
  const label = /roblox\.com/.test(it.link || "") ? t("open_roblox") : t("open_link");
  return '<article class="card hov" tabindex="0">' + corners() +
    '<figure>' + media(it) + '</figure>' +
    '<div class="body"><div class="kind">' + t("kind_" + k) + '</div><h3>' + esc(it.titulo) + '</h3>' +
    '<p class="hint">' + t("hover") + '</p></div>' +
    '<div class="info"><span class="ttl">' + esc(it.titulo) + '</span>' +
    '<span class="txt">' + esc(tx(it.desc)) + '</span>' +
    (it.link ? '<a class="act" href="' + esc(it.link) + '" target="_blank" rel="noopener">' + label + ' ' + ARROW + '</a>' : '') +
    '</div></article>';
}

/* los loops de las portadas: hover en escritorio, visibles en pantallas táctiles */
let io = null;
function playV(v) { if (reduce) return; const p = v.play(); if (p && p.catch) p.catch(() => {}); }
function stopV(v) { v.pause(); }
function wireCovers(root) {
  const vids = Array.prototype.slice.call(root.querySelectorAll("video.cv"));
  if (canHover) {
    vids.forEach(v => {
      const c = v.closest(".card");
      c.addEventListener("mouseenter", () => playV(v));
      c.addEventListener("mouseleave", () => stopV(v));
      c.addEventListener("focusin", () => playV(v));
      c.addEventListener("focusout", () => stopV(v));
    });
  } else if ("IntersectionObserver" in window) {
    if (io) io.disconnect();
    io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? playV(e.target) : stopV(e.target)), { threshold: .6 });
    vids.forEach(v => io.observe(v));
  }
}

function fillSection(k) {
  const list = sorted(k);
  const pc = Math.max(1, Math.ceil(list.length / PER_PAGE));
  if (pages[k] > pc) pages[k] = pc;
  const g = document.getElementById("grid-" + k);
  g.innerHTML = list.slice((pages[k] - 1) * PER_PAGE, pages[k] * PER_PAGE).map(it => card(k, it)).join("");
  wireCovers(g);

  const pg = document.getElementById("pager-" + k);
  if (pc < 2) { pg.innerHTML = ""; return; }
  let h = '<button data-p="prev" aria-label="' + t("prev") + '"' + (pages[k] === 1 ? " disabled" : "") + '>←</button>';
  for (let i = 1; i <= pc; i++) h += '<button data-p="' + i + '"' + (i === pages[k] ? ' aria-current="true"' : "") + '>' + i + '</button>';
  h += '<button data-p="next" aria-label="' + t("next") + '"' + (pages[k] === pc ? " disabled" : "") + '>→</button>';
  h += '<span class="count">' + list.length + '</span>';
  pg.innerHTML = h;
  pg.querySelectorAll("button").forEach(b => b.onclick = () => {
    const p = b.dataset.p;
    pages[k] = p === "prev" ? pages[k] - 1 : p === "next" ? pages[k] + 1 : +p;
    fillSection(k);
    document.getElementById(k).scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  });
}

/* ---------- estructura común (barra y pie) ---------- */
function chrome() {
  const secs = SECS.filter(k => items(k).length);
  document.getElementById("bar").innerHTML =
    '<div class="wrap"><a class="mark" href="' + base + '#top">JKOM<span>.</span></a><nav>' +
    secs.map(k => '<a href="' + base + '#' + k + '">' + t("nav_" + k) + '</a>').join("") +
    '<a href="' + base + '#services">' + t("nav_services") + '</a>' +
    '<a href="' + base + '#about">' + t("nav_about") + '</a>' +
    '<a href="' + base + '#contact">' + t("nav_contact") + '</a></nav>' +
    '<button class="lang" id="lang">' + (lang === "en" ? "ES" : "EN") + '</button></div>';
  document.getElementById("lang").onclick = () => {
    lang = lang === "en" ? "es" : "en";
    try { sessionStorage.setItem("lang", lang); } catch (e) {}
    renderAll();
  };
  document.getElementById("foot").innerHTML =
    '<span>© ' + new Date().getFullYear() + ' ' + esc(D.nombre) + '</span><span>' + t("foot") + '</span>';
}

/* ---------- portada ---------- */
/* una sola elección por carga de página, para que no cambie al cambiar de idioma */
const avatarSrc = (() => {
  const a = D.avatars || [];
  return a.length ? ROOT + a[Math.floor(Math.random() * a.length)] : "";
})();
function heroHTML() {
  const img = avatarSrc
    ? '<img src="' + esc(encodeURI(avatarSrc)) + '" alt="' + esc(D.nombre) + '">'
    : '<div class="av-fallback">' + esc(String(D.nombre || "JK").slice(0, 2).toUpperCase()) + '</div>';
  return '<div class="hero" id="top"><div class="wrap"><div>' +
    '<h1>' + esc(D.nombre) + '</h1><p class="role">' + t("role") + '</p>' +
    '<div class="cta"><a class="btn btn-solid" href="#contact">' + t("cta_hire") + '</a>' +
    '<a class="btn btn-ghost" href="#' + (SECS.find(k => items(k).length) || "services") + '">' + t("cta_work") + '</a></div>' +
    '<div class="stats">' +
      '<div><b><i class="live" aria-hidden="true"></i>' + t("stat_avail") + '</b><span>' + t("stat_avail_sub") + '</span></div>' +
      '<div><b>' + t("stat_tz") + '</b><span>' + t("stat_tz_sub") + '</span></div>' +
      '<div><b>2.5</b><span>' + t("stat_years") + '</span></div></div></div>' +
    '<div class="av"><i class="handle h1"></i><i class="handle h2"></i><i class="handle h3"></i><i class="handle h4"></i>' +
    '<span class="av-tag">' + esc(D.nombre) + '</span><div class="av-frame">' + img + '</div></div></div></div>';
}

function sectionHTML(k) {
  return '<section id="' + k + '"><div class="wrap"><div class="head"><h2>' + t("h_" + k) + '</h2><p>' + t("sub_" + k) + '</p>' +
    '<button class="sort" id="sort-' + k + '">' + t("sort_" + order[k]) + '</button></div>' +
    '<div class="grid" id="grid-' + k + '"></div><div class="pager" id="pager-' + k + '"></div></div></section>';
}

function servicesHTML() {
  return '<section id="services"><div class="wrap"><div class="head"><h2>' + t("h_svc") + '</h2><p>' + t("sub_svc") + '</p></div>' +
    '<div class="svc">' + (D.servicios || []).map(s => '<div><h3>' + esc(tx(s.t)) + '</h3><p>' + esc(tx(s.d)) + '</p></div>').join("") + '</div></div></section>';
}

function aboutHTML() {
  return '<section id="about"><div class="wrap"><div class="head"><h2>' + t("h_about") + '</h2></div><p>' + t("about_p") + '</p>' +
    (D.precioMinimo ? '<div class="price"><span class="pl">' + t("price_label") + '</span><b>$' + D.precioMinimo + ' <small>USD</small>' + (D.precioRobux ? ' <small class="alt">/ ' + esc(D.precioRobux) + ' Robux</small>' : "") + '</b><span class="pn">' + t("price_note") + '</span><span class="pn tax">' + t("tax_note") + '</span>' +
      ((D.pagos || []).length ? '<div class="pay"><span class="pl">' + t("pay_label") + '</span><ul class="tools">' + D.pagos.map(x => '<li>' + esc(x) + '</li>').join("") + '</ul></div>' : "") +
      '</div>' : "") + '</div></section>';
}

function contactList() {
  const c = D.contacto || {};
  const defs = [["discord", "Discord"], ["tiktok", "TikTok"], ["roblox", "Roblox"], ["devforum", "DevForum"], ["youtube", "YouTube"], ["email", "Email"]];
  return defs.filter(d => c[d[0]]).map(d => ({ k: d[0], label: d[1], v: c[d[0]] }));
}
function contactHTML() {
  const list = contactList();
  const links = list.length
    ? '<div class="links">' + list.map(l => {
        const inner = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg><div><b>' + l.label + '</b><span>' + esc(l.v) + '</span></div>';
        if (l.k === "discord") return '<button class="link" data-copy="' + esc(l.v) + '">' + inner + '</button>';
        const h = l.k === "email" ? "mailto:" + l.v : l.v;
        return '<a class="link" href="' + esc(h) + '" target="_blank" rel="noopener">' + inner + '</a>';
      }).join("") + '</div>'
    : '<p class="empty">' + t("contact_empty") + '</p>';
  return '<section id="contact"><div class="wrap"><div class="head"><h2>' + t("h_contact") + '</h2><p>' + t("sub_contact") + '</p></div>' + links + '</div></section>';
}

function wireContact() {
  document.querySelectorAll("[data-copy]").forEach(b => b.onclick = () => {
    const v = b.dataset.copy;
    const done = () => toast(t("copied"));
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(done, done);
    else done();
  });
}

let firstHash = true;
function renderIndex() {
  const secs = SECS.filter(k => items(k).length);
  app.innerHTML = heroHTML() + secs.map(sectionHTML).join("") + servicesHTML() + aboutHTML() + contactHTML();
  secs.forEach(k => {
    fillSection(k);
    document.getElementById("sort-" + k).onclick = e => {
      order[k] = order[k] === "new" ? "old" : "new";
      try { sessionStorage.setItem("order_" + k, order[k]); } catch (er) {}
      pages[k] = 1;
      e.currentTarget.textContent = t("sort_" + order[k]);
      fillSection(k);
    };
  });
  wireContact();
  if (firstHash && location.hash.length > 1) {
    firstHash = false;
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el) el.scrollIntoView();
  }
}

/* ---------- página de detalle ---------- */
let cur = 0;
function renderDetail() {
  const k = body.dataset.kind, id = body.dataset.id;
  const it = items(k).find(x => x.id === id);
  if (!it) { app.innerHTML = '<section><div class="wrap"><p>' + t("notfound") + '</p></div></section>'; return; }
  document.title = it.titulo + " — " + D.nombre;
  const vids = it.videos || [];
  if (cur >= vids.length) cur = 0;

  const rels = (it.rel || []).map(r => {
    const p = r.split("/"); const x = items(p[0]).find(y => y.id === p[1]);
    return x ? [p[0], x] : null;
  }).filter(Boolean);

  const long = tx(it.long) || tx(it.desc);
  const sideBlocks =
    (it.tech && it.tech.length ? '<div><h3 class="sub">' + t("d_stack") + '</h3><ul class="tools">' + it.tech.map(x => '<li>' + esc(x) + '</li>').join("") + '</ul></div>' : '') +
    (it.link ? '<div><h3 class="sub">' + t("d_links") + '</h3><a class="open" href="' + esc(it.link) + '" target="_blank" rel="noopener">' +
      (/roblox\.com/.test(it.link) ? t("open_roblox") : t("open_link")) + ' ' + ARROW + '</a></div>' : '');

  app.innerHTML =
    '<section class="dhead"><div class="wrap">' +
      '<a class="back" href="' + base + '#' + k + '">← ' + t("back_" + k) + '</a>' +
      '<div class="meta"><span class="tag">' + t("kind_" + k) + '</span></div>' +
      '<h1 class="dh1">' + esc(it.titulo) + '</h1>' +
      (it.rol ? '<p class="role">' + esc(tx(it.rol)) + '</p>' : '') +
    '</div></section>' +
    '<section class="pl"><div class="wrap"><div class="stage" id="stage"></div><div class="vinfo" id="vinfo"></div>' +
      (vids.length > 1 ? '<div class="strip" id="strip">' + vids.map((v, i) => thumb(v, i)).join("") + '</div>' : '') +
    '</div></section>' +
    '<section class="dbody"><div class="wrap"><div class="dgrid"><div><h2>' + t("d_about") + '</h2>' + paras(long) +
      (it.puntos && it.puntos.length ? '<ul class="incl">' + it.puntos.map(p => '<li>' + esc(tx(p)) + '</li>').join("") + '</ul>' : '') +
    '</div><div class="aside">' + sideBlocks + '</div></div></div></section>' +
    (rels.length ? '<section class="rel"><div class="wrap"><h2>' + t("d_related") + '</h2><div class="grid" id="relgrid">' +
      rels.map(r => card(r[0], r[1])).join("") + '</div></div></section>' : '') +
    '<section><div class="wrap endcta"><h2>' + t("d_cta") + '</h2><a class="btn btn-solid" href="' + base + '#contact">' + t("cta_hire") + '</a></div></section>';

  const strip = document.getElementById("strip");
  if (strip) strip.querySelectorAll(".vt").forEach(b => b.onclick = () => showVideo(it, +b.dataset.i, true));
  const rg = document.getElementById("relgrid");
  if (rg) wireCovers(rg);
  showVideo(it, cur, false);
}

function thumb(v, i) {
  const id = ytOf(v);
  const inner = id
    ? '<img src="https://i.ytimg.com/vi/' + id + '/mqdefault.jpg" alt="" loading="lazy">'
    : v.file ? '<video muted preload="metadata" tabindex="-1" src="' + esc(vurl(v.file, "1")) + '"></video>' : '';
  return '<button class="vt" data-i="' + i + '">' + corners() + '<span class="th">' + inner + '</span><span class="nm">' + esc(tx(v.t)) + '</span></button>';
}

function showVideo(it, i, auto) {
  const vids = it.videos || [];
  if (!vids.length) return;
  cur = i;
  const v = vids[i];
  const st = document.getElementById("stage");
  const id = ytOf(v);
  if (!id && !v.file) {
    st.innerHTML = '<div class="ph"><span>▶</span></div>';
  } else if (id) {
    st.innerHTML = '<button class="yt" aria-label="' + t("play") + '"><img src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg" alt=""><span class="playic">' + PLAY + '</span></button>';
    const go = () => { st.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="' + esc(tx(v.t)) + '"></iframe>'; };
    st.firstChild.onclick = go;
    if (auto) go();
  } else {
    st.innerHTML = '<video controls playsinline preload="metadata" src="' + esc(vurl(v.file, auto ? "" : "0.5")) + '"></video>';
    if (auto) playV2(st.firstChild);
  }
  const multi = vids.length > 1, d = tx(v.d);
  document.getElementById("vinfo").innerHTML =
    (multi ? '<h3>' + esc(tx(v.t)) + '</h3>' : '') + (d ? '<p>' + esc(d) + '</p>' : '') +
    (v.link ? '<a class="open" href="' + esc(v.link.url) + '" target="_blank" rel="noopener">' + esc(tx(v.link.label)) + ' ↗</a>' : '');
  const strip = document.getElementById("strip");
  if (strip) strip.querySelectorAll(".vt").forEach(b => {
    const on = +b.dataset.i === i;
    if (on) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
    if (on && auto) b.scrollIntoView({ behavior: reduce ? "auto" : "smooth", inline: "center", block: "nearest" });
  });
}
function playV2(el) { const p = el.play(); if (p && p.catch) p.catch(() => {}); }

document.addEventListener("keydown", e => {
  if (PAGE !== "detail" || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
  if (e.target && /^(VIDEO|IFRAME|INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
  const it = items(body.dataset.kind).find(x => x.id === body.dataset.id);
  if (!it || !it.videos || it.videos.length < 2) return;
  const n = it.videos.length;
  showVideo(it, (cur + (e.key === "ArrowRight" ? 1 : n - 1)) % n, true);
});

/* ---------- arranque ---------- */
function renderAll() {
  document.documentElement.lang = lang;
  chrome();
  if (PAGE === "index") renderIndex(); else renderDetail();
}
renderAll();

})();
