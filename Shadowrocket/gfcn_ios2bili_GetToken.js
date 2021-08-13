/*
「少女前线」跨服（iOS 端 → Bilibili 服）
By: Mornwind

README:
https://github.com/Mornwind/GFCN_SwitchServer/blob/master/README.md
*/

let body = JSON.parse($response.body);

var open_id = body.open_id;
var token = body.token;

console.log("\n\n" + "===============" + "\n\n" + "「少女前线」跨服（iOS 端 → Bilibili 服）" + "\n\n" + "获取账号数据 结果如下：" + "\n\n" + "open_id 为：" + "\n" + open_id + "\n\n" + "token 为：" + "\n" + token + "\n\n" + "===============" + "\n");

$done({
	body: JSON.stringify(body)
});