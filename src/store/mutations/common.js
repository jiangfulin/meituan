/**
 * Created by admin on 2017/12/13.
 */


import * as types from '../constants/types';

export const commonMutations = {
  [types.FETCH_ISLOADING_BOL](state,action){
    state.isLoading = !state.isLoading;
  }
};
