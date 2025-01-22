// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
var vite_config_default = defineConfig({
  plugins: [react()]
});
export {
  vite_config_default as default
};
