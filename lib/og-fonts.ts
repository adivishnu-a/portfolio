import { loadGoogleFont } from "./og";

/** The two Archivo instances every share card uses, loaded once per build. */
export async function posterFonts() {
  const [bold, medium] = await Promise.all([
    loadGoogleFont("Archivo", 800),
    loadGoogleFont("Archivo", 500),
  ]);
  return [
    {
      name: "Archivo",
      data: bold,
      weight: 800 as const,
      style: "normal" as const,
    },
    {
      name: "Archivo",
      data: medium,
      weight: 500 as const,
      style: "normal" as const,
    },
  ];
}
