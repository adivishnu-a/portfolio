import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Adi Avula",
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#1d2be0",
    icons: [
      {
        src: "/app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
