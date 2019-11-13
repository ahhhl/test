<template>
  <div class="home">
    <div class="search">
      <input class="searchInput" type="text" placeholder="请输入关键字搜索" />
      <i class="iconfont icon-sousuo icon"></i>
    </div>
    <van-swipe class="swiper" :touchable=true :autoplay="2000" lazy-load indicator-color="white">
      <van-swipe-item>
        <img src="//img.alicdn.com/tfs/TB1HUmbmrj1gK0jSZFOXXc7GpXa-520-280.jpg_q90_.webp" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://b2c.jihainet.com/static/uploads/images/2019/11/04/15728394595dbfa0231d703.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar class="notice" text="通知内容的设计费肯定是浪费德生科技奋达科技发动机复健科是大家" left-icon="volume-o"/>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Image } from 'vant';
import { Lazyload } from 'vant';
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);
Vue.use(Lazyload);
Vue.use(Image);
Vue.use(Swipe).use(SwipeItem);
export default {};
</script>

<style lang='less' scoped>
.home {
  .search {
    padding: 6px 15px;
    position: relative;
    .searchInput {
      font-size: 12px;
      padding-left: 15px;
      width: 100%;
      height: 36px;
      border: 1px solid transparent;
      border-radius: 18px;
      background: #e9e9e9;
      outline: 0;
    }
    .icon {
      position: absolute;
      top: 50%;
      transform: translate(0, -45%);
      right: 30px;
    }
  }
  .swiper {
    // width: 100%;
    height: 180px;
    overflow: hidden;
    background: #e9e9e9;
    .van-swipe-item{
      height: 180px;
      width:100%;
      float: left;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .notice{
    margin-top: 10px;
  }
}
</style>