import React from 'react';
import HeaderContainer from '../container/common/HeaderContainer';
import PostListContainer from '../container/posts/PostListContainer';

const PostListPage = (props) => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
    </>
  );
};

export default PostListPage;
