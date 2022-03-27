import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user); //구조 분해
  const mainPosts = useSelector((state) => state.post.mainPosts); //구조 분해 x

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post, index) => (
        <PostCard key={post.id} post={post} />
      ))}
      {/* 안티패턴! 인덱스를 kye로 쓰면 안됨, 고유 값 넣어주기 
      게시글이 지워질 가능 성이 있거나 중간에 추가, 삭제 될 경우
       쓰면 안된다. 바뀌지 않는 다면 써도 된다. */}
    </AppLayout>
  );
};

export default Home;
