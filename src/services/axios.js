import originAxios from 'axios';

export default function request(option){
  return new Promise((resolve,reject) => {
    //1. 创建axios实例
    const instance =originAxios.create({
      baseURL:'http://123.207.32.32:9001/',
      timeout:10000
    })
    // 配置请求和相应拦截
    instance.interceptors.request.use(config=>{
      //发送网络请求在页面中添加一个loading组件，作为动画
      //某些请求要求用户必须登录，判断用户是否有token，如果没有token跳转loading页面
      //对请求的参数进行序列化
      // config.data=qs.stringify(config.data);
      return config
    },err=>{
      return err
    })


    instance.interceptors.response.use(response=>{
      return response.data
    },err=>{
      if (err & err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break;
          case 401:
            err.message='未授权访问'
            break;
          default:
            err.message='其他错误信息'
        }
      }
      return err
    })

    instance(option).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })

  })
}