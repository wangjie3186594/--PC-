<template>
    <div>
        <ul class="coiner">
            <li v-for="(item, index) in List" :key="index" @click.prevent="FileList(item.id)">
                <div class="cover">
                    <img :src="item.coverImgUrl" alt="">
                    <i></i>
                    <a href="###" :title="item.name" class="msk"></a>
                    <div class="bottom">
                        <a href="###" class="icon_play"></a>
                        <span class="icon_head"></span>
                        <span class="text">105万</span>
                    </div>
                </div>
                <p class="titl">
                    <a href="###">{{item.name}}</a>
                </p>
            </li>
        </ul>
        <!-- 个性化推荐(登录后显示) -->
        <div class="rcmd" v-show="ExamimeLogin">
            <div class="title">
                <a href="###" class="title_l">个性化推荐</a>
                <span>
                    <a href="###">更多</a>
                    <i></i>
                </span>
            </div>
            <ul class="cot">
                <li>
                    <a href="###" class="data">
                        <span class="mounth">星期一</span>
                        <span class="day">16</span>
                        <span title="每日推荐歌曲" class="mask"></span>
                    </a>
                    <p class="dev"> <a href="###">每日歌曲推荐</a> </p>
                    <p class="ever"> 根据你的口味生成，<br> 每天6:00更新 </p>
                </li>
                <li>
                    <div class="u_cover"> 
                        <img src="https://p1.music.126.net/siHJgaVwhJp0KWn27VFIfA==/109951164170684730.jpg?param=140y140"> 
                        <a title="[聚精会神] 工作学习必备专属背景音乐" href="/playlist?id=2829821753" class="msk"></a>
                        <div class="bottom">
                            <a title="播放" class="icon_play" href="javascript:;"></a>
                            <a href="javascript:;" class="icon_headset"></a>
                            <span class="nb">285.7万</span>
                        </div>
                    </div>
                    <p class="dec">
                        <a title="[聚精会神] 工作学习必备专属背景音乐" class="tit s-fc0" href="###">[聚精会神] 工作学习必备专属背景音乐</a>
                    </p>
                    <p class="idv" title="猜你喜欢">
                        <em>猜你喜欢</em>
                        <a class="btn" href="###">不感兴趣</a>
                    </p>
                </li>
            </ul>
        </div>
        <!-- 新碟上架内容 -->
        <div class="rcmd">
            <div class="title">
                <a href="###" class="title_l">新碟推荐</a>
                <span>
                    <a href="###">更多</a>
                    <i></i>
                </span>
            </div>
            <div class="cont">
                <div class="inner">
                    <div class="swiper-container roler swiper-no-swiping">
                        <div class="swiper-wrapper wrap">
                            <div class="swiper-slide linster" v-for="(item, index) in NewxinDie" :key="index">
                                <div class="abler"> 
                                    <img :src="item.blurPicUrl" alt="">
                                    <a href="###" class="msk"></a>
                                    <a href="###" title="播放" :class="{play: playIndex == index}"></a>
                                </div>
                                <p class="big stn"> <a href="###">{{item.name}}</a> </p>
                                <p class="small stn"> <a href="###">{{item.artist.name}}</a> </p>
                            </div>
                        </div>
                        <div class="swiper-button-next left"></div>
                        <div class="swiper-button-prev right"></div>
                    </div>
                    <!-- <a href="###" class="left" @click="nextLeft">&nbsp;</a> -->
                    <!-- <div class="swiper-container roler">
                        <ul class="swiper-wrapper" style="left: 645px;transition: none 0s ease 0s;">
                            <li v-for="(item, index) in NewxinDieone" :key="index" class="swiper-slide">
                                <div class="abler"> 
                                    <img :src="item.blurPicUrl" alt="">
                                    <a href="###" class="msk"></a>
                                    <a href="###" title="播放" class="play"></a>
                                </div>
                                <p class="big stn"> <a href="###">{{item.name}}</a> </p>
                                <p class="small stn"> <a href="###">{{item.artist.name}}</a> </p>
                            </li>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </ul>
                        <ul style="left: 0px;transition: none 0s ease 0s;">
                            <li v-for="(item, index) in NewxinDie" :key="index">
                                <div class="abler"> 
                                    <img :src="item.blurPicUrl" alt="">
                                    <a href="###" class="msk"></a>
                                    <a href="###" title="播放" class="play"></a>
                                </div>
                                <p class="big stn"> <a href="###">{{item.name}}</a> </p>
                                <p class="small stn"> <a href="###">{{item.artist.name}}</a> </p>
                            </li>
                        </ul>
                        <ul style="left: 645px;transition: none 0s ease 0s;">
                            <li v-for="(item, index) in NewxinDieone" :key="index">
                                <div class="abler"> 
                                    <img :src="item.blurPicUrl" alt="">
                                    <a href="###" class="msk"></a>
                                    <a href="###" title="播放" class="play"></a>
                                </div>
                                <p class="big stn"> <a href="###">{{item.name}}</a> </p>
                                <p class="small stn"> <a href="###">{{item.artist.name}}</a> </p>
                            </li>
                        </ul>
                        <ul style="left: 645px;transition: none 0s ease 0s;">
                            <li v-for="(item, index) in NewxinDietwo" :key="index">
                                <div class="abler"> 
                                    <img :src="item.blurPicUrl" alt="">
                                    <a href="###" class="msk"></a>
                                    <a href="###" title="播放" class="play"></a>
                                </div>
                                <p class="big stn"> <a href="###">{{item.name}}</a> </p>
                                <p class="small stn"> <a href="###">{{item.artist.name}}</a> </p>
                            </li>
                        </ul>
                        <ul style="left: -645px;transition: none 0s ease 0s;">
                            <li v-for="(item, index) in NewxinDiethre" :key="index">
                                <div class="abler"> 
                                    <img :src="item.blurPicUrl" alt="">
                                    <a href="###" class="msk"></a>
                                    <a href="###" title="播放" class="play"></a>
                                </div>
                                <p class="big stn"> <a href="###">{{item.name}}</a> </p>
                                <p class="small stn"> <a href="###">{{item.artist.name}}</a> </p>
                            </li>
                        </ul>
                    </div> -->
                    <!-- <a href="###" class="right" @click="nextRight">&nbsp;</a> -->
                </div>
            </div>
        </div>
        <!-- 榜单内容 -->
        <div class="rcmd thelist">
            <div class="title">
                <a href="###" class="title_l">榜单</a>
                <span>
                    <a href="###">更多</a>
                    <i></i>
                </span>
            </div>
            <div class="cont">
                <dl class="blk">
                    <dt class="top">
                        <div class="cover">
                            <img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt="">
                            <a href="###" title="云音乐飙升榜"></a>
                        </div>
                        <div class="tit">
                            <a href="###" title="云音乐飙升榜"> <h3>云音乐飙升榜</h3> </a>
                            <div class="botto">
                                <a href="###" title="播放" class="play"></a>
                                <a href="###" title="收藏" class="collection"></a>
                            </div>
                        </div>
                    </dt>
                    <dd>
                        <ol>
                            <li @mouseenter="addIconshow(index)" @mouseleave="removeIconhide" v-for="(item, index) in NexMusicList" :key="index"> 
                                <span> {{index + 1}} </span>
                                <a href="###" :title="item.name" class="text" @click.prevent="Garouseldata(item.id)">{{item.name}}</a>
                                <div :class="{oper: inconIndex == index}">
                                    <a href="###" title="播放" class="play"></a>
                                    <a href="###" title="添加到播放列表" class="add"></a>
                                    <a href="###" title="收藏" class="collection"></a>
                                </div>
                            </li>
                        </ol>
                        <div class="bottom">
                            <a href="###">查看全部></a>
                        </div>
                    </dd>
                </dl>
                <dl class="blk">
                    <dt class="top">
                        <div class="cover">
                            <img src="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100" alt="">
                            <a href="###" title="云音乐新歌榜"></a>
                        </div>
                        <div class="tit">
                            <a href="###" title="云音乐新歌榜"> <h3>云音乐新歌榜</h3> </a>
                            <div class="botto">
                                <a href="###" title="播放" class="play"></a>
                                <a href="###" title="收藏" class="collection"></a>
                            </div>
                        </div>
                    </dt>
                    <dd>
                        <ol>
                            <li @mouseover="addIconshow(index)" @mouseleave="removeIconhide" v-for="(item, index) in newsList" :key="index"> 
                                <span> {{index + 1}} </span>
                                <a href="###" :title="item.name" class="text" @click.prevent="Garouseldata(item.id)">{{item.name}}</a>
                                <div :class="{oper: inconIndex == index}">
                                    <a href="###" title="播放" class="play"></a>
                                    <a href="###" title="添加到播放列表" class="add"></a>
                                    <a href="###" title="收藏" class="collection"></a>
                                </div>
                            </li>
                        </ol>
                        <div class="bottom">
                            <a href="###">查看全部></a>
                        </div>
                    </dd>
                </dl>
                <dl class="blk" style="width:228px">
                    <dt class="top">
                        <div class="cover">
                            <img src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100" alt="">
                            <a href="###" title="网络原创歌曲榜"></a>
                        </div>
                        <div class="tit">
                            <a href="###" title="网络原创歌曲榜"> <h3>网络原创歌曲榜</h3> </a>
                            <div class="botto">
                                <a href="###" title="播放" class="play"></a>
                                <a href="###" title="收藏" class="collection"></a>
                            </div>
                        </div>
                    </dt>
                    <dd>
                        <ol>
                            <li @mouseover="addIconshow(index)" @mouseleave="removeIconhide" v-for="(item, index) in OriginalList" :key="index"> 
                                <span> {{index + 1}} </span>
                                <a href="###" :title="item.name" class="text" @click.prevent="Garouseldata(item.id)">{{item.name}}</a>
                                <div :class="{oper: inconIndex == index}">
                                    <a href="###" title="播放" class="play"></a>
                                    <a href="###" title="添加到播放列表" class="add"></a>
                                    <a href="###" title="收藏" class="collection"></a>
                                </div>
                            </li>
                        </ol>
                        <div class="bottom">
                            <a href="###">查看全部></a>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import request from '@/require/require.js'

import Swiper from 'swiper'
export default {
    data() {
        return {
            List: [],               // 热门推荐数据
            NewxinDie: [],          // 新碟数据
            NexMusicList: [],       // 飙升榜数据
            newsList: [],           // 新歌榜数据
            personalizedGedan: [],  // 个性化推荐歌单
            Icon: false,
            OriginalList: [],       // 网络原创榜数据
            inconIndex: null,
            playIndex: null,        // 新碟推荐中播放图标的显示隐藏(未出来BUG)
            ExamimeLogin: false     // 个性化推荐的显示隐藏
        }
    },
    created() {
        // 获取登录后的
        let list = JSON.parse(localStorage.getItem("UsertypeSelect") || '[]')
        if(list == ''){
            this.ExamimeLogin = false
        }else{
            this.ExamimeLogin = true
        }
        // 获取数据
        axios.all([request({
            // 获取热门推荐数据
            url: 'http://localhost:3000/top/playlist/highquality'
        }),request({
            // 获取新碟上架
            url: 'http://localhost:3000/top/album'
        }),request({
            // 获取云音乐飙升榜数据
            url: 'http://localhost:3000/top/list?idx=3'
        }),request({
            // 获取云音乐新歌榜数据
            url: 'http://localhost:3000/top/list?idx=0'
        }),request({
            // 获取网络原创歌曲榜数据
            url: 'http://localhost:3000/top/list?idx=2'
        })]).then(res => {
            // console.log(res)
            let res1,res2,res3,res4,res5
            [res1,res2,res3,res4,res5] = res
            // 获取热门推荐数据 保存至本地
            this.List = res1.data.playlists.slice(0, 8)
            // console.log(this.List)
            // 获取新碟上架
            this.NewxinDie = res2.data.albums.slice(0,20)
            // 获取云音乐飙升榜数据
            this.NexMusicList = res3.data.playlist.tracks.slice(0,10)
            // 获取云音乐飙升榜数据
            this.newsList = res4.data.playlist.tracks.slice(0,10)
            // 获取网络原创歌曲榜数据
            this.OriginalList = res5.data.playlist.tracks.slice(0,10)
            // 获取个性化推荐歌单
            // console.log(res6)
            // this.personalizedGedan = res6.data
        })
        // this.ExamimeLogin()
    },
    updated() {
        var swiper = new Swiper('.roler', {
            slidesPerView: 5,
            spaceBetween: 30,
            slidesPerGroup: 5,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    },
    methods: {
        // /login/status
        // 查看是否是登录状态(数据请求不到)
        // ExamimeLogin(){
        //     this.axios.get('http://localhost:3000/login/status').then(res => {
        //         console.log(res)
        //        if(res.data.code == 200){
        //            this.axios.get('http://localhost:3000/recommend/songs').then(res => {
        //                console.log(res)
        //            }).catch(err => {
        //                console.log(err)
        //            })
        //        }
        //     }).catch(err => {
        //         console.log(err)
        //     })
        // },
        // 榜单中音乐图标显示隐藏
        addIconshow(id){
            // console.log(i)
            // this.inconIndex = id
        },
        removeIconhide(){
            // this.inconIndex = null
        },
        // 
        FileList(id){
            // 获取id保存在localStorage中 让每次刷新页面之后都有数据
            localStorage['GendanId']=JSON.stringify(id)
            this.$router.push({name: 'FileList', params: {id} })
        },
        Garouseldata(id){
            // console.log(id)
            // 获取id保存在localStorage中 让每次刷新页面之后都有数据
            localStorage['DanquId']=JSON.stringify(id)
            this.$router.push({name: 'Carouseldata', params: {id} })
        },
        // 音乐列表中显示隐藏
        // addClass(i){
        //     this.playIndex = i
        // },
        // removeClass(){
        //     this.playIndex = null
        // }
    },
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/Huayu.less);
</style>