import { ConfirmationMessageBox, ConfirmationMessageContainer, ConfirmationText, LoginLink } from "./ConfirmationMessageStyle"


const ConfirmationMessage = () => {
  return (
    <ConfirmationMessageContainer>
        <ConfirmationMessageBox>
            <ConfirmationText>Check your email for verification link.</ConfirmationText>
            <LoginLink to = "/signin">Sign In</LoginLink>
        </ConfirmationMessageBox>
    </ConfirmationMessageContainer>
    
  )
}

export default ConfirmationMessage