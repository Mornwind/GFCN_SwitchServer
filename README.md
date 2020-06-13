# 「少女前线」跨服手册（散爆版）（iOS 端 → 安卓官服）
 > By: [Mornwind](https://github.com/Mornwind)
 > 
 > GitHub Link: [Mornwind/GFCN_SwitchServer](https://github.com/Mornwind/GFCN_SwitchServer) 

## 致谢
- **参考&协助**
  - [霞ヶ丘詩羽x](https://space.bilibili.com/455501)：[B站专栏（cv3630717）](https://www.bilibili.com/read/cv3630717)

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
| [A-2](#a-2-类型未提供) | 通过**使用他人提供的代理服务器**，<br/>**在远端重写客户端请求**，<br/>**直接**实现跨服 | 操作较少 | 依赖代理服务器的稳定性<br/>安全性无法保证 |
| [B-1](#b-类型未提供) | 通过**对游戏客户端修改后重新打包**，<br/>**由他人统一签名后在线下载安装**，<br/>**直接**实现跨服 | 几乎无需操作 | 签名所需证书费较贵<br/>更新后需等待新跨服包发布 |
| [B-2](#b-类型未提供) | 通过**对游戏客户端修改后重新打包**，<br/>**自行签名然后越狱安装或侧载**，<br/>**直接**实现跨服 | 无需花钱 | 需要会亿点操作<br/>越狱影响系统安全性<br/>每 7 天需重新签名<br/>更新后需等待新跨服包发布 |
| [C-1](#c-1-类型) | 通过**使用云游戏平台**，<br/>**将游戏画面实时传输至移动设备**，<br/>**间接**实现跨服 | 操作较少<br/>能跨部分渠道服 | 可选渠道服受制于云平台<br/>严重依赖网络质量<br/>安全性无法保证<br/>非会员每日游戏时长受限<br/>非会员每次进入需排队等候 |
| [C-2](#c-2-类型) | 通过**使用云主机**，<br/>**将游戏画面实时传输至移动设备**，<br/>**间接**实现跨服 | 能跨渠道服 | 需要会亿点操作<br/>云主机普遍价格很高<br/>严重依赖网络质量 |

## A-1 类型
 > A-1：通过**使用网络调试工具**，**在本地重写客户端请求**，**直接**实现跨服。

| 图标 | 跨服工具 | 别名 | 跨服教程<br/>与配置 |
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
| iHTTP Tracker<br/>（猫头鹰） | ✅ | ¥18.00<br/>\$2.99 | ★★★★ | ❌ | 有 Bug 尚未解决，暂不可用 |
| Thor<br/>（锤子） | ✅ | ¥88.00<br/>\$12.99 | ★★★★ | ❌ |  |
| Quantumult X<br/>（圈叉） | ❌ | \$7.99 | ★★ | ✅ | TF 名额已满 |
| Surge 4 | ❌ | \$49.99（首次内购）<br/>+ \$14.99/y（订阅） | ★★ | ✅ |  |
| Loon<br/>（气球） | ❌ | \$2.99 | ★★ | ✅ | Bug 较多 |

 > 注：
 > 
 > 世界蛇⟡崩3少前跨服 - QQ 群：[`915089623`](https://jq.qq.com/?_wv=1027&k=5rnvPAT)

### ⑴ HTTP Catcher

<details>
<summary>点击查看：配置方法</summary>

1. **下载并导入跨服配置文件**：下载下面的“.hcc”类型的跨服配置文件，通过“共享”或“在其他应用中打开”调出系统分享菜单，然后选择“拷贝到‘HTTP Catcher’”；在 HTTP Catcher 中弹出的“导入”对话框中选择“好的”，即可成功导入。

```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.hcc
```

2. **启用跨服配置**：进入“更多”→“重写”，在弹出的“重写列表”界面中，点击下面的跨服配置使其前面出现“✓”。
3. **启用重写功能**：在“重写列表”界面中，打开上面的“重写列表”开关；然后回到“更多”页面。
4. **启用仅记录消息头**：进入“高级设置”，打开“仅记录消息头”开关；然后回到“历史”页面。
5. **启动 HTTP Catcher**：点击下方的开关按钮，然后在清除了游戏后台的情况下进入游戏，即可完成跨服。（不玩游戏时，别忘了停止 HTTP Catcher。）

</details>

### ⑵ iHTTP Tracker
 > 有 Bug 尚未解决，暂不可用。

<details>
<summary>点击查看：配置方法（暂不可用）</summary>

1. **下载并导入跨服配置文件**：下载下面的“.cs5”类型的跨服配置文件，通过“共享”或“在其他应用中打开”调出系统分享菜单，然后分享到“iHTTP Tracker”；在 iHTTP Tracker 中弹出的“检测到导入重写规则”对话框中选择“导入”，即可成功导入。

```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.cs5
```

2. **启用跨服配置**：进入“设置”→“规则列表”，在“重写”页面中，确保刚刚导入的跨服配置的开关已打开；然后返回“设置”页面。
3. **停用网络记录保存**：在“设置”页面中，关闭“保存网络记录”开关。
4. **启动 iHTTP Tracker**：点击下方蓝色的启动按钮，然后在清除了游戏后台的情况下进入游戏，即可完成跨服。（不玩游戏时，别忘了停止 iHTTP Tracker。）

</details>

### ⑶ Thor

<details>
<summary>点击查看：配置方法</summary>

1. **下载并导入跨服配置文件**：下载下面的“.f4thor”类型的跨服配置（过滤器）文件，通过“共享”或“在其他应用中打开”调出系统分享菜单，然后选择“拷贝到‘Thor’”；在弹出的跨服配置（过滤器）预览页面中，点击右上角导出图标，在弹出的菜单中选择“装载”，在弹出的“安全提醒”对话框中选择“继续”，即可成功导入；然后点击左上角的“✗”，回到首页。

```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.f4thor
```

2. **选中跨服所用过滤器**：点击闪电按钮上方显示的过滤器名称，在弹出的“过滤器”列表中，点击刚刚导入的跨服所用过滤器，然后会自动返回首页。
3. **启动 Thor**：点击闪电按钮启动 Thor，然后在清除了游戏后台的情况下进入游戏，即可完成跨服。（不玩游戏时，别忘了停止 Thor。）

</details>

### ⑷ Quantumult X

<details>
<summary>点击查看：配置方法</summary>

#### 方法一：本地脚本（商店版、TF 版均可用）

```
[rewrite_local]
# 少女前线 跨服
^http:\/\/gfcn-transit\.ios\.sunborngame\.com\/index\.php url script-request-body gfcn_switchserver_gw.js
```

#### 方法二：远程脚本（仅 TF 版可用）

```
[rewrite_local]
# 少女前线 跨服
^http:\/\/gfcn-transit\.ios\.sunborngame\.com\/index\.php url script-request-body https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.js
```

</details>

### ⑸ Surge 4

<details>
<summary>点击查看：配置方法</summary>

#### 方法一：订阅模块化配置
1. **安装并启用跨服配置模块**：在“首页”中找到“模块”卡片（若未找到，则去“更多”→“外观”→“卡片”中将该卡片设为可见），点击“模块”，在弹出的“模块”界面中，找到“安装的模块”部分，点击“安装新模块...”，然后在弹出的“安装模块”对话框中输入下面的 URL 地址，点“好的”下载模块文件。然后在弹出的配置预览窗口中，**检查有无恶意内容并仔细阅读最下方的“警告”**，在确认无误后，点击最下方的“安装”。回到“模块”界面，即可看到跨服配置模块已成功安装，左侧有“✓”表示该模块已启用。

```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.sgmodule
```

2. **启用“脚本”功能**：回到“首页”中，将“脚本”卡片的开关打开（若未找到，则去“更多”→“外观”→“卡片”中将该卡片设为可见）。
3. **启用“始终开启”功能**：在“更多”→“设置”→“始终开启”中，打开“自动启动 Surge”的开关，即可保持 Surge 4 一直后台开启。
4. **启动 Surge 4**：点击“首页”右上角“启动”按钮启动 Surge 4，即可在 iOS 端跨服登录安卓国服。

#### 方法二：手动编辑配置
1. **手动添加跨服配置**：点击“首页”左上角配置名，在弹出的“配置列表”窗口中，点击“在文本模式中编辑”（或是使用任一款编辑器打开你的 Surge 配置文件（.conf）直接进行编辑）。在编辑窗口中，将以下配置中 `[Script]` 下方的代码，在配置文件中找到对应位置复制进去，然后点击右上角“完成”保存修改。

```
[Script]
# 少女前线 跨服
gfcn_switchserver_gw = type=http-request,pattern=^http:\/\/gfcn-transit\.ios\.sunborngame\.com\/index\.php,script-path=https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/gfcn_switchserver_gw.js,requires-body=1
```

2. **启用“脚本”功能**：回到“首页”中，将“脚本”卡片的开关打开（若未找到，则去“更多”→“外观”→“卡片”中将该卡片设为可见）。
3. **启用“始终开启”功能**：在“更多”→“设置”→“始终开启”中，打开“自动启动 Surge”的开关，即可保持 Surge 4 一直后台开启。
4. **启动 Surge 4**：点击“首页”右上角“启动”按钮启动 Surge 4，即可完成跨服。

</details>

### ⑹ Loon
 > 参考方法 [⑸ Surge 4](#-surge-4)，此处略去。

## A-2 类型（未提供）
 > A-2：通过**使用他人提供的代理服务器**，**在远端重写客户端请求**，**直接**实现跨服。

暂不提供此方式为「少女前线」进行跨服，因为使用代理服务器会受多种因素影响，造成跨服不稳定。

## B 类型（未提供）
 > B-1：通过**对游戏客户端修改后重新打包**，**由他人统一签名后在线下载安装**，**直接**实现跨服。
 > 
 > B-2：通过**对游戏客户端修改后重新打包**，**自行签名然后越狱安装或侧载**，**直接**实现跨服。

不提供此方式为「少女前线」进行跨服，因为修改客户端容易被封号。

## C-1 类型
 > C-1：通过**使用云游戏平台**，**将游戏画面实时传输至移动设备**，**间接**实现跨服。

| 图标 | 跨服工具 | 别名 | 跨服教程<br/>与配置 |
| :-: | :-: | :-: | :-: |
| - | 网易云游戏 | - | 见网易云游戏官网 |

| 跨服工具 | 国区商店<br/>购买与下载 | 正规渠道价格 | 跨服操作<br/>方便程度 | 设备上同时<br/>挂梯与跨服 | 备注 |
| :-: | :-: | :-: | :-: | :-: | :-: |
| 网易云游戏 | - | ¥15.9/月<br/>¥70/季<br/>¥240/年 | ★★★★★ | ✅ | 部分渠道服平台未提供 |

 > 注：
 > 
 > 网易云游戏 - 官网：<https://cg.163.com>

## C-2 类型
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

## 附录2：「少女前线」国服客户端登录参数
 > 以下为分别连接不同的国服服务器时，有效的客户端登录参数。

### 官服

| 服务器\参数 | Host | `channel` | `device` | `platformChannelId` |
| :-: | :-: | :-: | :-: | :-: |
| 安卓官服 | ⋯`.gw.`⋯ | `cn_mica` | `adr` | `GWGW` / `TapTap` |
| iOS 官服 | ⋯`.ios.`⋯ | `cn_appstore` | `ios` | `ios` |

### 渠道服

| 服务器\参数 | Host | `channel` | `device` | `platformChannelId` |
| :-: | :-: | :-: | :-: | :-: |
| Bilibili 服 | ⋯`.bili.`⋯ | `cn_bili` | `adr` | `Bili` |
| 渠道混服 | ⋯`.ly.`⋯ | `cn_third` | `adr` | （多种） |
