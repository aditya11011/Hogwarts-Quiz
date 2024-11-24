
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Hogwarts-Quiz/', // Replace <REPO-NAME> with your GitHub repository name
});