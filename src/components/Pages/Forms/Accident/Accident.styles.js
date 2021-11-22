import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 1.5rem 2rem;
  background-color: rgb(255, 255, 255);
  border: 0.2rem solid rgb(230, 230, 230);
  border-radius: 2rem;
  width: 15%;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 999;

  @media screen and (max-width: 500px) {
    width: 55%;
    margin: 3rem auto 0 auto;
    position: sticky;
  }
`;

export const LabelStyles = styled.label`
  display: inline-block;
  margin: 0.5rem 0 0.2rem 0;
  font-weight: bold;
`;

export const InputStyles = styled.input`
  width: 100%;
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem 0.2rem;
  box-sizing: border-box;
  margin: 0.2rem 0;
  background-color: rgb(230, 230, 230);
`;

export const TextareaStyles = styled(InputStyles)`
  margin-bottom: 1rem;
  height: 4rem;
`;

export const FileInputStyles = styled.input`
  position: absolute;
  left: 0;
  opacity: 0;
  top: 0;
  bottom: 0;
  width: 100%;
`;

export const FileWrapperStyles = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(230, 230, 230);
  border: 0.2rem dotted rgb(190, 190, 190);
  border-radius: 0.2rem;
  box-sizing: border-box;
`;

export const FileInputLabel = styled.label`
  display: inline-block;
  position: relative;
  height: 2rem;
  width: 100%;
`;

export const AddBtn = styled.button`
  background-color: rgb(30, 179, 124);
  border-radius: 0.2rem;
  border: none;
  color: white;
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  display: inline-block;
  width: 100%;
  margin: 0.2rem auto;
`;

export const CloseBtn = styled(AddBtn)`
  background-color: rgb(250, 45, 45);
`;
