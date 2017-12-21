/**
 * Created by admin on 2017/12/13.
 */

import {loginActions} from '../actions/login';
import {loginMutations} from '../mutations/login'

const login = {
  state:{
   isLogin:false,
    userId:'6499f337-a7cb-4c80-827e-6306308be2eb'
  },
  actions: loginActions,
  mutations:loginMutations
};
export default login
