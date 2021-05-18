/*
「少女前线」跨服（iOS 端 → Bilibili 服）
By: Mornwind

README:
https://github.com/Mornwind/GFCN_SwitchServer/blob/master/README.md
*/

// 先获取 Bilibili 服账号登录数据（即响应体 Response Body 中"open_id"与"token"对应的值）
// 再分别替换以下两行中双引号内的“abc”与“xyz”（双引号不要删改）
var open_id = "abc";
var token = "xyz";

// 以下部分请勿更改！以下部分请勿更改！以下部分请勿更改！
let body = $request.body;

body = body.replace(/(openid=).*?&/,'$1' + open_id + '&').replace(/(sid=).*?&/,'$1' + token + '&');

$done({
	body: body
});