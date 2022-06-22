<template>
  <BasicDrawer v-bind="$attrs" title="Drawer Title" width="50%"> 
    <editJson />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import editJson from './EditJson.vue';

  import { BasicDrawer } from '/@/components/Drawer';
  export default defineComponent({
    components: { BasicDrawer, editJson },
    setup() {
      return {};
    },
  });
</script>
