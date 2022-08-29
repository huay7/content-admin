import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {

    path: '/test',
    name: 'test',
    component: () => import('/@/views/sys/about/index.vue'),
    meta: {
      title: t('routes.dashboard.about'),
      icon: 'simple-icons:about-dot-me',
      hideMenu: true,
    },
};

export default dashboard;
