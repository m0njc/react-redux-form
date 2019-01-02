import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions';

const reducer = (state = {}, action) => {
  console.log('reducersss')
  switch (action.type) {
    case REQUEST_POSTS:

      return { ...state, loading: true };
    case RECEIVE_POSTS:
    console.log(state)
      return { ...state, total: action.json.total, loading: false };
    default:
      return state;
  }
};

export default reducer;
