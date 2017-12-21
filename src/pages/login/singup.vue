<template>
  <div>
    <!--头部导航栏-->
    <header-view></header-view>
    <!--文章详情-->
    <div class="detailInfo">
      <!--详情内容-->
      <div class="content">
        <div class="topic_title">
        <span class="topic_full_title">
                 <span class="put_top" v-show="detailInfo.isTopOrGood">{{detailInfo.data.tab | filterTap(detailInfo.data.top, detailInfo.data.good)}}</span>
        {{detailInfo.data.title}}

        </span>
          <div class="changes">
            <span>发布于&nbsp;&nbsp;{{detailInfo.data.create_at | filterTime}}</span>
            <span>作者&nbsp;&nbsp;{{detailInfo.data.author.loginname}}</span>
          </div>
        </div>
        <div class="topic_content" v-html="detailInfo.data.content">
        </div>
      </div>
      <!--详情回复-->
      <div class="topic_panel">
        <div class="title">
          <span>{{detailInfo.data.reply_count}}回复</span>
        </div>
        <div class="reply_box">
          <div class="reply_area " v-for="(list,index) in detailInfo.data.replies" :key="list.id">
            <a class="user_avatar left">
              <img :src="list.author.avatar_url">
            </a>
            <a class="user_info">{{list.author.loginname}}</a>
            <span class="reply_time">{{list.create_at | filterTime}}</span>
            <div class="user_action right" v-show="list.ups.length">
              <i class="fa up_btn fa-thumbs-o-up" title="喜欢"></i>
              <span class="up_count">{{list.ups.length}}</span>
            </div>
            <div class="reply_content" v-html="list.content">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--回到顶部-->
    <BackTop :bottom="250">
      <div class="backToTop">回到顶部</div>
    </BackTop>
    <!--loading-->
    <div class="loading" v-show="detailInfo.isLoading">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
  import headerView from './headerView.vue';
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
  import {filterTime, filterTap} from '../assets/js/filter';
  export default{
    data(){
      return {
        topicId: this.$route.query.topicId
      }
    },
    filters: {
      filterTime,
      filterTap
    },
    created(){

      this.getData(this.topicId)
      window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 300) {
          console.log(300)
          //判断当滚到高度大于300时候 console.log('300'); //这里写要触发的事件
        }
      }, true)


    },
    components: {
      headerView
    },
    computed: {
      ...mapState([
        'detailInfo'
      ])
    },
    methods: {
      ...mapMutations([
        'FETCH_DETAILINFO_DATA'
      ]),
      getData(topicId){
        this.$store.dispatch('fetchDetailInfoAction', {
          topicId
        })
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">

  .detailInfo {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
    position: relative;

    .content {
      background: #fff;
      padding: 10px;

      .topic_title {

        .topic_full_title {
          font-size: 22px;
          font-weight: 700;
          margin: 8px 0;
          width: 75%;
          display: inline-block;
          vertical-align: bottom;

          .put_top {
            background-color: #369219;
            color: #fff;
            font-size: 12px;
            font-weight: 500;
            border-radius: 3px;
            padding: 2px 4px;
            cursor: pointer;
          }

        }
        .changes {
          >span {
            color: #838383;

            &:before {
              content: "• ";
            }

          }
        }

      }
      .topic_content {
        margin: 0 10px;

        p {
          font-size: 15px;
          line-height: 26px;

          img {
            max-width: 100%;
          }

        }
      }
    }
    .topic_panel {

      .title {
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;

        >
        span {
          color: #1c6132;
        }

      }
      .reply_box {

        .reply_area {
          padding: 10px;
          background: #fff;
          border-top: 1px solid #f0f0f0;
          font-size: 14px;

          .user_avatar {
            display: inline-block;

            img {
              width: 30px;
              height: 30px;
              border-radius: 3px;
            }

          }
          .user_info {
            color: #666;
            margin-left: 10px;
            font-weight: 700;
          }

          .reply_content {
            padding-left: 50px;
            color: #333;
          }

          .reply_time {
            color: #08c;
          }

          .reply_content {
            overflow: hidden;

          }

        }
      }
    }
  }

</style>
