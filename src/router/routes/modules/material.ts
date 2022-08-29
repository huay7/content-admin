import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const material: AppRouteModule = {
  path: '/material',
  name: 'Material',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 1,
    icon: 'ion:grid-outline',
    // title: t('routes.dashboard.dashboard'),
    title: '素材管理',
  },
  children: [
    // {
    //   path: 'analysis',
    //   name: 'Analysis',
    //   component: () => import('/@/views/dashboard/analysis/index.vue'),
    //   meta: {
    //     // affix: true,
    //     title: t('routes.dashboard.analysis'),
    //   },
    // },
    // {
    //   path: 'workbench',
    //   name: 'Workbench',
    //   component: () => import('/@/views/dashboard/workbench/index.vue'),
    //   meta: {
    //     title: t('routes.dashboard.workbench'),
    //   },
    // },
    // {
    //   path: 'components',
    //   name: 'components',
    //   component: () => import('/@/views/setting/index.vue'),
    //   meta: {
    //     title: t('routes.dashboard.components'),
    //   },
    // },
    // {
    //   path: 'pages',
    //   name: 'pages',
    //   component: () => import('/@/views/setting/page.vue'),
    //   meta: {
    //     title: t('routes.dashboard.pages'),
    //   },
    // },
    // {
    //   path: 'scene',
    //   name: 'scene',
    //   component: () => import('/@/views/setting/scene.vue'),
    //   meta: {
    //     title: t('routes.dashboard.scene'),
    //   },
    // },
  ],
};

export default material;
