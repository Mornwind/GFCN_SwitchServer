/*
「少女前线」跨服（iOS 端 → Bilibili 服）
By: Mornwind

README:
https://github.com/Mornwind/GFCN_SwitchServer/blob/master/README.md
*/

let body = JSON.parse($response.body);

const cookieName = "「少女前线」跨服（iOS 端 → Bilibili 服）";
const cookie1Key = "gfcn_ios2bili_open_id";
const cookie1Val = body.open_id;
const cookie2Key = "gfcn_ios2bili_token";
const cookie2Val = body.token;

if (cookie1Val && cookie2Val) {
  let cookie1 = $prefs.setValueForKey(cookie1Val, cookie1Key);
  let cookie2 = $prefs.setValueForKey(cookie2Val, cookie2Key);
  if (cookie1 && cookie2) {
    let msg = `${cookieName}`;
    $notify(msg, 'Bilibili 服账号数据获取成功', '详见日志');
    console.log("\n\n" + "===============" + "\n\n" + msg + "\n\n" + "获取账号数据 结果如下：" + "\n\n" + "open_id 为：" + "\n" + cookie1Val + "\n\n" + "token 为：" + "\n" + cookie2Val + "\n\n" + "===============" + "\n");
  }
}

$done({
	body: JSON.stringify(body)
});