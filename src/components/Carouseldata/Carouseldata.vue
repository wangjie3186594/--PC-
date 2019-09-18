<template>
    <div class="content">
        <div class="g_com">
            <div class="g_left">
                <div class="cont">
                    <div class="top">
                        <div class="top_l">
                            <div class="im_ur">
                                <div class="clo-p">
                                    <img :src="this.artistList[0].al.picUrl" alt="">
                                    <span></span>
                                </div>
                                <div class="clo-l">
                                    <i></i>
                                    <a href="###">生成外链播放器</a>
                                </div>
                            </div>
                            <div class="text_ur">
                                <div class="title">
                                    <i class="icon"></i>
                                    <div class="icon_text">
                                        <em>{{this.artistList[0].name}}</em>
                                    </div>
                                </div>
                                <div class="tit_l">
                                    歌手：<a href="###" :title="this.artistList[0].ar[0].name">{{this.artistList[0].ar[0].name}}</a>
                                </div>
                                <p class="tit_l">
                                    所属专辑：<a href="###">{{this.artistList[0].name}}</a>
                                </p>
                                <div class="tit_o">
                                    <div class="more">
                                        <a href="###" class="play"> <i> <em></em>播放 </i> </a>
                                        <a href="###" class="jia"></a>
                                        <a href="###" class="collection btn"> <i>收藏</i> </a>
                                        <a href="###" class="translation btn"> <i>分享</i> </a>
                                        <a href="###" class="download btn"> <i>下载</i> </a>
                                        <a href="###" class="comment btn"> <i> <span>(91007)</span> </i> </a>
                                    </div>
                                </div>
                                <div class="lyrics text-wrapper">
                                    <!-- {{this.lyricsList}}   v-html="this.lyricsList" -->
                                    <div class="lyrics_more">
                                        
                                    </div>
                                    <div class="crl">
                                        <a href="###">
                                            展开<i></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="bottom">
                                    <p> <a href="###" class="aft">报错</a> </p>
                                    <p class="afs">贡献歌词：<a href="###">21046423</a></p>
                                </div>
                            </div>
                        </div>
                        <Comment></Comment>
                    </div>
                </div>
            </div>
        </div>
        <div class="g_right">
            <!-- 相似歌单 -->
            <div class="title">
                <div>
                    <h3 class="tit_l"> <span>包含这首歌的歌单</span> </h3>
                    <ul class="tit_c">
                        <li v-for="(item, index) in Similarsonglist" :key="index">
                            <div class="one">
                                <a href="###"> <img :src="item.coverImgUrl" alt=""> </a>
                            </div>
                            <div class="two">
                                <p class="two_l"> <a href="###" :title="item.name"> {{item.name}} </a> </p>
                                <p class="two_o">
                                    <span>by</span>
                                    <a href="###" title="与你赴海"> {{item.creator.nickname}} </a>
                                    <i></i>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <h3 class="tit_l"> <span>相似歌曲</span> </h3>
                    <ul class="tit_o">
                        <li class="fio" v-for="(item, index) in SimilarMusicList" :key="index">
                            <div class="text">
                                <div class="fide">
                                    <a href="###" :title="item.name">{{item.name}}</a>
                                </div>
                                <div class="fide fc">
                                    <span :title="item.artists[0].name">
                                        <a href="###"> {{item.artists[0].name}} </a>
                                    </span>
                                </div>
                            </div>
                            <div class="icon fio">
                                <a href="###" class="play"></a>
                                <a href="###" class="add"></a>
                            </div>
                        </li>
                    </ul>
                    <div class="tit_u">
                        <h3 class="fa"> <span>网易云音乐多端下载</span> </h3>
                        <ul>
                            <li> <a href="###" class="iphone"></a> </li>
                            <li> <a href="###" class="pc"></a> </li>
                            <li> <a href="###" class="aos"></a> </li>
                        </ul>
                        <p class="fc">同步歌单，随时畅听320k好音乐</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import requirt from '../../require/require.js'
// 引入评论
import Comment from '../Comment/Commten'
import axios from 'axios'
import request from '../../require/requist';
export default {
    data() {
        return {
            artistList: [],         // 歌手描述数据
            lyricsList: [],         // 歌词数据
            Similarsonglist: [],    // 包含这首歌的歌单
            SimilarMusicList: [],   // 相似歌曲
        }
    },
    created() {
        // 获取保存在本地的单曲Id值，保证每次刷新页面都有数据
        let DanquId = JSON.parse(localStorage.getItem("DanquId") || '[]')
        // console.log(DanquId)
        // console.log(this.$route.params.id)
        axios.all([requirt({
            // 获取歌曲相关信息
            url: 'http://localhost:3000/song/detail?ids=' + DanquId
        }),requirt({
            // 歌词获取
            url: 'http://localhost:3000/lyric?id=' + DanquId
        }),requirt({
            // 获取相似的歌单
            url: 'http://localhost:3000/simi/playlist?id=' + DanquId
        }),requirt({
            // 获取相似的歌曲
            url: 'http://localhost:3000/simi/song?id=' + DanquId
        })]).then(res => {
            // console.log(res)
            let res1,res2,res3,res4
            [res1,res2,res3,res4] = res
            // 获取歌曲相关信息
            this.artistList = res1.data.songs
            document.title = this.artistList[0].name + '-' + this.artistList[0].ar[0].name +  '- 单曲 - 网易云音乐'
            // 歌词获取
            this.lyricsList = res2.data.lrc.lyric
            // 获取相似的歌单
            this.Similarsonglist = res3.data.playlists
            // 获取相似的歌曲
            this.SimilarMusicList = res4.data.songs
            
        })
        // 歌词获取
        // requirt({
        //     url: 'http://localhost:3000/lyric?id=' + this.$route.params.id
        // }).then(res => {
        //     // Trim(';')
        //     this.lyricsList = res.data.lrc.lyric
        //     let arr = '1,2,3,4,5,6,7,8,9'
        //     for(let i=0; i<this.lyricsList.length; i++){
        //         console.log(this.lyricsList[i])
        //         this.lyricsList[i]
        //         console.log(this.lyricsList[i])
        //     }
        //     console.log(this.lyricsList)
        //     console.log(this.lyricsList)

        // })
    },
    methods: {
        loadTextFromFile(i){
        //     return i.replace(/\]/g, '</br>')
        }
    },
    components: {
        Comment
    }
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/Carouseldata.less);
</style>