import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 引入分析插件
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      open: true,       // 打包完成自动打开浏览器
      gzipSize: true,   // 显示gzip压缩后大小
      brotliSize: true // 显示brotli压缩后大小
    }),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      //配置element采用sass
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 2. 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
        `
      }
    }
  },
  build: {
    rollupOptions: {
      // 用 CDN 外链的包，写在这里
      external: [
        'vue',
        'axios',
        'element-plus',
        'vue-router',
        'pinia'
      ],

      // 告诉 Vite：这些外部包的全局变量名
      output: {
        globals: {
          vue: 'Vue',
          axios: 'axios',
          'element-plus': 'ElementPlus',
          'vue-router': 'VueRouter',
          pinia: 'Pinia'
        }
      }
    }
  }
})
