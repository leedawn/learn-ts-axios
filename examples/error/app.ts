import axios, { AxiosError } from '../../src/index'

axios({
  method: 'get',
  url: '/error/get1'
})
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log('get1' + e)
  })

axios({
  method: 'get',
  url: '/error/get'
})
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log('error ' + e)
  })

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  })
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log('延迟', e)
    })
}, 5000)

// axios({
//   method: 'get',
//   url: '/error/timeout',
//   timeout: 2000
// })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(e => {
//     console.log(e.message)
//   })

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 3000
})
  .then(res => {
    console.log(res)
  })
  .catch((e: AxiosError) => {
    console.log('2 ', e.message)
    console.log('2 ', e.code) // 只有超时这种情况添加了 code
  })
