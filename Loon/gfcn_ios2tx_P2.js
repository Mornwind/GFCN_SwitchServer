/*
「少女前线」跨服（iOS 端 → 应用宝服）
By: Mornwind

README:
https://github.com/Mornwind/GFCN_SwitchServer/blob/master/README.md
*/

const cookieName = "「少女前线」跨服（iOS 端 → 应用宝服）";
const cookie1Key = "gfcn_ios2tx_open_id";
const cookie1Val = $persistentStore.read(cookie1Key);
const cookie2Key = "gfcn_ios2tx_token";
const cookie2Val = $persistentStore.read(cookie2Key);

let body = $request.body;

body = body.replace(/(openid=).*?&/,'$1' + cookie1Val + '&').replace(/(sid=).*?&/,'$1' + cookie2Val + '&');

$done({
	body: body
});