/**
 * Created by mlamp on 2017/11/24.
 */
import { topicsMutations } from '../mutations/topics'
import { topicsActions } from '../actions/topics'

const topics = {
  state: {
    isLoading: false,
    noMoreData: false,
    errData: false,
    error: '',
    data: []
  },
  mutations: topicsMutations,
  actions: topicsActions
};

export default topics
