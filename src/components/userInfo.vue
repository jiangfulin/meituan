<template>
  <div>
    <header-view></header-view>
    <div class="main">
      <div class="panel">
        <div class="title-panel">
          <router-link to="/" class="home">主页</router-link>
          / <span>{{loginname}}</span>
        </div>
        <div class="content clear">
          <div class="cell">
            <div class="user_big_avatar left">
              <img :src="userInfo.data.avatar_url">
            </div>
            <a class="col_dark">{{loginname}}</a>
            <div class="user_profile">
              <span>{{userInfo.data.score}}积分</span>
              <ul>
                <li class="col_dark" v-show="userInfo.data.githubUsername">
                  <i class="fa fa-lg fa-fw fa-github col_dark"></i>
                  @{{userInfo.data.githubUsername}}
                </li>
              </ul>
            </div>
            <div class="col_dark">
              注册时间:{{userInfo.data.create_at | filterTime}}
            </div>
          </div>

        </div>
      </div>
      <div class="panel">
        <div class="title-panel">
          <span class="col_fade">最近创建的话题</span>
        </div>
        <div class="content">
          <div class="cell clear"
            v-for="list in userInfo.data.recent_topics"
               :key="list.id"
          >
            <a class="user_avatar left" href=""> <img :src="list.author.avatar_url"></a>
            <router-link class="col_blue user_title" :to="{path:'/detailInfo',query:{topicId:list.id}}" tag="a">
              {{list.title}}
            </router-link>
            <span class="right">{{list.last_reply_at | filterTime}}</span>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="title-panel">
          <span class="col_fade">最近参与的话题</span>
        </div>
        <div class="content">
          <div class="cell clear"
               v-for="list in userInfo.data.recent_replies"
               :key="list.id"
          >
            <router-link :to="{name:'userInfo',params:{title:list.author.loginname}}" replace class="user_avatar left ">
              <img :src="list.author.avatar_url" :title="list.author.loginname">
              </router-link>
            <router-link class="col_blue user_title" :to="{path:'/detailInfo',query:{topicId:list.id}}" tag="a">
              {{list.title}}
             </router-link>
            <span class="right">{{list.last_reply_at | filterTime}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import headerView from '../components/headerView.vue';
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
  import {filterTime} from '../assets/js/filter';
  export default {
    data(){
      console.log(1);
      return {
        loginname: this.$route.params.title,
      }
    },
    components: {
      headerView
    },
    filters:{
      filterTime
    },
    mounted () {

    },
    created () {
      this.getData(this.loginname)

    },
    updated() {
     console.log(1)
    },
    computed: {
      ...mapState([
        'userInfo'
      ]),

    },
    methods: {
      getData(loginname){
        this.$store.dispatch('fetchUserInfoAction', {
          loginname
        })
      },
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../style/main";

  .main {
    background: $body-color;
    font-size: 14px;
    .home {
      color: $base-green;
    }
    .panel {
      margin-bottom: 13px;
      .content {
        padding: 0px;
        line-height: 28px;
        background: #fff;
        border-radius: 0 0 3px 3px;
        .user_big_avatar {
          margin-right: 10px;
          img {
            @include wh(40px, 40px)
          }
        }
        .user_profile{
          clear: left;
        }
        .cell{
          padding: 10px;
          border-top: 1px solid #f0f0f0;
          .user_avatar{
            margin-right: 10px;
            height:30px;
            img{
              @include wh(30px,30px)
            }
          }
          .user_title{
            &:hover{
              color: -webkit-link;
              cursor: pointer;
              text-decoration: underline
            }
          }
        }

      }
    }
  }


</style>

