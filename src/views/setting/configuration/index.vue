<template>
  <PageWrapper contentFullHeight>
    <CollapseContainer title="设置配置" style="width: 48%;">
      <BasicForm @register="register" @submit="handleSubmit" />

      <!-- <BasicForm
        autoFocusFirstItem
        :labelWidth="120"
        :schemas="schemasNew"
        :actionColOptions="{ span: 24 }"
        @submit="handleSubmit"
        @reset="handleReset"
      > -->
      <!-- 切换的时候可以把下面对应的配置项更换 -->

        <!-- <template #selectA="{ model, field }">
          <a-select
            :options="optionsA"
            mode="multiple"
            v-model:value="model[field]"
            @change="valueSelectA = model[field]"
            allowClear
          />
        </template>
        <template #selectB="{ model, field }">
          <a-select
            :options="optionsB"
            mode="multiple"
            v-model:value="model[field]"
            @change="valueSelectB = model[field]"
            allowClear
          />
        </template> -->
        <!-- <template #localSearch="{ model, field }">
          <ApiSelect
            :api="optionsListApi"
            showSearch
            v-model:value="model[field]"
            optionFilterProp="label"
            resultField="list"
            labelField="name"
            valueField="id"
          />
        </template> -->
        <!-- <template #remoteSearch="{ model, field }">
          <ApiSelect
            :api="optionsListApi"
            showSearch
            v-model:value="model[field]"
            :filterOption="false"
            resultField="list"
            labelField="name"
            valueField="id"
            :params="searchParams"
            @search="onSearch"
          />
        </template>
      </BasicForm> -->
      {{params}}

    </CollapseContainer>
    <CollapseContainer title="预览效果" style="width: 50%;">
      <canvas id="qrcode"></canvas>
      <div v-if="frameSrc">
        <FramePage
          v-if="frameSrc"
          :frameSrc="frameSrc"
        />
      </div>
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent, unref, ref, toRefs,watch,reactive,onMounted } from 'vue';
  import { BasicForm, FormSchema, ApiSelect, FormProps, FormActionType,useForm,setProps, appendSchemaByField } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  // import html2canvas from 'html2canvas';
  // import { optionsListApi } from '/@/api/demo/select';
  import { useDebounceFn } from '@vueuse/core';
  // import { treeOptionsListApi } from '/@/api/demo/tree';
  import FramePage from './iframe/index.vue';
  // import { useFrameKeepAlive } from './useFrameKeepAlive';
  import { Select } from 'ant-design-vue';
  import { cloneDeep } from 'lodash-es';
  import qrcode from 'qrcode';
  import { updateParams } from '/@/api/sys/user';
  import { Base64 } from 'js-base64';

  const valueSelectA = ref<string[]>([]);
  const valueSelectB = ref<string[]>([]);
  const options = ref<Recordable[]>([]);
  for (let i = 1; i < 10; i++) options.value.push({ label: '选项' + i, value: `${i}` });

  const optionsA = computed(() => {
    return cloneDeep(unref(options)).map((op) => {
      op.disabled = unref(valueSelectB).indexOf(op.value) !== -1;
      return op;
    });
  });
  const optionsB = computed(() => {
    return cloneDeep(unref(options)).map((op) => {
      op.disabled = unref(valueSelectA).indexOf(op.value) !== -1;
      return op;
    });
  });



  export default defineComponent({
    props:{
      params:{
        type: Object
      }
    },
    
    components: { BasicForm, CollapseContainer,FramePage, PageWrapper, ApiSelect, ASelect: Select },
    setup(props) {
      // const { getFramePages, hasRenderFrame, showIframe } = useFrameKeepAlive();
        onMounted(() => {
          console.log('qrcode')
          console.log(qrcode)
        });

        const schemasNew = reactive([{
          field: 'sudu4444',
          component: 'Input',
          label: '轮播速度1',
          defaultValue: '3123123124132',
          colProps: {
            span: 24,
          },
          componentProps: {
            onChange: (e: any) => {
              console.log(e);
            },
          },
          suffix: '秒',
        }
        ])
      const [register, { setProps,updateSchema,appendSchemaByField,setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas:[ {
          field: 'sudu444422',
          component: 'Input',
          label: '轮播速度1',
          defaultValue: '3123123124132',
          show:false,
          colProps: {
            span: 24,
          },
          componentProps: {
            onChange: (e: any) => {
              console.log(e);
            },
          },
          suffix: '秒',
          }],
        actionColOptions: {
          span: 24,
        },
      });
      const { params } = toRefs(props)
      console.log('params')
      const getUserRepositories = () => {
        // 更新 `prop.user` 到 `user.value` 访问引用值
        console.log('children watched')
        schemasNew.push({
          field: 'id',
          component: 'Select',
          label: '页面id',
          defaultValue: 'sadas',
          colProps: {
            span: 24,
          }
        })
        console.log('updateSchema')
        console.log(updateSchema)
        
        appendSchemaByField(
         {
          field: 'id',
          component: 'Input',
          label: 'id',
          colProps: {
            span: 24,
          }
          },
          '',
        )
        setFieldsValue({id: params.value.id})
        appendSchemaByField(
         {
          field: 'title',
          component: 'Input',
          label: '页面标题',
          colProps: {
            span: 24,
          }
          },
          '',
        )
        setFieldsValue({title: params.value.title})
        appendSchemaByField(
         {
          field: 'sharetitle',
          component: 'Input',
          label: '分享标题',
          colProps: {
            span: 24,
          }
          },
          '',
        )
        setFieldsValue({sharetitle: params.value.share.title})
        appendSchemaByField(
         {
          field: 'sharedesc',
          component: 'Input',
          label: '分享描述',
          colProps: {
            span: 24,
          }
          },
          '',
        )
        setFieldsValue({sharedesc: params.value.share.desc})
        appendSchemaByField(
         {
          field: 'sharePic',
          component: 'Input',
          label: '分享图片',
          colProps: {
            span: 24,
          }
          },
          '',
        )
        setFieldsValue({sharePic: params.value.share.imgUrl})
        if(params.value.param[0].bannerList) {
        appendSchemaByField(
         {
          field: 'banner',
          component: 'Input',
          label: 'banner图片',
          colProps: {
            span: 24,
          }
          },
          '',
        )
        setFieldsValue({banner: params.value.param[0].bannerList[0].src})
        }
        // schemasNew.value.push()
        console.log(schemasNew)
          console.log('qrcode')
        console.log(params)
        console.log(params.value.id)
          const url = 'https://owa.maxwealthfund.com/innersite/poster/#/main?id='+params.value.id
          console.log(url)

          // new qrcode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
          let canvas = document.getElementById('qrcode')
          qrcode.toCanvas(canvas, url, function (error) {
            if (error) console.error(error)
            console.log('success!');
          })

      }


      watch(params, getUserRepositories)

      const frameSrc = ref<string>();
      frameSrc.value = 'https://www.npmjs.com/package/qrcodejs'
      // const formElRef = ref<Nullable<FormActionType>>(null);
      const check = ref(null);
      const { createMessage } = useMessage();
      const keyword = ref<string>('');
      const searchParams = computed<Recordable>(() => {
        return { keyword: unref(keyword) };
      });
      // function setProps(props: FormProps) {
      //     const formEl = formElRef.value;
      //     if (!formEl) return;
      //     formEl.setProps(props);
      // }
      // setProps({
      //   submitButtonOptions: {
      //     disabled: true,
      //     loading: true,
      //     text: '完成',
      //   },
      // })
      function onSearch(value: string) {
        keyword.value = value;
      }
      function saveImg() {
            document.documentElement.scrollTop?document.documentElement.scrollTop = 0:null;
            document.body.scrollTop?document.body.scrollTop = 0:null;
            // html2canvas(document.getElementById('toSave'),
            //     {
            //         width: this.imgWidth, //canvas宽度
            //         height: this.imgHeight,//canvas高度
            //         useCORS: true,
            //         allowTaint: true
            //     }).then(function(canvas) {
            //         console.log(canvas)
            //     //   alert(canvas)
            //     });
            // html2canvas(document.getElementById('toSave'),
            //     {
            //         width: this.imgWidth, //canvas宽度
            //         height: this.imgHeight,//canvas高度
            //         useCORS: true,
            //         allowTaint: true
            //     }).then(function(canvas) {
            //         let imgUrl = canvas.toDataURL('image/png');
            //         window.vueThis1.imgWaitingSave = imgUrl
            //         window.vueThis1.saveToLocal()
            //         if(!window.vueThis1.isToasted) {
            //             setTimeout(()=>Toast({message:'长按保存至本地',position: 'top'}),800)
            //             window.vueThis1.isToasted = true
            //         }
            //     });

            // Toast('保存成功')
      };
      return {
        schemasNew,
        // schemas,
        params,
        register,
        appendSchemaByField,
        // optionsListApi,
        optionsA,
        optionsB,
        valueSelectA,
        valueSelectB,
        onSearch: useDebounceFn(onSearch, 300),
        saveImg,
        searchParams,FramePage,
        handleReset: () => {
          keyword.value = '';
        },
        handleSubmit: (values: any) => {
          console.log('values', values);
          let params1 = params.value
          params1.param[0].bannerList[0].src = values.banner
          params1.title = values.title
          const stringRes = JSON.stringify(params1);
    // const base64Res = Base64.encode(stringRes);

    // console.log(stringRes)
    let base64Res = (Base64.encode(stringRes)).replace(/\//g, '?');
    base64Res = base64Res.replace(/\+/g, '!');
    // append(base64Res);
          const update = {
            id: '30',
            content: base64Res
          }
          console.log(update)
          updateParams(update)
          createMessage.success('click search,values:' + JSON.stringify(params1));

        },
        setProps,
        updateSchema,
        // setProps(props: FormProps) {
        //   const formEl = formElRef.value;
        //   if (!formEl) return;
        //   formEl.setProps(props);
        // },
        check,
        // hasRenderFrame,
        // showIframe,
        frameSrc,
      };
    },
  });
</script>
<style scoped lang="less">
/deep/ .vben-page-wrapper-content{
  display: flex !important;
  flex-flow: row !important;
  justify-content: space-between;
  overflow: hidden;
}
</style>
