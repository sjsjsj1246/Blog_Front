import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../container/write/EditorContainer';
import TagBoxContainer from '../container/write/TagBoxContainer';
import WriteActionButtonsContainer from '../container/write/WriteActionButtonsContainer';
import { Helmet } from 'react-helmet-async';

const WritePage = (props) => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - BLOGROUP</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
