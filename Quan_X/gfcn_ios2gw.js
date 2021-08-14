/*
「少女前线」跨服（iOS 端 → 安卓官服）
By: Mornwind

README:
https://github.com/Mornwind/GFCN_SwitchServer/blob/master/README.md
*/

let url = $request.url;
let headers = $request.headers;
let body = $request.body;

url = url.replace(/gfcn-transit\.ios\.sunborngame\.com/,"gfcn-transit.gw.sunborngame.com");
headers['Host'] = 'gfcn-transit.gw.sunborngame.com';
body = body.replace(/channel=cn_appstore/,"channel=cn_mica").replace(/device=ios/,"device=adr").replace(/platformChannelId=ios/,"platformChannelId=GWGW");

$done({
	url: url,
	headers: headers,
	body: body
});