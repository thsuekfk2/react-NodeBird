import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  //리덕스 서버 사이드 렌더링을 위한 HYDRATE, index reducer 넣어줌
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.pyaload };

      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
