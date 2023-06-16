import request from '@/utils/request'

export function login(username, password) {
  console.log('eeeeeeee')
  return new Promise((resolve, reject) => {
    const tempObj = {
      code: 20000,
      data: {
        token: '123456'
      }
    }
    resolve(tempObj)
  })
  // return request({
  //   url: '/user/login',
  //   method: 'post',
  //   data: {
  //     username,
  //     password
  //   }
  // })
}

export function getInfo(token) {
  return new Promise((resolve, reject) => {
    const tempObj = {
      code: 20000,
      data: {
        name: '1111',
        avatar: 'https://wmw-test-1309550334.cos.ap-shanghai.myqcloud.com/wanma/pic/20236/12/1686552166995.jpeg',
        roles: ['admin']
      }
    }
    resolve(tempObj)
  })
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
