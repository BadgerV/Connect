//importing sytles from styles folder
import { VerifyPageContainer,LogoContainer,LogoImage, VerifyInnerContainer, VerifyBigText, VerifySmallText, VerifySecondDiv, VerifyMethod, VerifyInput, VerifyInputCont, VerifyImgIcon, VerifyNextButton, VerifyButtonContainer, LittleBoxesContainer, LittleBox } from "./VerifyPageStyle"

//importinng nessecary images and utils
import emailIcon from '../../assets/emailIcon.png'
import Logo from '../../assets/logo.png';


// usestate from react
import { useState } from "react"

//importing 3rd party libraries
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const VerifyPage = () => {
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
                    <VerifyMethod >Verify account with email</VerifyMethod>
                    <VerifyMethod onClick = {() => handleClick(3)}>Verify account with Phone Number</VerifyMethod>
                </VerifySecondDiv>
            </VerifyInnerContainer>
        )
    }

    const PhoneNumberVeriy = () => {
        return (
            <VerifyInnerContainer>
                <VerifyBigText>Verify your phone number</VerifyBigText>
                <VerifySmallText>Verify your phone number so we can help you if you forget the password to your account</VerifySmallText>

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
        )
    }

    const EmailVerify = () => {
        return (
            <VerifyInnerContainer>
                <VerifyBigText>Verify your phone number</VerifyBigText>
                <VerifySmallText>Enter the 6-digit code sent to +{value} </VerifySmallText>

                    <LittleBoxesContainer>
                        <LittleBox type= "text" placeholder="*"/>
                        <LittleBox type= "text" placeholder="*"/>
                        <LittleBox type= "text" placeholder="*"/>
                        <LittleBox type= "text" placeholder="*"/>
                    </LittleBoxesContainer>
                           

                <VerifyButtonContainer>
                    <VerifyNextButton>Submit</VerifyNextButton>    
                </VerifyButtonContainer>
            </VerifyInnerContainer>
        )
    }
  return (
    <VerifyPageContainer>
        <LogoContainer>
        <LogoImage src = {Logo} />
        <span className="text">Connect</span>
      </LogoContainer>
        {
            choosen == 1 ? (
                <ChooseVerify />
            ) : choosen == 2 ? (
                <EmailVerify />
            ) : (
                <PhoneNumberVeriy />
            )
        }
    </VerifyPageContainer>
  )
}

export default VerifyPage