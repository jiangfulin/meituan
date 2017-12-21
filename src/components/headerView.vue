<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="container clear">
        <a href="javascript:;" class="logo left"><img src="../images/logo.png">&nbsp;Vue.js</a>
        <form class="navbar-search left">
          <input type="text">
        </form>

        <ul class="right nav"  v-if="!login.isLogin">
          <li class="left"
              v-for="(item,index) in menus"
              :key="index">
            <router-link :to="item.href">
              {{item.menu}}
            </router-link>
          </li>
        </ul>
        <ul class="right nav"  v-else>
          <li class="left"
              v-for="(item,index) in loginMenu"
              :key="index"
              :value="item.value"
              @click="logout($event)"
          >
            <router-link :to="item.href" >
              {{item.menu}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  export default{
    data(){
      return {
        menus: [
          {menu: '首页', href: '/'},
          {menu: '交互教程', href: 'http://www.hubwiz.com/course/?type=Vue.js&affid=vue-js'},
          {menu: '微信公众号', href: '/gowechat'},
          {menu: 'Vue2.0', href: 'http://doc.vue-js.com/'},
          {menu: '参考资料', href: '/getstart'},
          {menu: 'API', href: '/api'},
          {menu: '关于', href: '/about'},
          {menu: '注册', href: ''},
          {menu: '登录', href: '/signin'}
        ],
        loginMenu:[
          {menu: '首页', href: '/'},
          {menu: '未读消息', href: '/message'},
          {menu: '交互教程', href: 'http://www.hubwiz.com/course/?type=Vue.js&affid=vue-js'},
          {menu: '微信公众号', href: '/gowechat'},
          {menu: 'Vue2.0', href: 'http://doc.vue-js.com/'},
          {menu: '参考资料', href: '/getstart'},
          {menu: 'API', href: '/api'},
          {menu: '关于', href: '/about'},
          {menu: '设置', href: ''},
          {menu: '退出', href: '/',value:true}
        ]
      }
    },
    computed: {
      ...mapState([
        'login'
      ]),
    },
    methods: {
      ...mapMutations([
        'FETCH_LOGOUT_BOL',
      ]),
      logout(e){
         if($(e.currentTarget).attr('value')){

             this.FETCH_LOGOUT_BOL();

         }

      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../style/main";

  .navbar {
    background: $base-green;
    .navbar-inner {
      width: 90%;
      margin: auto;
      padding: 5px;
      .container {
        .logo {
          display: block;
          @include wh(140px, 45px);
          padding: 0 5px;
          color: $white;
          font-size: 20px;
          font-weight: 200;
          text-shadow: 0 1px 0 #fff;
          img {
            @include wh(45px, 45px);
            vertical-align: middle;
          }
        }
        .navbar-search {
          margin: 0;
          display: block;
          padding-top: 8px;
          input {
            background: #4f9639 url(../images/search.png) no-repeat 4px 4px;
            padding: 3px 5px 3px 22px;
            color: #666;
            border: 0;
            margin-top: 2px;
            transition: all .5s;
            width: 206px;
            outline: none;
            border-radius: 15px;
            &:hover {
              background: $white url(../images/search.png) no-repeat 4px 4px;
              transition: all .5s;
            }

          }
        }
        .nav {
          margin: 0 10px 0 0;
          li {
            line-height: 45px;
            a {
              color: $white;
              padding: 10px 15px;
            }
          }

        }
      }
    }
  }
</style>
