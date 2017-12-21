<template>
  <div class="content-item">
    <div class="cell">
      <!--头像-->
      <router-link :to="{name:'userInfo',params:{title:list.author.loginname}}" class="user_avatar left ">
        <img :src="list.author.avatar_url"
             :title="list.author.loginname"
        >
      </router-link>
      <!--回复数-->
      <span class="reply_count left" title="回复数">
      <span class="count_of_replies">{{list.reply_count}}</span>
      <span class="count_seperator">/</span>
      <span class="count_of_visits">{{list.visit_count}}</span>
      </span>
      <!--标题-->
      <router-link :to="{path:'/detailInfo',query:{topicId:list.id}}" tag="div" :topicId="list.id">
        <div class="left topic_title_wrapper">
          <span :class="topiclist">{{list.tab | filterTap(list.top,list.good)}}</span>
          <a class="topic_title" :title="list.title">{{list.title}}</a>
        </div>
      </router-link>
      <!--回复时间-->
      <a class="last_time right" href="">
        <img :src="list.author.avatar_url"><span class="last_active_time">{{list.last_reply_at | filterTime}}</span></a>
    </div>
  </div>
</template>

<script>
  import {filterTime, filterTap} from '../assets/js/filter'
  export default{
    props: {
      list: {
        type: Object
      }
    },
    filters: {
      filterTime,
      filterTap
    },
    computed: {
      topiclist() {
        return this.list.top || this.list.good ? 'put_top' : 'topiclist-tap';
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../style/main";

  .content-item {
    .cell {
      padding: 10px;
      overflow: hidden;
      position: relative;
      font-size: 14px;
      background: $white;
      border-top: 1px solid $cell-border;
      line-height: 30px;
      &:hover {
        background: $cell-border;
      }
      .user_avatar {
        height: 30px;
        img {
          @include wh(30px, 30px);
          border-radius: 3px;
        }
      }
      .reply_count {
        width: 70px;
        display: inline-block;
        text-align: center;
        .count_of_replies {
          color: $count_of_replies;
        }
        .count_of_visits {
          color: #b4b4b4;
          font-size: 10px;
        }
        .count_seperator {
          margin: 0 -3px;
          font-size: 10px;
        }
      }
      .last_time {
        img {
          @include wh(18px, 18px);
          vertical-align: middle;
          margin-right: 10px;
          border-radius: 3px;
        }
        .last_active_time {
          text-align: right;
          min-width: 50px;
          display: inline-block;
          white-space: nowrap;
          font-size: 12px;

        }
      }
      .topiclist-tap {
        background-color: #e5e5e5;
        color: #999;
        padding: 2px 4px;
        font-size: 12px;
      }
      .put_top {
        background: #369219;
        padding: 2px 4px;
        border-radius: 3px;
        color: #fff;
        font-size: 12px
      }
      .topic_title_wrapper {
        max-width: 70%;
        .topic_title {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          vertical-align: bottom;
          font-size: 16px;
          line-height: 30px;
          &:hover {
            text-decoration: underline;
            color: #333;
          }
        }
      }

    }

  }

</style>
