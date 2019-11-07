import Mock from 'mockjs'

const json =function (data){
  return JSON.parse(data)
}
const login = function (options){
  const data= json(options.body)
  if(data.userName !== 'admin') {
    return {
      status:304,
      message:'用户名不存在'
    }
  }
  if(data.password != '12345678') {
    return {
      status:304,
      message:'密码错误'
    }
  }
  return {
    status:200,
    message:'登录成功'
  }
}




Mock.mock('/login','post',login)