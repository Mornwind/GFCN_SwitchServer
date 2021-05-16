/*
「少女前线」跨服（iOS 端 → 安卓B服）
By: Mornwind

README:
https://github.com/Mornwind/GFCN_SwitchServer/blob/master/README.md
*/

//将以下两处双引号内的“abc”和“xyz”，分别替换成之前抓取到的响应体（Response Body）中的B服账号登录数据（"token"与"open_id"的对应值）
var token = "abc";
var open_id = "xyz";

//以下部分请勿更改！
let body = $response.body;

body = body.replace(/"long_token":".*?",/,"").replace(/("token":)".*?"/,'$1"' + token + '"').replace(/("open_id":)".*?"/,'$1"' + open_id + '"');

$done({
	body: body
});