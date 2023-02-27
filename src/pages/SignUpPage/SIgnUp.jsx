import { ImgIcon, AlreadySignedUp, LogoContainer,SignText, LogoImage, SignUpButton, SignUpContainer, SignUpForm, SignUpInput, SmallerContainer, WelcomeText, SignUpLeft, SignUpRight, RightImage, SignUpRightMini } from "./SignUpStyle";
import { Logo } from "../../components/Header/HeaderStyle";
import { LeftImageContainer } from "../../components/Header/HeaderStyle";

import logo from '../../assets/logo.png';
import LockIcon from '../../assets/LockIcon.png'
import emailIcon from '../../assets/emailIcon.png'
import Vector from '../../assets/Vector.png';
import { SignInInputCont } from "../SignInPage/SignInStyle";
import Image from '../../assets/connect.jpg'

import { useState, useEffect } from "react";

import InputWithLabel from "../../components/Input/InputField";


const SIgnUp = () => {
  const [newPassword, setNewPassword] = useState('');
  const [newConfirmPassword, setNewConfirmPassword] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');

 



    const theFunction = (event) => {
      if(newPassword !== event.target.value) {
        setConfirmPasswordErrorMessage("Passwords do not match")
      } else if (newPassword == event.target.value) {
        setConfirmPasswordErrorMessage('')
      } else if (event.target.value.length === 0) {
        setConfirmPasswordErrorMessage('')
      }
    }

  const doNothing = () => {

  }

  return (
    <SignUpContainer>
      <SignUpLeft>
      <LogoContainer>
          <LeftImageContainer to = "/">
                <Logo src = {logo} />
          </LeftImageContainer>
        <span className="text">Connect</span>
      </LogoContainer>

    <WelcomeText>Welcome!</WelcomeText>  

    <SmallerContainer>
      <SignUpForm>
        <SignInInputCont>
          <InputWithLabel type = "text" logo = {Vector} onChange = {doNothing} theLabel="Username" toValidate = {true}/>
        </SignInInputCont>

        <SignInInputCont>
          <InputWithLabel type = "email" logo = {emailIcon} onChange = {doNothing} theLabel="Email" toValidate = {true}/>
        </SignInInputCont>
        
        <SignInInputCont>
          <InputWithLabel type = "text" logo = {emailIcon} onChange = {doNothing} theLabel="Phone Number" toValidate = {true}/>
        </SignInInputCont>

        <SignInInputCont>
          <InputWithLabel type = "password" logo = {LockIcon} onChange = {(e) => {setNewPassword(e.target.value)}} theLabel="Password" toValidate = {true}/>
        </SignInInputCont>

        <SignInInputCont>
          <InputWithLabel type = "password" logo = {LockIcon} errorMessage = {confirmPasswordErrorMessage} onChange = {(event) => {
            setNewConfirmPassword(event.target.value)
            theFunction(event)
            }
            
            } theLabel="Confirm Password" toValidate = {true}/>
        </SignInInputCont>

      <SignUpButton>Sign Up</SignUpButton>


      </SignUpForm>

      <AlreadySignedUp>Already Signed Up?    
          <SignText to = "/signin">Sign In Now</SignText>
        </AlreadySignedUp>
    </SmallerContainer> 
        </SignUpLeft>   
      <SignUpRight>
        <SignUpRightMini>
          <RightImage src = {Image} />
        </SignUpRightMini>
        
      </SignUpRight>
    </SignUpContainer>
  )
}

export default SIgnUp