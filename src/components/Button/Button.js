import React from 'react';
import * as S from './Button.styles';

const Button = ({ children, clicked }) => {
  return <S.ModalBtn onClick={clicked}>{children}</S.ModalBtn>;
};

export default Button;
