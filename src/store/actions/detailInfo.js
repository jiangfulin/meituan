/**
 * Created by mlamp on 2017/12/10.
 */
import axios from 'axios';
import * as types from '../constants/types'
export const detailInfoActions = {
  fetchDetailInfoAction({commit, state}, params)
  {
    commit(types.FETCH_ISLOADING_BOL);
    axios({
      method: 'get',
      url: 'topic/' + params.topicId,

    }).then((res) => {

      let data = res.data.data, isTopOrGood;
      isTopOrGood = data.top || data.good ? true : false;
      commit(types.FETCH_DETAILINFO_DATA, {
        data,
        isTopOrGood
      });
      commit(types.FETCH_ISLOADING_BOL);
    }).catch((error) => {
      commit(types.FETCH_ISLOADING_BOL);
    })
  },
  //点赞
  fetchLikeItAction({commit, state, dispatch}, params){
    axios.post('reply/' + params.replyId + '/ups', {
      accesstoken: params.accesstoken
    }).then((res)=>{
      dispatch('fetchDetailInfoAction',{
        topicId:params.topicId
      })
    }).catch((error)=>{

    })

  },
  //回复评论
  fetchReplyAction({commit,state,dispatch},params){
     axios.post('topic/'+params.topicId+'/replies',{
       accesstoken:params.accesstoken,
       content:params.content,
       reply_id:params.reply_id
     }).then((res)=>{
       dispatch('fetchDetailInfoAction',{
         topicId:params.topicId
       })
     }).catch((error)=>{

     })
  },

  //收藏主题
  fetchAddCollectAction({commit,state},params){
    axios.post('/topic/collect',{
      accesstoken:params.accesstoken,
      topic_id:params.topic_id
    }).then((res)=>{
      if(res.data.success){
        commit(types.INFO_ISCOLLECT_BOL,{
          isCollect:true
        })
      }

    }).catch((error)=>{

    })
  },
  //取消收藏
  fetchCancelCollectAction({commit,state},params){
    axios.post('/topic/de_collect',{
      accesstoken:params.accesstoken,
      topic_id:params.topic_id
    }).then((res)=>{
      if(res.data.success){
        commit(types.INFO_ISCOLLECT_BOL,{
          isCollect:false
        })
      }

    }).catch((error)=>{

    })
  }

};
