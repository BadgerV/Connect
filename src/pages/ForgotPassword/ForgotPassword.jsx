import { BackToLoginLink, ForgotPasswordBigContainer, ForgotPasswordContainer, ForgotPasswordHeader, ForgotPasswordInputContainer, ForgotPasswordSubText, ForgotPButtonCont, ForgotSubmitButton } from "./ForgotPasswordStyle"
import InputWithAnimation from "../../components/Input/InputField"
import { VerifyInnerContainer,LogoImage,LogoContainer,VerifyInputCont,VerifyButtonContainer,VerifyNextButton ,VerifyBigText, VerifySmallText, VerifySecondDiv, VerifyMethod } from "../VerifyPage/VerifyPageStyle";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";

import logo from '../../assets/Icon.png';
import Logo from '../../assets/logo.png';


const ForgotPassword = () => {
  const [choosen, setChoosen] = useState(1);
  const [value, setValue] = useState()


    const handleClick = (input) => {
        setChoosen(input)
    }
  const ChooseVerify = () => {
    return (
        <VerifyInnerContainer>
            <VerifyBigText>Verify your account</VerifyBigText>
            <VerifySmallText>How would you like to verify your account</VerifySmallText>

            <VerifySecondDiv>
                <VerifyMethod onClick = {() => handleClick(2)}>Verify account with email</VerifyMethod>
                <VerifyMethod onClick = {() => handleClick(3)}>Verify account with Phone Number</VerifyMethod>
            </VerifySecondDiv>
        </VerifyInnerContainer>
    )
}

const PhoneNumberVeriy = () => {
  return (
    <>
      <VerifyInnerContainer>
          <VerifyBigText>Forgot Password?</VerifyBigText>
          <VerifySmallText>Enter the phone number associated with your account and we'll send you a verification code to reset your password.</VerifySmallText>

          <VerifyInputCont>
              <PhoneInput placeholder = "Phone Number" country="ng" value={value}
                  onChange={setValue} inputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: true
                  }} inputStyle = {{width : "100%", border : "none"} }/>

          
          </VerifyInputCont>            

          <VerifyButtonContainer>
              <VerifyNextButton  onClick = {() => handleClick(2)}>Submit</VerifyNextButton>    
          </VerifyButtonContainer>
      </VerifyInnerContainer>

      <BackToLoginLink to = "/signin">Back to Sign In</BackToLoginLink>
        </>
  )
}

  const EmailForgotPassword = () => {
    return (
      <>
      <ForgotPasswordContainer>
          <ForgotPasswordHeader>Forgot Password?</ForgotPasswordHeader>
          <ForgotPasswordSubText>Enter the email address associated with your account and we'll send you a link to reset your password.</ForgotPasswordSubText>

          <ForgotPasswordInputContainer>
              <InputWithAnimation type = "text" onChange = {() => {}} logo = {logo} name = "email"  theLabel= "Email" />
          </ForgotPasswordInputContainer>

          <ForgotPButtonCont>
              <ForgotSubmitButton>Submit</ForgotSubmitButton>
          </ForgotPButtonCont>
      </ForgotPasswordContainer>

      <BackToLoginLink to = "/signin">Back to Sign In</BackToLoginLink>
      </>
    )
  }

  return (
    <ForgotPasswordBigContainer>
      <LogoContainer>
        <LogoImage src = {Logo} />
        <span className="text">Connect</span>
      </LogoContainer>
        {
            choosen == 1 ? (
                <ChooseVerify />
            ) : choosen == 2 ? (
                <EmailForgotPassword />
            ) : (
                <PhoneNumberVeriy />
            )
        }
    </ForgotPasswordBigContainer>
  )
}

export default ForgotPassword