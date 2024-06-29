import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Assets directory
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Main entry point
        // chatList: resolve(__dirname, 'chatList.html'), // ChatList page
        chat: resolve(__dirname, 'chats.html'), // Chat page
        login: resolve(__dirname, 'login.html') // Login page
      },
    },
  },
  // publicDir: '/',
  // base: './', // Replace with your repository name
});