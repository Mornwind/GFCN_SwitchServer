/*
c=game&a=newserverList&channel=cn_appstore&platformChannelId=ios&check_version=20411&rnd=995854

[Script]
http-request http:\/\/ios\.transit\.gf\.ppgame\.com\/index\.php requires-body=1,script-path=Scripts/GF_Region_Switcher.js

*/

let url = $request.url;
let headers = $request.headers;

url.replace(/ios\.transit\.gf\.ppgame\.com/g,"adr.transit.gf.ppgame.com");
headers['Host'] = 'adr.transit.gf.ppgame.com';

let body = $request.body.replace(/channel=cn_appstore/, "channel=cn_mica").replace(/platformChannelId=ios/, "platformChannelId=GWPZ");

$done({
    headers: headers,
    body: body,
});