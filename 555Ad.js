/**********************************************

> 应用名称：墨鱼自用555去广告脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-07-07
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 脚本说明：去除首页轮播图广告、首页信息流广告、我的页面推广


[rewrite_local]

^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+){1,3}(:\d+)?\/api\/v\d\/movie\/index_recommend url script-response-body https://github.com/Jasonaax/Scripts/raw/main/555Ad.js
^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+){1,3}(:\d+)?\/api\/v\d\/advert url reject

[mitm]

hostname = run.api.qyfxgd.cn, a.weilai555.com, a.ecoliving168.com

**********************************************/