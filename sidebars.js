module.exports = {
  docs: [
    'introduction/getting-started',
    'prd/overview',
    'prd/review',
    'prd/routing',
    {
      type: 'category',
      label: '用户',
      link: {
        type: 'generated-index',
      },
      items: [{
        type: 'autogenerated',
        dirName: 'prd/user',
      }],
    },
    {
      type: 'category',
      label: '蜂巢',
      link: {
        type: 'generated-index',
      },
      items: [{
        type: 'autogenerated',
        dirName: 'prd/hive',
      }],
    },
    {
      type: 'category',
      label: '活动（十大容器）',
      link: {
        type: 'generated-index',
      },
      items: [{
        type: 'autogenerated',
        dirName: 'prd/containers',
      }],
    },
    'prd/frontpage',
  ], 
};
