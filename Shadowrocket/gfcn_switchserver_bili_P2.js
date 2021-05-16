/*
「少女前线」跨服（iOS 端 → 安卓B服）
By: Mornwind

README:
https://github.com/Mornwind/GFCN_SwitchServer/blob/master/README.md
*/

//将以下两处双引号内的“abc”和“xyz”，分别替换成之前抓取到的响应体（Response Body）中的B服账号登录数据（"open_id"与"token"对应的值）
var open_id = "abc";
var token = "xyz";

//以下部分请勿更改！以下部分请勿更改！以下部分请勿更改！
let body = $request.body;

body = body.replace(/(openid=).*?&/,'$1' + open_id + '&').replace(/(sid=).*?&/,'$1' + token + '&');

$done({
	body: body
});