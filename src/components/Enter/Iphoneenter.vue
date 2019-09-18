<template>
    <div class="enter" ref="Enters" v-show="EnterHide" id="Enter">
        <div class="title">
            <div class="iphoe"> <span> {{MobilePhone}} </span> <i class="close" @click="Close"></i> </div>  
        </div>
        <div class="g-log" v-show="Homepage">
            <div>
                <div class="g-wi">
                    <div class="g-min">
                        <p></p>
                        <div class="g-loi">
                            <a href="###" @click="IphoneLogin"> <i>手机号登录</i> </a>
                        </div>
                        <div class="g-loi">
                            <a href="###" @click="registLogin"> <i>注册</i> </a>
                        </div>
                    </div>
                    <div class="g-mio">
                        <ul>
                            <li> <a href="###"> <i class="icon_wei"></i> 微信登录 </a> </li>
                            <li> <a href="###"> <i class="icon_qq"></i> QQ登录 </a> </li>
                            <li> <a href="###"> <i class="icon_webo"></i> 微博登录 </a> </li>
                            <li> <a href="###"> <i class="icon_wayi"></i> 网易邮箱登录 </a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <!-- 登录首页面 -->
            <!-- 登录页面 -->
            <div class="f-log" v-show="iphoneShow">
                <form action="GET">
                    <div class="f-log1">
                        <a href="###" class="cur"> 
                            <span class="code"> +86 </span>
                            <span class="codi">  </span>
                        </a>
                        <div class="text">
                            <input type="text" placeholder="请输入手机号" autocomplete="on" v-model="Iphone">
                        </div>
                    </div>
                    <div class="pass">
                        <input type="password" placeholder="请输入密码" v-model="Passwords" autocomplete="on">
                    </div>
                    <div class="warning" v-show="Warning">
                        <i></i>
                        <span ref="Wars"></span>
                    </div>
                    <div class="label">
                        <label> <input type="checkbox" checked>自动登录 </label>
                        <a href="###">忘记密码?</a>
                    </div>
                    <div class="login">
                        <a href="###" class="btn" @click.prevent="Login"> <i class="btn">登录</i> </a>
                    </div>
                </form>
            </div>
            <!-- 注册页面 -->
            <div class="f-loi f-log" v-show="registerSwho">
                <div class="iphoe">
                    <label> 手机号: </label>
                </div>
                <div class="f-log1 f-loi1">
                    <a href="###" class="cur"> 
                        <span class="code"> +86 </span>
                        <span class="codi">  </span>
                    </a>
                    <div class="text">
                        <input type="text" placeholder="请输入手机号" autocomplete="on" v-model="regisIphone">
                    </div>
                </div>
                <div class="iphoe f-loi1">
                    <label> 密码: </label>
                </div>
                <div class="pass">
                    <input type="password" placeholder="设置登录密码，不少于6位" v-model="regisPasswords" autocomplete="on">
                </div>
                <div class="warning" v-show="regisWaring">
                    <i></i>
                    <span ref="regisWaringCont"></span>
                </div>
                <div class="login">
                    <a href="###" class="btn" @click.prevent="nextLogin"> <i class="btn">下一步</i> </a>
                </div>
            </div>
            <!-- 发送验证码页面 -->
            <div class="f-loi f-log" v-show="Resend">
                <div class="f-los">
                    <p>
                        您的手机号：
                        <span>
                            + <span> 86 </span>&nbsp;
                            <span> {{regisIphone | Iphonefilter}} </span>
                        </span>
                    </p>
                    <p> 为了安全，我们会给你发送短信验证码 </p>
                    <div class="info">
                        <div>
                            <div class="verification"> <input type="text" v-model="Verification" style="border: none;border-bottom: 1px solid #cdcdcd;letter-spacing: 37px;"> </div>
                            <div class="ciry" v-show="Error">
                                <i></i>
                                <span style="color: red">验证码错误</span>
                            </div>
                            <div class="time">
                                <span v-show="Timer"> {{this.time}} s </span>
                                <a href="###" v-show="newResend" @click="ResendFa"> 重新发送 </a>
                            </div>
                        </div>
                    </div>
                    <div class="login" @click.prevent="Contrast">
                        <a href="###" class="btn"> <i class="btn">下一步</i> </a>
                    </div>
                </div>
            </div>
            <div class="f-loi f-log" v-show="Nickname">
                <div class="nick">
                    <p>取一个昵称，让大家记住你</p>
                    <div class="shu_name">
                        <input type="text" placeholder="昵称不少于4个字母或2个汉字">
                    </div>
                    <div class="error" v-show="ErrorName">
                        <i></i>
                        <span v-model="EntryName">请输入昵称</span>
                    </div>
                    <div class="butt">
                        <a href="###" @click.prevent="OpenMusic">
                            <i>开启云音乐</i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="other" v-show="Other">
                <a href="###" ref="reTurn" @click="goback"> <&nbsp;&nbsp;其它登录方式</a>
                <a href="###" class="no" @click.prevent="Nonumber" v-show="Nonumbers"> 没有账号，免费注册&nbsp;&nbsp;> </a>
            </div>
        </div>
    </div>
</template>

<script>

import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

// import request from '../../require/requist.js'
export default {
    data() {
        return {
            time: 60,
            Homepage: false,        // 登录首页
            Warning: false,         // 登录页面警示显示隐藏
            condition: true,
            Iphone: '',             // 登录页面手机号数据
            Passwords: '',          // 登录页面密码数据
            iphoneShow: true,       // 登录页面显示隐藏
            registerSwho: false,    // 注册页面显示隐藏
            regisIphone: '',        // 注册页面手机号数据
            regisPasswords: '',     // 注册页面密码数据
            regisWaring: false,     // 注册页面警示显示隐藏
            reTurn: '',
            Nonumbers: true,        // 没有账号的显示隐藏
            regisWaringCont: '',    // 注册页面警示数据
            Verification: '',       // 验证码数据
            newResend: false,       // 发送验证码页面的显示隐藏
            Resend: false,          // 重新发送的显示隐藏
            Timer: true,            // 计时器
            Other: true,            // 登录底部
            list: '',
            
        }
    },
    created() {
        // console.log(this.$refs)
    },
    methods: {
        Close(){  
            this.$refs.Enters.style.display = "none"
        },
        // 登录判断
        Login(){
            this.axios.get('http://localhost:3000/login/cellphone?phone='+ this.Iphone +'&password=' + this.Passwords).then(res => {
                if(res){
                    this.$refs.Enters.style.display = "none"
                    this.$refs.Wars.innerHTML = ''
                    this.Warning = none
                    this.list = res.data
                    
                }
            }).catch(err => {
                if(err){
                    let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                    if(!this.Iphone){
                        this.$refs.Wars.innerHTML = '请输入手机号'
                        this.Warning = true
                    }else if(!this.Passwords){
                        this.$refs.Wars.innerHTML = '请输入登录密码'
                        this.Warning = true
                    }else if(!reg.test(this.Iphone)){
                        this.$refs.Wars.innerHTML = '请输入正确的手机号'
                        this.Warning = true
                    }else{
                        this.Warning = false
                    }
                }
            })
        },
        // 跳转注册页面
        Nonumber(){
            this.Nonumbers = false
            this.iphoneShow = false
            this.registerSwho = true
            this.$refs.reTurn.innerHTML = '< 返回登录'
        },
        // 手机号注册页面验证
        nextLogin(){
            // request({
            //     url: '/cellphone/existence/check?phone=' + this.regisIphone
            // }).then(res => {
                
            // })
            this.axios.get('http://localhost:3000/cellphone/existence/check?phone=' + this.regisIphone).then(res => {
                // console.log(res)
                        // this.registerSwho = false
                        // this.Resend = true
                        // this.setTime()

            }).catch(err => {
                console.log(err)
                if(err){
                    let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                    if(!this.regisIphone){
                        this.$refs.regisWaringCont.innerHTML = '请输入手机号'
                        this.regisWaring = true
                    }else if(!this.regisPasswords){
                        this.$refs.regisWaringCont.innerHTML = '请输入登录密码'
                        this.regisWaring = true
                    }else if(!reg.test(this.regisIphone)){
                        this.$refs.regisWaringCont.innerHTML = '请输入正确的手机号'
                        this.regisWaring = true
                    }else if(err){
                        this.$refs.regisWaringCont.innerHTML = '手机号已被注册'
                        this.regisWaring = true
                    }else{
                        this.registerSwho = false
                        this.Resend = true
                        this.setTime()
                    }
                }

            })
            
        },
        // 倒计时
        setTime(){
            let set = setInterval(() => {
                this.time--
                if(this.time <= 0){
                    this.time = 59
                    this.newResend = true
                    this.Timer = false
                    clearInterval(set)
                }
            },1000)
        },
        // 点击重新发送验证码
        ResendFa(){
            this.newResend = false
            this.Timer = true
            this.setTime()
        },
        // 点击返回登录首页
        goback(){
            this.Homepage = true
            this.registerSwho = false
            this.iphoneShow = false
            this.Other = false
        },
        // 手机号登录页面跳转
        IphoneLogin(){
            this.Homepage = false
            this.iphoneShow = true
            this.Other = true
            this.Nonumbers = true
            this.$refs.reTurn.innerHTML = '< 其它登录方式'
        },
        // 首页注册页面跳转
        registLogin(){
            this.Homepage = false
            this.registerSwho = true
            this.Other = true
        }
    },
    // 私有过滤器
    filters: {
        // 手机号码的过滤器
        Iphonefilter(val){
            let str = val.toString()
            return `${str.substring(0,3)}****${str.substring(str.length-4)}`
        }
    }
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/iphoneenter.less);
</style>