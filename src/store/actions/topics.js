/**
 * Created by mlamp on 2017/11/24.
 */
import * as types from '../constants/types'
import axios from 'axios'

export const topicsActions = {
  /**
   * 请求主题列表数据
   * @type  {get}
   * @param {tab} [String]        主题类型
   * @param {page} [Number]       分页
   * @param {limit} [Number]      每次请求获取数据个数
   * @param {isRefresh} [Boolean] 请求是否是刷新请求，默认 false
   */
  fetchTopicsAction({ commit, state }, params) {
    let isRefresh = params.isRefresh || false;

    if (!isRefresh) {
      commit(types.FETCH_TOPICS_REQ);
    } else {
      commit(types.SHOW_REFRESH);
    }
    commit(types.FETCH_ISLOADING_BOL);
    axios({
      method: 'get',
      url: 'topics',
      params: {
        tab: params.tab,
        page: params.page,
        limit: params.limit
      }
    }).then((res) => {
      let data = res.data.data;
      commit(types.FETCH_ISLOADING_BOL);
      if (data.length > 0) {
        commit(types.FETCH_TOPICS_SUC, {
          data
        })
      }
    }).catch((error) => {
      commit(types.FETCH_ISLOADING_BOL);
    })
  }
};
