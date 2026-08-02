// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Set this to your production domain so canonical/OG URLs are absolute.
  site: "https://qalbquest.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
