/*
「少女前线」跨服（iOS 端 → Bilibili 服）
By: Mornwind

README:
https://github.com/Mornwind/GFCN_SwitchServer/blob/master/README.md
*/

let url = $request.url;
let headers = $request.headers;
let body = $request.body;

url = url.replace(/https:\/\/gfcn-transit\.ios\.sunborngame\.com/,"http://gfcn-transit.bili.sunborngame.com");
headers['Host'] = 'gfcn-transit.bili.sunborngame.com';
body = body.replace(/channel=cn_appstore/,"channel=cn_bili").replace(/device=ios/,"device=adr").replace(/platformChannelId=ios/,"platformChannelId=Bili").replace(/check_version=30101/,"check_version=30100");

$done({
	url: url,
	headers: headers,
	body: body
});