# 「少女前线」跨服手册（散爆版）（iOS 端 → Bilibili 服）
 > By: [Mornwind](https://github.com/Mornwind)
 > 
 > GitHub Link: [Mornwind/GFCN_SwitchServer](https://github.com/Mornwind/GFCN_SwitchServer) 
 > 
 > 霞之丘 • 少前跨服 - 加入 QQ 群：[`915089623`](https://jq.qq.com/?_wv=1027&k=5rnvPAT)

## 致谢

- **参考&协助**
  - [霞ヶ丘詩羽x](https://space.bilibili.com/455501)：[B站专栏（cv3630717）](https://www.bilibili.com/read/cv3630717)

---

## ⚠️ 注意事项 ⚠️

1. 本项目内所提到的所有客户端与服务器，均为**国服**。
2. 跨服脚本中**并未含有**用于修改游戏内数据以获得不正当收益的作弊内容，只是用来切换服务器，故理论上不会被封号。跨服脚本代码**公开透明**地存放于本项目中，欢迎随时进行检查。如若不放心，还请另寻他法。
3. **无法在 iOS 端进行跨服充值，否则 1000% 会错充进 iOS 官服，切记！**
4. iOS 端跨渠道混服，可参照跨 Bilibili 服的方法。

---

## 跨服手册
 > 常见的游戏跨服方式分类，详见[前言](/README.md#ios-端常见跨服方式)部分。

### A-1 类型
 > A-1：通过**使用网络调试工具**，**在本地重写客户端请求**，**直接**实现跨服。

| 图标 | 跨服工具 | 别名 | 跨服教程<br/>与配置 |
| :-: | :-: | :-: | :-: |
| ![](/Icon/HTTP_Catcher_Icon.png) | HTTP Catcher | 网球 | [文字教程](#-http-catcher) |
| ![](/Icon/Thor_Icon.png) | Thor | 锤子 | [文字教程](#-thor) |
| ![](/Icon/Shadowrocket_Icon.png) | Shadowrocket | 小火箭 | [文字教程](#-shadowrocket) |
| ![](/Icon/Quantumult_X_Icon.png) | Quantumult X | 圈叉 | [文字教程](#-quantumult-x) |
| ![](/Icon/Surge_4_Icon.png) | Surge 4 | - | [文字教程](#-surge-4) |
| ![](/Icon/Loon_Icon.png) | Loon | 气球 | [文字教程](#-loon) |

<details>
<summary>点击查看：常用网络调试工具对比</summary>

| 跨服工具 | 国区商店<br/>购买与下载 | 正规渠道价格 | 跨服操作<br/>方便程度 | 设备上同时<br/>挂梯与跨服 | 备注 |
| :-: | :-: | :-: | :-: | :-: | :-: |
| HTTP Catcher<br/>（网球） | ✅ | ¥28.00（内购）<br/>\$3.99（内购） | ★★★★ | ❌ |  |
| Thor<br/>（锤子） | ✅ | ¥88.00<br/>\$12.99 | ★★★★ | ❌ |  |
| Shadowrocket<br/>（小火箭） | ❌ | \$2.99 | ★★★★ | ✅ |  |
| Quantumult X<br/>（圈叉） | ❌ | \$7.99 | ★★ | ✅ | TF 名额已满 |
| Surge 4 | ❌ | \$49.99（首次内购）<br/>+ \$14.99/y（订阅） | ★★ | ✅ | 是真的贵 |
| Loon<br/>（气球） | ❌ | \$2.99 | ★★ | ✅ | Bug 较多 |

</details>

#### ⑴ HTTP Catcher

<details>
<summary>点击查看：第一部分 获取账号登录信息</summary>

**注意事项**：只有**首次跨服**、**账号登录数据失效**两种情况下才需要完整执行一次第一部分的操作。**不需要每次跨服前都去执行一次！**

1. **【iOS】启用 Wi-Fi 访问**：进入“更多”→“Wi-Fi 访问”，打开“允许 Wi-Fi 访问”开关，并记住下方的“IP 地址”及“端口”；下滑返回“更多”界面。
2. **【iOS】禁用 HTTPS 解密**：在“更多”界面中，关闭“解密 HTTPS 流量”开关。
3. **【iOS】禁用仅记录消息头**：进入“更多”→“高级设置”，关闭“仅记录消息头”开关；然后回到“历史”页面。
4. **【iOS】启动 HTTP Catcher 进行数据抓取**：点击下方的开关按钮启动 HTTP Catcher，即可开始对相同 Wi-Fi 下的 Android 设备进行数据抓取。
5. **【Android】配置安卓机的 Wi-Fi 代理（不同机型设置方法略有区别）**：**首先保证你的两个设备在同个 Wi-Fi 下**；然后在“系统设置”→“无线网络”中，找到当前连接的 Wi-Fi，点击进入详细设置，找到“代理设置”，将其改为“手动”，并在“服务器”和“端口”中依次填入第 1 步中记下的内容；点击“保存”返回。
6. **【Android】抓取账号登录数据**：在清除了游戏后台的情况下进入游戏，完整进行一次登录操作，直到看到自己的用户名及等级，即可退出游戏。
7. **还原第 1～5 步所做操作至修改前**：即：停止 HTTP Catcher；禁用“Wi-Fi 访问”；取消安卓机的 Wi-Fi 代理；开启“仅记录消息头”；启用 HTTPS 解密（此项非必需，视个人使用情况）。
8. **【iOS】提取账号登录数据（重要！）**：在“历史”界面上方的搜索栏中输入“/third”，即可搜出一条显示为“/third/channelLogin”的记录，点击进入；在弹出的界面中，点击上方的“响应”选项卡，在下方“Preview”中即可找到“open_id”和“token”，将各自后面所跟双引号内的内容复制保存好（复制时不包括双引号本身），在后面的第二部分配置过程中需要用到。

</details>

<details>
<summary>点击查看：第二部分 配置跨服</summary>

1. **下载并导入跨服配置文件**：下载下面的“.hcc”类型的跨服配置文件，通过“共享”或“在其他应用中打开”调出系统分享菜单，然后选择“拷贝到‘HTTP Catcher’”；在 HTTP Catcher 中弹出的“导入”对话框中选择“好的”，即可成功导入。

```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/HTTP_Catcher/gfcn_switchserver_bili.hcc
```

2. **填入账号信息（重要！）**：进入“更多”→“重写”，在弹出的“重写列表”界面中，找到有“写入账号数据”的一条，点击右侧的ⓘ进入“编辑重写”界面；在“规则”中，先点进第一项（含“openid=”），进入“编辑规则”界面，找到最下方的“替换”部分，将已获取到账号数据中的“open_id”值替换掉其中的“abc”（千万不要删改其前后的“$1”及“&”；粘贴后如出现空格需删除），点击右上角的“存储”回到“编辑重写”界面；再点进第二项（含“sid=”），进入“编辑规则”界面，找到最下方的“替换”部分，将已获取到账号数据中的“token”值替换掉其中的“xyz”（千万不要删改其前后的“$1”及“&”；粘贴后如出现空格需删除），点击右上角的“存储”回到“编辑重写”界面；再点击右上角的“存储”回到“重写列表”界面。
3. **启用跨服配置**：在“重写列表”界面中，依次点击关于跨服的“切换服务器P1”、“切换服务器P2”、“写入账号数据”这三条跨服配置，使其前面全都出现“✓”。
4. **启用重写功能**：在“重写列表”界面中，打开上面的“重写列表”开关；然后回到“更多”页面。
5. **启用仅记录消息头**：进入“高级设置”，打开“仅记录消息头”开关；然后回到“历史”页面。
6. **启动 HTTP Catcher**：点击下方的开关按钮，然后在清除了游戏后台的情况下进入游戏，即可完成跨服。（不玩游戏时，别忘了停止 HTTP Catcher。）

</details>

#### ⑵ Thor

<details>
<summary>点击查看：第一部分 获取账号登录信息</summary>

**注意事项**：只有**首次跨服**、**账号登录数据失效**两种情况下才需要完整执行一次第一部分的操作。**不需要每次跨服前都去执行一次！**

1. **【iOS】设置抓取数据的过滤器**：在“过滤器”主界面中，点击闪电按钮上方显示的漏斗图标或过滤器名称，在弹出的“过滤器”列表中，找到“全局抓包”，点击选中并自动返回主界面。
2. **【iOS】禁用 HTTPS 解密**：在“更多”界面中，点击“HTTPS 解析设置”进入“HTTPS 证书管理”界面，将“CA 证书”中已启用的证书停用；然后返回主界面。
3. **【iOS】启用 Wi-Fi 监听**：在“过滤器”主界面中，点击闪电按钮启动 Thor；然后翻到界面最下方，先关闭“本机监听”的开关，再打开“Wi-Fi 监听”的开关，并记住“Wi-Fi 监听”下方的“服务器”及“端口”。
4. **【Android】配置安卓机的 Wi-Fi 代理（不同机型设置方法略有区别）**：**首先保证你的两个设备在同个 Wi-Fi 下**；然后在“系统设置”→“无线网络”中，找到当前连接的 Wi-Fi，点击进入详细设置，找到“代理设置”，将其改为“手动”，并在“服务器”和“端口”中依次填入第 1 步中记下的内容；点击“保存”返回。
5. **【Android】抓取账号登录数据**：在清除了游戏后台的情况下进入游戏，完整进行一次登录操作，直到看到自己的用户名及等级，即可退出游戏。
6. **还原第 2～4 步所做操作至修改前**：即：停止 Thor（会自动重置“本机监听”与“Wi-Fi 监听”的开关为默认状态，无需手改）；取消安卓机的 Wi-Fi 代理；启用 HTTPS 解密（此项非必需，视个人使用情况）。
7. **【iOS】提取账号登录数据（重要！）**：在“会话记录”界面中，点击进入找到刚才生成的“全局抓包”记录；在弹出的界面上方的“关键字”搜索栏中输入“/third”并点击“搜索”，即可搜出一条显示为“/third/channelLogin”的记录，点击进入；在弹出的界面中，点击上方的“响应”选项卡，再点击“消息体”部分中的“text/html”，在弹出的“消息体”内容界面中即可找到“open_id”和“token”，将各自后面所跟双引号内的内容复制保存好（复制时不包括双引号本身），在后面的第二部分配置过程中需要用到。

</details>

<details>
<summary>点击查看：第二部分 配置跨服</summary>

1. **下载并导入跨服配置文件**：下载下面的“.f4thor”类型的跨服配置（过滤器）文件，通过“共享”或“在其他应用中打开”调出系统分享菜单，然后选择“拷贝到‘Thor’”；在弹出的跨服配置（过滤器）预览页面中，点击右上角导出图标，在弹出的菜单中选择“装载”，在弹出的“安全提醒”对话框中选择“继续”，即可成功导入；然后点击左上角的“✗”，回到主界面。

```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Thor/gfcn_switchserver_bili.f4thor
```

2. **填入账号信息（重要！）**：在“过滤器”主界面中，点击闪电按钮上方显示的漏斗图标或过滤器名称，在弹出的“过滤器”列表中，找到刚导入的跨服过滤器，点击右侧的ⓘ并选择“编辑”；在弹出的过滤器详细设置界面中，找到第二项“挂载断点”并点击下方进入；在“编辑断点”界面中，找到第二项“写入账号数据”并点击其下方的“变量绑定”；在“变量绑定”界面中，进入“${open_id}”下的“当前值”，填入已获取到账号数据中的“open_id”值，返回“变量绑定”界面；再进入“${token}”下的“当前值”，填入已获取到账号数据中的“token”值，返回“变量绑定”界面；点击两次左上角“返回”，然后再点击右上角“存储”，即可保存更改并返回“过滤器”列表。
3. **选中跨服过滤器**：在“过滤器”列表中，点击选中跨服过滤器，然后就会自动返回主界面。
4. **启动 Thor**：在“过滤器”主界面中，点击闪电按钮启动 Thor，然后在清除了游戏后台的情况下进入游戏，即可完成跨服。（不玩游戏时，别忘了停止 Thor。）

</details>

#### ⑶ Shadowrocket
 > 需 Shadowrocket 为 2.1.67 (1156) 及以上的 TF 或商店版本。

<details>
<summary>点击查看：第一部分 获取账号登录信息</summary>

**注意事项**：只有**首次跨服**、**账号登录数据失效**两种情况下才需要完整执行一次第一部分的操作。**不需要每次跨服前都去执行一次！**

##### 方法一：直接订阅简易配置

1. **【iOS】新建本机节点**：在首页，点击右上角”+“，添加一个类型为”HTTP“（或”HTTPS“）、地址为”localhost“（或”127.0.0.1“）、端口为”1080“（或其他在 1-65535 之间的端口）的节点，然后在首页的”服务器节点“中选中该节点。
2. **【iOS】设置路由模式**：将”全局路由“设置为”直连“（或”配置“）。
3. **【iOS】设置远程订阅 URL**：在”配置文件“页面，点击右上角”+“，输入下面的远程订阅 URL，点击下载。

```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Shadowrocket/gfcn_switchserver_bili.conf
```

4. **【iOS】下载并应用简易配置**：在”远程文件“中点击该 URL，选择”使用配置“，等待下载完毕后，即可看到”本地文件“中加载了“gfcn_switchserver_bili.conf”配置。
5. **【iOS】启用调试日志记录**：在”设置“界面，点击进入”高级“部分中的”诊断“，然后打开”启用日志记录“开关；返回首页。
6. **【iOS】设置代理共享**：在”设置“界面，点击进入”TUNNEL“部分中的”代理“，再点击进入”代理共享“，打开”启用共享“开关，并记住下方的”IP“及”端口“。
7. **【iOS】启动 Shadowrocket 进行数据抓取**：返回首页，打开 Shadowrocket 的连接开关，即可开始对相同 Wi-Fi 下的 Android 设备进行数据抓取。
8. **【Android】配置安卓机的 Wi-Fi 代理（不同机型设置方法略有区别）**：**首先保证你的两个设备在同个 Wi-Fi 下**；然后在”系统设置“→”无线网络“中，找到当前连接的 Wi-Fi，点击进入详细设置，找到”代理设置“，将其改为”手动“，并在”服务器“和”端口“中依次填入第 6 步中记下的内容；点击”保存“返回。
9. **【Android】抓取账号登录数据**：在清除了游戏后台的情况下进入游戏，完整进行一次登录操作，直到看到自己的用户名及等级，即可退出游戏。
10. **还原第 1～8 步所做操作至修改前**：即：停止 Shadowrocket；取消安卓机的 Wi-Fi 代理；关闭代理共享；关闭调试日志记录；切回原配置文件、原路由模式、原节点（此项非必需，视个人使用情况；但第 1～4 步在第二部分的方法一中**还需再用到**，所以此处**建议保留不还原**）。
11. **【iOS】提取账号登录数据（重要！）**：在”设置“界面中，点击进入”高级“部分中的”诊断“，再进入“VPN 日志”，找到刚才生成的日志点击进入；在“内容”界面中一直往下翻，直到找到夹在两排等号分隔线之间的“获取账号数据”内容，其中就有”open_id“和”token“，将它们各自复制保存好，在后面的第二部分配置过程中需要用到。

##### 方法二：手动写入当前使用中配置

1. **【iOS】进入配置编辑界面**：在”配置文件“页面，从”本地文件“中找到当前正在使用的配置，点击它，在弹出的列表中选择”编辑纯文本“。
2. **【iOS】添加跨服配置**：在弹出的编辑窗口中，将以下配置中 `[Script]` 下方的代码，在配置文件中找到对应位置复制进去，然后点击右上角的”保存“，返回 Shadowrocket 的首页。

```
[Script]
# 少女前线 跨 Bilibili 服
## 第一部分 获取帐号数据
gfcn_switchserver_bili_GetToken = type=http-response,script-path=https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Shadowrocket/gfcn_switchserver_bili_GetToken.js,pattern=^http:\/\/gfcn-passport\.(.+?)\.sunborngame\.com\/third\/channelLogin,max-size=1048576,requires-body=true,enable=true
## 第二部分 切换服务器
gfcn_switchserver_bili_P1 = type=http-request,script-path=https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Shadowrocket/gfcn_switchserver_bili_P1.js,pattern=^http:\/\/gfcn-transit\.ios\.sunborngame\.com\/index\.php,max-size=1048576,requires-body=true,enable=true
## 第二部分 写入帐号数据
gfcn_switchserver_bili_P2 = type=http-request,script-path=https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Shadowrocket/gfcn_switchserver_bili_P2.js,pattern=^http:\/\/gfcn-game\.(.+?)\.sunborngame\.com\/index\.php\/5000\/Index\/getUidEnMicaQueue,max-size=1048576,requires-body=true,enable=true
```

3. **【iOS】启用调试日志记录**：在”设置“界面，点击进入”高级“部分中的”诊断“，然后打开”启用日志记录“开关；返回首页。
4. **【iOS】设置代理共享**：在”设置“界面，点击进入”TUNNEL“部分中的”代理“，再点击进入”代理共享“，打开”启用共享“开关，并记住下方的”IP“及”端口“。
5. **【iOS】启动 Shadowrocket 进行数据抓取**：返回首页，打开 Shadowrocket 的连接开关，即可开始对相同 Wi-Fi 下的 Android 设备进行数据抓取。
6. **【Android】配置安卓机的 Wi-Fi 代理（不同机型设置方法略有区别）**：**首先保证你的两个设备在同个 Wi-Fi 下**；然后在”系统设置“→”无线网络“中，找到当前连接的 Wi-Fi，点击进入详细设置，找到”代理设置“，将其改为”手动“，并在”服务器“和”端口“中依次填入第 4 步中记下的内容；点击”保存“返回。
7. **【Android】抓取账号登录数据**：在清除了游戏后台的情况下进入游戏，完整进行一次登录操作，直到看到自己的用户名及等级，即可退出游戏。
8. **还原第 3～7 步所做操作至修改前**：即：停止 Shadowrocket；取消安卓机的 Wi-Fi 代理；关闭代理共享；关闭调试日志记录。
9. **【iOS】提取账号登录数据（重要！）**：在”设置“界面中，点击进入”高级“部分中的”诊断“，再进入“VPN 日志”，找到刚才生成的日志点击进入；在“内容”界面中一直往下翻，直到找到夹在两排等号分隔线之间的“获取账号数据”内容，其中就有”open_id“和”token“，将它们各自复制保存好，在后面的第二部分配置过程中需要用到。

</details>

<details>
<summary>点击查看：第二部分 配置跨服</summary>

##### 方法一：直接订阅简易跨服配置

**提醒**：第二部分的方法一的第 1～4 步若在第一部分的方法一中**已操作过**，且遵循第 10 步的建议**并未还原**，则此时可**直接跳过**，**无需重复操作**。

1. **新建本机节点**：在首页，点击右上角”+“，添加一个类型为”HTTP“（或”HTTPS“）、地址为”localhost“（或”127.0.0.1“）、端口为”1080“（或其他在 1-65535 之间的端口）的节点，然后在首页的”服务器节点“中选中该节点。
2. **设置路由模式**：将”全局路由“设置为”直连“（或”配置“）。
3. **设置远程订阅 URL**：在”配置文件“界面，点击右上角”+“，输入下面的远程订阅 URL，点击下载。

```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Shadowrocket/gfcn_switchserver_bili.conf
```

4. **下载并应用简易跨服配置**：在”远程文件“中点击该 URL，选择”使用配置“，等待下载完毕后，即可看到”本地文件“中加载了“gfcn_switchserver_bili.conf”配置。
5. **将脚本 P2 从云端改存至本设备**：在“配置文件”界面点击该配置，选择“编辑配置”，然后点击进入“脚本”→“gfcn_switchserver_bili_P2”；在弹出的“添加脚本”界面，点击“Script”右侧的ⓘ，再在弹出的“Script”界面中，点击下方的“保存”；在弹出的预览界面中，等脚本从云端加载完毕并显示后，点击右上角的“保存”返回“Script”界面。
6. **在脚本 P2 中填入账号信息并启用（重要！）**：在“Script”界面中，找到上方已保存下的“gfcn_switchserver_bili_P2.js”，左划并点击“编辑”；在弹出的脚本编辑界面中，将已获取到账号数据中的“open_id”值替换掉其中的“abc”，“token”值替换掉其中的“xyz”（千万不要删改前后的双引号；粘贴后如出现空格需删除）；点击右上角“保存”返回“Script”界面，再点击“gfcn_switchserver_bili_P2.js”以选中脚本并返回“添加脚本”界面，再点击右上角“保存”返回“Script”界面，然后一路返回至主界面。
7. **启动 Shadowrocket**：返回 Shadowrocket 的首页，打开 Shadowrocket 的连接开关，然后在清除了游戏后台的情况下进入游戏，即可实现跨服。（不玩游戏时，别忘了停止 Shadowrocket 的连接。）

##### 方法二：手动写入当前使用中配置

**提醒**：第二部分的方法二的第 1～2 步若在第一部分的方法二中**已操作过**，则此时可**直接跳过**，**无需重复操作**。

1. **进入配置编辑界面**：在”配置文件“界面，从”本地文件“中找到当前正在使用的配置，点击它，在弹出的列表中选择”编辑纯文本“。
2. **添加跨服配置**：在弹出的编辑窗口中，将以下配置中 `[Script]` 下方的代码，在配置文件中找到对应位置复制进去，然后点击右上角的”保存“，返回“配置文件”界面。

```
[Script]
# 少女前线 跨 Bilibili 服
## 第一部分 获取帐号数据
gfcn_switchserver_bili_GetToken = type=http-response,script-path=https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Shadowrocket/gfcn_switchserver_bili_GetToken.js,pattern=^http:\/\/gfcn-passport\.(.+?)\.sunborngame\.com\/third\/channelLogin,max-size=1048576,requires-body=true,enable=true
## 第二部分 切换服务器
gfcn_switchserver_bili_P1 = type=http-request,script-path=https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Shadowrocket/gfcn_switchserver_bili_P1.js,pattern=^http:\/\/gfcn-transit\.ios\.sunborngame\.com\/index\.php,max-size=1048576,requires-body=true,enable=true
## 第二部分 写入帐号数据
gfcn_switchserver_bili_P2 = type=http-request,script-path=https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Shadowrocket/gfcn_switchserver_bili_P2.js,pattern=^http:\/\/gfcn-game\.(.+?)\.sunborngame\.com\/index\.php\/5000\/Index\/getUidEnMicaQueue,max-size=1048576,requires-body=true,enable=true
```

3. **将脚本 P2 从云端改存至本设备**：在“配置文件”界面点击该配置，选择“编辑配置”，然后点击进入“脚本”→“gfcn_switchserver_bili_P2”；在弹出的“添加脚本”界面，点击“Script”右侧的ⓘ，再在弹出的“Script”界面中，点击下方的“保存”；在弹出的预览界面中，等脚本从云端加载完毕并显示后，点击右上角的“保存”返回“Script”界面。
4. **在脚本 P2 中填入账号信息并启用（重要！）**：在“Script”界面中，找到上方已保存下的“gfcn_switchserver_bili_P2.js”，左划并点击“编辑”；在弹出的脚本编辑界面中，将已获取到账号数据中的“open_id”值替换掉其中的“abc”，“token”值替换掉其中的“xyz”（千万不要删改前后的双引号；粘贴后如出现空格需删除）；点击右上角“保存”返回“Script”界面，再点击“gfcn_switchserver_bili_P2.js”以选中脚本并返回“添加脚本”界面，再点击右上角“保存”返回“Script”界面，然后一路返回至主界面。
5. **重启 Shadowrocket**：为确保修改生效，可以返回 Shadowrocket 的首页，开关一次 Shadowrocket 的连接开关，然后在清除了游戏后台的情况下进入游戏，即可实现跨服。

</details>

#### ⑷ Quantumult X

待补充完整。

#### ⑸ Surge 4

待补充完整。

#### ⑹ Loon

待补充完整。

### A-2 类型（未提供）
 > A-2：通过**使用他人提供的代理服务器**，**在远端重写客户端请求**，**直接**实现跨服。

暂不提供此方式为「少女前线」进行跨服，因为使用代理服务器会受多种因素影响，造成跨服不稳定。

### B 类型（未提供）
 > B-1：通过**对游戏客户端修改后重新打包**，**由他人统一签名后在线下载安装**，**直接**实现跨服。
 > 
 > B-2：通过**对游戏客户端修改后重新打包**，**自行签名然后越狱安装或侧载**，**直接**实现跨服。

不提供此方式为「少女前线」进行跨服，因为修改客户端容易被封号。

### C-1 类型
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

### C-2 类型
 > C-2：通过**使用云主机**，**将游戏画面实时传输至移动设备**，**间接**实现跨服。

此方法需自行摸索。

---

[返回前言](/README.md)
