<template>
  <div>
    <Row type="flex">
      <Col :span="16">
        <Descriptions :title="res.name" :column="1">
          <DescriptionsItem label="名称">{{res.name}}</DescriptionsItem>
          <DescriptionsItem label="编号">{{res.code}}</DescriptionsItem>
          <DescriptionsItem label="关联组件">{{res.related}}</DescriptionsItem>
          <DescriptionsItem label="维护人">{{res.owner}}</DescriptionsItem>
          <DescriptionsItem label="变更日志">{{res.changeLog}}</DescriptionsItem>
          <DescriptionsItem label="使用介绍">{{res.useDescribtion}}</DescriptionsItem>
        </Descriptions>

        <Tabs v-model:activeKey="activeKey">
          <TabPane v-for="(item,index) in res.configDescribtion" :key="index" :tab="item.name">
            <Descriptions :column="1">
              <DescriptionsItem v-for="(itemChild,indexChild) in item.config" :key="indexChild" :label="itemChild.name">
                {{itemChild.type}},{{itemChild.range}},{{itemChild.describe}}
              </DescriptionsItem>
            </Descriptions>
          </TabPane>
        </Tabs>
      </Col>
      <Col :span="8">
        <Image
          :width="280"
          :src="res.imgDesc"
        />
      </Col>
    </Row>

  </div>
</template>



<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Radio, Space, Descriptions,Image,Row,Col,Tabs } from 'ant-design-vue';

  export default defineComponent({
    props:{
      params:{
        type: Object
      }
    },
    components: {
      PageWrapper,
      RadioButton: Radio.Button,
      RadioGroup: Radio.Group,
      ASpace: Space,
      Descriptions: Descriptions,
      DescriptionsItem: Descriptions.Item,
      Image: Image,
      Row: Row,
      Col: Col,
      Tabs,
      TabPane: Tabs.TabPane,
    },
    setup(props) {
      let res = computed(()=>props.params)
      console.log(res)
      const activeKey = ref(0);

      return {  activeKey , res };
    },
  });
</script>
