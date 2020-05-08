/*
「少女前线」跨服 Temp（iOS 端 → 安卓官服）
By: Mornwind

README:
https://github.com/Mornwind/GF_Region_Switcher/blob/master/README.md
*/

let url = $request.url;
let headers = $request.headers;
let body = $request.body;

url = url.replace(/ios\.transit\.gf\.ppgame\.com/,"gfcn-transit.gw.sunborngame.com");
headers['Host'] = 'gfcn-transit.gw.sunborngame.com';
body = body.replace(/channel=cn_appstore/,"channel=cn_mica&device=adr").replace(/platformChannelId=ios/,"platformChannelId=GWGW").replace(/check_version=20500/,"check_version=20501");

$done({
	url: url,
	headers: headers,
	body: body
});