import { FormSchema } from '/@/components/Form/index';

export interface ListItem {
  key: string;
  title: string;
  description: string;
  extra?: string;
  avatar?: string;
  color?: string;
}
export const componentList = [{
  'com':'describtion',
  'name': '产品列表',
  'code': '220708001001',
  'componentName':'undefined',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
},{
  'com':'describtion',
  'name': '海报列表',
  'code': '220708001001',
  'componentName':'posterlist',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
},{
  'com':'describtion',
  'name': '海报列表(无按钮版本)',
  'componentName':'posterlistnobutton',
  'code': '220708001001',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
},{
  'com':'describtion',
  'name': '视频列表',
  'code': '220708001001',
  'componentName':'videolist',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
},{
  'com':'describtion',
  'name': '通用列表',
  'code': '220708001001',
  'componentName':'commonlist',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
},{
  'com':'describtion',
  'name': '图片单页',
  'code': '220708001001',
  'componentName':'pictureview',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
},{
  'com':'describtion',
  'name': '喜报',
  'code': '220708001001',
  'componentName':'celebrateposter',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
},{
  'com':'describtion',
  'name': '宁银专区',
  'code': '220708001001',
  'componentName':'ningyinPlace',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
},{
  'com':'describtion',
  'name': '定投合集',
  'code': '220708001001',
  'componentName':'autoivestlist',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
},{
  'com':'describtion',
  'name': '股债观点',
  'code': '220708001001',
  'componentName':'guzhaipoint',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
},{
  'com':'describtion',
  'name': '产品资料',
  'code': '220708001001',
  'componentName':'guzhaipoint',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
},{
  'com':'describtion',
  'name': '定期材料',
  'code': '220708001001',
  'componentName':'pdflist',
  'related': [],
  'owner':['华烨'],
  'changeLog':['20220708:初始功能'],
  'useDescribtion':'根据定投合集产生的模板，主要格式由上至下分别为头部banner，中间可切换tab的图片和长图海报，底部为自定义列表',
  'imgDesc':'src/assets/images/IMG_5725.PNG',
  'configDescribtion':[
    {
      name:'基础配置',
      config:[
        {
          name:'页面编号',
          nameE:'id',
          type:'输入框',
          range:'000-100',
          describe:'生成页面的唯一标识'
        },
        {
          name:'页面标题',
          nameE:'title',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的标题'
        },
        {
          name:'微信分享标题',
          nameE:'shareTitle',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享标题'
        },
        {
          name:'微信分享描述',
          nameE:'shareDesc',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的微信分享描述'
        },
        {
          name:'微信分享图',
          nameE:'shareImgUrl',
          type:'输入框',
          range:'图片链接',
          describe:'生成页面的微信分享图'
        },
        {
          name:'是否需要密码',
          nameE:'isPwd',
          type:'单选框',
          range:'true,false',
          describe:'生成页面是否需要密码才能正常使用'
        },
        {
          name:'密码值',
          nameE:'Pwd',
          type:'输入框',
          range:'任意字符集合',
          describe:'生成页面的访问密码'
        },
      ]
    },
    {
      name:'海报配置',
      config:[
        {
          name:'海报图片',
          nameE:'url',
          type:'输入框',
          range:'图片链接',
          describe:'海报图片'
        },
        {
          name:'海报文案',
          nameE:'text',
          type:'输入框',
          range:'文案字符串',
          describe:'海报文案'
        },
      ]
    },
  ]
}]
// tab的list
export const settingList = [
  {
    key: '1',
    name: '定投合集',
    component: 'describtion',
  },
  {
    key: '2',
    name: '股债观点',
    component: 'cardList',
  },
  {
    key: '3',
    name: '产品资料',
    component: 'editJson',
  },
  {
    key: '4',
    name: '定期材料',
    component: 'editJson',
  },
  {
    key: '5',
    name: '专户月报',
    component: 'editJson',
  },
  {
    key: '6',
    name: '海报列表',
    component: 'editJson',
  },
  {
    key: '7',
    name: '海报列表(无按钮版本)',
    component: 'editJson',
  },
  {
    key: '8',
    name: '通用列表',
    component: 'editJson',
  },
  {
    key: '9',
    name: '喜报',
    component: 'editJson',
  },
  {
    key: '10',
    name: '视频列表',
    component: 'editJson',
  },
  {
    key: '11',
    name: '图片单页',
    component: 'editJson',
  },
  {
    key: '12',
    name: '宁银专区',
    component: 'editJson',
  },
];

// 基础设置 form
export const baseSetschemas: FormSchema[] = [
  {
    field: 'email',
    component: 'Input',
    label: '邮箱',
    colProps: { span: 18 },
  },
  {
    field: 'name',
    component: 'Input',
    label: '昵称',
    colProps: { span: 18 },
  },
  {
    field: 'introduction',
    component: 'InputTextArea',
    label: '个人简介',
    colProps: { span: 18 },
  },
  {
    field: 'phone',
    component: 'Input',
    label: '联系电话',
    colProps: { span: 18 },
  },
  {
    field: 'address',
    component: 'Input',
    label: '所在地区',
    colProps: { span: 18 },
  },
];

// 安全设置 list
export const secureSettingList: ListItem[] = [
  {
    key: '1',
    title: '账户密码',
    description: '当前密码强度：：强',
    extra: '修改',
  },
  {
    key: '2',
    title: '密保手机',
    description: '已绑定手机：：138****8293',
    extra: '修改',
  },
  {
    key: '3',
    title: '密保问题',
    description: '未设置密保问题，密保问题可有效保护账户安全',
    extra: '修改',
  },
  {
    key: '4',
    title: '备用邮箱',
    description: '已绑定邮箱：：ant***sign.com',
    extra: '修改',
  },
  {
    key: '5',
    title: 'MFA 设备',
    description: '未绑定 MFA 设备，绑定后，可以进行二次确认',
    extra: '修改',
  },
];

// 账号绑定 list
export const accountBindList: ListItem[] = [
  {
    key: '1',
    title: '绑定淘宝',
    description: '当前未绑定淘宝账号',
    extra: '绑定',
    avatar: 'ri:taobao-fill',
    color: '#ff4000',
  },
  {
    key: '2',
    title: '绑定支付宝',
    description: '当前未绑定支付宝账号',
    extra: '绑定',
    avatar: 'fa-brands:alipay',
    color: '#2eabff',
  },
  {
    key: '3',
    title: '绑定钉钉',
    description: '当前未绑定钉钉账号',
    extra: '绑定',
    avatar: 'ri:dingding-fill',
    color: '#2eabff',
  },
];

// 新消息通知 list
export const msgNotifyList: ListItem[] = [
  {
    key: '1',
    title: '账户密码',
    description: '其他用户的消息将以站内信的形式通知',
  },
  {
    key: '2',
    title: '系统消息',
    description: '系统消息将以站内信的形式通知',
  },
  {
    key: '3',
    title: '待办任务',
    description: '待办任务将以站内信的形式通知',
  },
];
