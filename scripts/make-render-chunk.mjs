import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const [, , chunkArg, chunkStartArg, chunkDurationArg] = process.argv;
const chunk = Number(chunkArg);
const chunkStart = Number(chunkStartArg);
const chunkDuration = Number(chunkDurationArg);

if (!Number.isInteger(chunk) || chunk < 1) {
  throw new Error("Usage: node scripts/make-render-chunk.mjs <chunk> <start-seconds> <duration-seconds>");
}

if (!Number.isFinite(chunkStart) || !Number.isFinite(chunkDuration) || chunkDuration <= 0) {
  throw new Error("Chunk start and duration must be finite numbers, with duration > 0.");
}

const source = await readFile("index.html", "utf8");
const chunkEnd = chunkStart + chunkDuration;

function trimClip(tag) {
  const timing = tag.match(/(data-start=")([^"]+)("[\s\S]*?data-duration=")([^"]+)"/);

  if (!timing) {
    return tag;
  }

  const [, beforeStart, startValue, beforeDuration, durationValue] = timing;
  const originalStart = Number(startValue);
  const originalDuration = Number(durationValue);

  if (!Number.isFinite(originalStart) || !Number.isFinite(originalDuration)) {
    return tag;
  }

  const originalEnd = originalStart + originalDuration;
  const visibleStart = Math.max(originalStart, chunkStart);
  const visibleEnd = Math.min(originalEnd, chunkEnd);

  if (visibleEnd <= visibleStart) {
    return tag
      .replace(`${beforeStart}${startValue}"`, `${beforeStart}0"`)
      .replace(`${beforeDuration}${durationValue}"`, `${beforeDuration}0.001"`);
  }

  let updated = tag
    .replace(`${beforeStart}${startValue}"`, `${beforeStart}${visibleStart - chunkStart}"`)
    .replace(`${beforeDuration}${durationValue}"`, `${beforeDuration}${visibleEnd - visibleStart}"`);

  if (/<(?:audio|video)\b/i.test(tag)) {
    const mediaStart = visibleStart - originalStart;
    if (/\sdata-media-start="/.test(updated)) {
      updated = updated.replace(/\sdata-media-start="[^"]*"/, ` data-media-start="${mediaStart}"`);
    } else {
      updated = updated.replace(/\s(preload|muted|playsinline|src)=/, ` data-media-start="${mediaStart}" $1=`);
    }
  }

  return updated;
}

let chunkHtml = source.replace(
  /(data-composition-id="ace-magnates-promo"[^>]*data-duration=")20(")/,
  `$1${chunkDuration}$2`
);

chunkHtml = chunkHtml
  .replaceAll('src="assets/', 'src="../../assets/')
  .replaceAll('url("assets/', 'url("../../assets/')
  .replaceAll('src="Logo.png"', 'src="../../Logo.png"');

chunkHtml = chunkHtml.replace(
  /<(?:audio|video|img)\b[^>]*\bclass="[^"]*\bclip\b[^"]*"[^>]*>/g,
  (tag) => trimClip(tag)
);

chunkHtml = chunkHtml.replace(
  /const variables = window\.__hyperframes\?\.getVariables\?\.\(\) \|\| \{\};\s*const chunkStart = [\s\S]*?const chunkEnd = chunkStart \+ chunkDuration;/,
  `const chunkStart = ${chunkStart};\n      const chunkDuration = ${chunkDuration};\n      const chunkEnd = ${chunkEnd};`
);

const outputDir = path.join("renders", "chunk-sources");
await mkdir(outputDir, { recursive: true });
const outputFile = `render-chunk-${chunk}.html`;
await writeFile(path.join(outputDir, outputFile), chunkHtml);

console.log(`Wrote ${outputDir}/${outputFile} for ${chunkDuration * 60} frames (${chunkStart}s-${chunkEnd}s).`);
