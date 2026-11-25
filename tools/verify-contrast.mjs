const pairs = [
  ["body / primary font on page", "#ff6b6b", "#080d12"],
  ["primary font on panel", "#ff6b6b", "#0e151d"],
  ["input text on raised", "#ff6b6b", "#131d27"],
  ["secondary text on panel", "#d9e6ea", "#0e151d"],
  ["muted labels on panel", "#a8bfc7", "#0e151d"],
  ["muted labels on page", "#a8bfc7", "#080d12"],
  ["placeholder / disabled", "#9bb2bd", "#131d27"],
  ["status red on panel", "#ff6b6b", "#0e151d"],
  ["selected stamp label", "#ff6b6b", "#131d27"],
  ["warning status", "#ffc46b", "#0e151d"],
  ["primary button label", "#1a0505", "#ff6b6b"],
  ["primary button hover label", "#1a0505", "#ff8f8f"],
  ["card message red", "#ff6b6b", "#0a1118"],
  ["card label", "#d9e6ea", "#0a1118"],
  ["card muted / placeholder", "#9fb4bd", "#0a1118"],
  ["stamp printed label", "#0b1a1c", "#dbe9e6"],
  ["stamp red artwork", "#c21f2e", "#dbe9e6"]
];

function luminance(hex) {
  const n = hex.replace("#", "");
  const rgb = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255);
  const linear = rgb.map((v) => (v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function ratio(a, b) {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

let failed = 0;
for (const [name, fg, bg] of pairs) {
  const r = ratio(fg, bg);
  const ok = r >= 4.5;
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${r.toFixed(2).padStart(6)}:1  ${name}  (${fg} on ${bg})`);
}
console.log(`\n${pairs.length - failed}/${pairs.length} label pairs pass 4.5:1`);
process.exit(failed ? 1 : 0);
