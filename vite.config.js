import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/academeaschool/",
  server:{
    host:true,
    port:3217,
    strictPort:true,
    open:true
  }
})
