<template>
    <div class="comment">
        <div class="top">
            <div class="big_title">
                <h3 class="flg"> <span>评论</span> </h3>
                <span class="flo"> 共<span>{{this.toTal.total}}</span>条评论 </span>
            </div>
            <div class="published">
                <div class="imag">
                    <div class="head">
                        <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" v-show="notlogin">
                        <img :src="this.list.avatarUrl" alt="" v-if="login">
                    </div>
                    <div class="txt">
                        <div class="cmmpit">
                            <div class="text">
                                <textarea placeholder="评论" @focus="Getfocus()"></textarea>
                            </div>
                            <div class="imgs">
                                <i class="icn smile"></i>
                                <i class="icn it"></i>
                                <a href="###" class="com">评论</a>
                                <span class="numb">140</span>
                            </div>
                            <div class="jiant">
                                <em class="cur">◆</em>
                                <span class="cur">◆</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 精彩评论--最新评论 -->
            <div class="brilliant_comments">
                <h3 class="title">精彩评论</h3>
                <div class="item" v-for="(item, index) in Wonderful" :key="index">
                    <div class="head">
                       <a href="###"> 
                           <img :src="item.user.avatarUrl" alt=""> 
                        </a>
                    </div>
                    <div class="content">
                        <div>
                            <div class="cnt">
                                <a href="###">{{item.user.nickname}}</a>：{{item.content}}
                                <br>
                            </div>
                            <div class="fic">
                                <div class="time">{{item.time}}</div>
                                <a href="###" class="clic">
                                    <i></i> ({{item.likedCount}})
                                </a>
                                <span style="margin: 0 8px;color: #ccc;">|</span>
                                <a href="###" class="reply">回复</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                <!-- 最新评论 -->
                <h3 class="latest_text">最新评论({{this.toTal.total}})</h3>
                <div class="item latest_comments" v-for="(item, index) in CommentList" :key="index">
                    <div class="head">
                       <a href="###">
                           <img :src="item.user.avatarUrl" alt=""> 
                        </a>
                    </div>
                    <div class="content">
                        <div>
                            <div class="cnt">
                                <a href="###">{{item.user.nickname}}</a>：{{item.content}}
                                <br>
                            </div>
                            <div class="fic">
                                <div class="time">{{item.time}}</div>
                                <a href="###" class="clic">
                                    <i></i> ({{item.likedCount}})
                                </a>
                                <span style="margin: 0 8px;color: #ccc;">|</span>
                                <a href="###" class="reply">回复</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 分页效果 -->
                <!-- <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="totals"
                    :page-size="pageSize"
                    :current-page="PageingNumber" 
                    @current-change="handleSizeChange"
                    @size-change="handleSizeChange"
                    >
                </el-pagination> -->
            </div>
        </div>
    </div>
</template>

<script>
// 引入分页插件
// import Vue from 'vue'
// import ElementUI  from 'element-ui'
// import '../../../node_modules/element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)

import requist from '../../require/requist.js'
export default {
    data() {
        return {
            Wonderful: [],      // 精彩评论数据
            CommentList: [],    // 最新评论数据
            toTal: [],          // 评论总数
            PageingNumber: 0,
            Loginlist: '',      // 获取 localstorage 中保存的个人信息
            login: false,       // 登录状态评论的头像
            notlogin: true,     // 未登录状态评论的头像
            list: ''
        }
    },
    created() {
        // console.log(this.$route.params.id)
        // 判断是否是登陆状态

        let DanquID = JSON.parse(localStorage.getItem("DanquId") || '[]')
        console.log(DanquID)

        // 最新 精彩评论数据
        requist({
            url: 'http://localhost:3000/comment/music?id='+ DanquID +'&limit=20&offset='+ this.PageingNumber
        }).then(res => {
            this.Wonderful = res.data.hotComments.slice(0,15)
            this.toTal = res.data
            this.CommentList = res.data.comments
            // console.log(this.CommentList)
        })
    },
    methods: {
        Getfocus(){
            
        }
    },
    updated() {
        
        // 获取保存在localStorage的歌单id，让每次页面刷新都能重新请求，不是undefined
        var List = JSON.parse(localStorage.getItem("UsertypeSelect") || '[]')
        // console.log(List)
        // this.list = List.profile
        if(List == ''){
            this.login = false
            this.notlogin = true
        }else{
            this.login = true
            this.notlogin = false
        }
    },
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/Comment.less);
</style>