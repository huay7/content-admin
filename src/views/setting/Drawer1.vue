<template>
  <BasicDrawer v-bind="$attrs" title="配置" width="50%"  @register="register"> 
    <configuration :params="param"></configuration>
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
      const param = ref()
      const [register] = useDrawerInner((data) => {
        // 方式1
        console.log(data)
        componentName.value = data.name
        param.value = data.param
      });
      const changetab = (val) => {
        console.log(val)
        componentName.value  =  val
      }
      changetab('configuration')
      return {
        register,
        changetab,
        componentName,
        param
      };
    },
  });
</script>
<style>
  .buttonsty{
    margin-right: 10px;
  }
</style>
