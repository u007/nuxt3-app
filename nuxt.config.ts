import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // server: {
  //   host: '0.0.0.0',
  //   port: 3800,
  // },
  build: {
    transpile: [
      // 'lodash-es'
    ],
  },
  modules: [
    'nuxt-windicss',
  ],
  css: [
    // windi preflight
    'virtual:windi-base.css',
    // your stylesheets which overrides the preflight
    '@/assets/main.css',
    // windi extras
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
  ],
  vite: {
    ssr: {
      noExternal: [
        'ant-design-vue', /vue-i18n/],
    },
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()],
      }),

      AutoImport({
        eslintrc: {
          enabled: true,
        },
        imports: [
            'vue',
            'vue-router',
            'vue-i18n',
            'vue/macros',
            // {
            //   '~/store/acl': ['useAclStore', 'UserSession'],
            //   '~/store/alert': ['useAlertStore'],
            //   '~/store/nav': ['useNavStore'],
            // },
          ],
          dirs: [
          ],
          dts: 'auto-imports.d.ts',
          vueTemplate: true,
      }),
    ],
  },
});
