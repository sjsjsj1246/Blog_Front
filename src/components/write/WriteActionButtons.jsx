import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

/**
 * 포스트 작성 및 취소를 담당하는 컴포넌트입니다.
 */

const WriteActionButtonsWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsWrapper>
      <StyledButton cyan onClick={onPublish}>
        포스트 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsWrapper>
  );
};

export default WriteActionButtons;
