import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');
import { t } from '/@/hooks/web/useI18n';

const iframe: AppRouteModule = {
  path: '/frame',
  name: 'Frame',
  component: LAYOUT,
  redirect: '/frame/doc',
  meta: {
    orderNo: 1000,
    icon: 'ion:tv-outline',
    title: t('routes.demo.iframe.frame'),
  },

  children: [
    {
      path: 'doc',
      name: 'Doc',
      component: IFrame,
      meta: {
        frameSrc: 'http://11.198.222.69:3102/#/test2',
        title: t('routes.demo.iframe.doc'),
      },
    },
    {
      path: 'doc2',
      name: 'Doc2',
      component: IFrame,
      meta: {
        frameSrc: 'http://11.198.222.69:3102/#/test3',
        title: '组合概览',
      },
    },
    // {
    //   path: 'antv',
    //   name: 'Antv',
    //   component: IFrame,
    //   meta: {
    //     frameSrc: 'https://2x.antdv.com/docs/vue/introduce-cn/',
    //     title: t('routes.demo.iframe.antv'),
    //   },
    // },
    // {
    //   path: 'https://vvbin.cn/doc-next/',
    //   name: 'DocExternal',
    //   component: IFrame,
    //   meta: {
    //     title: t('routes.demo.iframe.docExternal'),
    //   },
    // },
  ],
};

export default iframe;
