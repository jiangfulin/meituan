<template>
  <div>
    <header-view></header-view>
    <div class="main">
      <div class="panel">
        <div class="title-panel">
          <router-link to="/home" class="home">主页</router-link>
          / <span>新消息</span>
        </div>
        <div class="content">
          <p>无消息</p>
        </div>
      </div>
      <div class="panel">
        <div class="title-panel">
          <span>过往信息</span>
        </div>
        <div class="content">
          <p>无消息</p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import contentItem from '../components/contentItem.vue';
  import headerView from '../components/headerView.vue';
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    data(){
      return {
        currentTab: 'all',
        num: 0
      }

    },
    components: {

      headerView
    },
    mounted () {

    },
    created () {

    },
    computed: {
      ...mapState([
        'topics'
      ]),
      topicsDataLen () {
        return this.topics.data.length
      }
    },
    methods: {
      ...mapMutations([
        'CLEAR_STATE_DATA',
        'TOGGLE_NO_MORE_DATA_STATE',
        'TOGGLE_ERROR_DATA_STATE',
        'SHOW_MAIN_OVERFLOW',
        'TOGGLE_INFO_PAGE_DISPLAY',
        'SUC_COLLECT',
        'DEL_COLLECTED'
      ])
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../style/main";
  .main{
    background: $body-color;
    font-size: 14px;
    .home{
      color:$base-green;
    }
    .panel{
      margin-bottom: 13px;
      .content{
        padding: 10px;
        line-height: 28px;
        background: #fff;
        border-radius: 0 0 3px 3px;
        p{
          margin: 0 0 10px;
        }

      }
    }
  }


</style>

