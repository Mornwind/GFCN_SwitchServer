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
 > 需 HttpCanary 为 3.3.6 (58) 高级（Premium）版本。但开发者已主动下架此应用基础版及高级版，只能通过其他途径获取。

<details>
<summary>点击查看：配置跨服（待补充完整）</summary>

1. **设置目标应用**：在首页，点击左上角“☰”按钮打开侧栏菜单，找到“目标应用”点击进入；在“目标应用”界面中，点击右上角“+”进入选择应用界面；在应用列表中找到“少女前线（com.sunborn.girlsfrontline.cn）”，点击即完成添加并自动返回“目标应用”界面，可看到界面中已出现上述应用；然后点击左上角“←”返回首页。
2. **设置白名单**：在首页，点击左上角“☰”按钮打开侧栏菜单，找到“黑白名单”点击进入；在“黑白名单”界面中，点击右上角“+”，进入“添加 Host”界面界面；在“添加 Host”界面中，输入域名“gfcn-transit.gw.sunborngame.com”，然后点击右上角“✓”完成添加并返回“黑白名单”界面，可看到界面中已出现上述域名，且右侧有蓝色对勾，即表示成功添加此域名到白名单；然后点击左上角“←”返回首页。
3. **设置允许后台运行**：（各安卓定制系统设置方法有差异，此处不详述）将 HttpCanary 设置为允许后台运行，防止进入后台后被系统自动清理。
4. **抓取指定域名**：在首页，点击右下角飞机图标使其变绿，以启动 HttpCanary；运行游戏，直至选择服务器界面（左上角显示“当前服务器：0服 格里芬”；下方显示“点击屏幕开始”），退出游戏并清掉游戏后台；然后再切回 HttpCanary，即可看到刚刚抓到的一条“少女前线”的记录，下方显示为“POST http://gfcn-transit.gw.sunborngame.com/index.php”。
5. **设置重写规则**：（待补充完整）
6. ****：（待补充完整）

</details>

#### ⑵ Hosts Go
 > 需 Hosts Go 为 2.1.9 (32) 版本。

<details>
<summary>点击查看：配置跨服（待补充完整）</summary>



</details>

---

[返回前言](/README.md)
