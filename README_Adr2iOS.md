# 「少女前线」跨服手册（散爆版）（安卓端 → iOS 官服）
 > By: [Mornwind](https://github.com/Mornwind)
 > 
 > Blog: [Mornwind’s Blog](https://blog.mornwind.cc)（博客中也有教程，使用的是国内备用仓库）
 > 
 > GitHub Repo: [Mornwind/GFCN_SwitchServer](https://github.com/Mornwind/GFCN_SwitchServer) 
 > 
 > Gitee Repo: [Mornwind/GFCN_SwitchServer](https://gitee.com/Mornwind/GFCN_SwitchServer) (国内备用仓库，配置中链接已全部替换成 gitee.com，防止国内无法访问 GitHub)
 > 
 > QQ Group：
 > > 【霞之丘 · 少前跨服】:[`915089623`](https://jq.qq.com/?_wv=1027&k=5rnvPAT)（本群已于 2021/8/12 10:59 被封，损失惨重，故新群拆分成两个，分别运作）
 > > 
 > > 【霞之丘⟡少前跨服答疑】：[`907757876`](https://jq.qq.com/?_wv=1027&k=wdMRfleu)（仅跨服答疑，勿水无关话题）（请先填写[【少前跨服情况统计】](https://docs.qq.com/form/page/DREpKbGVaQWtRcGhI)收集表，便于管理员有针对性地答疑及后期通知）
 > > 
 > > 【霞之丘⟡闲聊群】：[`908042781`](https://jq.qq.com/?_wv=1027&k=Ph1teaIm)（仅闲聊，不答疑）

## 致谢

- **参考&协助**
  - [霞ヶ丘詩羽x](https://space.bilibili.com/455501)：[B站专栏（cv3630717）](https://www.bilibili.com/read/cv3630717)
  - [MoonNarga](https://github.com/MoonNarga)：[Server_Switch_for_GirlsFrontline](https://github.com/MoonNarga/Server_Switch_for_GirlsFrontline)

---

## ⚠️ 注意事项 ⚠️

1. 本项目内所提到的所有客户端与服务器，均为**国服**。
2. 跨服脚本中**并未含有**用于修改游戏内数据以获得不正当收益的作弊内容，只是用来切换服务器，故理论上不会被封号。跨服脚本代码**公开透明**地存放于本项目中，欢迎随时进行检查。如若不放心，还请另寻他法。
3. **无法进行跨服充值，否则 1000% 会错充进客户端对应的原服务器，切记！**

---

## 跨服手册

### ⑴ HttpCanary
 > 需 HttpCanary 为 3.3.6 (58) 高级（Premium）版本。因少前跨服不涉及 HTTPS 解密，故使用 HttpCanary 时无需 ROOT，也无需安装证书。
 > 
 > 另注：开发者已主动下架此应用基础版及高级版，只能通过其他途径获取。

<details>
<summary>点击查看：配置跨服</summary>

1. **设置目标应用**：在首页，点击左上角“☰”按钮打开侧栏菜单，找到“目标应用”点击进入；在“目标应用”界面中，点击右上角“+”按钮进入选择应用界面；在应用列表中找到“少女前线（com.sunborn.girlsfrontline.cn）”，点击即完成添加并自动返回“目标应用”界面，可看到界面中已出现上述应用；然后点击左上角“←”按钮返回首页。
2. **设置白名单**：在首页，点击左上角“☰”按钮打开侧栏菜单，找到“黑白名单”点击进入；在“黑白名单”界面中，点击右上角“+”按钮，进入“添加 Host”界面；在“添加 Host”界面中，输入域名“gfcn-transit.gw.sunborngame.com”，然后点击右上角“✓”按钮完成添加并返回“黑白名单”界面，可看到界面中已出现上述域名，且右侧有蓝色对勾，即表示成功添加此域名到白名单；然后点击左上角“←”按钮返回首页。
3. **设置允许后台运行**：（各安卓定制系统设置方法有差异，此处不详述）将 HttpCanary 设置为允许后台运行，防止进入后台后被系统自动清理。
4. **抓取指定域名**：在首页，点击右下角纸飞机图标以启动 HttpCanary（图标变绿）；运行游戏，直至选择服务器界面（即：左上角显示“当前服务器：0服 格里芬”，下方显示“点击屏幕开始”），退出游戏并清掉游戏后台；然后再切回 HttpCanary 并点击右下角纸飞机图标以停止 HttpCanary（图标变蓝）；此时可在首页看到刚抓到的一条“少女前线”的记录，且下方显示为“POST http://gfcn-transit.gw.sunborngame.com/index.php”。
5. **为指定域名设置重写器（第一部分）**：长按第 4 步中抓到的记录，在弹出的“选择操作”菜单中，点击“重写”；在弹出的“命名重写器”界面中，为重写器取个名（如：GFCN_Adr2iOS），然后点击右上角“→”按钮；在弹出的“创建重写器”界面中，先找到“请求”→“Headers”→“Host”点击进入，然后将第二行中的“gw”替换成“ios”（即：将“gfcn-transit.gw.sunborngame.com”修改为“gfcn-transit.ios.sunborngame.com”），点击右上角“✓”按钮保存后自动返回“创建重写器”界面。（然后进入第二部分，两种方法**任选其一**，即：第 6、7 步中**挑选其中一步操作**即可）
6. **为指定域名设置重写器（第二部分·方法一）**：在“创建重写器”界面中，找到“请求”→“请求体”→“跟随客户端”，点击右侧笔状图标，在弹出的“选择方式”菜单中选择“规则替换”，在弹出的“规则编辑器”界面中，分三次点击右下角“+”按钮进入“新建规则”界面并完成以下操作：第一次在“名称”中填入“channel”，“匹配”中填入“channel=cn_mica”，“替换”中填入“channel=cn_appstore”，点击右上角“✓”按钮保存；第二次在“名称”中填入“device”，“匹配”中填入“device=adr”，“替换”中填入“device=ios”，点击右上角“✓”按钮保存；第三次在“名称”中填入“platformChannelId”，“匹配”中填入“platformChannelId=GWGW”，“替换”中填入“platformChannelId=ios”，点击右上角“✓”按钮保存；当“规则编辑器”界面显示了刚刚添加好的三条“文字替换”后，点击右上角“✓”按钮保存并自动返回“创建重写器”界面；在“创建重写器”界面，再点击右上角纸飞机图标，在弹出的“重写器创建成功”窗口中点击“好的”，完成重写器设置。
7. **为指定域名设置重写器（第二部分·方法二）**：在“创建重写器”界面中，找到“请求”→“请求体”→“跟随客户端”，点击右侧笔状图标，在弹出的“选择方式”菜单中选择“在线编辑”，在弹出的“Body”界面中，将“channel=”后的“cn_mica”替换为“cn_appstore”，将“device=”后的“adr”替换为“ios”，将“platformChannelId=”后的“GWGW”替换为“ios”，然后点击右上角“✓”按钮保存并自动返回“创建重写器”界面；在“创建重写器”界面，再点击右上角纸飞机图标，在弹出的“重写器创建成功”窗口中点击“好的”，完成重写器设置。
8. **启动 HttpCanary**：点击首页右下角纸飞机图标以启动 HttpCanary（图标变绿），即可在安卓端跨服登录 iOS 国服。（如无其他使用需求，不玩游戏时别忘了停止 HttpCanary。）

</details>

#### ⑵ Hosts Go
 > 需 Hosts Go 为 2.1.9 (32) 版本。

<details>
<summary>点击查看：配置跨服（待补充完整）</summary>



</details>

---

[返回前言](/README.md)
