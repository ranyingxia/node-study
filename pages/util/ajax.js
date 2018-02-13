import axios from 'axios'

export default {
  get(url, params, successFun, errorFun) {
    axios.post(url, params)
    .then((res) => {
      const { status, data } = res
      if (status === 200) {
        if (data.success) {
          successFun && successFun(data.data)
        } else {
          errorFun && errorFun(data.message)
        }
      }
    })
    .catch((err) => {
      console.log('请求失败', err)
    })
  },
  post(url, params, successFun, errorFun) {
    axios.post(url, params)
    .then((res) => {
      console.log('post', res)
      const { status, data } = res
      if (status === 200) {
        if (data.success) {
          successFun && successFun(data.data)
        } else {
          errorFun && errorFun(data.message)
        }
      }
    })
    .catch((err) => {
      console.log('请求失败', err)
    })
  },
}
