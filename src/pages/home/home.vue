<template>
  <div>
      <header-view></header-view>
      <div class="main">
        <div>
          <ul class="clear tabs" >
            <li class="left" v-for="(tab,index) in tabs"
                :key="index"
                @click="changeTab(index,tab.value)"
                :class="{'current-tab':index==num}"
            >{{tab.tab}}</li>
          </ul>
        </div>
        <content-item v-for="list in topics.data"
                      :key="list.id"
                      :list="list"
        >
        </content-item>
        <Page class="pagination" @on-change="pagination" :total="100"></Page>
        <div class="loading" v-show="topics.isLoading">
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
        </div>

      </div>
  </div>

</template>
<script>
  import contentItem from '../../components/contentItem.vue';
  import headerView from '../../components/headerView.vue';
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    data(){
        return{
        tabs:[
          {tab:'全部',value:'all'},
          {tab:'精华',value:'good'},
          {tab:'weex',value:'weex'},
          {tab:'分享',value:'share'},
          {tab:'问答',value:'ask'},
          {tab:'招聘',value:'job'},
        ],
        currentTab:'all',
        num:0
      }

    },
    components: {
      contentItem,
      headerView
    },
    mounted () {
      this.scroller = this.$el;
      this.trigger = this.$el;
    },
    created () {
      // 初始化第一组数据；
      // 加入条件判断，只有 data 数组为空时发送请求；
      // 否则跳转到其他页面，再回来时会重复请求
      if (this.topics.data.length === 0) {
        this.http('all', 0, 20);
        this.page = 1;
      }
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
      ]),

      changeTab(index,value){
        this.currenTab = value;
        this.num = index;
        this.http(this.currenTab, 1, 20);
      },
      // 公共请求方法
      // ==========
      http (tab, page, limit, isRefresh) {
        this.$store.dispatch('fetchTopicsAction', {
          tab, page, limit, isRefresh
        })
      },

      //分页切换
      pagination(page){
        this.http('all', page, 20);
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

  @import "../../style/main";
    .pagination{
      margin: 10px;
    }
    .tabs{
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
      li{
        margin: 0 10px;
        color: #369219;
        font-size: 14px;
        padding: 3px 4px;
        cursor: pointer;
        &.current-tab{
          background-color: #369219;
          color: #fff;
          border-radius: 3px;
        }
      }
    }
</style>

