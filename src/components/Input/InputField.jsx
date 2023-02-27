import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import logo from '../../assets/Icon.png'

const InputContainer = styled.div`
  position: relative;
`;

const InputField = styled.input`
  border: none;
  font-size: 1rem;
  padding: 10px;
  width: 100%;
  outline: none;
  background-color:whitesmoke ;
  padding-left: 2.5rem;


  &:focus {
    background-color:whitesmoke ;
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      & ~ label {
        transform: translateY(-20px);
        font-size: 0.8rem;
        color: black;
        padding:0.1rem 0.2rem ;
        border-radius:1px ;
        top : 1px;
      }
    `}
`;

const InputLabel = styled.label`
  position: absolute;
  padding-left:1.8rem ;
  top: 10px;
  left: 10px;
  font-size: 1rem;
  color: #999;
  transition: all 0.2s ease-out;
`;

const IconPNG = styled.img`
  position:absolute ;
  top : 50%;
  transform:translateY(-50%) ;
  left:3% ;
`

const ErrorMessage = styled.div`
  position: absolute;
  right: 0;
  top: -1.1rem; /* adjust this value to align with the input field */
  color: red; /* or any other color that you prefer */
  font-size: 0.8rem;
  font-weight: 200;
`;


const InputWithLabel = (props) => {
  const regex = /[a-zA-Z]/;

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function isStrongPassword(password) {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const symbols = /[$-/:-?{-~!"^_`\[\]]/g;
  
    if (
      password.length >= 8 &&
      password.match(lowerCaseLetters) &&
      password.match(upperCaseLetters) &&
      password.match(numbers) 
    ) {
      return true;
    } else {
      return false;
    }
  }

  function containsSpaceOrSymbol(str) {
    const regex = /[\\?~,;:|!.*^()%@#&$\-+={}[\]/\s]/g;
    return regex.test(str);
  }
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  
  

  const hasValue = inputValue.length > 0;
  
  useEffect(() => {
    if(props.toValidate === true) {
      if(props.theLabel === "Phone Number") {
        if(regex.test(inputValue)) {
          setError("Phone number cannot contain letters")
        } else if(inputValue.length > 0 && inputValue.length < 11 && inputValue.length > 14) {
          setError("Phone Number Invalid")  
        }
        else {
          setError('')
        } 
      }
  
      if(props.theLabel === "Email") {
        if(!isValidEmail(inputValue) && inputValue.length > 0) {
          setError("Invalid Email")
        }
        else {
          setError('')
        } 
      }

      if(props.theLabel === "Password") {
        if(!isStrongPassword(inputValue) && inputValue.length > 0) {
          setError("Password not strong enough")
        } else  {
          setError('')
        }
      }

      if(props.theLabel === "Username") {
        if(containsSpaceOrSymbol(inputValue) && inputValue.length > 0) {
          setError("Username cannot contain symbols")
        } else if (inputValue.length > 0 && inputValue.length < 5) {
          setError("Username too short")
        }
        else  {
          setError('')
        }
      }
    }
  }, [inputValue])

  return (
    <InputContainer>
    <IconPNG src={props.logo} /> 
    <InputField
      type={props.type}
      value={inputValue}
      onChange={(event) => {
        props.onChange(event);
        handleInputChange(event);
      }}
      hasValue={hasValue}
      toValidate = {props.toValidate}

    />
    <InputLabel htmlFor="input-field">{props.theLabel}</InputLabel>
    <ErrorMessage>{error}</ErrorMessage>
    {props.errorMessage ? <ErrorMessage>{props.errorMessage}</ErrorMessage> : <></>}
  </InputContainer>
  );
};

export default InputWithLabel; 