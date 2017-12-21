/**
 * Created by admin on 2017/12/14.
 */
/**
 * Created by admin on 2017/12/13.
 */

import {userInfoActions} from '../actions/userInfo';
import {userInfoMutations} from '../mutations/userInfo'

const userInfo = {
  state: {
    data: []
  },
  actions: userInfoActions,
  mutations: userInfoMutations
};
export default userInfo
