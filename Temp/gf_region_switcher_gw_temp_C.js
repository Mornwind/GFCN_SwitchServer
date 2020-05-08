/*
「少女前线」跨服 Temp（iOS 端 → 安卓官服）
By: Mornwind

README:
https://github.com/Mornwind/GF_Region_Switcher/blob/master/README.md
*/

let body = $response.body;

body = body.replace(/"client_version":"20501"/,'"client_version":"20500"');

$done({
	body: body
});