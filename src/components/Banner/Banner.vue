<template>
    <div>
        <div class="title">
            <div class="wrap">
                <h1 class="logo"></h1>
                <ul class="wrap-li">
                    <li class="only"> 发现音乐 <sub class="cor">&nbsp;</sub> </li>
                    <li> 我的音乐 </li>
                    <li> 朋友 </li>
                    <li> 商城 </li>
                    <li> 音乐人 </li>
                    <li> 
                        下载客户端 
                        <span class="cur"></span>
                    </li>
                </ul>
                <div class="search-t">
                    <span class="to">
                        <input type="text" placeholder="音乐/视频/电台/用户" v-model="SearcgList">
                        <!-- <label> 音乐/视频/电台/用户 </label> -->
                    </span>
                    <div class="search_li" v-show="SearchHistory">
                        <div class="m-search_li">
                            <p class="not"> <a href="###">搜"{{SearcgList}}" 相关用户</a> </p>
                            <div class="rap f-c">
                                <div class="item">
                                    <h3>
                                        <i></i>
                                        <em>单曲</em>
                                    </h3>
                                    <ul class="f-c">
                                        <li v-for="(item, index) in searchDanqu" :key="index" @click.prevent="Garouseldata(item.id)">
                                            <a href="###">
                                                {{item.name}}-{{item.al.name}} {{item.ar[0].name}}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="item">
                                    <h3>
                                        <i class="icon"></i>
                                        <em>歌手</em>
                                    </h3>
                                    <ul class="f-c app">
                                        <li v-for="(item, index) in searchZhuanji" :key="index">
                                            <a href="###">
                                                {{item.name}}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="item">
                                    <h3>
                                        <i class="icon1"></i>
                                        <em>专辑</em>
                                    </h3>
                                    <ul class="f-c">
                                        <li v-for="(item, index) in searchZhuanji" :key="index">
                                            <a href="###">
                                                {{item.name}}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="item">
                                    <h3>
                                        <i class="icon2"></i>
                                        <em>视频</em>
                                    </h3>
                                    <ul class="f-c app">
                                        <li v-for="(item, index) in searchShipin" :key="index">
                                            <a href="###">
                                                {{item.title}}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="item">
                                    <h3>
                                        <i class="icon2"></i>
                                        <em>歌单</em>
                                    </h3>
                                    <ul class="f-c">
                                        <li v-for="(item, index) in searchGedan" :key="index">
                                            <a href="###">
                                                {{item.name}}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="###" class="creation" @mouseover="changeActive" ref="creation" @mouseout="removeActive">创作者中心</a>
                <div class="login" @mouseover="loginShow" @mouseout="loginHid">
                    <div v-show="NotLoginIn">
                        <a href="###" ref="login"> 登录 </a>
                        <div class="login_show" v-show="LoginHiden">
                            <ol>
                                <li @click="EnterLogin">
                                    <i class="phone icon"></i>
                                    手机号登录
                                </li>
                                <li>
                                    <i class="wechat icon"></i>
                                    <a href="https://music.163.com/api/sns/authorize?snsType=10&clientType=web2&callbackType=Login&forcelogin=true">微信登录</a> 
                                </li>
                                <li>
                                    <i class="qq icon"></i>
                                    <a href="https://music.163.com/api/sns/authorize?snsType=5&clientType=web2&callbackType=Login&forcelogin=true">QQ登录</a> 
                                </li>
                                <li>
                                    <i class="sina_weibo icon"></i>
                                    <a href="https://music.163.com/api/sns/authorize?snsType=2&clientType=web2&callbackType=Login&forcelogin=true">新浪微博登录</a> 
                                </li>
                                <li>
                                    <i class="netease_mailbox icon"></i>
                                    网易邮箱登录
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div v-show="LoginIn" >
                        <a href="###">
                            <img :src="this.Loginlist.avatarUrl" alt="">
                        </a>
                        <div class="login_show" v-show="LoginHiden">
                            <ol>
                                <li>
                                    <i class="phone icon"></i>
                                    <a href="###">我的主页</a> 
                                </li>
                                <li>
                                    <i class="wechat icon"></i>
                                    <a href="###">我的消息</a>
                                </li>
                                <li>
                                    <i class="qq icon"></i>
                                    <a href="###">我的等级</a>
                                </li>
                                <li>
                                    <i class="sina_weibo icon"></i>
                                    <a href="###">VIP会员</a>
                                </li>
                                <li>
                                    <i class="netease_mailbox icon"></i>
                                    <a href="###">个人设置</a>
                                </li>
                                <li>
                                    <i class="netease_mailbox icon"></i>
                                    <a href="###">实名认证</a>
                                </li>
                                <li @click="RetreatFrom">
                                    <i class="netease_mailbox icon"></i>
                                    <a href="###">退出</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div class="find">
                <ul>
                    <li> <router-link to="/home/tuijian"> <em class="on">推荐</em> </router-link> </li>
                    <li> <router-link to="/home/ranking"> <em>排行榜</em> </router-link> </li>
                    <li> <router-link to="/home/songlis"> <em>歌单</em> </router-link> </li>
                    <li> <router-link to="/home/anchor "> <em>主播电台</em> </router-link> </li>
                    <li> <router-link to="/home/singer"> <em>歌手</em> </router-link> </li>
                    <li> <router-link to="/home/novice"> <em>新手碟台</em> </router-link> </li>
                </ul>
            </div>
        </div>
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
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

export default {
    data() {
        return {
            time: 60,
            searchDanqu: '',        // 搜索历史中单曲的数据
            searchZhuanji: '',      // 搜索历史中专辑的数据
            searchShipin: '',       // 搜索历史中视频的数据
            searchGeshou: '',       // 搜索历史中歌手的数据
            searchGedan: '',        // 搜索历史中歌单的数据
            MobilePhone: '手机号登录',       // title的数据
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
            Loginlist: '',          // 登录后获取的个人数据
            SearcgList: '',         // 搜索关键词
            SearchHistory: false,   // 搜索历史的显示隐藏


            LoginHiden: false,
            liList: [],
            EnterHide: false,
            LoginIn: false,         // 已登录状态
            NotLoginIn: true,       // 未登录状态
            Error: false,           // 验证码输入错误时报错显示隐藏
            Nickname: false,        // 登录成功后设置昵称的显示隐藏
            ErrorName: false,       // 输入昵称错误后的报错显示隐藏
            EntryName: '',          // 输入的昵称数据
            Loginlist: '',          // 登录后保存在本地的个人信息
        }
    },
    created() {
        // 登录页面时先判断本地存储中是否存在个人数据
        let list = JSON.parse(localStorage.getItem("UsertypeSelect") || '[]')
        // console.log(list)
        if(list == ''){
            this.LoginIn = false
            this.NotLoginIn = true
        }else{
            this.Loginlist = list.profile
            this.LoginIn = true
            this.NotLoginIn = false
        }
    },
    watch: {
        // 搜索
        SearcgList: function(IndexValue){
            // 先从本地获取搜索的历史

            if(IndexValue.length > 0){
                this.Search()
                this.SearchHistory = true
                // 1：单曲  100：专辑  1014：视频  1000：歌手  1002：歌单  1018：综合
            }else{
                this.SearchHistory = false
            }
        }
        
    },
    methods: {
        // 搜索
        Search(){
            this.axios.get('http://localhost:3000/search?keywords=' + this.SearcgList +'&type=1018').then(res => {
                this.searchDanqu = res.data.result.song.songs.slice(0,3)
                this.searchZhuanji = res.data.result.album.albums
                this.searchShipin = res.data.result.video.videos.slice(0,2)
                this.searchGeshou = res.data.result.artist.artists
                this.searchGedan = res.data.result.playList.playLists.slice(0,3)
                // if(res.data.result.video.videos == ''){
                //     this.VideoShow = false
                // }else if(res.data.result.artist.artists == ''){
                //     this.SonglistShow = false
                // }
                // console.log(this.searchDanqu)
            })
        },
        changeActive(){
            this.$refs.creation.style.border = "1px solid #fff"
        },
        removeActive(){
            this.$refs.creation.style.border = "1px solid #4F4F4F"
        },
        loginShow(){
            this.$refs.login.style.color = "#fff"
            this.LoginHiden = true
        },
        loginHid(){
            this.$refs.login.style.color = "#ccc"
            this.LoginHiden = false
        },
        EnterLogin(){
            document.getElementById('Enter').style.display = 'block'
        },
        Close(){  
            this.$refs.Enters.style.display = "none"
        },
        // 登录判断
        Login(){
            this.axios.get('http://localhost:3000/login/cellphone?phone='+ this.Iphone +'&password=' + this.Passwords).then(res => {
                if(res){
                    // 将登录成功后的个人信息保存至 localStorage 中
                    var obj = res.data
                    localStorage['UsertypeSelect']=JSON.stringify(obj)
                    this.$refs.Enters.style.display = "none"
                    this.$refs.Wars.innerHTML = ''
                    this.Warning = false
                    this.LoginIn = true
                    this.NotLoginIn = false
                    // 页面刷新
                    this.$router.push('/transit')
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
        // 退出登录
        RetreatFrom(){
            // 退出登录删除localstorage中保存的个人信息
            window.localStorage.removeItem("UsertypeSelect")
            this.axios.get('http://localhost:3000/logout').then(res => {
                // console.log(res)
            })
            // 页面刷新
            this.$router.push('/transit')
        },
        // 跳转注册页面
        Nonumber(){
            this.MobilePhone = '手机号注册'
            this.Nonumbers = false
            this.iphoneShow = false
            this.registerSwho = true
            this.$refs.reTurn.innerHTML = '< 返回登录'
        },
        // 手机号注册页面验证
        nextLogin(){
            // console.log(res)
            // 输入判断
            // 检测号码已经是否被注册
            this.axios.get('http://localhost:3000/cellphone/existence/check?phone=' + this.regisIphone).then(res => {
                console.log(res.data)
                let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                
                if(res.data.exist == 1){
                    this.$refs.regisWaringCont.innerHTML = '手机号码已被注册'
                    this.regisWaring = true
                }else if(this.regisIphone == ''){
                    this.$refs.regisWaringCont.innerHTML = '请输入手机号'
                    this.regisWaring = true
                }else if(!this.regisPasswords){
                    this.$refs.regisWaringCont.innerHTML = '请输入登录密码'
                    this.regisWaring = true
                }else if(!reg.test(this.regisIphone)){
                    this.$refs.regisWaringCont.innerHTML = '请输入正确的手机号'
                    this.regisWaring = true
                }else if(res.data.exist == -1 || res.data.hasPassword == false || res.data.nickname == null){
                    this.registerSwho = false
                    this.Resend = true
                    this.setTime()
                }
            })
        },
        // 验证码的验证
        Contrast(){
            // 发送验证码
            this.axios.get('http://localhost:3000/captcha/sent?phone=' + this.regisIphone).then(res => {
                // console.log(res)
                    console.log(this.regisIphone)
                if(res){
                     // 验证验证码
                    this.axios.get('http://localhost:3000/captcha/verify?phone='+ this.regisIphone +'&captcha=' + this.Verification).then(res => {
                        if(res){
                            this.Nickname = true
                            this.Resend = false
                            this.registerSwho = false
                        }
                    }).catch(err => {
                        if(this.Verification == '' || err){
                            this.Error = true
                        }
                    })
                }
            }).catch(err => {
                console.log(err)
            })
                
           
        },
        // 注册成功昵称之后
        OpenMusic(){
            // 未写
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
            this.Contrast()
        },
        // 点击返回登录首页
        goback(){
            this.MobilePhone = '登录'
            this.Homepage = true
            this.registerSwho = false
            this.iphoneShow = false
            this.Other = false
            this.Resend = false
            this.newResend = false
            this.Nickname = false
        },
        // 手机号登录页面跳转
        IphoneLogin(){
            this.MobilePhone = '手机号登录'
            this.Homepage = false
            this.iphoneShow = true
            this.Other = true
            this.Nonumbers = true
            this.$refs.reTurn.innerHTML = '< 其它登录方式'
        },
        // 首页注册页面跳转
        registLogin(){
            this.MobilePhone = '手机号注册'
            this.Homepage = false
            this.registerSwho = true
            this.Other = true
        },
        Garouseldata(id){
            // console.log(id)
            // 获取id保存在localStorage中 让每次刷新页面之后都有数据
            localStorage['DanquId']=JSON.stringify(id)
            this.$router.push({name: 'Carouseldata', params: {id} })
        },
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
@import url(../../assets/less/banner.less);
@import url(../../assets/less/iphoneenter.less);
</style>