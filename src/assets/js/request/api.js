/**
 * 项目数据请求接口相关配置
 * created by 01/01/2019 Jennifer-fuyj
 */

import axios from 'axios'
// import qs from 'qs'
//  axios 配置
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8085' : 'http://localhost:8080'
axios.defaults.withCredentials = false

// POST传参序列化
axios.interceptors.request.use((config) => {
  /* if (config.method === 'post') { // 根据项目需求是否需要转换格式
    config.data = qs.stringify(config.data)
  } */
  var token = null // 存储需要接口连接时验证（比如用户token等）的数据，此时设置为null，可根据项目不同，通过不同方式（比如存放在localStorage里）获取到并赋值
  if (token) {
    //  同域处理
    config.headers.common.token = token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

const SUCCESS = '00' // 成功时返回的code码，根据项目的不同和后台一致规定code码，此项目使用'00'

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.code === SUCCESS) {
    return Promise.resolve(res)
  }
  return Promise.reject(new Error(res))
}, (error) => {
  console.log('error=>', error)
  return Promise.reject(new Error(error))
})

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        console.log('err', err)
        reject(new Error(err))
      })
      .catch((error) => {
        reject(new Error(error))
      })
  })
}

export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(new Error(err))
      })
      .catch((error) => {
        reject(new Error(error))
      })
  })
}

export function fetchPut (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(new Error(err))
      })
      .catch((error) => {
        reject(new Error(error))
      })
  })
}

export function fetchDelete (url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(new Error(err))
      })
      .catch((error) => {
        reject(new Error(error))
      })
  })
}

export default {
  httpGet (url, getparams) {
    return fetchGet(url, { params: getparams })
  },
  httpPost (url, params) {
    return fetch(url, params)
  },
  httpPut (url, params) {
    return fetchPut(url, params)
  },
  httpDelete (url, getparams) {
    return fetchDelete(url, { params: getparams })
  }
}