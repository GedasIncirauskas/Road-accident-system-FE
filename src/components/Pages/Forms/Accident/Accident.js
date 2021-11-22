import React, { useState, useContext } from 'react';
import { CooredinateContext } from '../../../contexts/Coordinates';
import { Button } from '../../../';
import * as S from './Accident.styles';

const Accident = () => {
  const [userInputs, setUserInputs] = useState();
  const [toggle, setToggle] = useState(false);
  const cooredinateContext = useContext(CooredinateContext);

  const close = () => {
    setToggle(!toggle);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const lat = cooredinateContext.coordinates[0];
    const lng = cooredinateContext.coordinates[1];
    const postValues = {
      user: userInputs.user,
      description: userInputs.description,
      // file: userInputs.file,
      lat,
      lng,
    };

    fetch(`${process.env.REACT_APP_BASE_URL}/v1/accident`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postValues),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          return alert('error');
        }
        window.location.href = '/accident';
        return alert('Success');
      })
      .catch((err) => alert(err.message));
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <S.FormContainer>
          <S.LabelStyles htmlFor="user">User</S.LabelStyles>
          <S.InputStyles
            type="text"
            id="user"
            onChange={(e) => setUserInputs({ ...userInputs, user: e.target.value })}
            required
          />
          <S.LabelStyles htmlFor="description">Description</S.LabelStyles>
          <S.TextareaStyles
            type="textarea"
            col="5"
            row="6"
            id="description"
            onChange={(e) => setUserInputs({ ...userInputs, description: e.target.value })}
            required
          ></S.TextareaStyles>
          <S.FileInputLabel htmlFor="test" id="S.LabelStylesis">
            <S.FileWrapperStyles>Add accident photo</S.FileWrapperStyles>
            <S.FileInputStyles
              type="file"
              id="file"
              onChange={(e) => setUserInputs({ ...userInputs, file: e.target.files[0] })}
            />
          </S.FileInputLabel>
          <S.AddBtn type="submit" onClick={(e) => sendMessage(e)}>
            Add
          </S.AddBtn>
          <S.CloseBtn onClick={() => close()}>Close</S.CloseBtn>
        </S.FormContainer>
      ) : (
        <Button clicked={close}>Add accident</Button>
      )}
    </>
  );
};

export default Accident;
