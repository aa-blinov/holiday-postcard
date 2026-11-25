(() => {
  "use strict";

  const W = 1200;
  const H = 750;
  const S = 2;
  const FONT = '"Cascadia Mono", "Consolas", "Segoe UI", "Menlo", monospace';

  const STRINGS = {
    en: {
      docTitle: "Winter Dispatch — Postcard Studio",
      skip: "Skip to composer", brand: "WINTER DISPATCH", brandSub: "POSTCARD STUDIO",
      season: "SEASON / 26", languageGroup: "Language", composerLabel: "Postcard composer",
      preview: "PREVIEW", previewDim: "/ 2400 × 1500 PNG", live: "LIVE", scene: "SCENE",
      caption: "What you see here is exactly what downloads. No crops, no surprises.",
      stampTitle: "01 / STAMP", selectOne: "SELECT ONE", chooseStamp: "Choose a stamp",
      messageTitle: "02 / MESSAGE", greetingLabel: "GREETING",
      messagePlaceholder: "Write a short winter greeting…", sample: "TRY A SAMPLE GREETING",
      addressTitle: "03 / ADDRESS", optional: "OPTIONAL", to: "TO", from: "FROM",
      recipientPlaceholder: "Recipient", senderPlaceholder: "Your name", download: "DOWNLOAD PNG",
      stampPine: "PINE", stampSnow: "SNOW", stampMug: "MUG", stampMoon: "MOON",
      stampStar: "STAR", stampCandle: "CANDLE", stampBell: "BELL", stampMitten: "MITTEN",
      cardMasthead: "WINTER DISPATCH / POSTCARD", cardIssue: "NO. 001 · SEASON 26",
      cardGreeting: "GREETING", cardPlaceholder: "YOUR WORDS HERE", cardTo: "TO",
      cardFrom: "FROM", cardDelivered: "DELIVERED BY HAND", stampTop: "WINTER",
      stampBottom: "POSTAGE PAID",
      statusReady: "READY · PREVIEW UPDATED", statusOptional: "PREVIEW UPDATED · ADDRESS OPTIONAL",
      statusSend: "PREVIEW UPDATED · READY TO SEND", statusEmpty: "GREETING EMPTY · PLACEHOLDER SHOWN",
      statusStamp: "STAMP SET", statusSample: "SAMPLE LOADED · EDIT ANY FIELD",
      statusSaved: "PNG SAVED", topReady: "READY", topSynced: "SYNCED", topCheck: "CHECK", topSent: "SENT",
      ariaCard: "Winter postcard preview; stamp: {stamp}; greeting: {message}; to: {to}; from: {from}",
      unnamed: "unnamed", emptyGreeting: "empty", fileFallback: "postcard"
    },
    ru: {
      docTitle: "Зимняя доставка — студия открыток",
      skip: "Перейти к редактору", brand: "ЗИМНЯЯ ДОСТАВКА", brandSub: "СТУДИЯ ОТКРЫТОК",
      season: "СЕЗОН / 26", languageGroup: "Язык", composerLabel: "Редактор открытки",
      preview: "ПРЕДПРОСМОТР", previewDim: "/ 2400 × 1500 PNG", live: "ОНЛАЙН", scene: "ФОН",
      caption: "Что видите здесь, то и скачивается. Без обрезки и сюрпризов.",
      stampTitle: "01 / ШТАМП", selectOne: "ВЫБЕРИТЕ ОДИН", chooseStamp: "Выберите штамп",
      messageTitle: "02 / СООБЩЕНИЕ", greetingLabel: "ПРИВЕТСТВИЕ",
      messagePlaceholder: "Напишите короткое зимнее пожелание…", sample: "ПОПРОБОВАТЬ ПОЖЕЛАНИЕ",
      addressTitle: "03 / АДРЕС", optional: "НЕОБЯЗАТЕЛЬНО", to: "КОМУ", from: "ОТ",
      recipientPlaceholder: "Получатель", senderPlaceholder: "Ваше имя", download: "СКАЧАТЬ PNG",
      stampPine: "СОСНА", stampSnow: "СНЕГ", stampMug: "КРУЖКА", stampMoon: "ЛУНА",
      stampStar: "ЗВЕЗДА", stampCandle: "СВЕЧА", stampBell: "КОЛОКОЛ", stampMitten: "ВАРЕЖКА",
      cardMasthead: "ЗИМНЯЯ ДОСТАВКА / ОТКРЫТКА", cardIssue: "№ 001 · СЕЗОН 26",
      cardGreeting: "ПРИВЕТСТВИЕ", cardPlaceholder: "ВАШИ СЛОВА ЗДЕСЬ", cardTo: "КОМУ",
      cardFrom: "ОТ", cardDelivered: "ДОСТАВЛЕНО ВРУЧНУЮ", stampTop: "ЗИМА",
      stampBottom: "ПОЧТОВЫЙ СБОР",
      statusReady: "ГОТОВО · ПРЕДПРОСМОТР ОБНОВЛЁН", statusOptional: "ПРЕДПРОСМОТР ОБНОВЛЁН · АДРЕС НЕОБЯЗАТЕЛЕН",
      statusSend: "ПРЕДПРОСМОТР ОБНОВЛЁН · МОЖНО ОТПРАВЛЯТЬ", statusEmpty: "ПУСТОЕ ПОЖЕЛАНИЕ · ПОКАЗАН ЗАПОЛНИТЕЛЬ",
      statusStamp: "ШТАМП ВЫБРАН", statusSample: "ПРИМЕР ЗАГРУЖЕН · МЕНЯЙТЕ ПОЛЯ",
      statusSaved: "PNG СОХРАНЁН", topReady: "ГОТОВО", topSynced: "ГОТОВО", topCheck: "ПРОВЕРЬТЕ", topSent: "ОТПРАВЛЕНО",
      ariaCard: "Превью зимней открытки; штамп: {stamp}; пожелание: {message}; кому: {to}; от: {from}",
      unnamed: "не указано", emptyGreeting: "пусто", fileFallback: "otkrytka"
    }
  };

  const SAMPLES = {
    en: [
      "STAY WARM.\nWRITE SOON.",
      "THE SNOW IS LOUD.\nTHE LIGHTS ARE ON.",
      "A QUIET WINTER\nTO A LOUD YEAR.",
      "SIX WEEKS OF DARK.\nONE LONG LETTER.",
      "FROM THE COLD SIDE,\nWITH WARM HANDS.",
      "SAME TIME NEXT\nSNOWFALL."
    ],
    ru: [
      "ОСТАВАЙСЯ В ТЕПЛЕ.\nПИШИ СКОРЕЕ.",
      "СНЕГ ШУМИТ.\nОГНИ ГОРЯТ.",
      "ТИХАЯ ЗИМА\nГРОМКОМУ ГОДУ.",
      "ШЕСТЬ НЕДЕЛЬ ТЬМЫ.\nОДНО ДЛИННОЕ ПИСЬМО.",
      "С ДРУГОЙ СТОРОНЫ ХОЛОДА,\nС ТЁПЛЫМИ РУКАМИ.",
      "ДО СЛЕДУЮЩЕГО\nСНЕГОПАДА."
    ]
  };

  const SCENES = [
    {
      kind: "observatory", seed: 2026,
      moon: [818, 468], radius: 86, arcs: 3, arcFrom: -2.55, arcTo: -0.65,
      snow: 46, cross: 0.28,
      pines: [[196, 548, 0.9], [372, 566, 0.65], [1052, 552, 0.75]],
      cabins: [[690, 578], [726, 586]],
      far: [[64, 600], [160, 548], [210, 528], [348, 568], [452, 516], [516, 486], [676, 560], [842, 512], [932, 552], [1008, 522], [1080, 566], [1136, 532], [1136, 600]],
      near: [[64, 600], [236, 556], [414, 590], [604, 548], [802, 594], [1002, 552], [1136, 580], [1136, 600]]
    },
    {
      kind: "snowstorm", seed: 731,
      moon: [1040, 316], radius: 38, snow: 118, cross: 0.14,
      farSnow: 96, nearSnow: 22, gusts: 5,
      trees: [[150, 556, 0.8], [286, 572, 0.6], [846, 562, 0.7], [1040, 578, 0.9]],
      cabins: [[560, 548], [612, 556]],
      hills: [[64, 600], [180, 566], [340, 588], [520, 552], [700, 584], [880, 550], [1030, 582], [1136, 558], [1136, 600]],
      drifts: [[64, 600], [220, 560], [420, 584], [620, 548], [830, 586], [1020, 552], [1136, 580], [1136, 600]]
    },
    {
      kind: "city", seed: 1147,
      moon: [1020, 300], radius: 52, snow: 34, cross: 0.34,
      buildings: [[72, 96, 112], [178, 74, 160], [262, 110, 92], [382, 86, 138], [478, 120, 104], [608, 78, 172], [696, 104, 120], [810, 92, 148], [912, 116, 100], [1038, 70, 164]],
      wires: [214, 236, 258]
    },
    {
      kind: "forest", seed: 89,
      moon: [600, 356], radius: 68, snow: 52, cross: 0.30,
      mist: [430, 466, 502],
      farPines: [[110, 540, 0.5], [190, 548, 0.6], [270, 534, 0.55], [360, 550, 0.65], [450, 538, 0.5], [560, 552, 0.6], [670, 536, 0.55], [780, 548, 0.65], [890, 540, 0.5], [1000, 550, 0.6], [1090, 538, 0.55]],
      midPines: [[70, 576, 0.85], [250, 570, 0.95], [470, 580, 0.8], [700, 572, 0.9], [930, 580, 0.85], [1130, 570, 0.95]],
      nearPines: [[150, 590, 1.25], [390, 600, 1.4], [640, 594, 1.3], [900, 600, 1.45], [1100, 590, 1.2]],
      cabin: [820, 558]
    },
    {
      kind: "aurora", seed: 421,
      stars: 72, bands: 4, snow: 18, cross: 0.44,
      mountains: [[64, 600], [180, 520], [300, 566], [420, 484], [560, 556], [680, 500], [820, 558], [960, 486], [1080, 552], [1136, 520], [1136, 600]]
    },
    {
      kind: "railway", seed: 613,
      moon: [880, 330], radius: 44, snow: 42, cross: 0.24,
      vanishing: [600, 470],
      hills: [[64, 470], [180, 424], [320, 456], [460, 408], [600, 452], [760, 414], [920, 458], [1080, 420], [1136, 450], [1136, 470]],
      poles: [[1040, 566, 1.1], [900, 524, 0.8], [800, 500, 0.58], [730, 484, 0.4]],
      platform: [[740, 590], [780, 550], [1136, 550], [1136, 600]],
      signals: [[1010, 520, 0.9], [860, 492, 0.6]]
    },
    {
      kind: "celebration", seed: 777,
      garlandY: 132, bulbs: 15, snow: 26, cross: 0.32,
      bursts: [[876, 432, 50], [318, 408, 36]],
      rooftops: [[64, 600], [180, 552], [180, 536], [300, 536], [300, 566], [430, 566], [430, 540], [560, 540], [560, 574], [700, 574], [700, 548], [840, 548], [840, 570], [980, 570], [980, 544], [1136, 544], [1136, 600]]
    },
    {
      kind: "lanterns", seed: 909,
      wireY: 300, snow: 30, cross: 0.38,
      lanterns: [[190, 365], [396, 391], [626, 400], [858, 386], [1064, 356]],
      rooftops: [[64, 600], [220, 550], [220, 532], [340, 532], [340, 564], [520, 564], [520, 540], [660, 540], [660, 576], [820, 576], [820, 548], [960, 548], [960, 568], [1136, 568], [1136, 600]]
    }
  ];

  const C = {
    card: "#0a1118",
    grid: "rgba(126, 180, 196, 0.055)",
    rule: "#2b3f4d",
    ink: "#ff6b6b",
    label: "#d9e6ea",
    muted: "#9fb4bd",
    signal: "#ff6b6b",
    signalDeep: "#c21f2e",
    paper: "#dbe9e6",
    stampInk: "#0b1a1c"
  };

  let lang = "en";
  try {
    const saved = localStorage.getItem("winter-dispatch-lang");
    if (saved === "ru" || saved === "en") lang = saved;
  } catch (_) { /* storage may be unavailable */ }

  let sceneIndex = 0;
  let sceneTimer = null;
  const SCENE_MS = 7000;

  const t = (key) => (STRINGS[lang][key] ?? STRINGS.en[key] ?? key);

  const canvas = document.getElementById("postcard");
  const ctx = canvas.getContext("2d");
  const messageEl = document.getElementById("message");
  const recipientEl = document.getElementById("recipient");
  const senderEl = document.getElementById("sender");
  const countEl = document.getElementById("messageCount");
  const statusEl = document.getElementById("status");
  const sceneTagEl = document.getElementById("sceneTag");
  const footerGreetingEl = document.getElementById("footerGreeting");
  const frame = document.getElementById("cardFrame");
  const sweep = document.getElementById("sweep");
  const radios = [...document.querySelectorAll('input[name="stamp"]')];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function tracked(c, text, x, y, spacing) {
    let cursor = x;
    for (const ch of text) {
      c.fillText(ch, cursor, y);
      cursor += c.measureText(ch).width + spacing;
    }
    return cursor - x;
  }

  function trackedWidth(c, text, spacing) {
    let width = 0;
    for (const ch of text) width += c.measureText(ch).width + spacing;
    return width - spacing;
  }

  function trackedRight(c, text, x, y, spacing) {
    tracked(c, text, x - trackedWidth(c, text, spacing), y, spacing);
  }

  function diamond(c, cx, cy, r, color) {
    c.fillStyle = color;
    c.beginPath();
    c.moveTo(cx, cy - r);
    c.lineTo(cx + r, cy);
    c.lineTo(cx, cy + r);
    c.lineTo(cx - r, cy);
    c.closePath();
    c.fill();
  }

  function wrapText(c, text, maxWidth, maxLines) {
    const out = [];
    for (const paragraph of text.split("\n")) {
      const words = paragraph.trim().split(/\s+/).filter(Boolean);
      if (!words.length) {
        out.push("");
        continue;
      }
      let line = words[0];
      for (let i = 1; i < words.length; i++) {
        const next = line + " " + words[i];
        if (c.measureText(next).width > maxWidth && line) {
          out.push(line);
          line = words[i];
        } else {
          line = next;
        }
      }
      out.push(line);
    }

    if (out.length > maxLines) {
      const kept = out.slice(0, maxLines);
      let last = kept[maxLines - 1];
      while (last.length > 1 && c.measureText(last + "…").width > maxWidth) {
        last = last.slice(0, -1);
      }
      kept[maxLines - 1] = last + "…";
      return kept;
    }
    return out;
  }

  function stampArt(c, x, y, type) {
    const cx = x + 95;
    const cy = y + 108;

    if (type === "pine") {
      c.strokeStyle = C.stampInk;
      c.lineWidth = 3;
      c.fillStyle = "rgba(194, 31, 46, 0.10)";
      for (let i = 0; i < 3; i++) {
        const apex = cy - 58 + i * 24;
        const base = cy - 8 + i * 24;
        const half = 36 - i * 7;
        c.beginPath();
        c.moveTo(cx, apex);
        c.lineTo(cx + half, base);
        c.lineTo(cx - half, base);
        c.closePath();
        c.fill();
        c.stroke();
      }
      c.fillStyle = C.stampInk;
      c.fillRect(cx - 4, cy + 45, 8, 18);
      c.strokeStyle = C.signalDeep;
      c.lineWidth = 2.5;
      for (let i = 0; i < 3; i++) {
        const yy = cy - 42 + i * 24;
        const half = 13 - i * 2;
        c.beginPath();
        c.moveTo(cx - half, yy);
        c.lineTo(cx, yy - 7);
        c.lineTo(cx + half, yy);
        c.stroke();
      }
      return;
    }

    if (type === "snow") {
      c.strokeStyle = C.stampInk;
      c.lineWidth = 3;
      c.lineCap = "round";
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        const dx = Math.cos(a);
        const dy = Math.sin(a);
        c.beginPath();
        c.moveTo(cx - dx * 46, cy - dy * 46);
        c.lineTo(cx + dx * 46, cy + dy * 46);
        c.stroke();
        for (const t of [-30, 30]) {
          const bx = cx + dx * t;
          const by = cy + dy * t;
          for (const side of [-1, 1]) {
            const ba = a + side * 0.9;
            c.beginPath();
            c.moveTo(bx, by);
            c.lineTo(bx + Math.cos(ba) * 14, by + Math.sin(ba) * 14);
            c.stroke();
          }
        }
      }
      c.lineCap = "butt";
      diamond(c, cx, cy, 5, C.signalDeep);
      return;
    }

    if (type === "mug") {
      c.strokeStyle = C.stampInk;
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(cx - 40, cy - 16);
      c.lineTo(cx - 34, cy + 42);
      c.lineTo(cx + 30, cy + 42);
      c.lineTo(cx + 36, cy - 16);
      c.closePath();
      c.stroke();
      c.beginPath();
      c.arc(cx + 38, cy + 8, 17, -Math.PI / 2, Math.PI / 2);
      c.stroke();
      c.strokeStyle = C.signalDeep;
      c.lineWidth = 2.5;
      for (let i = -1; i <= 1; i++) {
        const sx = cx + i * 17;
        c.beginPath();
        c.moveTo(sx, cy - 28);
        c.bezierCurveTo(sx - 9, cy - 38, sx + 9, cy - 48, sx, cy - 58);
        c.stroke();
      }
      c.fillStyle = "rgba(194, 31, 46, 0.10)";
      c.fillRect(cx - 34, cy + 6, 64, 30);
      return;
    }

    if (type === "moon") {
      c.fillStyle = C.stampInk;
      c.beginPath();
      c.arc(cx, cy, 44, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = C.paper;
      c.beginPath();
      c.arc(cx + 17, cy - 10, 39, 0, Math.PI * 2);
      c.fill();
      diamond(c, cx - 40, cy - 42, 4, C.signalDeep);
      diamond(c, cx + 30, cy + 40, 3, C.signalDeep);
      diamond(c, cx - 15, cy + 50, 2.5, C.signalDeep);
      return;
    }

    if (type === "star") {
      c.fillStyle = C.stampInk;
      c.beginPath();
      for (let i = 0; i < 8; i++) {
        const a = -Math.PI / 2 + (Math.PI / 4) * i;
        const radius = i % 2 === 0 ? 48 : 13;
        const px = cx + Math.cos(a) * radius;
        const py = cy + Math.sin(a) * radius;
        if (i === 0) c.moveTo(px, py); else c.lineTo(px, py);
      }
      c.closePath();
      c.fill();
      c.fillStyle = C.signalDeep;
      diamond(c, cx - 42, cy - 40, 4, C.signalDeep);
      diamond(c, cx + 40, cy + 34, 3, C.signalDeep);
      return;
    }

    if (type === "candle") {
      c.fillStyle = C.stampInk;
      c.fillRect(cx - 17, cy - 4, 34, 54);
      c.fillStyle = C.paper;
      c.fillRect(cx - 13, cy + 2, 26, 44);
      c.strokeStyle = C.stampInk;
      c.lineWidth = 2;
      c.strokeRect(cx - 17, cy - 4, 34, 54);
      c.beginPath();
      c.moveTo(cx, cy - 4);
      c.lineTo(cx, cy - 16);
      c.stroke();
      c.fillStyle = C.signalDeep;
      c.beginPath();
      c.moveTo(cx, cy - 52);
      c.bezierCurveTo(cx + 20, cy - 36, cx + 14, cy - 20, cx, cy - 16);
      c.bezierCurveTo(cx - 14, cy - 20, cx - 20, cy - 36, cx, cy - 52);
      c.fill();
      c.strokeStyle = C.signalDeep;
      c.lineWidth = 2;
      for (const dx of [-34, 34]) {
        c.beginPath(); c.moveTo(cx + dx, cy - 34); c.lineTo(cx + dx * 0.75, cy - 34); c.stroke();
      }
      return;
    }

    if (type === "bell") {
      c.strokeStyle = C.stampInk;
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(cx - 34, cy + 30);
      c.quadraticCurveTo(cx - 28, cy - 26, cx, cy - 34);
      c.quadraticCurveTo(cx + 28, cy - 26, cx + 34, cy + 30);
      c.closePath();
      c.stroke();
      c.beginPath();
      c.moveTo(cx - 40, cy + 30);
      c.lineTo(cx + 40, cy + 30);
      c.stroke();
      c.fillStyle = C.stampInk;
      c.beginPath();
      c.arc(cx, cy + 42, 7, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = C.signalDeep;
      diamond(c, cx, cy - 46, 7, C.signalDeep);
      return;
    }

    c.strokeStyle = C.stampInk;
    c.lineWidth = 3;
    c.fillStyle = "rgba(194, 31, 46, 0.10)";
    c.beginPath();
    c.moveTo(cx - 26, cy + 44);
    c.lineTo(cx - 26, cy - 8);
    c.quadraticCurveTo(cx - 26, cy - 30, cx - 8, cy - 30);
    c.quadraticCurveTo(cx + 8, cy - 30, cx + 10, cy - 14);
    c.quadraticCurveTo(cx + 20, cy - 8, cx + 26, cy + 4);
    c.lineTo(cx + 30, cy + 30);
    c.quadraticCurveTo(cx + 30, cy + 44, cx + 14, cy + 44);
    c.closePath();
    c.fill();
    c.stroke();
    c.fillStyle = C.stampInk;
    c.fillRect(cx - 28, cy + 30, 58, 16);
    c.fillStyle = C.paper;
    c.fillRect(cx - 24, cy + 34, 50, 8);
    c.fillStyle = C.signalDeep;
    diamond(c, cx - 8, cy + 4, 4, C.signalDeep);
    diamond(c, cx + 8, cy + 18, 3, C.signalDeep);
  }

  function drawStamp(c, x, y, type) {
    const w = 190;
    const h = 228;

    c.fillStyle = C.paper;
    c.fillRect(x, y, w, h);

    c.fillStyle = C.card;
    for (let px = x + 7; px < x + w; px += 15) {
      c.beginPath(); c.arc(px, y, 4.2, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.arc(px, y + h, 4.2, 0, Math.PI * 2); c.fill();
    }
    for (let py = y + 7; py < y + h; py += 15) {
      c.beginPath(); c.arc(x, py, 4.2, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.arc(x + w, py, 4.2, 0, Math.PI * 2); c.fill();
    }

    c.strokeStyle = C.stampInk;
    c.lineWidth = 1.5;
    c.strokeRect(x + 14, y + 14, w - 28, h - 28);

    c.fillStyle = C.stampInk;
    c.font = `700 15px ${FONT}`;
    c.textBaseline = "alphabetic";
    tracked(c, t("stampTop"), x + 26, y + 42, 2.2);

    stampArt(c, x, y, type);

    c.strokeStyle = C.stampInk;
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(x + 24, y + h - 52);
    c.lineTo(x + w - 24, y + h - 52);
    c.stroke();

    c.font = `700 11px ${FONT}`;
    c.fillStyle = C.stampInk;
    tracked(c, t("stampBottom"), x + 26, y + h - 30, 1.3);
    trackedRight(c, "26", x + w - 26, y + h - 30, 1.3);
  }

  function seeded(seed) {
    let value = seed;
    return () => {
      value = (value * 1664525 + 1013904223) >>> 0;
      return value / 4294967296;
    };
  }

  function snowflakeSeparator() {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 12 12");
    svg.setAttribute("class", "greeting-sep");
    svg.setAttribute("aria-hidden", "true");

    const addLine = (x1, y1, x2, y2) => {
      const line = document.createElementNS(ns, "line");
      line.setAttribute("x1", String(x1));
      line.setAttribute("y1", String(y1));
      line.setAttribute("x2", String(x2));
      line.setAttribute("y2", String(y2));
      svg.appendChild(line);
    };

    for (let i = 0; i < 3; i++) {
      const a = (Math.PI / 3) * i;
      const dx = Math.cos(a) * 4.6;
      const dy = Math.sin(a) * 4.6;
      addLine(6 - dx, 6 - dy, 6 + dx, 6 + dy);
    }
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i;
      const bx = 6 + Math.cos(a) * 3.1;
      const by = 6 + Math.sin(a) * 3.1;
      for (const side of [-1, 1]) {
        const ba = a + side * 0.9;
        addLine(bx, by, bx + Math.cos(ba) * 1.9, by + Math.sin(ba) * 1.9);
      }
    }
    return svg;
  }

  function snowField(c, rand, count, cross, yMin = 150, yMax = 580) {
    for (let i = 0; i < count; i++) {
      const x = 60 + rand() * 1080;
      const y = yMin + rand() * (yMax - yMin);
      const size = 1 + Math.floor(rand() * 3);
      const alpha = 0.18 + rand() * 0.40;
      if (rand() > 1 - cross) {
        c.strokeStyle = `rgba(217, 230, 234, ${alpha})`;
        c.lineWidth = 1;
        c.beginPath();
        c.moveTo(x - 3, y); c.lineTo(x + 3, y);
        c.moveTo(x, y - 3); c.lineTo(x, y + 3);
        c.stroke();
      } else {
        c.fillStyle = `rgba(232, 243, 245, ${alpha})`;
        c.fillRect(x, y, size, size);
      }
    }
  }

  function filledShape(c, points, fill, stroke) {
    c.beginPath();
    points.forEach(([x, y], i) => (i === 0 ? c.moveTo(x, y) : c.lineTo(x, y)));
    c.closePath();
    c.fillStyle = fill;
    c.fill();
    if (stroke) {
      c.strokeStyle = stroke;
      c.lineWidth = 1;
      c.stroke();
    }
  }

  function pine(c, x, base, scale, fill = "rgba(10, 17, 24, 0.92)") {
    c.fillStyle = fill;
    for (let i = 0; i < 3; i++) {
      const apex = base - 46 * scale + i * 16 * scale;
      const foot = base - 8 * scale + i * 14 * scale;
      const half = 18 * scale - i * 3 * scale;
      c.beginPath();
      c.moveTo(x, apex);
      c.lineTo(x + half, foot);
      c.lineTo(x - half, foot);
      c.closePath();
      c.fill();
    }
    c.fillRect(x - 2 * scale, base - 4 * scale, 4 * scale, 10 * scale);
    c.strokeStyle = "rgba(255, 107, 107, 0.42)";
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(x - 9 * scale, base - 30 * scale);
    c.lineTo(x, base - 39 * scale);
    c.lineTo(x + 9 * scale, base - 30 * scale);
    c.stroke();
  }

  function bareTree(c, x, base, scale) {
    c.strokeStyle = "rgba(217, 230, 234, 0.34)";
    c.lineWidth = 2 * scale;
    c.beginPath();
    c.moveTo(x, base);
    c.lineTo(x, base - 76 * scale);
    c.stroke();
    c.lineWidth = 1.2 * scale;
    for (let i = 0; i < 4; i++) {
      const y = base - 24 * scale - i * 15 * scale;
      const reach = (26 - i * 4) * scale;
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(x - reach, y - 14 * scale);
      c.moveTo(x, y);
      c.lineTo(x + reach, y - 16 * scale);
      c.stroke();
      c.strokeStyle = "rgba(232, 243, 245, 0.48)";
      c.lineWidth = 1 * scale;
      c.beginPath();
      c.moveTo(x - reach + 3 * scale, y - 13 * scale);
      c.lineTo(x - reach + 9 * scale, y - 16 * scale);
      c.moveTo(x + reach - 3 * scale, y - 15 * scale);
      c.lineTo(x + reach - 9 * scale, y - 18 * scale);
      c.stroke();
      c.strokeStyle = "rgba(217, 230, 234, 0.34)";
      c.lineWidth = 1.2 * scale;
    }
  }

  function moonDisc(c, x, y, r, ticks = true) {
    c.strokeStyle = "rgba(255, 107, 107, 0.34)";
    c.lineWidth = 2;
    c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.stroke();
    c.strokeStyle = "rgba(217, 230, 234, 0.18)";
    c.lineWidth = 1;
    c.beginPath(); c.arc(x, y, r - 14, 0, Math.PI * 2); c.stroke();
    if (r > 30) {
      c.beginPath(); c.arc(x, y, r - 28, 0, Math.PI * 2); c.stroke();
    }
    c.fillStyle = "rgba(217, 230, 234, 0.15)";
    for (const [dx, dy, cr] of [[-r * 0.35, -r * 0.3, r / 12], [r * 0.28, r * 0.2, r / 16], [-r * 0.14, r * 0.38, r / 20]]) {
      c.beginPath(); c.arc(x + dx, y + dy, cr, 0, Math.PI * 2); c.fill();
    }
    if (!ticks) return;
    c.strokeStyle = "rgba(255, 107, 107, 0.34)";
    for (let i = 0; i < 12; i++) {
      const a = (Math.PI * 2 / 12) * i;
      c.beginPath();
      c.moveTo(x + Math.cos(a) * (r + 10), y + Math.sin(a) * (r + 10));
      c.lineTo(x + Math.cos(a) * (r + 20), y + Math.sin(a) * (r + 20));
      c.stroke();
    }
  }

  function cabin(c, x, y) {
    c.fillStyle = "rgba(10, 17, 24, 0.95)";
    c.fillRect(x, y, 22, 16);
    c.beginPath();
    c.moveTo(x - 4, y);
    c.lineTo(x + 11, y - 10);
    c.lineTo(x + 26, y);
    c.closePath();
    c.fill();
    c.fillStyle = C.signal;
    c.fillRect(x + 8, y + 5, 4, 4);
  }

  function drawObservatory(c, s) {
    const rand = seeded(s.seed);
    const [mx, my] = s.moon;
    c.strokeStyle = "rgba(255, 107, 107, 0.09)";
    c.lineWidth = 16;
    for (let i = 0; i < s.arcs; i++) {
      c.beginPath();
      c.arc(mx, my, s.radius + 46 + i * 26, s.arcFrom, s.arcTo);
      c.stroke();
    }
    moonDisc(c, mx, my, s.radius);
    snowField(c, rand, s.snow, s.cross);
    filledShape(c, s.far, "rgba(194, 31, 46, 0.10)", "rgba(217, 230, 234, 0.34)");
    s.pines.forEach(([x, y, scale]) => pine(c, x, y, scale));
    filledShape(c, s.near, "rgba(10, 17, 24, 0.78)", "rgba(217, 230, 234, 0.20)");
    s.cabins.forEach(([x, y]) => cabin(c, x, y));
  }

  function drawSnowstorm(c, s) {
    const rand = seeded(s.seed);
    moonDisc(c, s.moon[0], s.moon[1], s.radius, false);

    c.fillStyle = "rgba(217, 230, 234, 0.10)";
    for (let i = 0; i < s.farSnow; i++) {
      const x = 64 + rand() * 1072;
      const y = 150 + rand() * 370;
      c.fillRect(x, y, 1.5, 1.5);
    }

    c.lineWidth = 3;
    for (let i = 0; i < s.gusts; i++) {
      const y = 210 + i * 62 + rand() * 18;
      c.strokeStyle = `rgba(217, 230, 234, ${0.05 + i * 0.012})`;
      c.beginPath();
      c.moveTo(64, y + 26);
      c.bezierCurveTo(320, y - 24, 660, y + 52, 1136, y - 14);
      c.stroke();
    }

    c.strokeStyle = "rgba(217, 230, 234, 0.26)";
    c.lineWidth = 1;
    for (let i = 0; i < s.snow; i++) {
      const x = 60 + rand() * 1080;
      const y = 150 + rand() * 430;
      const length = 10 + rand() * 18;
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(x + length, y + length * 0.8);
      c.stroke();
    }
    c.strokeStyle = "rgba(232, 243, 245, 0.46)";
    c.lineWidth = 1.6;
    for (let i = 0; i < s.nearSnow; i++) {
      const x = 40 + rand() * 1120;
      const y = 150 + rand() * 450;
      const length = 24 + rand() * 20;
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(x + length, y + length * 0.78);
      c.stroke();
    }

    filledShape(c, s.hills, "rgba(194, 31, 46, 0.07)");
    filledShape(c, s.drifts, "rgba(194, 31, 46, 0.13)", "rgba(217, 230, 234, 0.26)");
    s.cabins.forEach(([x, y]) => cabin(c, x, y));
    s.trees.forEach(([x, y, scale]) => bareTree(c, x, y, scale));
  }

  function drawCity(c, s) {
    const rand = seeded(s.seed);
    moonDisc(c, s.moon[0], s.moon[1], s.radius, false);
    for (const [x, w, h] of s.buildings) {
      const top = 600 - h;
      c.fillStyle = "rgba(10, 17, 24, 0.88)";
      c.fillRect(x, top, w, h);
      c.strokeStyle = "rgba(217, 230, 234, 0.22)";
      c.lineWidth = 1;
      c.strokeRect(x + 0.5, top + 0.5, w - 1, h - 1);
      for (let wy = top + 12; wy < 594; wy += 22) {
        for (let wx = x + 10; wx < x + w - 8; wx += 18) {
          c.fillStyle = rand() > 0.62 ? C.signal : "rgba(217, 230, 234, 0.14)";
          c.fillRect(wx, wy, 5, 7);
        }
      }
    }
    c.strokeStyle = "rgba(217, 230, 234, 0.24)";
    for (const y of s.wires) {
      c.beginPath();
      c.moveTo(64, y);
      c.quadraticCurveTo(600, y + 34, 1136, y);
      c.stroke();
    }
    snowField(c, rand, s.snow, s.cross);
  }

  function drawForest(c, s) {
    const rand = seeded(s.seed);
    const [mx, my] = s.moon;

    c.strokeStyle = "rgba(217, 230, 234, 0.07)";
    c.lineWidth = 1;
    for (const r of [s.radius + 24, s.radius + 44]) {
      c.beginPath(); c.arc(mx, my, r, 0, Math.PI * 2); c.stroke();
    }
    moonDisc(c, mx, my, s.radius, false);
    snowField(c, rand, s.snow, s.cross);

    s.farPines.forEach(([x, y, scale]) => pine(c, x, y, scale, "rgba(217, 230, 234, 0.10)"));

    s.mist.forEach((y, i) => {
      c.beginPath();
      c.moveTo(64, y + 16);
      c.bezierCurveTo(300, y - 20, 620, y + 30, 1136, y - 12);
      c.lineTo(1136, y + 34);
      c.bezierCurveTo(760, y + 70, 380, y + 18, 64, y + 52);
      c.closePath();
      c.fillStyle = `rgba(217, 230, 234, ${0.035 + i * 0.012})`;
      c.fill();
    });

    filledShape(c, [[64, 600], [280, 582], [560, 594], [860, 580], [1136, 592], [1136, 600]], "rgba(194, 31, 46, 0.10)");
    s.midPines.forEach(([x, y, scale]) => pine(c, x, y, scale, "rgba(31, 58, 64, 0.86)"));
    cabin(c, s.cabin[0], s.cabin[1]);
    filledShape(c, [[64, 600], [240, 588], [520, 598], [820, 586], [1136, 596], [1136, 600]], "rgba(10, 17, 24, 0.80)");
    s.nearPines.forEach(([x, y, scale]) => pine(c, x, y, scale));
  }

  function drawAurora(c, s) {
    const rand = seeded(s.seed);
    for (let i = 0; i < s.stars; i++) {
      const x = 64 + rand() * 1072;
      const y = 150 + rand() * 330;
      const alpha = 0.16 + rand() * 0.48;
      if (rand() > 0.78) {
        c.strokeStyle = `rgba(217, 230, 234, ${alpha})`;
        c.lineWidth = 1;
        c.beginPath();
        c.moveTo(x - 3, y); c.lineTo(x + 3, y);
        c.moveTo(x, y - 3); c.lineTo(x, y + 3);
        c.stroke();
      } else {
        c.fillStyle = `rgba(232, 243, 245, ${alpha})`;
        c.fillRect(x, y, 2, 2);
      }
    }
    for (let i = 0; i < s.bands; i++) {
      const top = 360 + i * 22;
      c.beginPath();
      c.moveTo(64, top + 40);
      c.bezierCurveTo(320, top - 46, 560, top + 58, 820, top - 28);
      c.bezierCurveTo(960, top - 66, 1070, top + 20, 1136, top - 10);
      c.lineTo(1136, top + 56);
      c.bezierCurveTo(1020, top + 96, 860, top + 12, 700, top + 78);
      c.bezierCurveTo(460, top + 112, 240, top + 24, 64, top + 92);
      c.closePath();
      c.fillStyle = `rgba(255, 107, 107, ${0.04 + i * 0.012})`;
      c.fill();
    }
    filledShape(c, s.mountains, "rgba(194, 31, 46, 0.12)", "rgba(217, 230, 234, 0.32)");
    snowField(c, rand, s.snow, s.cross);
  }

  function drawRailway(c, s) {
    const rand = seeded(s.seed);
    const [vx, vy] = s.vanishing;
    const [mx, my] = s.moon;

    filledShape(c, s.hills, "rgba(194, 31, 46, 0.09)", "rgba(217, 230, 234, 0.16)");
    c.strokeStyle = "rgba(217, 230, 234, 0.10)";
    c.lineWidth = 1;
    for (const r of [s.radius + 18, s.radius + 34]) {
      c.beginPath(); c.arc(mx, my, r, 0, Math.PI * 2); c.stroke();
    }
    moonDisc(c, mx, my, s.radius, false);

    c.strokeStyle = "rgba(217, 230, 234, 0.34)";
    c.lineWidth = 1;
    for (const railX of [300, 900]) {
      c.beginPath();
      c.moveTo(railX, 600);
      c.lineTo(vx, vy);
      c.stroke();
    }
    for (let i = 0; i < 18; i++) {
      const t = (i / 17) ** 1.7;
      const y = 600 - t * (600 - vy);
      const half = (300 - t * (300 - vx)) * 0.5 + 22;
      c.beginPath();
      c.moveTo(vx - half, y);
      c.lineTo(vx + half, y);
      c.stroke();
    }
    filledShape(c, [[64, 600], [240, 590], [420, 596], [600, 582], [820, 594], [1136, 584], [1136, 600]], "rgba(217, 230, 234, 0.05)");

    c.fillStyle = "rgba(10, 17, 24, 0.94)";
    c.fillRect(vx - 34, vy - 18, 68, 18);
    c.beginPath();
    c.moveTo(vx - 42, vy - 18);
    c.lineTo(vx, vy - 34);
    c.lineTo(vx + 42, vy - 18);
    c.closePath();
    c.fill();
    for (let i = 0; i < 3; i++) {
      c.fillStyle = C.signal;
      c.fillRect(vx - 22 + i * 16, vy - 13, 7, 6);
    }

    c.fillStyle = "rgba(10, 17, 24, 0.96)";
    c.fillRect(vx - 96, vy - 66, 132, 46);
    c.beginPath();
    c.moveTo(vx - 96, vy - 66);
    c.lineTo(vx - 78, vy - 82);
    c.lineTo(vx + 22, vy - 82);
    c.lineTo(vx + 36, vy - 66);
    c.closePath();
    c.fill();
    for (let i = 0; i < 5; i++) {
      c.fillStyle = i === 4 ? C.signal : "rgba(217, 230, 234, 0.72)";
      c.fillRect(vx - 84 + i * 24, vy - 56, 14, 12);
    }
    c.strokeStyle = "rgba(255, 107, 107, 0.30)";
    c.lineWidth = 1;
    c.beginPath();
    c.arc(vx + 36, vy - 44, 16, 0, Math.PI * 2);
    c.stroke();
    c.fillStyle = C.signal;
    c.beginPath(); c.arc(vx + 36, vy - 44, 5, 0, Math.PI * 2); c.fill();

    filledShape(c, s.platform, "rgba(10, 17, 24, 0.88)", "rgba(217, 230, 234, 0.24)");
    c.strokeStyle = C.signal;
    c.lineWidth = 2;
    c.beginPath(); c.moveTo(784, 550); c.lineTo(1136, 550); c.stroke();
    c.strokeStyle = "rgba(217, 230, 234, 0.28)";
    c.lineWidth = 1;
    for (const x of [840, 980, 1110]) {
      c.beginPath(); c.moveTo(x, 550); c.lineTo(x, 470); c.stroke();
    }
    c.beginPath(); c.moveTo(780, 470); c.lineTo(1136, 462); c.stroke();

    s.poles.forEach(([x, base, scale]) => {
      c.strokeStyle = "rgba(217, 230, 234, 0.30)";
      c.lineWidth = 2 * scale;
      c.beginPath();
      c.moveTo(x, base);
      c.lineTo(x, base - 90 * scale);
      c.moveTo(x - 18 * scale, base - 72 * scale);
      c.lineTo(x + 18 * scale, base - 72 * scale);
      c.stroke();
    });
    c.strokeStyle = "rgba(217, 230, 234, 0.20)";
    c.lineWidth = 1;
    for (let i = 0; i < s.poles.length - 1; i++) {
      const [x1, b1, k1] = s.poles[i];
      const [x2, b2, k2] = s.poles[i + 1];
      c.beginPath();
      c.moveTo(x1, b1 - 72 * k1);
      c.quadraticCurveTo((x1 + x2) / 2, Math.max(b1 - 72 * k1, b2 - 72 * k2) + 14, x2, b2 - 72 * k2);
      c.stroke();
    }

    s.signals.forEach(([x, base, scale]) => {
      c.strokeStyle = "rgba(217, 230, 234, 0.34)";
      c.lineWidth = 2 * scale;
      c.beginPath(); c.moveTo(x, base); c.lineTo(x, base - 58 * scale); c.stroke();
      c.fillStyle = "rgba(10, 17, 24, 0.95)";
      c.fillRect(x - 7 * scale, base - 78 * scale, 14 * scale, 26 * scale);
      c.fillStyle = C.signal;
      c.beginPath(); c.arc(x, base - 71 * scale, 3.5 * scale, 0, Math.PI * 2); c.fill();
      c.fillStyle = "rgba(217, 230, 234, 0.55)";
      c.beginPath(); c.arc(x, base - 59 * scale, 3 * scale, 0, Math.PI * 2); c.fill();
    });

    snowField(c, rand, s.snow, s.cross);
  }

  function drawCelebration(c, s) {
    const rand = seeded(s.seed);
    const sag = 30;
    c.strokeStyle = "rgba(217, 230, 234, 0.28)";
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(64, s.garlandY);
    c.quadraticCurveTo(600, s.garlandY + sag * 2, 1136, s.garlandY);
    c.stroke();
    for (let i = 0; i < s.bulbs; i++) {
      const t = i / (s.bulbs - 1);
      const x = 64 + t * 1072;
      const y = s.garlandY + 4 * sag * t * (1 - t);
      c.fillStyle = i % 3 === 0 ? C.signal : "rgba(217, 230, 234, 0.86)";
      c.beginPath();
      c.arc(x, y + 6, 4, 0, Math.PI * 2);
      c.fill();
      c.strokeStyle = "rgba(255, 107, 107, 0.20)";
      c.beginPath();
      c.arc(x, y + 6, 9, 0, Math.PI * 2);
      c.stroke();
    }
    s.bursts.forEach(([x, y, r]) => {
      c.strokeStyle = "rgba(255, 107, 107, 0.62)";
      c.lineWidth = 1.5;
      for (let i = 0; i < 18; i++) {
        const a = (Math.PI * 2 / 18) * i;
        c.beginPath();
        c.moveTo(x + Math.cos(a) * r * 0.32, y + Math.sin(a) * r * 0.32);
        c.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
        c.stroke();
        c.fillStyle = i % 2 ? C.signal : "rgba(217, 230, 234, 0.72)";
        c.fillRect(x + Math.cos(a) * r - 1.5, y + Math.sin(a) * r - 1.5, 3, 3);
      }
    });
    filledShape(c, s.rooftops, "rgba(10, 17, 24, 0.88)", "rgba(217, 230, 234, 0.26)");
    for (let i = 0; i < 10; i++) {
      c.fillStyle = i % 2 ? C.signal : "rgba(217, 230, 234, 0.20)";
      c.fillRect(120 + i * 100, 562, 6, 8);
    }
    snowField(c, rand, s.snow, s.cross);
  }

  function drawLanterns(c, s) {
    const rand = seeded(s.seed);
    const sag = 60;
    c.strokeStyle = "rgba(217, 230, 234, 0.28)";
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(64, s.wireY);
    c.quadraticCurveTo(600, s.wireY + sag * 2, 1136, s.wireY);
    c.stroke();
    c.fillStyle = "rgba(10, 17, 24, 0.90)";
    c.fillRect(100, s.wireY + 4, 6, 8);
    s.lanterns.forEach(([x, y]) => {
      const t = (x - 64) / 1072;
      const wireY = s.wireY + 4 * sag * t * (1 - t);
      c.strokeStyle = "rgba(217, 230, 234, 0.30)";
      c.beginPath();
      c.moveTo(x, wireY);
      c.lineTo(x, y - 14);
      c.stroke();
      c.strokeStyle = "rgba(255, 107, 107, 0.22)";
      c.beginPath();
      c.arc(x, y, 24, 0, Math.PI * 2);
      c.stroke();
      c.fillStyle = C.signalDeep;
      c.fillRect(x - 9, y - 13, 18, 26);
      c.fillStyle = C.signal;
      c.fillRect(x - 5, y - 9, 10, 18);
      c.fillStyle = "rgba(10, 17, 24, 0.9)";
      c.fillRect(x - 11, y - 16, 22, 4);
      c.fillRect(x - 11, y + 12, 22, 4);
    });
    filledShape(c, s.rooftops, "rgba(10, 17, 24, 0.88)", "rgba(217, 230, 234, 0.24)");
    snowField(c, rand, s.snow, s.cross);
  }

  const SCENE_DRAWERS = {
    observatory: drawObservatory,
    snowstorm: drawSnowstorm,
    city: drawCity,
    forest: drawForest,
    aurora: drawAurora,
    railway: drawRailway,
    celebration: drawCelebration,
    lanterns: drawLanterns
  };

  function drawWinterScene(c) {
    const s = SCENES[sceneIndex % SCENES.length];
    c.save();
    (SCENE_DRAWERS[s.kind] || drawObservatory)(c, s);
    c.restore();
  }

  function drawCard() {
    ctx.setTransform(S, 0, 0, S, 0, 0);
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = C.card;
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = C.grid;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 30; x < W; x += 30) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, H); }
    for (let y = 30; y < H; y += 30) { ctx.moveTo(0, y + 0.5); ctx.lineTo(W, y + 0.5); }
    ctx.stroke();

    ctx.strokeStyle = C.rule;
    ctx.lineWidth = 1;
    ctx.strokeRect(26.5, 26.5, W - 53, H - 53);

    ctx.strokeStyle = C.signal;
    ctx.lineWidth = 1.5;
    const corners = [[26, 26, 1, 1], [W - 26, 26, -1, 1], [26, H - 26, 1, -1], [W - 26, H - 26, -1, -1]];
    for (const [cx, cy, sx, sy] of corners) {
      ctx.beginPath();
      ctx.moveTo(cx + sx * 20, cy); ctx.lineTo(cx, cy); ctx.lineTo(cx, cy + sy * 20);
      ctx.stroke();
    }

    ctx.fillStyle = C.label;
    ctx.font = `700 14px ${FONT}`;
    tracked(ctx, t("cardMasthead"), 64, 74, 2.4);
    ctx.fillStyle = C.muted;
    ctx.font = `400 12px ${FONT}`;
    trackedRight(ctx, t("cardIssue"), 886, 74, 1.8);

    ctx.strokeStyle = C.rule;
    ctx.beginPath(); ctx.moveTo(64, 112.5); ctx.lineTo(1136, 112.5); ctx.stroke();

    drawWinterScene(ctx);

    const raw = messageEl.value.trim();
    ctx.font = `700 56px ${FONT}`;
    const lines = raw ? wrapText(ctx, raw, 800, 5) : [t("cardPlaceholder")];
    ctx.fillStyle = raw ? C.ink : C.muted;
    ctx.font = raw ? `700 56px ${FONT}` : `400 52px ${FONT}`;
    lines.forEach((line, i) => ctx.fillText(line, 64, 240 + i * 78));

    ctx.strokeStyle = C.rule;
    ctx.beginPath(); ctx.moveTo(64, 620.5); ctx.lineTo(1136, 620.5); ctx.stroke();
    diamond(ctx, 1136, 620.5, 4, C.signal);

    ctx.font = `400 11px ${FONT}`;
    ctx.fillStyle = C.signal;
    tracked(ctx, t("cardTo"), 64, 662, 2.4);
    tracked(ctx, t("cardFrom"), 520, 662, 2.4);
    ctx.fillStyle = C.label;
    ctx.font = `500 26px ${FONT}`;
    ctx.fillText(recipientEl.value.trim() || "—", 64, 704);
    ctx.fillText(senderEl.value.trim() || "—", 520, 704);

    ctx.fillStyle = "#33505c";
    for (let i = 0; i < 26; i++) {
      const h = 10 + ((i * 7) % 17);
      ctx.fillRect(900 + i * 8, 697 - h, 2, h);
    }

    ctx.fillStyle = C.label;
    ctx.font = `400 10px ${FONT}`;
    trackedRight(ctx, t("cardDelivered"), 1136, 72, 1.6);
    ctx.fillStyle = C.signal;
    ctx.fillRect(64, 726, 64, 2);

    const stamp = radios.find((r) => r.checked).value;
    drawStamp(ctx, 930, 76, stamp);

    sceneTagEl.textContent = `${t("scene")} ${String(sceneIndex + 1).padStart(2, "0")}/0${SCENES.length}`;
    footerGreetingEl.replaceChildren();
    SAMPLES[lang][sceneIndex % SAMPLES[lang].length]
      .split("\n")
      .map((part) => part.trim())
      .forEach((part, i) => {
        if (i) footerGreetingEl.appendChild(snowflakeSeparator());
        footerGreetingEl.appendChild(document.createTextNode(part));
      });
    const aria = t("ariaCard")
      .replace("{stamp}", t("stamp" + stamp.charAt(0).toUpperCase() + stamp.slice(1)))
      .replace("{message}", raw || t("emptyGreeting"))
      .replace("{to}", recipientEl.value.trim() || t("unnamed"))
      .replace("{from}", senderEl.value.trim() || t("unnamed"));
    canvas.setAttribute("aria-label", aria);
  }

  function setStatus(text, warning = false) {
    statusEl.textContent = text;
    statusEl.classList.toggle("is-warning", warning);
  }

  function updateCounter() {
    countEl.textContent = `${messageEl.value.length} / 120`;
  }

  function runSweep() {
    if (reduceMotion.matches) return;
    frame.classList.remove("is-printing");
    void sweep.offsetWidth;
    frame.classList.add("is-printing");
  }
  sweep.addEventListener("animationend", () => frame.classList.remove("is-printing"));
  canvas.addEventListener("animationend", () => frame.classList.remove("is-scene"));

  function scheduleScene() {
    clearTimeout(sceneTimer);
    sceneTimer = setTimeout(() => {
      sceneIndex = (sceneIndex + 1) % SCENES.length;
      drawCard();
      if (!reduceMotion.matches) {
        frame.classList.remove("is-scene");
        void frame.offsetWidth;
        frame.classList.add("is-scene");
      }
      scheduleScene();
    }, SCENE_MS);
  }

  function refresh() {
    updateCounter();
    drawCard();
    scheduleScene();
    const msg = messageEl.value.trim();
    if (!msg) setStatus(t("statusEmpty"), true, t("topCheck"));
    else if (!recipientEl.value.trim()) setStatus(t("statusOptional"));
    else setStatus(t("statusSend"));
  }

  function applyLanguage(next) {
    const previous = lang;
    const oldIndex = SAMPLES[previous].indexOf(messageEl.value.trim());
    lang = next;
    document.documentElement.lang = next;
    document.title = t("docTitle");
    try { localStorage.setItem("winter-dispatch-lang", next); } catch (_) { /* storage may be unavailable */ }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      const active = btn.dataset.lang === next;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    if (oldIndex !== -1) {
      messageEl.value = SAMPLES[next][oldIndex];
    }
    refresh();
  }

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang !== lang) {
        applyLanguage(btn.dataset.lang);
        setStatus(t("statusReady"));
      }
    });
  });

  radios.forEach((input) => {
    input.addEventListener("change", () => {
      drawCard();
      runSweep();
      const key = "stamp" + input.value.charAt(0).toUpperCase() + input.value.slice(1);
      setStatus(`${t("statusStamp")} · ${t(key).toUpperCase()}`);
    });
  });

  [messageEl, recipientEl, senderEl].forEach((el) => el.addEventListener("input", refresh));

  document.getElementById("shuffle").addEventListener("click", () => {
    const list = SAMPLES[lang];
    const current = list.indexOf(messageEl.value.trim());
    let next = current;
    while (next === current) next = Math.floor(Math.random() * list.length);
    messageEl.value = list[next];
    radios[(next + 1) % radios.length].checked = true;
    refresh();
    runSweep();
    setStatus(t("statusSample"));
  });

  document.getElementById("download").addEventListener("click", () => {
    const name = (recipientEl.value.trim() || t("fileFallback"))
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 32) || t("fileFallback");
    const filename = `winter-dispatch-${name}.png`;
    const save = (url, revoke) => {
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      if (revoke) setTimeout(() => URL.revokeObjectURL(url), 2000);
    };
    if (canvas.toBlob) {
      canvas.toBlob((blob) => {
        if (blob) save(URL.createObjectURL(blob), true);
        else save(canvas.toDataURL("image/png"), false);
        setStatus(`${t("statusSaved")} · ${filename}`, false, t("topSent"));
      }, "image/png");
    } else {
      save(canvas.toDataURL("image/png"), false);
      setStatus(`${t("statusSaved")} · ${filename}`, false, t("topSent"));
    }
  });

  document.querySelectorAll(".stamp-thumb").forEach((thumb, i) => {
    const c = thumb.getContext("2d");
    c.setTransform(2, 0, 0, 2, 0, 0);
    drawStamp(c, 0, 0, radios[i].value);
  });

  if (lang === "ru" && messageEl.value.trim() === SAMPLES.en[0].trim()) {
    messageEl.value = SAMPLES.ru[0];
  }
  applyLanguage(lang);
})();
