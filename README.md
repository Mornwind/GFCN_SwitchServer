# 「少女前线」跨服手册（散爆版）（前言）
 > By: [Mornwind](https://github.com/Mornwind)
 > 
 > Blog: [Mornwind’s Blog](https://blog.mornwind.cc)（博客教程中链接均改用 GitMirror 镜像，便于国内用户访问）
 > 
 > GitHub Repo: [Mornwind/GFCN_SwitchServer](https://github.com/Mornwind/GFCN_SwitchServer) 
 > 
 > QQ Group：
 > > 【霞之丘 · 少前跨服】:[`915089623`](https://jq.qq.com/?_wv=1027&k=5rnvPAT)（本群已于 2021/8/12 10:59 被封，损失惨重，故新群拆分成两个，分别运作）
 > > 
 > > 【霞之丘⟡少前跨服答疑】：[`907757876`](https://jq.qq.com/?_wv=1027&k=wdMRfleu)（仅跨服答疑，勿水无关话题）（请先填写[【少前跨服情况统计】](https://docs.qq.com/form/page/DREpKbGVaQWtRcGhI)收集表，便于管理员有针对性地答疑及后期通知）
 > > 
 > > 【霞之丘⟡闲聊群】：[`908042781`](https://jq.qq.com/?_wv=1027&k=Ph1teaIm)（仅闲聊，不答疑）

## 致谢

- **参考&协助**
  - 霞ヶ丘詩羽x / 浪速の白雪姬：[GitHub](https://gitee.com/KasumigaokaUtaha) / [Gitee](https://gitee.com/silvercrowsaki) / [Bilibili](https://space.bilibili.com/455501) / [NGA](https://bbs.nga.cn/thread.php?authorid=42650362)
    - B 站专栏：[少女前线 跨服 iOS安卓国服（cv3630717）](https://www.bilibili.com/read/cv3630717)
    - B 站专栏：[少前B服（散爆）iOS 跨服（cv3677605）](https://www.bilibili.com/read/cv3677605)（专栏文章已被 B 站删除）
  - LNarga / MoonNarga：[GitHub](https://github.com/MoonNarga)
    - GitHub：[Server_Switch_for_GirlsFrontline](https://github.com/MoonNarga/Server_Switch_for_GirlsFrontline)

---

## ⚠️ 注意事项 ⚠️

1. 本项目内所提到的所有客户端与服务器，均为**国服**。
2. 跨服脚本代码**公开透明**地存放于本项目中，欢迎随时进行检查。跨服脚本中**并未含有**用于修改游戏内数据以获得不正当收益的作弊内容，只是用来切换登录服务器。但从原则上来说还是属于违反用户协议的行为，会不会被封号要看官方的心情。如若不放心，还请另寻他法（但是跨服的原理都是一样的，要真查起来都跑不掉）。
3. **无法进行跨服充值，否则 1000% 会错充进客户端对应的原服务器，切记！**
4. 自2022年9月29日例行维护后，“指挥官可使用安卓官网版本登录iOS 0服，也可使用iOS版本登录安卓官网 0服，请有需要的指挥官通过服务器列表切换对应服务器登录。”（摘自官网“[少女前线9月29日例行维护公告](https://gf-cn.sunborngame.com/NewsInfo?id=6549)”）
5. iOS 端跨渠道混服由于人数过少，无法保证跨服配置对所有渠道服有效，有问题请及时反馈。

---

## 📖 跨服手册 📖

 > 注1：代号中的“X2Y”可理解为“将X客户端上的登录X服切换为登录Y服”，简记为“在X端登录Y服”。
 >
 > 注2：自2022年9月29日例行维护后，“指挥官可使用安卓官网版本登录iOS 0服，也可使用iOS版本登录安卓官网 0服，请有需要的指挥官通过服务器列表切换对应服务器登录。”（摘自官网“[少女前线9月29日例行维护公告](https://gf-cn.sunborngame.com/NewsInfo?id=6549)”）

| 代号 | 客户端 | 账号服务器 | 有效性 | 传送门 |
| :-: | :-: | :-: | :-: | :-: |
| iOS2GW | iOS 端 | 安卓官服 | ❌游戏内已自带 | [文字教程（已弃用，仅作留念）](/README_iOS2GW.md) |
| iOS2Bili | iOS 端 | Bilibili 服 | ✅可用 | [文字教程](/README_iOS2Bili.md) |
| iOS2TX | iOS 端 | 应用宝服 | ✅可用 | [文字教程](/README_iOS2TX.md) |
| iOS2HF | iOS 端 | 渠道混服 | ✅可用 | [文字教程](/README_iOS2HF.md) |
| Adr2iOS | 安卓端 | iOS 官服 | ❌游戏内已自带 | [文字教程（已弃用，仅作留念）](/README_Adr2iOS.md) |
| AdrEmu2iOS | 安卓模拟器 | iOS 官服 | ❌游戏内已自带 | [文字教程（已弃用，仅作留念）](/README_AdrEmu2iOS.md) |

---

## 附录1：游戏及网络工具下载链接

- **游戏本体**
  - 少女前线（iOS 官服）：<https://apps.apple.com/app/id1117273600>
  - 少女前线（安卓官服 - 官网）：<https://gf-cn.sunborngame.com/>
  - 少女前线（安卓官服 - TapTap）：<https://www.taptap.com/app/10505>
  - 少女前线（Bilibili 服）：<https://www.biligame.com/detail/?id=73>
  - 少女前线（应用宝服）：<https://sj.qq.com/myapp/detail.htm?apkName=com.tencent.tmgp.girlsfrontline>

- **【安卓端】网络调试工具**
  - HttpCanary (Premium)：<https://play.google.com/store/apps/details?id=com.guoshi.httpcanary.premium>（注：开发者已主动下架此应用的基础版及高级版，只能通过其他途径获取）
  - Hosts Go：<https://play.google.com/store/apps/details?id=dns.hosts.server.change>
  
- **【iOS 端】网络调试工具**
  - HTTP Catcher：<https://apps.apple.com/app/id1445874902>
  - Thor：<https://apps.apple.com/app/id1210562295>
  - Shadowrocket：<https://apps.apple.com/app/id932747118>
  - Quantumult X：<https://apps.apple.com/app/id1443988620>
  - Surge 4：<https://apps.apple.com/app/id1442620678>
  - Loon：<https://apps.apple.com/app/id1373567447>

## 附录2：「少女前线」国服客户端登录参数
 > 以下为分别连接不同的国服服务器时，有效的客户端登录参数。

### 官服

| 服务器 \ 参数 | URL / Host | Request Body<br/>`channel` | Request Body<br/>`device` | Request Body<br/>`platformChannelId` |
| :-: | :-: | :-: | :-: | :-: |
| 安卓官服 | ⋯`.gw.`⋯ | `cn_mica` | `adr` | `GWGW`<br/>`TapTap` |
| iOS 官服 | ⋯`.ios.`⋯ | `cn_appstore` | `ios` | `ios` |

### 渠道服

| 服务器 \ 参数 | URL / Host | Request Body<br/>`channel` | Request Body<br/>`device` | Request Body<br/>`platformChannelId` |
| :-: | :-: | :-: | :-: | :-: |
| Bilibili 服 | ⋯`.bili.`⋯ | `cn_bili` | `adr` | `Bili` |
| 应用宝服 | ⋯`.tx.`⋯ | `cn_txy` | `adr` | `TX` |
| 渠道混服 | ⋯`.ly.`⋯ | `cn_third` | `adr` | `GWHF` |

## 附录3：iOS 端常见跨服方式

在 iOS 端上，常见的游戏跨服方式主要可分为以下三大类六小类：

| 类型 | 方式 | 优点 | 缺点 |
| :-: | :-: | :-: | :-: |
| A-1 | 通过**使用网络调试工具**，<br/>**在本地重写客户端请求**，<br/>**直接**实现跨服 | 本地修改无需依赖他人<br/>基本不受游戏版本更新影响 | 需要会亿点操作<br/>部分工具价格较高<br/>部分工具在国区无法下载 |
| A-2 | 通过**使用他人提供的代理服务器**，<br/>**在远端重写客户端请求**，<br/>**直接**实现跨服 | 操作较少 | 依赖代理服务器的稳定性<br/>安全性无法保证 |
| B-1 | 通过**对游戏客户端修改后重新打包**，<br/>**由他人统一签名后在线下载安装**，<br/>**直接**实现跨服 | 几乎无需操作 | 签名所需证书费较贵<br/>更新后需等待新跨服包发布 |
| B-2 | 通过**对游戏客户端修改后重新打包**，<br/>**自行签名然后越狱安装或侧载**，<br/>**直接**实现跨服 | 无需花钱 | 需要会亿点操作<br/>越狱影响系统安全性<br/>每 7 天需重新签名<br/>更新后需等待新跨服包发布 |
| C-1 | 通过**使用云游戏平台**，<br/>**将游戏画面实时传输至移动设备**，<br/>**间接**实现跨服 | 操作较少<br/>能跨部分渠道服 | 可选渠道服受制于云平台<br/>严重依赖网络质量<br/>安全性无法保证<br/>非会员每日游戏时长受限<br/>非会员每次进入需排队等候 |
| C-2 | 通过**使用云主机**，<br/>**将游戏画面实时传输至移动设备**，<br/>**间接**实现跨服 | 能跨渠道服 | 需要会亿点操作<br/>云主机普遍价格很高<br/>严重依赖网络质量 |
