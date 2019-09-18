export default function instace(iphone,war,Waring,password){
    let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    if(!iphone){
        war.innerHTML = '请输入手机号'
        Waring = true
    }else if(!password){
        war.innerHTML = '请输入登录密码'
    }else if(!reg.test(iphone)){
        war.innerHTML = '请输入正确的手机号'
    }else{
        Waring = false
    }
}