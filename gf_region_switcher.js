/*
「少女前线 跨服」（iOS客户端 → 安卓国服）
By: Mornwind

README:
https://github.com/Mornwind/GF_Region_Switcher/blob/master/README.md
*/

let url = $request.url;
let headers = $request.headers;

url.replace(/ios\.transit\.gf\.ppgame\.com/g,"adr.transit.gf.ppgame.com");
headers['Host'] = 'adr.transit.gf.ppgame.com';

let body = $request.body.replace(/channel=cn_appstore/,"channel=cn_mica").replace(/platformChannelId=ios/,"platformChannelId=GWPZ");

$done({
    headers: headers,
    body: body,
});