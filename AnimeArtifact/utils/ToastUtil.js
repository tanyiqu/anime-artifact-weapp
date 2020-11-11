/**
 * 普通Toast
 * @param {String} msg 文本
 */
function toast(msg) {
  wx.showToast({
    icon: "none",
    title: msg,
  });
}

/**
 * 成功toast
 * @param {String} msg 文本
 */
function success(msg) {
  wx.showToast({
    title: msg,
  });
}



module.exports = {
  toast: toast,
  success: success
}