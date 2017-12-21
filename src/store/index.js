/**
 * Created by mlamp on 2017/11/24.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import topics from './modules/topics'
import detailInfo from './modules/detailInfo'
import login from './modules/login'
import userInfo from './modules/userInfo'

const store = new Vuex.Store({
  modules: {
    topics,
    detailInfo,
    login,
    userInfo
  }
});

export default store
