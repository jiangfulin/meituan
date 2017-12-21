
/**
 * Created by mlamp on 2017/12/10.
 */
import axios from 'axios';
import * as types from '../constants/types'
export const userInfoActions = {
  //用户详情
  fetchUserInfoAction({commit, state}, params)
  {
    //加载loading
    commit(types.FETCH_ISLOADING_BOL);
    axios({
      method: 'get',
      url: 'user/' + params.loginname,

    }).then((res) => {
      let data = res.data.data;
      //清除loading
      commit(types.FETCH_ISLOADING_BOL);
      commit(types.FETCH_USERINFO_DATA,{
        data
      })
    }).catch((error) => {
      commit(types.FETCH_ISLOADING_BOL);
    })
  },


};
