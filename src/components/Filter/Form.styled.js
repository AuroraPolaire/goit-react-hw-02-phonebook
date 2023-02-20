import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & input {
    position: relative;
    margin-left: 10px;
  }

  & button {
    padding: 5px 10px;
    background-color: #a8dadc;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in;
  }

  & button:hover {
    background-color: #457b9d;
    transform: scale(1.05);
  }
`;
