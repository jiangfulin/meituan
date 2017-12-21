/**
 * Created by admin on 2017/12/13.
 */
/**
 * Created by mlamp on 2017/12/10.
 */

import * as types from '../constants/types'
export const loginActions = {
  fetchLoginAction({commit, state}, params){

    commit(types.FETCH_ISLOGIN_BOL,{
      isLogin:true,

    })

  }


};
