/*
「少女前线」跨服（iOS 端 → 安卓B服）
By: Mornwind

README:
https://github.com/Mornwind/GFCN_SwitchServer/blob/master/README.md
*/

//在以下两处等号后的双引号内，对应填入之前抓取到的B服账号数据
var access_token = "";
var open_id = "";

let body = $response.body;

body = body.replace(/"long_token":".*?",/,"").replace(/("token":)".*?"/,'$1"' + access_token + '"').replace(/("open_id":)".*?"/,'$1"' + open_id + '"');

$done({
	body: body
});