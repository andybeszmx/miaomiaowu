import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
// 第一步：保留 Vue 基础规则（flat/essential）
  ...pluginVue.configs['flat/essential'],

  // 第二步：添加规则覆盖块（核心！禁用组件名多单词校验）
  {
    // 仅对 .vue 文件生效（精准匹配 Vue 组件）
    files: ['**/*.vue'],
    // 覆盖 Vue 插件的规则
    rules: {
      'vue/multi-word-component-names': 0, // 0 = off（禁用规则）
    },
  }
])
