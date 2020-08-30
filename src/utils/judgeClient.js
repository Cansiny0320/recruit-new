/**
 * @description: 判断终端 及其 版本号
 * @param {}
 * @return {String}
 * @author: 林其星
 */
function judgeClient() {
  let u = navigator.userAgent;
  console.log(u);
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //判断是否是 android终端
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //判断是否是 iOS终端
  let version = u.match(/\d\d_\d?_?_?\d/); //取出版本号
  console.log(version[0]);
  console.log('是否是Android：' + isAndroid); //true,false
  console.log('是否是iOS：' + isIOS);
  if (isAndroid) {
    return 'Android';
  } else if (isIOS) {
    return 'IOS';
  } else {
    return 'PC';
  }
}

export default judgeClient;
