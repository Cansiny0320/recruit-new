/**
 * @description: 跳转路由
 * @param {string,object}
 * @return {}
 * @author: 林其星
 */
function jump(link, that) {
  that.$router.push({
    path: link,
  });
}

export default jump;
