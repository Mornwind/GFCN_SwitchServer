# 「少女前线」跨服手册（散爆版）（iOS 端 → 安卓官服）
 > By: [Mornwind](https://github.com/Mornwind)
 > 
 > GitHub Link: [Mornwind/GFCN_SwitchServer](https://github.com/Mornwind/GFCN_SwitchServer) 

## 致谢
- **参考&协助**
  - 霞ヶ丘詩羽x：[B站专栏（cv3630717）](https://www.bilibili.com/read/cv3630717)

---

## ⚠️ 注意事项 ⚠️
1. 本项目内所提到的所有客户端与服务器，均为**国服**。
2. 目前本人尚未研究渠道服的跨服，故本项目暂时只支持官服跨服。日后若有时间研究且能写得出来，会尽量加进本项目。
3. 跨服脚本中**并未含有**用于修改游戏内数据以获得不正当收益的作弊内容，只是用来切换服务器，故理论上不会被封号。跨服脚本代码**公开透明**地存放于本项目中，欢迎随时进行检查。如若不放心，还请另寻他法。
4. **不可跨服充值，否则会充错服，切记。**

---

## iOS 端常见跨服方式
在 iOS 端上，常见的游戏跨服方式主要可分为以下三大类六小类：

| 类型 | 方式 | 优点 | 缺点 |
| :-: | :-: | :-: | :-: |
| [A-1](#a-1-类型) | 通过**使用网络调试工具**，<br/>**在本地重写客户端请求**，<br/>**直接**实现跨服 | 本地修改无需依赖他人<br/>基本不受游戏版本更新影响 | 需要会亿点操作<br/>部分工具价格较高<br/>部分工具在国区无法下载 |
| [A-2](#a-2-类型) | 通过**使用他人提供的代理服务器**，<br/>**在远端重写客户端请求**，<br/>**直接**实现跨服 | 操作较少 | 依赖代理服务器的稳定性<br/>安全性无法保证 |
| [B-1](#b-类型未提供) | 通过**对游戏客户端修改后重新打包**，<br/>**由他人统一签名后在线下载安装**，<br/>**直接**实现跨服 | 几乎无需操作 | 签名所需证书费较贵<br/>更新后需等待新跨服包发布 |
| [B-2](#b-类型未提供) | 通过**对游戏客户端修改后重新打包**，<br/>**自行签名然后越狱安装或侧载**，<br/>**直接**实现跨服 | 无需花钱 | 需要会亿点操作<br/>越狱影响系统安全性<br/>每 7 天需重新签名<br/>更新后需等待新跨服包发布 |
| [C-1](#c-1-类型) | 通过**使用云游戏平台**，<br/>**将游戏画面实时传输至移动设备**，<br/>**间接**实现跨服 | 操作较少<br/>能跨部分渠道服 | 可选渠道服受制于云平台<br/>严重依赖网络质量<br/>安全性无法保证<br/>非会员每日游戏时长受限<br/>非会员每次进入需排队等候 |
| [C-2](#c-2-类型) | 通过**使用云主机**，<br/>**将游戏画面实时传输至移动设备**，<br/>**间接**实现跨服 | 能跨渠道服 | 需要会亿点操作<br/>云主机普遍价格很高<br/>严重依赖网络质量 |

### A-1 类型
 > A-1：通过**使用网络调试工具**，**在本地重写客户端请求**，**直接**实现跨服。

| 图标 | 跨服工具 | 别名 | 跨服教程与配置 |
| :-: | :-: | :-: | :-: |
| ![](/Icon/HTTP_Catcher_Icon.png) | HTTP Catcher | 网球 | [文字教程](#-http-catcher) |
| ![](/Icon/iHTTP_Tracker_Icon.png) | iHTTP Tracker | 猫头鹰 | [文字教程](#-ihttp-tracker) |
| ![](/Icon/Thor_Icon.png) | Thor | 锤子 | [文字教程](#-thor) |
| ![](/Icon/Quantumult_X_Icon.png) | Quantumult X | 圈叉 | [文字教程](#-quantumult-x) |
| ![](/Icon/Surge_4_Icon.png) | Surge 4 | - | [文字教程](#-surge-4) |
| ![](/Icon/Loon_Icon.png) | Loon | 气球 | 参考 Surge 4 |

| 跨服工具 | 国区商店<br/>购买与下载 | 正规渠道价格 | 跨服操作<br/>方便程度 | 设备上同时<br/>挂梯与跨服 | 备注 |
| :-: | :-: | :-: | :-: | :-: | :-: |
| HTTP Catcher<br/>（网球） | ✅ | ¥28.00（内购）<br/>\$3.99（内购） | ★★★★ | ❌ | 3.0 版正在开发中 |
| iHTTP Tracker<br/>（猫头鹰） | ✅ | ¥12.00<br/>\$1.99 | ★★★★ | ❌ | 有 Bug 尚未解决，暂不可用 |
| Thor<br/>（锤子） | ✅ | ¥88.00<br/>\$12.99 | ★★★★ | ❌ |  |
| Quantumult X<br/>（圈叉） | ❌ | \$7.99 | ★★ | ✅ | TF 名额已满 |
| Surge 4 | ❌ | \$49.99（首次内购）<br/>+ \$14.99/y（订阅） | ★★ | ✅ |  |
| Loon<br/>（气球） | ❌ | \$2.99 | ★★ | ✅ | Bug 较多 |

 > 注：
 > 
 > 世界蛇⟡崩3少前跨服 - QQ 群：[`915089623`](https://jq.qq.com/?_wv=1027&k=5rnvPAT)

#### ⑴ HTTP Catcher
```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.hcc
```

#### ⑵ iHTTP Tracker
 > 有 Bug 尚未解决，暂不可用。

```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.cs5
```

#### ⑶ Thor
```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.f4thor
```

#### ⑷ Quantumult X
##### ① 本地脚本（商店版、TF 版均可用）
```
[rewrite_local]
# 少女前线 跨服
^http:\/\/gfcn-transit\.ios\.sunborngame\.com\/index\.php url script-request-body gfcn_switchserver_gw.js
```

##### ② 远程脚本（仅 TF 版可用）
```
[rewrite_local]
# 少女前线 跨服
^http:\/\/gfcn-transit\.ios\.sunborngame\.com\/index\.php url script-request-body https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.js
```

#### ⑸ Surge 4
##### ① 订阅模块化配置
```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.sgmodule
```

##### ② 手动编辑配置
```
[Script]
# 少女前线 跨服
gfcn_switchserver_gw = type=http-request,pattern=^http:\/\/gfcn-transit\.ios\.sunborngame\.com\/index\.php,script-path=https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.js,requires-body=1
```

#### ⑹ Loon
 > 参考[方法 ⑸ Surge 4](#-surge-4)，此处略去。

### A-2 类型
 > A-2：通过**使用他人提供的代理服务器**，**在远端重写客户端请求**，**直接**实现跨服。

待补充。

### B 类型（未提供）
 > B-1：通过**对游戏客户端修改后重新打包**，**由他人统一签名后在线下载安装**，**直接**实现跨服。
 > 
 > B-2：通过**对游戏客户端修改后重新打包**，**自行签名然后越狱安装或侧载**，**直接**实现跨服。

尚不提供此方式为「少女前线」进行跨服，因为修改客户端容易被封号。

### C-1 类型
 > C-1：通过**使用云游戏平台**，**将游戏画面实时传输至移动设备**，**间接**实现跨服。

| 图标 | 跨服工具 | 别名 | 跨服教程 | 跨服配置 |
| :-: | :-: | :-: | :-: | :-: |
| - | 网易云游戏 | - | 见网易云游戏官网 | 见网易云游戏官网 |

| 跨服工具 | 国区商店<br/>购买与下载 | 正规渠道价格 | 跨服操作<br/>方便程度 | 设备上同时<br/>挂梯与跨服 | 备注 |
| :-: | :-: | :-: | :-: | :-: | :-: |
| 网易云游戏 | - | ¥15.9/月<br/>¥70/季<br/>¥240/年 | ★★★★★ | ✅ | 部分渠道服平台上没有 |

 > 注：
 > 
 > 网易云游戏 - 官网：<https://cg.163.com>

### C-2 类型
 > C-2：通过**使用云主机**，**将游戏画面实时传输至移动设备**，**间接**实现跨服。

此方法需自行摸索。

---

## 附录1：App Store 链接
- **游戏本体**
  - 少女前线：<https://apps.apple.com/app/id1117273600>

- **网络调试工具（仅抓包）**
  - HTTP Catcher：<https://apps.apple.com/app/id1445874902>
  - iHTTP Tracker：<https://apps.apple.com/app/id1463315864>
  - Thor：<https://apps.apple.com/app/id1210562295>
- **网络调试工具（抓包、代理）**
  - Quantumult X：<https://apps.apple.com/app/id1443988620>
  - Surge 4：<https://apps.apple.com/app/id1442620678>
  - Loon：<https://apps.apple.com/app/id1373567447>
