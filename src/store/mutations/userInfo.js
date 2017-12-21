/**
 * Created by admin on 2017/12/20.
 */
/**
 * Created by admin on 2017/12/13.
 */
/**
 * Created by mlamp on 2017/12/10.
 */
import * as types from '../constants/types'

export const userInfoMutations = {
  [types.FETCH_USERINFO_DATA](state,action){
    state.data = action.data;
  }
};
