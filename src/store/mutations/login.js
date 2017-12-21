/**
 * Created by admin on 2017/12/13.
 */
/**
 * Created by mlamp on 2017/12/10.
 */
import * as types from '../constants/types'

export const loginMutations = {
  [types.FETCH_ISLOGIN_BOL](state,action){
    state.isLogin = action.isLogin;
  },
  [types.FETCH_LOGOUT_BOL](state,action){
    state.isLogin = false;
  }
};
