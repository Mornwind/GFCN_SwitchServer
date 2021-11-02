/*
「少女前线」跨服（iOS 端 → 渠道混服）
By: Mornwind

README:
https://github.com/Mornwind/GFCN_SwitchServer/blob/master/README.md
*/

let url = $request.url;
let headers = $request.headers;
let body = $request.body;

url = url.replace(/gfcn-transit\.ios\.sunborngame\.com/,"gfcn-transit.ly.sunborngame.com");
headers['Host'] = 'gfcn-transit.ly.sunborngame.com';
body = body.replace(/channel=cn_appstore/,"channel=cn_third").replace(/device=ios/,"device=adr").replace(/platformChannelId=ios/,"platformChannelId=GWHF");

$done({
	url: url,
	headers: headers,
	body: body
});