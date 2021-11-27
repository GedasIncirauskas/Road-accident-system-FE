import React, { useState, useContext } from 'react';
import { CooredinateContext } from '../../../contexts/Coordinates';
import { Button, Message, Api } from '../../../';
import * as S from './Accident.styles';

const Accident = ({ getData }) => {
  const [userInputs, setUserInputs] = useState('');
  const [toggle, setToggle] = useState(false);
  const [toggleError, setToggleError] = useState(false);
  const [msg, setMsg] = useState();
  const [fileUplodedPath, setFileUplodedPath] = useState();
  const cooredinateContext = useContext(CooredinateContext);

  const close = () => {
    setToggle(!toggle);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      if (cooredinateContext.coordinates === undefined) {
        return alert('Please set marker!');
      }
      const lat = cooredinateContext.coordinates[0];
      const lng = cooredinateContext.coordinates[1];
      const postValues = {
        user: userInputs.user,
        description: userInputs.description,
        file: fileUplodedPath,
        lat,
        lng,
      };
      const response = await Api.createAccident(postValues);
      if (response.status === 200) {
        setToggle(!toggle);
        getData();
      } else {
        setMsg('Please fill a form');
        setToggleError(!toggleError);
      }
    } catch (err) {
      setToggleError(!toggleError);
      return setMsg(err);
    }
  };

  const onFileUpload = async (e) => {
    try {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      const response = await Api.uploadPhoto(formData);
      const data = await response.json();
      if (response.status === 200) {
        setFileUplodedPath(data.path);
      }
    } catch (err) {
      setToggleError(!toggleError);
      return setMsg(err);
    }
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
            onClick={() => setToggleError(false)}
          />
          <S.LabelStyles htmlFor="description">Description</S.LabelStyles>
          <S.TextareaStyles
            type="textarea"
            col="5"
            row="6"
            id="description"
            onChange={(e) => setUserInputs({ ...userInputs, description: e.target.value })}
            onClick={() => setToggleError(false)}
          ></S.TextareaStyles>
          <S.FileInputLabel htmlFor="test" id="S.LabelStylesis">
            <S.FileWrapperStyles>Add accident photo</S.FileWrapperStyles>
            <S.FileInputStyles type="file" id="file" onChange={(e) => onFileUpload(e)} />
          </S.FileInputLabel>
          <S.AddBtn type="submit" onClick={(e) => sendMessage(e)}>
            Add
          </S.AddBtn>
          <S.CloseBtn onClick={() => close()}>Close</S.CloseBtn>
          {toggleError ? <Message>{msg}</Message> : ''}
        </S.FormContainer>
      ) : (
        <Button clicked={close}>Add accident</Button>
      )}
    </>
  );
};

export default Accident;
