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
  let cookie1 = $persistentStore.write(cookie1Val, cookie1Key);
  let cookie2 = $persistentStore.write(cookie2Val, cookie2Key);
  if (cookie1 && cookie2) {
    let msg = `${cookieName}`;
    $notification.post(msg, 'Bilibili 服账号数据获取成功', '详见日志');
    console.log(msg + "\n");
    console.log("open_id" + "\n" + cookie1Val);
    console.log("token" + "\n" + cookie2Val);
  }
}

$done({
	body: JSON.stringify(body)
});