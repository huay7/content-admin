<template>
  <PageWrapper contentFullHeight>
    <CollapseContainer title="设置配置" style="width: 48%;">
      <BasicForm
        autoFocusFirstItem
        :labelWidth="120"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        @submit="handleSubmit"
        @reset="handleReset"
      >
      <!-- 切换的时候可以把下面对应的配置项更换 -->
        <template #selectA="{ model, field }">
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
        </template>
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
        </template> -->
      </BasicForm>
    </CollapseContainer>
    <CollapseContainer title="预览效果" style="width: 50%;">
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
  import { computed, defineComponent, unref, ref } from 'vue';
  import { BasicForm, FormSchema, ApiSelect, FormProps, FormActionType } from '/@/components/Form/index';
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

  const schemas: FormSchema[] = [
    {
      field: 'field4',
      component: 'Select',
      label: '选择配置组件',
      colProps: {
        span: 24,
      },
      componentProps: {
        options: [
          {
            label: 'banner',
            value: '1',
            key: '1',
          },
          {
            label: 'table',
            value: '2',
            key: '2',
          },          
          {
            label: 'videos',
            value: '3',
            key: '3',
          },
        ],
      },
    },   
    {
      field: 'divider-basic',
      component: 'Divider',
      label: '基础配置',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'field9',
      component: 'Switch',
      label: '是否展示banner',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'youxianji',
      component: 'InputNumber',
      label: '优先级',
      required: true,
      colProps: {
        span: 24,
      },
    },
    {
      field: 'shuliang',
      component: 'InputNumber',
      label: 'banner数量',
      required: true,
      colProps: {
        span: 24,
      },
    },
    {
      field: 'gaodu',
      component: 'Input',
      label: 'banner高度',
      defaultValue: '90',
      colProps: {
        span: 24,
      },
      componentProps: {
        onChange: (e: any) => {
          console.log(e);
        },
      },
      suffix: 'px',
    }, 
    {
      field: 'sudu',
      component: 'Input',
      label: '轮播速度',
      defaultValue: '5',
      colProps: {
        span: 24,
      },
      componentProps: {
        onChange: (e: any) => {
          console.log(e);
        },
      },
      suffix: '秒',
    },

  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer,FramePage, PageWrapper, ApiSelect, ASelect: Select },
    setup() {
      // const { getFramePages, hasRenderFrame, showIframe } = useFrameKeepAlive();

      const frameSrc = ref<string>();
      frameSrc.value = 'http://172.20.10.2:8088/innersite/poster/#/main?id=017'
      const formElRef = ref<Nullable<FormActionType>>(null);
      const check = ref(null);
      const { createMessage } = useMessage();
      const keyword = ref<string>('');
      const searchParams = computed<Recordable>(() => {
        return { keyword: unref(keyword) };
      });
      function setProps(props: FormProps) {
          const formEl = formElRef.value;
          if (!formEl) return;
          formEl.setProps(props);
      }
      setProps({
        submitButtonOptions: {
          disabled: true,
          loading: true,
          text: '完成',
        },
      })
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
        schemas,
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
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
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
