<template>
  <ScrollContainer>
    <div ref="wrapperRef" :class="prefixCls">
      <Tabs tab-position="left" :tabBarStyle="tabBarStyle">
        <template v-for="(item,index) in res" :key="index">
          <TabPane>
            <template #tab>
              <div  @contextmenu="handleContext">
                {{item.name}}
              </div>
            </template>
            <cardList :cardListData="now[item.componentName]" />
            <!-- <component :is="item.component"/> -->
          </TabPane>
        </template>
      </Tabs>
    </div>
  </ScrollContainer>
</template>

<script lang="ts">
  import { defineComponent, onMounted,ref, reactive,watch } from 'vue';
  import { Tabs } from 'ant-design-vue';
  import { useContextMenu } from '/@/hooks/web/useContextMenu';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { cardListData } from './card/data';
  import { getParams } from '/@/api/sys/user';
  import { Base64 } from 'js-base64';

  import { ScrollContainer } from '/@/components/Container/index';
  import { componentList } from './data';
  import editJson from './EditJson.vue';
  import cardList from './card/index.vue';
  import describtion from './Describtion.vue';

  // import BaseSetting from './BaseSetting.vue';
  // import SecureSetting from './SecureSetting.vue';
  // import AccountBind from './AccountBind.vue';
  // import MsgNotify from './MsgNotify.vue';

  export default defineComponent({
    components: {
      ScrollContainer,
      Tabs,
      TabPane: Tabs.TabPane,
      editJson,
      cardList,
      describtion
      // BaseSetting,
      // SecureSetting,
      // AccountBind,
      // MsgNotify,
    },
    setup() {
      const [createContextMenu] = useContextMenu();
      const { createMessage } = useMessage();
      const res = ref(componentList)
      function base64Decode(text) {
          return Base64.decode(text);
      }

      function detailRes(data) {
           const res = data.map(e=>{
               const base64Res = e.content
               const stringContent = base64Decode(base64Res.replace(/\?/g, '/').replace(/!/g, '+'))
               let val ={};
               try {
                val = JSON.parse(stringContent)
               } catch(e) {
                val = {
                    id:-1
                }
               }
               return val
            })
            console.log(res)
            return res
          }
      const now =reactive({})
      async function getParams1() {
        const res = await getParams();
        console.log(res)
        const pagesList = detailRes(res.data)
        pagesList.forEach(element => {
          now[element.model]=[]
        });
        pagesList.forEach(element => {
          now[element.model].push(element)
        });
        console.log('now')
        console.log(now)
        const temp = []
        const filtered = now['undefined'].filter((e)=>{
          return e.id!=-1
        })
        filtered.forEach(e=>{
          Object.keys(e).forEach(echild=>{
            if(echild!='id') {
              temp.push(e[echild])
            }
          })
        })
        now['undefined'] = temp
        console.log(now)
        // console.log(now['posterlist'])
      }
      getParams1()
      watch(now,()=>{
        // console.log('watched')
      })
      function handleContext(e: MouseEvent) {
        createContextMenu({
          event: e,
          items: [
            {
              label: 'New',
              icon: 'bi:plus',
              handler: () => {
                createMessage.success('click new');
                res.value.push({
                  title: 'test',
                  icon: 'ant-design:chrome-outlined',
                  color: 'red',
                  active: '100',
                  new: '1,799',
                  download: 'bx:bx-download',
                  scene: '陪伴场景',
                  describe: '每日周报' 
                })
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
      return {
        handleContext,
        prefixCls: 'account-setting',
        cardListData,
        getParams,
        res,
        now,
        getParams1,
        tabBarStyle: {
          width: '220px',
        },
      };
    },
  });
</script>
<style lang="less">
  .account-setting {
    margin: 12px;
    background-color: @component-background;

    .base-title {
      padding-left: 0;
    }

    .ant-tabs-tab-active {
      background-color: @item-active-bg;
    }
  }
</style>
