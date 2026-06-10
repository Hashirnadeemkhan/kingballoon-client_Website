import sharp from "sharp";
import { readdirSync, statSync, readFileSync, writeFileSync, renameSync } from "fs";
import { join } from "path";

const PUBLIC = new URL("../public", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const MAX_W = 1920;
const QUALITY = 80;

const files = readdirSync(PUBLIC).filter((f) => /\.(jpe?g)$/i.test(f));

let beforeTotal = 0;
let afterTotal = 0;

for (const file of files) {
  const path = join(PUBLIC, file);
  const before = statSync(path).size;
  beforeTotal += before;

  try {
    const input = readFileSync(path);
    const meta = await sharp(input).metadata();
    const pipeline = sharp(input, { failOn: "none" }).rotate();
    if (meta.width && meta.width > MAX_W) {
      pipeline.resize({ width: MAX_W, withoutEnlargement: true });
    }
    const buf = await pipeline
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();

    // only write if we actually saved space
    if (buf.length < before) {
      const tmp = path + ".tmp";
      writeFileSync(tmp, buf);
      renameSync(tmp, path);
      afterTotal += buf.length;
      console.log(
        `✓ ${file}  ${(before / 1024).toFixed(0)}KB → ${(buf.length / 1024).toFixed(0)}KB  (-${(
          (1 - buf.length / before) *
          100
        ).toFixed(0)}%)`
      );
    } else {
      afterTotal += before;
      console.log(`· ${file}  ${(before / 1024).toFixed(0)}KB  (kept, already small)`);
    }
  } catch (e) {
    afterTotal += before;
    console.log(`! ${file}  skipped: ${e.message}`);
  }
}

console.log(
  `\nTOTAL: ${(beforeTotal / 1024 / 1024).toFixed(1)}MB → ${(afterTotal / 1024 / 1024).toFixed(
    1
  )}MB  (saved ${((1 - afterTotal / beforeTotal) * 100).toFixed(0)}%)`
);
