import Vue from 'vue'
import Router from 'vue-router'

let Home=()=>import('@/components/Home');

let Tuijian=()=>import('@/components/BannerChild/Tuijian')
let Dianzi=()=>import('@/components/TuijianChild/Dianzi')
let Huayu=()=>import('@/components/TuijianChild/Huayu')
  let FileList=()=>import('@/components/FileList/FileList')

let Liuxing=()=>import('@/components/TuijianChild/Liuxing')
let Minyao=()=>import('@/components/TuijianChild/Minyao')
let Yaogun=()=>import('@/components/TuijianChild/Yaogun')


let Ranking=()=>import('@/components/BannerChild/Ranking')
let Songlis=()=>import('@/components/BannerChild/Songlis')
let Anchor=()=>import('@/components/BannerChild/Anchor')
let Singer=()=>import('@/components/BannerChild/Singer')
let Novice=()=>import('@/components/BannerChild/Novice')

let Transit=()=>import('@/components/Transit/Transit')

let Carouseldata=()=>import('@/components/Carouseldata/Carouseldata')
let Alltuijian=()=>import('@/components/AllTuijian/Alltuijian')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home/tuijian/huayu',
      meta: {
        title: '网易云音乐'
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '网易云音乐'
      }
    },
    {
      path: '/home/tuijian',
      name: 'Home',
      component: Home,
      meta: {
        title: '网易云音乐'
      },
      children: [
        {
          path: '/home/tuijian',
          name: 'Tuijian',
          component: Tuijian,
          meta: {
            title: '网易云音乐'
          },
          children: [
            {
              path: '/home/tuijian/dianzi',
              name: 'Dianzi',
              component: Dianzi
            },
            {
              path: '/home/tuijian/huayu',
              name: 'Huayu',
              component: Huayu,
              meta: {
                title: '网易云音乐'
              }
            },
            {
              path: '/home/tuijian/liuxing',
              name: 'Liuxing',
              component: Liuxing
            },
            {
              path: '/home/tuijian/minyao',
              name: 'Minyao',
              component: Minyao
            },
            {
              path: '/home/tuijian/yaogun',
              name: 'Yaogun',
              component: Yaogun
            },
          ],
          
        },
        {
          path: '/home/ranking',
          name: 'Ranking',
          component: Ranking
        },
        {
          path: '/home/songlis',
          name: 'Songlis',
          component: Songlis
        },
        {
          path: '/home/anchor',
          name: 'Anchor',
          component: Anchor
        },
        {
          path: '/home/singer',
          name: 'Singer',
          component: Singer
        },
        {
          path: '/home/novice',
          name: 'Novice',
          component: Novice
        },
        {
          path: '/home/carouseldata',
          name: 'Carouseldata',
          component: Carouseldata,
          name: 'Carouseldata'
        },
        {
          path: '/home/alltuijian',
          name: 'Alltuijian',
          component: Alltuijian,
          name: 'Alltuijian',
          meta: {
            title: '全部歌单 - 歌单 - 网易云音乐'
          }
        },
        {
          path: '/FileList',
          name: 'FileList',
          component: FileList
        }
      ]
    },
    {
      path: '/transit',
      name: 'Transit',
      component: Transit,
    }
  ]
})
