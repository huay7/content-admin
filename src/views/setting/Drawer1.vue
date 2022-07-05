<template>
  <BasicDrawer v-bind="$attrs" title="Drawer Title" width="50%"  @register="register"> 
    <a-button type="primary"  @click="changetab('configuration')" class="buttonsty"> 表格设置 </a-button>
    <a-button type="primary" @click="changetab('editJson')"> 代码设置 </a-button>
    <!-- <editJson /> -->
    <component :is="componentName" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
import { defineComponent, ref } from 'vue';
  import editJson from './EditJson.vue';
  import configuration from './configuration/index.vue'
  export default defineComponent({
    components: { BasicDrawer, editJson, configuration },
    setup() {
      const componentName = ref();
      const [register] = useDrawerInner((data) => {
        // 方式1
        componentName.value = data.name
      });
      const changetab = (val) => {
        console.log(val)
        componentName.value  =  val
      }
      return {
        register,
        changetab,
        componentName
      };
    },
  });
</script>
<style>
  .buttonsty{
    margin-right: 10px;
  }
</style>
