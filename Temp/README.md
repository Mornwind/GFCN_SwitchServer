# 「少女前线」跨服 Temp（iOS客户端 → 安卓国服）
 > By: [Mornwind](https://github.com/Mornwind)
 > 
 > GitHub Link: [GF_Region_Switcher](https://github.com/Mornwind/GF_Region_Switcher) 

## 参考来源
 > ① 霞ヶ丘詩羽x：[B站专栏（cv3630717）](https://www.bilibili.com/read/cv3630717)

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
https://raw.githubusercontent.com/Mornwind/GF_Region_Switcher/master/Temp/gf_region_switcher_gw_temp.sgmodule
```

#### ② 手动编辑配置

```
[Script]
# 少女前线 跨服
gf_region_switcher_gw_temp_A.js = type=http-request,pattern=^http:\/\/ios\.transit\.gf\.ppgame\.com\/index\.php,script-path=https://raw.githubusercontent.com/Mornwind/GF_Region_Switcher/master/Temp/gf_region_switcher_gw_temp_A.js,requires-body=1
gf_region_switcher_gw_temp_B.js = type=http-response,pattern=^http:\/\/gfcn-transit\.gw\.sunborngame\.com\/index\.php,script-path=https://raw.githubusercontent.com/Mornwind/GF_Region_Switcher/master/Temp/gf_region_switcher_gw_temp_B.js,requires-body=1
gf_region_switcher_gw_temp_C.js = type=http-response,pattern=^http:\/\/gfcn-game\.gw(.*)\.sunborngame\.com\/index\.php\/(.+?)\/Index\/version,script-path=https://raw.githubusercontent.com/Mornwind/GF_Region_Switcher/master/Temp/gf_region_switcher_gw_temp_C.js,requires-body=1
```

### ⑵ Quantumult X
```
[rewrite_local]
# 少女前线 跨服
^http:\/\/ios\.transit\.gf\.ppgame\.com\/index\.php url 307 http://gfcn-transit.gw.sunborngame.com/index.php
^http:\/\/gfcn-transit\.gw\.sunborngame\.com\/index\.php url script-request-body gf_region_switcher_gw_temp_A.js
^http:\/\/gfcn-transit\.gw\.sunborngame\.com\/index\.php url script-response-body gf_region_switcher_gw_temp_B.js
^http:\/\/gfcn-game\.gw(.*)\.sunborngame\.com\/index\.php\/(.+?)\/Index\/version url script-response-body gf_region_switcher_gw_temp_C.js
```
