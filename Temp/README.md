# 「少女前线」跨服（迁移期临时版，已失效）（iOS 端 → 安卓官服）
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
4. 不可跨服充值，否则会充错服，切记。

---

## 配置信息
### ⑴ Surge 4 / Loon
#### ① 订阅模块化配置
```
https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Temp/gfcn_switchserver_gw_temp.sgmodule
```

#### ② 手动编辑配置
```
[Script]
# 少女前线 跨服
gfcn_switchserver_gw_temp_A.js = type=http-request,pattern=^https?:\/\/ios\.transit\.gf\.ppgame\.com\/index\.php,script-path=https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Temp/gfcn_switchserver_gw_temp_A.js,requires-body=1
gfcn_switchserver_gw_temp_B.js = type=http-response,pattern=^https?:\/\/gfcn-transit\.gw\.sunborngame\.com\/index\.php,script-path=https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Temp/gfcn_switchserver_gw_temp_B.js,requires-body=1
gfcn_switchserver_gw_temp_C.js = type=http-response,pattern=^https?:\/\/gfcn-game\.gw(.*)\.sunborngame\.com\/index\.php\/(.+?)\/Index\/version,script-path=https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Temp/gfcn_switchserver_gw_temp_C.js,requires-body=1
```

### ⑵ Quantumult X
#### ① 本地脚本（商店版、TF 版均可用）
```
[rewrite_local]
# 少女前线 跨服
^https?:\/\/ios\.transit\.gf\.ppgame\.com\/index\.php url 307 http://gfcn-transit.gw.sunborngame.com/index.php
^https?:\/\/gfcn-transit\.gw\.sunborngame\.com\/index\.php url script-request-body gfcn_switchserver_gw_temp_A.js
^https?:\/\/gfcn-transit\.gw\.sunborngame\.com\/index\.php url script-response-body gfcn_switchserver_gw_temp_B.js
^https?:\/\/gfcn-game\.gw(.*)\.sunborngame\.com\/index\.php\/(.+?)\/Index\/version url script-response-body gfcn_switchserver_gw_temp_C.js
```

#### ② 远程脚本（仅 TF 版可用）
```
[rewrite_local]
# 少女前线 跨服
^https?:\/\/ios\.transit\.gf\.ppgame\.com\/index\.php url 307 http://gfcn-transit.gw.sunborngame.com/index.php
^https?:\/\/gfcn-transit\.gw\.sunborngame\.com\/index\.php url script-request-body https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Temp/gfcn_switchserver_gw_temp_A.js
^https?:\/\/gfcn-transit\.gw\.sunborngame\.com\/index\.php url script-response-body https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Temp/gfcn_switchserver_gw_temp_B.js
^https?:\/\/gfcn-game\.gw(.*)\.sunborngame\.com\/index\.php\/(.+?)\/Index\/version url script-response-body https://raw.githubusercontent.com/Mornwind/GFCN_SwitchServer/master/Temp/gfcn_switchserver_gw_temp_C.js
```
