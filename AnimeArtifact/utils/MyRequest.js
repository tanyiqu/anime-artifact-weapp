/**
 * 获取网页文本
 * @param {string} url url链接
 */
const get = (url) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      success: res => {
        resolve(res.data);
      },
      fail: err => {
        reject(err);
      }
    })
  });

}


module.exports = {
  get: get
}