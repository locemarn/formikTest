import styled from "styled-components";

export const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.color};
`

export const FormBox = styled.form `
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 100px 40px;
  max-width: 40%;
  
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

export const InputForm = styled.input `
  border: 1px solid lightblue;
  border-radius: 5px;
  width: 100%;
  padding: 4px;
  margin: 5px auto;

  &:focus {
    outline: none;
  }
  
`

export const ButtonForm = styled.button `
  background-color: darkblue;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 5px 20px;
  margin-top: 5px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`

export const FormErrors = styled.div `
  color: red;
  font-size: 11px;
  margin: 5px auto;
`