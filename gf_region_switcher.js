/*
「少女前线 跨服」（iOS客户端 → 安卓国服）
By: Mornwind

README:
https://github.com/Mornwind/GF_Region_Switcher/blob/master/README.md
*/

let url = $request.url;
let headers = $request.headers;
let body = $request.body;

url = url.replace(/ios\.transit\.gf\.ppgame\.com/g,"adr.transit.gf.ppgame.com");
headers['Host'] = 'adr.transit.gf.ppgame.com';
body = body.replace(/channel=cn_appstore/,"channel=cn_mica").replace(/platformChannelId=ios/,"platformChannelId=GWPZ");

$done({
	url: url,
	headers: headers,
	body: body
});