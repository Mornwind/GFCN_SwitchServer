# 「少女前线」跨服手册（散爆版）（安卓模拟器 → iOS 官服）
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
2. 跨服脚本代码**公开透明**地存放于本项目中，欢迎随时进行检查。跨服脚本中**并未含有**用于修改游戏内数据以获得不正当收益的作弊内容，只是用来切换登录服务器。但从原则上来说还是属于违反用户协议的行为，会不会被封号要看官方的心情。如若不放心，还请另寻他法（但是跨服的原理都是一样的，要真查起来都跑不掉）。
3. **无法进行跨服充值，否则 1000% 会错充进客户端对应的原服务器，切记！**

---

## 跨服手册

### ⑴ 模拟器跨服工具（自编译）
 > 需用到 [MoonNarga](https://github.com/MoonNarga) 的项目 [Server_Switch_for_GirlsFrontline](https://github.com/MoonNarga/Server_Switch_for_GirlsFrontline)。

<details>
<summary>点击查看：配置跨服</summary>

1. **准备模拟器跨服工具**：先自行对 [MoonNarga](https://github.com/MoonNarga) 的项目 [Server_Switch_for_GirlsFrontline](https://github.com/MoonNarga/Server_Switch_for_GirlsFrontline) 进行编译，得到可运行的模拟器跨服工具（或是到群中下载已经编译好的跨服工具）。
2. **启动模拟器跨服工具**：运行模拟器跨服工具，待工具启动完成后，记录下窗口中显示的“监听本机地址”及“端口”；保持模拟器跨服工具开启。
3. **配置安卓模拟器的网络代理（不同模拟器设置方法略有区别）**：在”系统设置“→”无线网络（WLAN）“中，找到当前连接的 Wi-Fi，点击进入详细设置，找到”代理设置“，将其改为”手动“，并在”服务器“和”端口“中依次填入第 2 步中记下的内容；点击”保存“返回。
4. **启动游戏**：在清除了游戏后台的情况下进入游戏，即可在安卓模拟器上跨服登录 iOS 国服。（如无其他使用需求，不玩游戏时别忘了关闭模拟器跨服工具。）

</details>

---

[返回前言](/README.md)
