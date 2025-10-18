import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
    ]),
  ],
});
