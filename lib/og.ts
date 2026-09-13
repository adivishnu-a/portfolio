const cache = new Map<string, Promise<ArrayBuffer>>();

/**
 * Fetches a static TTF instance of a Google Font for next/og.
 * The legacy user agent makes the CSS API serve TTF instead of WOFF2,
 * which is what Satori can parse.
 */
export function loadGoogleFont(
  family: string,
  weight: number,
): Promise<ArrayBuffer> {
  const key = `${family}:${weight}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const promise = (async () => {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0",
        },
      },
    ).then((response) => response.text());

    const match = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype|woff)'\)/,
    );
    if (!match) throw new Error(`No TTF source found for ${key}`);
    return fetch(match[1]).then((response) => response.arrayBuffer());
  })();

  cache.set(key, promise);
  return promise;
}

export const ogColors = {
  blue: "#1d2be0",
  paper: "#ffffff",
  ink: "#0b0b0c",
} as const;
