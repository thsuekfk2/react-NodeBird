import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";

const configureStore = () => {
  const middleware = [];
  const enhancer =
    process.env.NODE_ENV === "production" //개발용 미들웨어와 배포용 미들웨어는 다름
      ? compose(applyMiddleware(...middleware)) //배포용 devtools 연결 x
      : composeWithDevTools(applyMiddleware(...middleware)); //개발용 devtools 연결
  const store = createStore(reducer, enhancer); //store? state 와 reducer포함한 것

  return store;
};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
