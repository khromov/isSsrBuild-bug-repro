import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig(({ isSsrBuild, mode }) => {
  const config = {
    plugins: [sveltekit()],
  };

  console.log(`isSsrBuild ${isSsrBuild}`);

  return config;
});
