/**
 * @description: 判断终端
 * @param {}
 * @return {String}
 * @author: 林其星
 */
function judgeClient() {
  if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return 'ios';
  } else {
    return navigator.userAgent.indexOf('Android') > -1 ||
      navigator.userAgent.indexOf('Linux')
      ? 'android'
      : '';
  }
}

export default judgeClient;
