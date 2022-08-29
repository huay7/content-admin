<template>
  <PageWrapper :class="prefixCls">
    <!-- <template #headerContent>
      基于Vue Next, TypeScript, Ant Design Vue实现的一套完整的企业级后台管理系统。
      <div :class="`${prefixCls}__link`">
        <a><Icon icon="bx:bx-paper-plane" color="#1890ff" /><span>开始</span></a>
        <a><Icon icon="carbon:warning" color="#1890ff" /><span>简介</span></a>
        <a><Icon icon="ion:document-text-outline" color="#1890ff" /><span>文档</span></a>
      </div>
    </template> -->

    <div :class="`${prefixCls}__content`">
      <a-list>
        <a-row :gutter="16">
          <template v-for="item in cardListData" :key="item.title">
            <a-col :span="6">
              <a-list-item>
                <a-card :hoverable="true" :class="`${prefixCls}__card`" @click="openDrawerLoading(item)" @contextmenu="handleContext">
                  <div :class="`${prefixCls}__card-title`">
                    <Icon class="icon" icon="ant-design:chrome-outlined" color="blue" />
                    <span v-if="item.title">{{ item.title }}</span>
                    <span v-if="item.mainTitle">{{ item.mainTitle }}</span>
                    
                  </div>
                  <div :class="`${prefixCls}__card-detail`">
                    业务场景：{{item.scene}}
                  </div>
                  <div :class="`${prefixCls}__card-detail`">
                    页面描述：{{item.describe}}
                  </div>
                </a-card>
              </a-list-item>
            </a-col>
          </template>
        </a-row>
      </a-list>
    </div>
  </PageWrapper>
  <Drawer1 @register="register1" />
</template>
<script lang="ts">
  import { defineComponent, computed, ref, toRefs, watch, reactive,onMounted,onBeforeMount } from 'vue';
  import Icon from '/@/components/Icon/index';
  // import { cardListData } from './data';
  import { PageWrapper } from '/@/components/Page';
  import { useDrawer } from '/@/components/Drawer';
  import { useContextMenu } from '/@/hooks/web/useContextMenu';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { Card, Row, Col, List } from 'ant-design-vue';
  import Drawer1 from '../Drawer1.vue';
  export default defineComponent({
    props:{
      cardListData:{
        type: Object
      }
    },
    components: {
      Icon,
      PageWrapper,
      [Card.name]: Card,
      [List.name]: List,
      [List.Item.name]: List.Item,
      [Row.name]: Row,
      [Col.name]: Col,
      Drawer1,
    },
    setup(props) {
        // 使用 `toRefs` 创建对 `props` 中的 `user` property 的响应式引用
        const { cardListData } = toRefs(props)

        // const repositories = ref([])
        const getUserRepositories = () => {
          // 更新 `prop.user` 到 `user.value` 访问引用值
          // console.log('children watched')
        }

        // onMounted(getUserRepositories)

        // 在 user prop 的响应式引用上设置一个侦听器
        watch(cardListData, getUserRepositories)





      // const { cardListData } = reactive(props)
      console.log('aaaaaa')
      console.log(cardListData)
      onBeforeMount(()=>{
          const { cardListData } = reactive(props)
          console.log('aaaaaa')
          console.log(cardListData)
      })
      const [register1, { openDrawer: openDrawer1, setDrawerProps }] = useDrawer();
            const [createContextMenu] = useContextMenu();
      const { createMessage } = useMessage();
      let res = reactive([{
                  title: 'test',
                  icon: 'ant-design:chrome-outlined',
                  color: 'red',
                  active: '100',
                  new: '1,799',
                  download: 'bx:bx-download',
                  scene: '陪伴场景',
                  describe: '每日周报' 
                }])
      console.log(res)
      function handleContext(e: MouseEvent) {
        createContextMenu({
          event: e,
          items: [
            {
              label: 'New',
              icon: 'bi:plus',
              handler: () => {
                createMessage.success('click new');
                // console.log('ssssssssssssssssss')
                // console.log(res)
                // getRes()
                // console.log(res)
                res.push({
                  title: 'test',
                  icon: 'ant-design:chrome-outlined',
                  color: 'red',
                  active: '100',
                  new: '1,799',
                  download: 'bx:bx-download',
                  scene: '陪伴场景',
                  describe: '每日周报' 
                })
                cardListData.push({
                  title: 'test',
                  icon: 'ant-design:chrome-outlined',
                  color: 'red',
                  active: '100',
                  new: '1,799',
                  download: 'bx:bx-download',
                  scene: '陪伴场景',
                  describe: '每日周报' 
                })
                console.log(cardListData)
                openDrawerLoading()
              },
            },
            {
              label: 'Open',
              icon: 'bx:bxs-folder-open',
              handler: () => {
                createMessage.success('click open');
              },
            },
          ],
        });
      }
      // watch(res, openDrawerLoading)
      // watch(res, (newValue, oldValue) => {
      //   console.log('The new counter value is: ' + res.value)
      // })

      function openDrawerLoading(item) {
        // 需要传参的写法
        openDrawer1(true, {
          name: 'editJson',
          param: item
        });

        // openDrawer1();
        // setDrawerProps({ loading: true });
        // setTimeout(() => {
        //   setDrawerProps({ loading: false });
        // }, 2000);
      }
      return {
        handleContext,
        prefixCls: 'list-card',
        list: res,
        register1,
        cardListData,
        res,
        openDrawerLoading,
      };
    },
  });
</script>
<style lang="less" scoped>
  .list-card {
    &__link {
      margin-top: 10px;
      font-size: 14px;

      a {
        margin-right: 30px;
      }

      span {
        margin-left: 5px;
      }
    }

    &__card {
      width: 100%;
      margin-bottom: -8px;

      .ant-card-body {
        padding: 16px;
      }

      &-title {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 500;
        color: @text-color;

        .icon {
          margin-top: -5px;
          margin-right: 10px;
          font-size: 38px !important;
        }
      }

      &-detail {
        padding-top: 10px;
        padding-left: 30px;
        font-size: 14px;
        color: @text-color-secondary;
      }
    }
  }
</style>
