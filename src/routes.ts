type Route = {
  path?: string;
  component?: string | (() => any);
  wrappers?: string[];
  redirect?: string;
  exact?: boolean;
  routes?: Route[];
  title?: string;
  name?: string;
  key?: string;
}
const WEB_NAME = '二手交易商城';

const routes: Route[] = [
  {
    title: `${WEB_NAME}-登录`,
    name: '登录',
    path: '/login',
    component: '@/components/Login/index'
  },
  {
    title: `${WEB_NAME}-注册`,
    name: '注册',
    path: '/register',
    component: '@/components/Register/index'
  },
  {
    title: `${WEB_NAME}-首页`,
    name: '首页',
    path: '/',
    component: '@/layout/index.tsx',
    routes: [
      {
        title: `${WEB_NAME}-home`,
        name: 'home',
        path: '/home',
        component: '@/components/Home/index.tsx',
      },
      {
        title: `${WEB_NAME}-交易大厅`,
        name: '交易大厅',
        path: '/trade',
        component: '@/components/Trade/index.tsx',
      },
      {
        title: `${WEB_NAME}-商品详情`,
        name: '商品详情',
        path: '/detail',
        component: '@/components/Detail/index.tsx',
      },
    ]
  },
]

export default routes;
