//  request.js
import axios from "axios"

export function request (config) {
  const ax = axios.create({
    baseURL:"https://api.it120.cc/anxiaodong",
    timeout:60000,
    method:config.method || 'get',
    headers:{
      "Content-Type":"application/x-www-form-urlencoded"
    }
  })

  ax.interceptors.request.use(req => {
    // console.log(req)
    const d = req.data
    var s = ""
    for(var i in d){
      s += i + "=" + d[i] + "&"
    }
    // console.log(s)
    req.data = s
    return req
  })

  return ax(config)
}

export function request1 (config) {
  const ax = axios.create({
    baseURL:process.env.VUE_APP_BASE_URL,
    timeout:60000,
    method:config.method || 'get',
    headers:{
      "Content-Type":"application/x-www-form-urlencoded",
      "X-Token":sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null
    }
  })

  ax.interceptors.request.use(req => {
    // console.log(req)
    const d = req.data
    var s = ""
    for(var i in d){
      s += i + "=" + d[i] + "&"
    }
    // console.log(s)
    req.data = s
    return req
  })

  return ax(config)
}