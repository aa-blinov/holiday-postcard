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
      footerLeft: "SAMPLE COPY AND STAMP ARTWORK ARE AUTHORED FOR DEMONSTRATION.",
      footerRight: "WINTER DISPATCH / LOCAL-ONLY · NOTHING IS UPLOADED",
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
      footerLeft: "ОБРАЗЦЫ ТЕКСТА И ШТАМПОВ СОЗДАНЫ ДЛЯ ПРИМЕРА.",
      footerRight: "ЗИМНЯЯ ДОСТАВКА / ТОЛЬКО ЛОКАЛЬНО · НИЧЕГО НЕ ОТПРАВЛЯЕТСЯ",
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
      seed: 2026, moon: [818, 468], radius: 86, arcs: 3, arcFrom: -2.55, arcTo: -0.65,
      snow: 46, cross: 0.28,
      pines: [[196, 548, 0.9], [372, 566, 0.65], [1052, 552, 0.75]],
      cabins: [[690, 578], [726, 586]],
      far: [[64, 600], [160, 548], [210, 528], [348, 568], [452, 516], [516, 486], [676, 560], [842, 512], [932, 552], [1008, 522], [1080, 566], [1136, 532], [1136, 600]],
      near: [[64, 600], [236, 556], [414, 590], [604, 548], [802, 594], [1002, 552], [1136, 580], [1136, 600]]
    },
    {
      seed: 731, moon: [520, 420], radius: 64, arcs: 2, arcFrom: -2.9, arcTo: -0.35,
      snow: 68, cross: 0.22,
      pines: [[180, 552, 0.8], [452, 570, 0.7], [880, 548, 0.9], [1040, 566, 0.6]],
      cabins: [[760, 584]],
      far: [[64, 600], [130, 556], [250, 512], [390, 558], [500, 500], [620, 548], [770, 496], [900, 552], [1030, 510], [1136, 548], [1136, 600]],
      near: [[64, 600], [200, 574], [360, 596], [540, 552], [720, 590], [900, 546], [1136, 584], [1136, 600]]
    },
    {
      seed: 1147, moon: [1010, 410], radius: 52, arcs: 4, arcFrom: -2.2, arcTo: -0.2,
      snow: 34, cross: 0.40,
      pines: [[300, 560, 0.7], [620, 545, 0.85]],
      cabins: [[180, 580], [216, 588], [840, 574]],
      far: [[64, 600], [140, 540], [260, 578], [380, 500], [520, 556], [660, 480], [800, 542], [940, 490], [1060, 552], [1136, 520], [1136, 600]],
      near: [[64, 600], [180, 562], [340, 592], [500, 540], [680, 588], [860, 548], [1020, 590], [1136, 556], [1136, 600]]
    },
    {
      seed: 89, moon: [700, 500], radius: 96, arcs: 3, arcFrom: -2.7, arcTo: -0.5,
      snow: 54, cross: 0.30,
      pines: [[110, 558, 0.7], [940, 552, 0.8]],
      cabins: [[520, 580], [556, 588]],
      far: [[64, 600], [190, 530], [320, 574], [470, 510], [610, 566], [760, 500], [890, 558], [1020, 516], [1136, 560], [1136, 600]],
      near: [[64, 600], [240, 548], [420, 594], [610, 540], [790, 590], [980, 546], [1136, 586], [1136, 600]]
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
  const topStatusText = document.getElementById("topStatusText");
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

  function drawWinterScene(c) {
    const s = SCENES[sceneIndex % SCENES.length];
    const [mx, my] = s.moon;
    c.save();

    let seed = s.seed;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };

    c.strokeStyle = "rgba(255, 107, 107, 0.09)";
    c.lineWidth = 16;
    for (let i = 0; i < s.arcs; i++) {
      c.beginPath();
      c.arc(mx, my, s.radius + 46 + i * 26, s.arcFrom, s.arcTo);
      c.stroke();
    }

    c.strokeStyle = "rgba(255, 107, 107, 0.34)";
    c.lineWidth = 2;
    c.beginPath(); c.arc(mx, my, s.radius, 0, Math.PI * 2); c.stroke();
    c.strokeStyle = "rgba(217, 230, 234, 0.18)";
    c.lineWidth = 1;
    c.beginPath(); c.arc(mx, my, s.radius - 16, 0, Math.PI * 2); c.stroke();
    c.beginPath(); c.arc(mx, my, s.radius - 32, 0, Math.PI * 2); c.stroke();
    c.fillStyle = "rgba(217, 230, 234, 0.15)";
    for (const [dx, dy, r] of [[-30, -26, 7], [24, 18, 5], [-12, 32, 4], [34, -28, 3]]) {
      c.beginPath(); c.arc(mx + dx, my + dy, r, 0, Math.PI * 2); c.fill();
    }
    c.strokeStyle = "rgba(255, 107, 107, 0.34)";
    for (let i = 0; i < 12; i++) {
      const a = (Math.PI * 2 / 12) * i;
      c.beginPath();
      c.moveTo(mx + Math.cos(a) * (s.radius + 10), my + Math.sin(a) * (s.radius + 10));
      c.lineTo(mx + Math.cos(a) * (s.radius + 20), my + Math.sin(a) * (s.radius + 20));
      c.stroke();
    }

    for (let i = 0; i < s.snow; i++) {
      const x = 60 + rand() * 1080;
      const y = 150 + rand() * 430;
      const size = 1 + Math.floor(rand() * 3);
      const alpha = 0.18 + rand() * 0.40;
      if (rand() > 1 - s.cross) {
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

    c.beginPath();
    s.far.forEach(([x, y], i) => (i === 0 ? c.moveTo(x, y) : c.lineTo(x, y)));
    c.closePath();
    c.fillStyle = "rgba(194, 31, 46, 0.10)";
    c.fill();
    c.strokeStyle = "rgba(217, 230, 234, 0.34)";
    c.stroke();

    for (const [px, py, scale] of s.pines) {
      c.fillStyle = "rgba(10, 17, 24, 0.92)";
      for (let i = 0; i < 3; i++) {
        const apex = py - 46 * scale + i * 16 * scale;
        const base = py - 8 * scale + i * 14 * scale;
        const half = 18 * scale - i * 3 * scale;
        c.beginPath();
        c.moveTo(px, apex);
        c.lineTo(px + half, base);
        c.lineTo(px - half, base);
        c.closePath();
        c.fill();
      }
      c.fillRect(px - 2 * scale, py - 4 * scale, 4 * scale, 10 * scale);
      c.strokeStyle = "rgba(255, 107, 107, 0.42)";
      c.lineWidth = 1;
      c.beginPath();
      c.moveTo(px - 9 * scale, py - 30 * scale);
      c.lineTo(px, py - 39 * scale);
      c.lineTo(px + 9 * scale, py - 30 * scale);
      c.stroke();
    }

    c.beginPath();
    s.near.forEach(([x, y], i) => (i === 0 ? c.moveTo(x, y) : c.lineTo(x, y)));
    c.closePath();
    c.fillStyle = "rgba(10, 17, 24, 0.78)";
    c.fill();
    c.strokeStyle = "rgba(217, 230, 234, 0.20)";
    c.stroke();

    for (const [bx, by] of s.cabins) {
      c.fillStyle = "rgba(10, 17, 24, 0.95)";
      c.fillRect(bx, by, 22, 16);
      c.beginPath();
      c.moveTo(bx - 4, by);
      c.lineTo(bx + 11, by - 10);
      c.lineTo(bx + 26, by);
      c.closePath();
      c.fill();
      c.fillStyle = C.signal;
      c.fillRect(bx + 8, by + 5, 4, 4);
    }

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
    const aria = t("ariaCard")
      .replace("{stamp}", t("stamp" + stamp.charAt(0).toUpperCase() + stamp.slice(1)))
      .replace("{message}", raw || t("emptyGreeting"))
      .replace("{to}", recipientEl.value.trim() || t("unnamed"))
      .replace("{from}", senderEl.value.trim() || t("unnamed"));
    canvas.setAttribute("aria-label", aria);
  }

  function setStatus(text, warning = false, top = t("topSynced")) {
    statusEl.textContent = text;
    statusEl.classList.toggle("is-warning", warning);
    topStatusText.textContent = top;
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
