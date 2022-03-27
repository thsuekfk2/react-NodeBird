export const initialState = {
  //더미 데이터를 이곳에 넣어둠
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "혜빈",
      },
      content: "첫 번째 게시글",
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "바보1",
          },
          content: "우와 개정판이 나왔군요~",
        },
        {
          User: {
            nickname: "바보2",
          },
          content: "얼른 사고싶어요~",
        },
      ],
    },
  ],
  imagePaths: [], //이미지 업로드 시 이미지 경로
  postAdded: false, //게시글 추가가 완료 시 true
};

const ADD_POST = "ADD_POST"; //변수로 빼주면 오타 방지 가능
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미 데이터 입니다",
  User: {
    id: 1,
    nickname: "혜빈",
  },
  Image: [],
  Contents: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };

    default:
      return state;
  }
};

export default reducer;
