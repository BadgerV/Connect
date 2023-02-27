import { Email,WelcomeText, LogoContainer, LogoImage, PhoneNumber, SignInContainer, SmallerContainer, TopHeader, SmallerText, LoginForm, PhoneInput, SignInInput, LoginButton, SignInInputCont, ImgIcon, ForgotPassword } from "./SignInStyle"
import { AlreadySignedUp, SignText } from "../SignUpPage/SignUpStyle";
import { Logo } from "../../components/Header/HeaderStyle";
import { LeftImageContainer } from "../../components/Header/HeaderStyle";


import logo from '../../assets/logo.png';
import LockIcon from '../../assets/LockIcon.png'
import emailIcon from '../../assets/emailIcon.png'
 
import {  useState, useRef, useEffect } from "react";
import InputWithLabel from "../../components/Input/InputField";


const SignIn = () => {
  const [showDiv, setShowDiv] = useState(true);

  const handleClick = () => {
    setShowDiv(true);
  };

  const handleClick2 = () => {
    setShowDiv(false);
  };

  

  const bgColor = showDiv ? '#3F00FF' : 'rgba(0, 0, 0, 0.3)';
  const bgColor1 = !showDiv ? '#3F00FF' : 'rgba(0, 0, 0, 0.3)';

  return (
    <SignInContainer>
      <LogoContainer>
          <LeftImageContainer to = "/">
                <Logo src = {logo} />
          </LeftImageContainer>
        <span className="text">Connect</span>
      </LogoContainer>

      <WelcomeText>Welcome Back</WelcomeText>
      <SmallerText>Sign into your account to continue</SmallerText>
      <SmallerContainer>
      <TopHeader>
          <PhoneNumber onClick={() => handleClick() } style={{ backgroundColor: bgColor }}
            
          >Phone Number</PhoneNumber>
          <Email onClick={() => handleClick2()} style={{ backgroundColor: bgColor1 }}>Email</Email>
        </TopHeader>
        <LoginForm>
          <SignInInputCont>
            {showDiv ? (
              <InputWithLabel
                type="text"
                logo={emailIcon}
                theLabel="Phone Number"
                onChange = {() => {}}
              />
            ) : (
              <InputWithLabel
                type="email"
                logo={emailIcon}
                theLabel="Email"
                onChange = {() => {}}
              />
            )}
          </SignInInputCont>

          <SignInInputCont>
            <InputWithLabel
              type="password"
              logo={LockIcon}
              theLabel="Password"
              onChange = {() => {}}
            />
          </SignInInputCont>

          <ForgotPassword to = "/forgot-password" >Forgot Password?</ForgotPassword>
          <LoginButton >LOGIN</LoginButton>
        </LoginForm>

        <AlreadySignedUp>Don't have an account?    
          <SignText to = "/signup">Sign Up Now</SignText>
        </AlreadySignedUp>
      </SmallerContainer>
    </SignInContainer>
  );
};

export default SignIn




