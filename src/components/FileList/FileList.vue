<template>
    <div class="content">
        <div class="g_com">
            <div class="g_left">
                <div class="cont">
                    <div class="top">
                        <div class="top_l">
                            <div class="im_ur">
                                <div class="clo-p">
                                    <img :src="this.GedanList.coverImgUrl" alt="">
                                    <span></span>
                                </div>
                            </div>
                            <div class="text_ur">
                                <div class="title">
                                    <i class="icon"></i>
                                    <div class="icon_text">
                                        <em> {{this.GedanList.name}} </em>
                                    </div>
                                </div>
                                <div class="tit_l">
                                    <a href="###" class="face">
                                        <img :src="this.GedanList.creator.avatarUrl" alt="">
                                    </a>
                                    <span class="fioe">
                                        <a href="###">{{this.GedanList.creator.nickname}}</a>
                                    </span>
                                    <i class="icon"></i>
                                    <span class="time">2019-08-13 创建</span>
                                </div>
                                <div class="tit_o">
                                    <div class="more">
                                        <a href="###" class="play"> <i> <em></em>播放 </i> </a>
                                        <a href="###" class="jia"></a>
                                        <a href="###" class="collection btn"> <i>({{this.GedanList.subscribedCount}})</i> </a>
                                        <a href="###" class="translation btn"> <i>({{this.GedanList.shareCount}})</i> </a>
                                        <a href="###" class="download btn"> <i>下载</i> </a>
                                        <a href="###" class="comment btn"> <i> <span>{{this.GedanList.commentCount}}</span> </i> </a>
                                    </div>
                                </div>
                                <div class="lable">
                                    <b>标签：</b>
                                    <a href="###"> <i>{{this.GedanList.tags[0]}}</i> </a>
                                    <a href="###"> <i>{{this.GedanList.tags[1]}}</i> </a>
                                    <a href="###"> <i>{{this.GedanList.tags[2]}}</i> </a>
                                </div>
                                <div class="introduction">
                                    {{this.GedanList.description}}
                                </div>
                                <div class="hide_introduction">
                                    <b>介绍：</b>
                                    "在所有不被想起的快乐里"
                                    <br>
                                    "在所有不被想起的快乐里"
                                    <br>
                                    "在所有不被想起的快乐里"
                                    <br>
                                    "在所有不被想起的快乐里"
                                    <br>
                                </div>
                                <div class="f-cb">
                                    <a href="###">
                                        展开 <i></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="music">
                            <div class="head">
                                <h3 class="tit"> <span>歌曲列表</span> </h3>
                                <span class="tit_l"> <span> {{this.musicList.length}} </span>首歌 </span>
                                <div class="tit_p">
                                    播放：
                                    <strong>{{this.GedanList.playCount}}</strong>次
                                </div>
                                <div class="tit_o">
                                    <i></i>
                                    <a href="###">生成外链播放器</a>
                                </div>
                            </div>
                            <div class="substance">
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="w1">
                                                    <div class="wp"></div>
                                                </th>
                                                <th>
                                                    <div class="wp w2"></div>
                                                </th>
                                                <th>
                                                    <div class="wp w3"></div>
                                                </th>
                                                <th class="w4">
                                                    <div class="wp"></div>
                                                </th>
                                                <th class="w5">
                                                    <div class="wp"></div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr @mouseenter="addClass(index)" @mouseleave="removeClass" v-for="(item, index) in musicList" :key="index">
                                                <td class="left">
                                                    <div>
                                                        <span class="play">&nbsp;</span>
                                                        <span class="inde">{{index + 1}}</span>
                                                    </div>
                                                </td>
                                                <td class="f-cb">
                                                    <div>
                                                        <span>
                                                            <a href="###">
                                                                <b>{{item.name}}</b>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td class="f-co">
                                                    <span :class="{duration: timeOut == index}">04:15</span>
                                                    <div :class="{opt: inconIndex == index}">
                                                        <a href="###" class="add"></a>
                                                        <span class="icon fay"></span>
                                                        <span class="icon share"></span>
                                                        <span class="icon dle"></span>
                                                    </div>
                                                </td>
                                                <td class="f-tex">
                                                    <div>
                                                        <span>
                                                            <a href="###" title="The Or 7kp i Naftaly Band">
                                                                {{item.ar[0].name}}
                                                            </a>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td class="f-tex">
                                                    <div>
                                                        <a href="###" title="Happy For Good">
                                                            {{item.al.name}}
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- 评论区 -->
                                <Gedancomment></Gedancomment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import requirt from '@/require/require.js'

import Gedancomment from '../Comment/Gedancomment'
export default {
    data() {
        return {
            GedanList: [],      // 歌单数据
            timeOut: null,      // 歌曲列表中音乐时长的显示隐藏
            musicList: [],      // 歌曲列表
            inconIndex: null    // 歌曲列表中icon图标显示隐藏
        }
    },
    created() {
        // console.log(this.$route.params.id)
        let GendanId = JSON.parse(localStorage.getItem("GendanId") || '[]')
        requirt({
            url: 'http://localhost:3000/playlist/detail?id=' + GendanId
        }).then(res => {
            this.GedanList = res.data.playlist
            this.musicList = res.data.playlist.tracks
            // console.log(this.GedanList)
            document.title = res.data.playlist.name + ' - 歌单 - 网易云音乐'
        })
    },
    methods: {
        // 音乐列表中显示隐藏
        addClass(i){
            this.inconIndex = i
            this.timeOut = i
        },
        removeClass(){
            this.timeOut = null
            this.inconIndex = null
        }
    },
    updated() {
        
    },
    components: {
        Gedancomment
    }
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/FileList.less);
</style>