// tab的list
export const ningyinPlace =  (appendSchemaByField, setFieldsValue, params) => {
  appendSchemaByField(
    {
     field: 'id',
     component: 'Input',
     label: '页面id',
     colProps: {
       span: 24,
     }
     },
     '',
   )
  setFieldsValue({title: params.value.id})
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
     field: 'shareTitle',
     component: 'Input',
     label: '微信分享标题',
     colProps: {
       span: 24,
     }
     },
     '',
   )
  setFieldsValue({title: params.value.share.title})
  appendSchemaByField(
    {
     field: 'shareDesc',
     component: 'Input',
     label: '微信分享描述',
     colProps: {
       span: 24,
     }
     },
     '',
   )
  setFieldsValue({title: params.value.share.desc})
  appendSchemaByField(
    {
     field: 'shareImgUrl',
     component: 'Input',
     label: '微信分享图片',
     colProps: {
       span: 24,
     }
     },
     '',
   )
  setFieldsValue({title: params.value.share.imgUrl})

  appendSchemaByField(
    {
     field: 'bannerlist',
     component: 'Input',
     label: '微信分享图片',
     colProps: {
       span: 24,
     }
     },
     '',
   )
  setFieldsValue({title: params.value.share.imgUrl})
}