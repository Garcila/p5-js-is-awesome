import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
// the line below was in defineConfig
// site: "https://astro-moon-landing.netlify.app/",

export default defineConfig({
  site: "https://p5js-is-awesome.netlify.app//",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
