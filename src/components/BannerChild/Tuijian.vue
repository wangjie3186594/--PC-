<template>
    <div class="cor">
        <div class="top">
            <div class="swiper-container roler1 swiper-no-swiping">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in imageList" :key="index" :style="{backgroundImage: 'url(' + item.back + ')', backgroundRepeat: 'repeat-x'}" @click="CorrespondingList(item.targetId)">
                        <img :src="item.imageUrl">
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev" style="left: 14%"></div>
                <div class="swiper-button-next" style="right: 14%"></div>
            </div>
        </div>
        <div class="down">
            <a href="###" class="onload"> 下载客户端 </a>
            <p> PC 安卓 iPhone WP iPad Mac 六大客户端 </p>
        </div>
        <div class="content">
            <div class="dowo">
                <div class="fg_lef">
                    <div class="fg_cont">
                        <div class="fg_title">
                            <a href="###" class="car"> 热门推荐 </a>
                            <div class="tab">
                                <div class="cli"> 华语 <span>|</span> </div>
                                <div class="cli"> 流行 <span>|</span> </div>
                                <div class="cli"> 摇滚 <span>|</span> </div>
                                <div class="cli"> 民谣 <span>|</span> </div>
                                <div class="cli"> 电子 </div>
                            </div>
                            <span class="more">
                                <a href="###" @click.prevent="AllTuijian"> 更多 </a>
                                <i></i>
                            </span>
                        </div>
                        <!-- 内容 -->
                        <div class="import">
                            <ul>
                                <li class="timer on"> <Huayu></Huayu> </li>
                                <li class="timer"> <Liuxing></Liuxing> </li>
                                <li class="timer"> <Yaogun></Yaogun> </li>
                                <li class="timer"> <Minyao></Minyao> </li>
                                <li class="timer"> <Dianzi></Dianzi> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fg_rig">
                <!-- 未登录状态 -->
                <div class="info" v-show="NotLogin">
                    <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    <a href="###"> 用户登录 </a>
                </div>
                <!-- 登录状态 -->
                <div class="Hideinfo" v-show="Login">
                    <div style="display: inline-block;">
                        <a href="###" class="portrait">
                            <img :src="this.Loginlist.avatarUrl" alt="">
                        </a>
                        <div class="fcb">
                            <h4 class="name"> <a href="###">{{this.Loginlist.nickname}}</a> </h4>
                            <p class="grade"> <a href="###"> {{this.Loginlist.vipType}} <i></i> </a> </p>
                            <div class="butto"> <a href="###"> <i>签到</i> </a> </div>
                        </div>
                    </div>
                    <ul>
                        <li class="frist"> 
                            <a href="###"> 
                                <strong>{{this.Loginlist.followeds}}</strong> 
                                <span>动态</span>
                            </a> 
                        </li>
                        <li>
                            <a href="###"> 
                                <strong>{{this.Loginlist.follows}}</strong> 
                                <span>关注</span>
                            </a> 
                        </li>
                        <li>
                            <a href="###"> 
                                <strong>{{this.Loginlist.eventCount}}</strong> 
                                <span>粉丝</span>
                            </a> 
                        </li>
                    </ul>
                </div>
                <div class="singer">
                    <h3 class="title">
                        <span>入驻歌手</span>
                        <a href="###">查看全部 ></a>
                    </h3>
                    <ul class="cont">
                        <li v-for="(item, index) in Settledlist" :key="index">
                            <a href="###">
                                <div class="img_url">
                                    <img :src="item.img1v1Url" alt="">
                                </div>
                                <div class="text_rl">
                                    <h4> <span>{{item.name}}</span> </h4>
                                    <p>{{item.alias[0]}} {{item.alias[1]}}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="want">
                        <a href="###"> <i>申请成为网易音乐人</i> </a>
                    </div>
                </div>
                <div class="remen">
                    <h3>热门主播</h3>
                    <ul>
                        <li>
                            <a href="###" class="left"> <img src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt=""> </a>
                            <div class="right">
                                <p class="top">
                                    <a href="###">陈立</a>
                                    <i></i>
                                </p>
                                <p class="bottom">心理学家、美食家陈立教授</p>
                            </div>
                        </li>
                        <li>
                            <a href="###" class="left"> <img src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt=""> </a>
                            <div class="right">
                                <p class="top">
                                    <a href="###">陈立</a>
                                    <i></i>
                                </p>
                                <p class="bottom">心理学家、美食家陈立教授</p>
                            </div>
                        </li>
                        <li>
                            <a href="###" class="left"> <img src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt=""> </a>
                            <div class="right">
                                <p class="top">
                                    <a href="###">陈立</a>
                                    <i></i>
                                </p>
                                <p class="bottom">心理学家、美食家陈立教授</p>
                            </div>
                        </li>
                        <li>
                            <a href="###" class="left"> <img src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt=""> </a>
                            <div class="right">
                                <p class="top">
                                    <a href="###">陈立</a>
                                    <i></i>
                                </p>
                                <p class="bottom">心理学家、美食家陈立教授</p>
                            </div>
                        </li>
                        <li>
                            <a href="###" class="left"> <img src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt=""> </a>
                            <div class="right">
                                <p class="top">
                                    <a href="###">陈立</a>
                                    <i></i>
                                </p>
                                <p class="bottom">心理学家、美食家陈立教授</p>
                            </div>
                        </li>
                        <li>
                            <a href="###" class="left"> <img src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt=""> </a>
                            <div class="right">
                                <p class="top">
                                    <a href="###">陈立</a>
                                    <i></i>
                                </p>
                                <p class="bottom">心理学家、美食家陈立教授</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 组件的引入
import Huayu from '../TuijianChild/Huayu'
import Dianzi from '../TuijianChild/Dianzi'
import Liuxing from '../TuijianChild/Liuxing'
import Minyao from '../TuijianChild/Minyao'
import Yaogun from '../TuijianChild/Yaogun'

import request from '@/require/require.js'
import Swiper from 'swiper'

import axios from 'axios'

// 引入jquery
import $ from '../../../node_modules/jquery/dist/jquery.js'

export default {
    data() {
        return {
            NotLogin: false,            // 未登录状态
            Login: true,                // 登录状态
            imageList: [],              // 轮播图数据
            Settledlist: [],            // 入驻歌手数据
            AnchorList: [],             // 热门主播数据
            Loginlist: [],              // 登录后保存在本地的个人信息
        }
    },
    updated() {
        var mySwiper = new Swiper ('.roler1', {
            direction: 'horizontal',
            autoplay: true,
            loop: true,
            speed: 0,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            grabCursor: true,
            paginationClickable: true
        })
    },
    created() {
        axios.all([request({
        // 轮播图数据
            url: 'http://localhost:3000/banner'
        }),request({
        // 入驻歌手数据
            url: 'http://localhost:3000/artist/list?cat=5001'
        })]).then(res => {
            // console.log(res)
            let res1,res2
            [res1,res2] = res
        // 轮播图数据
            this.imageList = res1.data.banners
        // 入驻歌手数据
            this.Settledlist =  res2.data.artists.slice(0,5)
        })

        // 热门主播数据 未找到网址
        // request({
        //     url: ''
        // }).then(res => {

        //     console.log(res)
        // })

        // 获取登录后存储本地的个人信息
        var list = JSON.parse(localStorage.getItem("UsertypeSelect") || '[]')
        if(list == ''){
            this.NotLogin = true
            this.Login = false
        }else{
            this.Loginlist = list.profile
            this.NotLogin = false
            this.Login = true
        }
    },
    methods: {
        CorrespondingList(id){
            this.$router.push({name: 'Carouseldata', params: {id} })
        },
        AllTuijian(){
            this.$router.push({path: '/home/alltuijian' })
        }
    },
    mounted() {
        // tab切换
        $('.tab .cli').click(function(){
            let i = $(this).index()
            $('.import .timer').eq(i).addClass('on').siblings().removeClass('on')
        })
    },
    components: {
        Huayu,
        Dianzi,
        Liuxing,
        Minyao,
        Yaogun
    }
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/tuijian.less);
</style>