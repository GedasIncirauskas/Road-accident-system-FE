import React from 'react';
import * as S from './Message.styles';

const Message = ({ children, color }) => {
  return <S.MessageContainer color={color}>{children}</S.MessageContainer>;
};

export default Message;
