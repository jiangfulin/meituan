/**
 * Created by mlamp on 2017/12/10.
 */
import {detailInfoActions} from '../actions/detailInfo';
import {detailInfoMutations} from '../mutations/detailInfo'

const detailInfo = {
  state:{
    data:{},
    isTopOrGood:true,//是否是精华或者置顶
    isLoading:false,//是否显示Loading
    isCollect:true,//是否收藏主题
  },
  actions: detailInfoActions,
  mutations:detailInfoMutations
};
export default detailInfo
