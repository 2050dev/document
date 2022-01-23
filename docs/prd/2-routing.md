# 所有页面路由索引

## 首页

1. https://2050.org.cn/

## 用户相关页面

### P0

1. 注册/登录 /login
1. 找回密码 /recover-password
1. 首次登录完善个人信息 /complete-profile
1. 我的自愿者档案 /my-profile
1. 更新个人信息 /edit-profile
1. {XX用户}的自愿者档案 /volunteer/{XX用户的PASSID的哈希}
1. 我的PASS /my-pass
1. 激活我的PASS /activate-my-pass
1. 管理所有用户 /admin/all-users
1. 管理员新增用户 /admin/new-user
1. 管理员编辑用户 /admin/edit-user
1. 管理员变更用户角色 /admin/edit-user-role

### P1

1. 我的日程 /my-schedule
1. 我上传的照片 /my-photos
1. 上传照片 /upload-photos/{上传对象活动的活动ID，默认为下一届大会}
1. 编辑照片描述 /edit-photo-info/{照片ID}
1. 我上传的视频 /my-videos
1. 上传视频 /upload-photos/{上传对象活动的活动ID，默认为下一届大会}
1. 编辑视频描述 /edit-video-info/{视频ID}
1. 我的投稿 /my-posts
1. 提交新的投稿 /upload-post
1. 删除投稿 /delete-post/{稿件ID}

### P2

1. 查看用户城市统计 /count-volunteer-cities

### P3

1. 查看用户interface统计 /count-volunteer-interface
1. 查看用户常规统计 /count-volunteer-general

## 蜂巢相关页面

### P0

1. 蜂巢首页 /hives
1. 意向首页 /proposals
1. 单独蜂巢页面 /hive/{蜂巢ID}
1. 单独意向页面 /hive/{蜂巢ID} （同上，路由上不做区分，用于确保一个意向升级为成熟蜂巢后不影响其原有URL）
1. 提交新的蜂巢意向 /new-proposal
1. 编辑蜂巢信息 /edit-hive/{蜂巢ID}
1. 编辑意向信息 /edit-hive/{蜂巢ID} （同上）
1. 审核蜂巢 /review-hive/{蜂巢ID}
1. 从蜂巢发起新的活动 /new-event
1. 管理所有蜂巢 /admin/all-hives
1. 管理员创建蜂巢 /admin/new-hive
1. 管理员编辑蜂巢列表排序 /admin/sorting-hives
1. 管理员编辑意向列表排序 /admin/sorting-proposals
1. 管理员编辑蜂巢首页自定义信息 /admin/edit-hive-announcement
1. 管理员编辑意向首页自定义信息 /admin/edit-proposal-announcement
1. 管理员查看蜂巢动态历史记录 /admin/hive-logs

## 十大容器相关页面

todo

## 其他系统

1. PASS系统（订单系统） https://getmypass.2050.org.cn