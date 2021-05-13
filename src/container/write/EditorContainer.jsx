import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../../components/write/Editor';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = (props) => {
  const dispath = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const onChangeField = useCallback(
    (payload) => dispath(changeField(payload)),
    [dispath],
  );

  useEffect(() => {
    return () => {
      dispath(initialize());
    };
  }, [dispath]);

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
