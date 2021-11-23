import React from 'react';
import * as S from './Message.styles';

const Message = ({ children }) => {
  return <S.MessageContainer>{children}</S.MessageContainer>;
};

export default Message;
