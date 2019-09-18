<template>
    <div class="recommend">
        <div class="wrap">
            <div class="title">
                <h3 class="tex">
                    <span> {{this.Alltitle.cat}} </span>
                    <a href="###" @click.prevent="ClickChoose">
                        <i> 选择分类 <em></em> </i>
                    </a>
                </h3>
                <div class="hot">
                    <a href="###"> 热门 </a>
                </div>
            </div>
            <div class="hide" v-show="Choose">
                <div class="jiant">
                    <i></i>
                </div>
                <div class="content" id="content">
                    <h3>
                        <a href="###"> <em>全部风格</em> </a>
                    </h3>
                    <dl class="f-cb">
                        <dt>
                            <i class="icon1"></i>
                            语种
                        </dt>
                        <dd>
                            <a href="###">华语</a>
                            <span>|</span>
                            <a href="###">欧美</a>
                            <span>|</span>
                            <a href="###">日语</a>
                            <span>|</span>
                            <a href="###">韩语</a>
                            <span>|</span>
                            <a href="###">粤语</a>
                            <span>|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt>
                            <i class="icon2"></i>
                            风格
                        </dt>
                        <dd>
                            <a href="###"> 流行 </a>
                            <span>|</span>
                            <a href="###"> 摇滚 </a>
                            <span>|</span>
                            <a href="###"> 民谣 </a>
                            <span>|</span>
                            <a href="###"> 电子 </a>
                            <span>|</span>
                            <a href="###"> 舞曲 </a>
                            <span>|</span>
                            <a href="###"> 说唱 </a>
                            <span>|</span>
                            <a href="###"> 轻音乐 </a>
                            <span>|</span>
                            <a href="###"> 爵士 </a>
                            <span>|</span>
                            <a href="###"> 乡村 </a>
                            <span>|</span>
                            <a href="###"> R&B/Soul </a>
                            <span>|</span>
                            <a href="###"> 古典 </a>
                            <span>|</span>
                            <a href="###"> 民族 </a>
                            <span>|</span>
                            <a href="###"> 英伦 </a>
                            <span>|</span>
                            <a href="###"> 金属 </a>
                            <span>|</span>
                            <a href="###"> 朋克 </a>
                            <span>|</span>
                            <a href="###"> 蓝调 </a>
                            <span>|</span>
                            <a href="###"> 世界音乐 </a>
                            <span>|</span>
                            <a href="###"> 拉丁 </a>
                            <span>|</span>
                            <a href="###"> New Age </a>
                            <span>|</span>
                            <a href="###"> 古风 </a>
                            <span>|</span>
                            <a href="###"> 后摇 </a>
                            <span>|</span>
                            <a href="###"> Bossa Nova </a>
                            <span>|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt>
                            <i class="icon3"></i>
                            场景
                        </dt>
                        <dd>
                            <a href="###">清晨</a>
                            <span>|</span>
                            <a href="###">夜晚</a>
                            <span>|</span>
                            <a href="###">学习</a>
                            <span>|</span>
                            <a href="###">工作</a>
                            <span>|</span>
                            <a href="###">午休</a>
                            <span>|</span>
                            <a href="###">下午茶</a>
                            <span>|</span>
                            <a href="###">地铁</a>
                            <span>|</span>
                            <a href="###">驾车</a>
                            <span>|</span>
                            <a href="###">运动</a>
                            <span>|</span>
                            <a href="###">旅行</a>
                            <span>|</span>
                            <a href="###">散步</a>
                            <span>|</span>
                            <a href="###">酒吧</a>
                            <span>|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt>
                            <i class="icon4"></i>
                            情感
                        </dt>
                        <dd>
                            <a href="###">怀旧</a>
                            <span>|</span>
                            <a href="###">清新</a>
                            <span>|</span>
                            <a href="###">浪漫</a>
                            <span>|</span>
                            <a href="###">伤感</a>
                            <span>|</span>
                            <a href="###">治愈</a>
                            <span>|</span>
                            <a href="###">放松</a>
                            <span>|</span>
                            <a href="###">孤独</a>
                            <span>|</span>
                            <a href="###">感动</a>
                            <span>|</span>
                            <a href="###">兴奋</a>
                            <span>|</span>
                            <a href="###">快乐</a>
                            <span>|</span>
                            <a href="###">安静</a>
                            <span>|</span>
                            <a href="###">思念</a>
                            <span>|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt>
                            <i class="icon5"></i>
                            主题
                        </dt>
                        <dd>
                            <a href="###">影视原声</a>
                            <span>|</span>
                            <a href="###">ACG</a>
                            <span>|</span>
                            <a href="###">儿童</a>
                            <span>|</span>
                            <a href="###">校园</a>
                            <span>|</span>
                            <a href="###">游戏</a>
                            <span>|</span>
                            <a href="###">70后</a>
                            <span>|</span>
                            <a href="###">80后</a>
                            <span>|</span>
                            <a href="###">90后</a>
                            <span>|</span>
                            <a href="###">网络歌曲</a>
                            <span>|</span>
                            <a href="###">KTV</a>
                            <span>|</span>
                            <a href="###">经典</a>
                            <span>|</span>
                            <a href="###">翻唱</a>
                            <span>|</span>
                            <a href="###">吉他</a>
                            <span>|</span>
                            <a href="###">钢琴</a>
                            <span>|</span>
                            <a href="###">器乐</a>
                            <span>|</span>
                            <a href="###">榜单</a>
                            <span>|</span>
                            <a href="###">00后</a>
                            <span>|</span>
                        </dd>
                    </dl>
                </div>
                <div class="dt"></div>
            </div>
            <ul class="cont">
                <li v-for="(item, index) in AllList" :key="index" @click.prevent="FileList(item.id)">
                    <div class="u_cover"> 
                        <img :src="item.coverImgUrl"> 
                        <a :title="item.name" href="###" class="msk"></a>
                        <div class="bottom">
                            <a title="播放" class="icon_play" href="javascript:;"></a>
                            <a href="javascript:;" class="icon_headset"></a>
                            <span class="nb">{{item.playCount}}</span>
                        </div>
                    </div>
                    <p class="dec">
                        <a :title="item.name" class="tit s-fc0" href="###">{{item.name}}</a>
                    </p>
                    <p class="idv" title="猜你喜欢">
                        <span>by</span>
                        <a href="###" :title="item.creator.nickname"> {{item.creator.nickname}} </a>
                    </p>
                </li>
            </ul>
            <div class="page">
                <div class="page_l">
                    <button class="prev" @click="GetPrev" id="prev">上一页</button>
                    <ul>
                        <li v-for="(item, index) in Allpage" :key="index" @click="GetList(index)" :class="{pagi:num==index}"> {{index + 1}} </li>
                    </ul>
                    <button class="next" @click="GetNext" id="next">下一页</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import request from '@/require/require.js'

import $ from 'jquery'
export default {
    data() {
        return {
            Choose: false,              // 分类选择显示隐藏
            Alltitle: '',               // 全部分类标题
            AllList: [],                // 全部分类数据
            pageNumber: 0,              // 请求数据的当前页数
            Allpage: '',                // 总页数
            currPage: '',               // 当前页数
            num: 0,                     // 当前样式的索引
            GedanFenlei: '',            // 当前点击的歌单名称
        }
    },
    created() {
        this.AllGetlist()
        
        axios.all([request({
            url: 'http://127.0.0.1:3000/top/playlist?cat=' + this.GedanFenlei
        }),request({
            url: 'http://127.0.0.1:3000/playlist/catlist'
        })]).then(res => {
            let res1,res2
            [res1,res2] = res
            console.log(res1,res2)
        })
    },
    methods: {
        ClickChoose(){
            this.Choose = !this.Choose
        },
        // 全部歌单数据请求
        AllGetlist(){
            this.axios.get('http://127.0.0.1:3000/top/playlist?limit=35&offset='+ this.pageNumber).then(res => {
                // console.log(res)
                this.Alltitle = res.data
                this.Allpage = Math.ceil(res.data.total / 35)
                
                this.AllList = res.data.playlists
            })
        },
        // 标签分类

        // 分页中跳转对应的数据界面(数据请求缓慢)
        GetList(i){
            // console.log(i)
            // let ar = i+1
            this.currPage = i
            this.num = i
            this.pageNumber = i * 35
            console.log(this.pageNumber)
            if(i = 0){
                i = i+1
            }
            this.AllGetlist()
            // this.$router.push('/transit')
        },
        // 点击上一页
        GetPrev(){
            this.num--
            if(this.num <= 0){
                this.num = 0
            }
            console.log(this.num)

            this.currPage --
            this.pageNumber = this.currPage * 35
            if(this.pageNumber <= 0){
                this.pageNumber = 0
                document.getElementById('prev').style.color = "#cacaca"
            }else{
                document.getElementById('prev').style.color = "#666"
            }
            console.log(this.pageNumber)
            this.AllGetlist()
        },
        // 点击下一页
        GetNext(){
            
            this.num++
            if(this.num >= 38){
                this.num = 38
            }
            console.log(this.num)

            this.currPage ++
            this.pageNumber = this.currPage * 35
            if(this.pageNumber >= 1295){
                this.pageNumber = 1295
                document.getElementById('next').style.color = "#cacaca"
            }else{
                document.getElementById('next').style.color = "#666"
            }
            console.log(this.pageNumber)
            this.AllGetlist()
            // this.$router.push('/transit')
        },
        // 跳转歌单对应的界面
        FileList(id){
            // 获取id保存在localStorage中 让每次刷新页面之后都有数据
            localStorage['GendanId']=JSON.stringify(id)
            this.$router.push({name: 'FileList', params: {id} })
        },
    },
    // 私有过滤器
    // filters: {
    //     // 数字的过滤器 (没出来)
    //     Iphonefilter(val){
    //         let str = val.toString()
    //         // return `${str.substr(str.length-4)}万`
    //         return `str.substr(str.length-4).replace('万')`
    //     }
    // }
}
</script>

<style lang="less" scoped>
.recommend{
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    display: -webkit-box;
    .wrap{
        padding: 40px;
        position: relative;
        .title{
            height: 40px;
            border-bottom: 2px solid #c20c0c;
            .tex{
                float: left;
                font-size: 24px;
                font-weight: normal;
                span{
                    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
                    float: left;
                }
                a{
                    display: block;
                    float: left;
                    height: 31px;
                    line-height: 31px;
                    overflow: hidden;
                    vertical-align: top;
                    text-align: center;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: normal;
                    margin: -2px 0 0 12px;
                    color: #333;
                    padding: 0 5px 0 0;
                    white-space: nowrap;
                    background: url(https://s2.music.126.net/style/web2/img/button2.png?7ad5b5ef1ada263c0c044a3a6aec24ac) no-repeat 0 9999px;
                    background-position: right -100px;
                    i{
                        display: inline-block;
                        color: #0c73c2 !important;
                        padding: 0 10px 0 15px;
                        background: url(https://s2.music.126.net/style/web2/img/button2.png?7ad5b5ef1ada263c0c044a3a6aec24ac) no-repeat 0 9999px;
                        background-position: 0 -59px;
                        em{
                            display: inline-block;
                            overflow: hidden;
                            vertical-align: middle;
                            margin-left: 5px;
                            width: 8px;
                            height: 5px;
                            background: url(https://s2.music.126.net/style/web2/img/icon.png?40db285c10b2fe70ec5dd39184377801) no-repeat 0 9999px;
                            background-position: -70px -543px;
                        }
                    }
                }
                a:active i{
                    background-position: 0 -223px;
                }
            }
            .hot{
                height: 29px;
                border-radius: 3px;
                float: right;
                background: url(https://s2.music.126.net/style/web2/img/button.png?97d51ac49ad1781f8199b0248ad07e7b) no-repeat 0 9999px;
                background-position: 0 0;
                a{
                    display: inline-block;
                    float: left;
                    color: #fff;
                    width: 46px;
                    height: 29px;
                    line-height: 29px;
                    text-align: center;
                    font-size: 12px;
                }
            }
        }
        .hide{
            position: absolute;
            top: 75px;
            z-index: 5;
            width: 720px;
            left: 0;
            .jiant{
                height: 32px;
                background: url(https://s2.music.126.net/style/web2/img/sltlyr.png?a91aa8fa8156618cae1d8a2e1bc2d48b) no-repeat;
                i{
                    position: absolute;
                    top: 2px;
                    left: 132px;
                    display: inline-block;
                    width: 24px;
                    height: 11px;
                    background: url(https://s2.music.126.net/style/web2/img/iconall.png?98070721112cbb421c6f20aac44de115) no-repeat;
                    background-position: -48px 0;
                    vertical-align: middle;
                }
            }
            .content{
                width: 718px;
                padding: 0 10px;
                background: url(https://s2.music.126.net/style/web2/img/sltlyr.png?a91aa8fa8156618cae1d8a2e1bc2d48b) no-repeat;
                background-position: -720px 0;
                background-repeat: repeat-y;
                h3{
                    height: 37px;
                    padding-left: 26px;
                    border-bottom: 1px solid #e6e6e6;
                    font-weight: normal;
                    font-size: 12px;
                    margin: 0;
                    a{
                        width: 75px;
                        height: 26px;
                        background: url(https://s2.music.126.net/style/web2/img/button.png?97d51ac49ad1781f8199b0248ad07e7b) no-repeat 0 9999px;
                        background-position: 0 -64px;
                        text-align: center;
                        line-height: 26px;
                        display: inline-block;
                        color: #333;
                    }
                }
                dt{
                    float: left;
                    display: inline-flex;
                    width: 70px;
                    margin: 0 -100px 0 26px;
                    padding-top: 15px;
                    border-right: 1px solid #e6e6e6;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 27px;
                    i{
                        display: inline-block;
                        margin-right: 8px;
                        margin-bottom: 4px;
                        background: url(https://s2.music.126.net/style/web2/img/icon.png?40db285c10b2fe70ec5dd39184377801) no-repeat 0 9999px;
                    }
                    .icon1{
                        width: 23px;
                        height: 23px;
                        background-position: -20px -735px;
                    }
                    .icon2{
                        width: 24px;
                        height: 24px;
                        background-position: 0px -60px;
                    }
                    .icon3{
                        width: 24px;
                        height: 24px;
                        background-position: 0px -88px;
                    }
                    .icon4{
                        width: 24px;
                        height: 24px;
                        background-position: 0px -117px;
                    }
                    .icon5{
                        width: 24px;
                        height: 24px;
                        background-position: 0px -141px;
                    }
                }
                dd{
                    margin-left: 96px;
                    padding: 16px 15px 0 15px;
                    border-left: 1px solid #e6e6e6;
                    line-height: 24px;
                    a{
                        color: #333;
                        font-size: 12px;
                        white-space: nowrap;
                    }
                    span{
                        margin: 0 5px 0 7px;
                        color: #d8d8d8;
                    }
                    a:hover{
                        text-decoration: underline;
                    }
                }
                .f-cb::after{
                    clear: both;
                    content: '.';
                    display: block;
                    height: 0;
                    visibility: hidden;
                }
            }
            .dt{
                height: 20px;
                background: url(https://s2.music.126.net/style/web2/img/sltlyr.png?a91aa8fa8156618cae1d8a2e1bc2d48b) no-repeat;
                background-position: -1440px -12px;
            }
        }
        .cont{
            margin: 30px 0 0 -50px;
            display: inline-block;
            li{
                float: left;
                display: inline-block;
                width: 189px;
                height: 188px;
                overflow: hidden;
                padding: 0 0 30px 50px;
                line-height: 1.4;
                margin: 15px 0;
                .u_cover{
                    width: 140px;
                    height: 140px;
                    display: block;
                    position: relative;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                    .msk{
                        display: inline-block;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background: url(https://s2.music.126.net/style/web2/img/coverall.png?bfb7150279c235e1e1a915802b6e73c6) no-repeat;
                        background-position: 0 0;
                    }
                    .bottom{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 27px;
                        background: url(https://s2.music.126.net/style/web2/img/coverall.png?bfb7150279c235e1e1a915802b6e73c6) no-repeat;
                        background-position: 0 -537px;
                        .icon_play{
                            display: inline-block;
                            position: absolute;
                            right: 10px;
                            bottom: 5px;
                            width: 16px;
                            height: 17px;
                            background: url(https://s2.music.126.net/style/web2/img/iconall.png?22fb34c67d51dd8143477c72d15a0c7a) no-repeat;
                            background-position: 0 0;
                        }
                        .icon_headset{
                            display: inline-block;
                            float: left;
                            width: 14px;
                            height: 11px;
                            background: url(https://s2.music.126.net/style/web2/img/iconall.png?22fb34c67d51dd8143477c72d15a0c7a) no-repeat;
                            background-position: 0 -24px;
                            margin: 9px 5px 9px 10px;
                        }
                        .nb{
                            float: left;
                            margin: 7px 0 0 0;
                            color: #ccc;
                            font-size: 12px;
                        }
                    }
                }
                .dec{
                    margin: 8px 0 3px;
                    a{
                        display: inline-block;
                        max-width: 100%;
                        vertical-align: middle;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        word-wrap: normal;
                        font-size: 14px;
                        color: #333;
                    }
                }
                .idv{
                    span{
                        color: #999;
                        font-size: 12px;
                    }
                    a{
                        font-size: 12px;
                        max-width: 76%;
                        vertical-align: middle;
                        color: #666;
                    }
                }
                a:hover{
                    text-decoration: underline;
                }
            }
        }
        .page{
            margin: 0 auto;
            display: table;
            .page_l{
                margin: 20px 0;
                text-align: center;
                span{
                    display: inline-block;
                    height: 24px;
                    line-height: 24px;
                    color: #333;
                    text-align: left;
                    padding: 0;
                    margin: 0 1px 0 2px;
                    border: 1px solid #ccc;
                    border-radius: 2px;
                    vertical-align: middle;
                    float: left;
                }
                button{
                    padding: 3px 12px;
                }
                .prev{
                    width: 70px;
                    padding-left: 22px;
                    background: url(https://s2.music.126.net/style/web2/img/button.png?97d51ac49ad1781f8199b0248ad07e7b) no-repeat 0 9999px;
                    background-position: 0 -590px;
                    font-size: 12px;
                    float: left;
                }
                .next{
                    width: 70px;
                    padding-left: 2px;
                    background: url(https://s2.music.126.net/style/web2/img/button.png?97d51ac49ad1781f8199b0248ad07e7b) no-repeat 0 9999px;
                    background-position: -75px -560px;
                    font-size: 12px;
                    float: left;
                }
                .disabled{
                    background-position: 0 -620px;
                    color: #cacaca;
                }
                li{
                    float: left;
                    height: 22px;
                    padding: 0 8px;
                    background-color: #fff;
                    line-height: 22px;
                    margin: 0 1px 0 2px;
                    display: inline-block;
                    border: 1px solid #ccc;
                    border-radius: 2px;
                    vertical-align: middle;
                    font-size: 12px;
                    color: #333;
                    // &:first-child{
                    //     border-color: #A2161B;
                    //     color: #fff;
                    //     cursor: default;
                    //     background: url(https://s2.music.126.net/style/web2/img/button.png?97d51ac49ad1781f8199b0248ad07e7b) no-repeat 0 9999px;
                    //     background-position: 0 -650px;
                    // }
                }
                .pagi{
                    border-color: #A2161B;
                    color: #fff;
                    cursor: default;
                    background: url(https://s2.music.126.net/style/web2/img/button.png?97d51ac49ad1781f8199b0248ad07e7b) no-repeat 0 9999px;
                    background-position: 0 -650px;
                }
            }
        }
    }
}
</style>