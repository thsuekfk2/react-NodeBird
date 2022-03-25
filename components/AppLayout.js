import React, { useMemo, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Col, Input, Menu, Row } from "antd";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux"; // 리액트랑 리덕스를 연결해 주는 아이
const SearchInput = styled(Input.Search)`
  vertical-align: "middle";
`;
{
  /* 위 방법이 싫을 땐  useMemo
    const style = useMemo(()=>(
     vertical-align: "middle"
    ))  */
}
const AppLayout = ({ children }) => {
  // const [isLoggedIN, setIsLoggedIn] = useState(false);
  const isLoggedIN = useSelector((state) => state.user.isLoggedIn);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <SearchInput enterButton />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIN ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://hyebin-development-blog.tistory.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by hyebin
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
