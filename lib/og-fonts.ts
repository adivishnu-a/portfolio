import { readFile } from "node:fs/promises";
import path from "node:path";

const fontDir = path.join(process.cwd(), "assets", "fonts");

/**
 * The two Archivo instances every share card uses, read from the repository
 * so builds never depend on the network. Static WOFF files from Google Fonts.
 */
export async function posterFonts() {
  const [bold, medium] = await Promise.all([
    readFile(path.join(fontDir, "archivo-800.woff")),
    readFile(path.join(fontDir, "archivo-500.woff")),
  ]);
  return [
    {
      name: "Archivo",
      data: toArrayBuffer(bold),
      weight: 800 as const,
      style: "normal" as const,
    },
    {
      name: "Archivo",
      data: toArrayBuffer(medium),
      weight: 500 as const,
      style: "normal" as const,
    },
  ];
}

function toArrayBuffer(buffer: Buffer): ArrayBuffer {
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  ) as ArrayBuffer;
}
