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
          <div class="right collect_box" v-if="this.login.isLogin">
            <span class="collect "
                  @click="toggleCollect"
                  :class="{cancel_collect:!this.detailInfo.isCollect}"
            >{{collect}}</span>
          </div>
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
        <!--回复内容-->
        <div class="reply_box">
          <div class="reply_area " v-for="(list,index) in detailInfo.data.replies" :key="list.id">
            <a class="user_avatar left">
              <img :src="list.author.avatar_url">
            </a>
            <a class="user_info">{{list.author.loginname}}</a>
            <span class="reply_time">{{list.create_at | filterTime}}</span>
            <div class="user_action right" v-show="list.ups.length">
              <span @click="likeIt($event)"
                    :data-replyid="list.id">
                <i class="fa up_btn fa-thumbs-o-up" title="喜欢">
              </i>
              <span class="up_count">{{list.ups.length}}</span></span>
              <span v-if="login.isLogin"><i class="fa fa-reply" title="回复"></i></span>
            </div>

            <div class="reply_content" v-html="list.content">
            </div>
          </div>
        </div>
        <!--回复-->
        <div class="reply_action" v-if="login.isLogin">
          <div class="title">添加回复</div>
          <div class="reply_input">
            <textarea v-model="content"></textarea>
            <Button type="primary" @click="reply">回复</Button>
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
        topicId: this.$route.query.topicId,
        content: '',
        collect:'加入收藏'
      }
    },
    filters: {
      filterTime,
      filterTap
    },
    created(){

      this.getData(this.topicId);
      window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 300) {
          //判断当滚到高度大于300时候 console.log('300'); //这里写要触发的事件
        }
      }, true)


    },
    components: {
      headerView
    },
    computed: {
      ...mapState([
        'detailInfo',
        'login'
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
      },
      /*点赞*/
      likeIt(e){
        let replyId = $(e.currentTarget).data('replyid'),
          accesstoken = this.login.userId,
          topicId = this.topicId;
        if (this.login.isLogin) {
          this.$store.dispatch('fetchLikeItAction', {
            replyId,
            accesstoken,
            topicId
          })
        } else {
          this.warning()
        }

      },
      warning () {
        this.$Message.warning('请先登录！登录后才可点赞');
      },
      /*评论回复*/
      reply(){
        let content = this.content,
          accesstoken = this.login.userId,
          topicId = this.topicId;
        this.$store.dispatch('fetchReplyAction', {
          topicId,
          accesstoken,
          content
        })
      },
//加入取消收藏
      toggleCollect(){
          console.log(this.detailInfo.isCollect)
       let accesstoken = this.login.userId,
         topic_id = this.topicId;
          if(!this.detailInfo.isCollect){
              this.$store.dispatch('fetchAddCollectAction',{
                accesstoken,
                topic_id:this.topicId
              });
              this.collect='加入收藏';
          }else{
            this.collect='取消收藏';
            this.$store.dispatch('fetchCancelCollectAction',{
              accesstoken,
              topic_id
            });
          }

      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../style/main";

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
        .collect_box {
          margin-top: 8px;
          .collect {
            display: inline-block;
            padding: 3px 10px;
            font-weight: 700;
            font-size: 14px;
            transition: all .2s ease-in-out;
            cursor: pointer;
            letter-spacing: 2px;
            border-radius: 3px;
            line-height: 26px;
            color: #fff;
            background-color: #369219;
            user-select: none;
            &.cancel_collect {
              background-color: #e5e5e5;
              color: #333;
              &:hover {
                background-color: #909090;
                color: #fff;
              }
            }
            &:hover {
              background-color: #6ba44e;
            }
          }
        }
        .changes {
          > span {
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
          .fa {
            color: #888;
            &:hover {
              color: #333;
            }
          }
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
      .reply_action {
        background: #fff;
        margin-top: 10px;
        .reply_input {
          padding: 10px;
          textarea {
            @include wh(100%, 200px);
            border: 1px solid #ccc;
            padding: 10px;
          }
        }
      }
    }
  }
</style>
