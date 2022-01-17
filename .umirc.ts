import { defineConfig } from 'umi';
import routes from './src/routes';

const serverUrlRoot = 'http://175.24.172.16:2000';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  proxy: {
    '/service': {
      target: serverUrlRoot,
      changeOrigin: true,
      pathRewrite: { '^/service': '' },
    },
  },
});
