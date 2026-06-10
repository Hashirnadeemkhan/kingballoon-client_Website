import sharp from "sharp";
import { writeFileSync } from "fs";
import { join } from "path";

const PUBLIC = new URL("../public", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const APP = new URL("../app", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

// Branded crown favicon — gold crown on deep ink, matching the King Balloon palette.
const svg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#E3C66B"/>
      <stop offset="1" stop-color="#9A7A2E"/>
    </linearGradient>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#201b15"/>
      <stop offset="1" stop-color="#100d0a"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="512" height="512" rx="112" fill="url(#bg)"/>
  <rect x="22" y="22" width="468" height="468" rx="94" fill="none" stroke="#C8A24B" stroke-opacity="0.28" stroke-width="6"/>
  <g fill="url(#gold)">
    <path d="M120 350 L150 196 L214 268 L256 158 L298 268 L362 196 L392 350 Z"
          stroke="#9A7A2E" stroke-width="4" stroke-linejoin="round"/>
    <rect x="120" y="338" width="272" height="50" rx="16" stroke="#9A7A2E" stroke-width="4"/>
    <circle cx="150" cy="196" r="18"/>
    <circle cx="256" cy="158" r="20"/>
    <circle cx="362" cy="196" r="18"/>
  </g>
  <g fill="#201b15">
    <circle cx="186" cy="363" r="9"/>
    <circle cx="256" cy="363" r="9"/>
    <circle cx="326" cy="363" r="9"/>
  </g>
</svg>`;

const buf = Buffer.from(svg);

// Next.js App Router auto-detects these in /app
await sharp(buf).resize(512, 512).png().toFile(join(APP, "icon.png"));
await sharp(buf).resize(180, 180).png().toFile(join(APP, "apple-icon.png"));
// Classic favicon.ico in /public (32px PNG written as .ico — widely supported)
await sharp(buf).resize(48, 48).png().toFile(join(PUBLIC, "favicon.ico"));

console.log("✓ Generated app/icon.png, app/apple-icon.png, public/favicon.ico");
