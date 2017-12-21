/**
 * Created by mlamp on 2017/12/10.
 */
import * as types from '../constants/types'

export const detailInfoMutations = {
  [types.FETCH_DETAILINFO_DATA](state,action){
    state.data = action.data;
    state.isTopOrGood = action.isTopOrGood
  },
  [types.INFO_ISGOODORTOP_BOL](state,action){
    state.isTopOrGood = action.isTopOrGood
  },
  [types.FETCH_ISLOADING_BOL](state,action){
    state.isLoading = !state.isLoading;
  },
  [types.INFO_ISCOLLECT_BOL](state,action){
    state.isCollect = action.isCollect
  }
};
