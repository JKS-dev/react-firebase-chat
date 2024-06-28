import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Assets directory
    rollupOptions: {
      input: {
        main:'./src/main.jsx',
        chatList: './src/pages/chatList/chatList.jsx',
        chat: './src/pages/chats/chats.jsx',
        Login: './src/pages/login/Login.jsx'
      },
    },
  },
  publicDir: 'public',
  // base: './', // Replace with your repository name
});