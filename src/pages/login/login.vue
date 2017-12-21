<template>
  <div class="loginContainer">
    <form action="" class="loginForm">
      <div class="login-wrap">
        <p class="login-img">
          <Icon type="ios-locked-outline" size=50 color="#34aadc"></Icon>
        </p>
        <div class="input-groups">
          <Icon type="android-contact"></Icon>
          <Input v-model="value" placeholder="Username" size="large" style="width: 300px"></Input>
        </div>
        <div class="input-groups">
          <Icon type="key"></Icon>
          <Input v-model="value" type="password" placeholder="Password" size="large" style="width: 300px"></Input>
        </div>
        <div class="input-groups">
          <Checkbox v-model="single">Remember me</Checkbox>
          <span class="right"> <a href="#"> Forgot Password?</a></span>
        </div>

        <Button type="primary" size="large" long @click="login">Login</Button>
        <br><br>
        <Button type="info" size="large" long><a href="https://www.vue-js.com/signup">Signup</a> </Button>
      </div>
    </form>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    data(){
      return {
          username:null,//用户名
          password:null //密码
      }
    },
    methods:{
        login(){
          this.$store.dispatch('fetchLoginAction');
          console.log(this.isLogin);
          this.$router.push({ name: 'home' });
          if(this.isLogin){

          }

        }
    },
    computed:{
      ...mapState([
        'isLogin'
      ]),
      topicsDataLen () {
        console.log(this.isLogin)
      }
    }
  }
</script>
<style scoped rel="stylesheet/scss" lang="scss">
  @import "../../style/_mixin";
  .loginContainer {
    overflow: hidden;
  @include wh(100vw, 100vh);

  @include bis('../../images/bg-1.jpg');
  .loginForm {
    max-width: 350px;
    margin: 200px auto 0;
    background: #d5d7de;

  .login-wrap {
    padding: 20px;

  .login-img {
    text-align: center;
  }

  }
  .input-groups {
    position: relative;
    margin-bottom: 15px;

  i {
    font-size: 16px;
    top: 10px;
    left: 10px;
    position: absolute;
    z-index: 100;
  }

  }
  }
  }

</style>

