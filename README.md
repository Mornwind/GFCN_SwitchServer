# 「少女前线 跨服」（iOS客户端 → 安卓国服）
 > By: [Mornwind](https://github.com/Mornwind/GF_Region_Switcher) 

## 参考来源
 > ① 霞ヶ丘詩羽x：[B站专栏（cv3630717）](https://www.bilibili.com/read/cv3630717)

## 配置信息
### ① Surge 4
```
[Script]
# 少女前线 跨服
http-request ^http:\/\/ios\.transit\.gf\.ppgame\.com\/index\.php requires-body=1,script-path=https://raw.githubusercontent.com/Mornwind/GF_Region_Switcher/master/gf_region_switcher.js
```

### ② Quantumult X
```
[rewrite_local]
# 少女前线 跨服
^http:\/\/ios\.transit\.gf\.ppgame\.com\/index\.php url script-request-body gf_region_switcher.js
```