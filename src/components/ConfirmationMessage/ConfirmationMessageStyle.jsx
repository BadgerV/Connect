import styled from "styled-components";
import { Link } from "react-router-dom";


export const ConfirmationMessageContainer = styled.div`
    height:100vh;
    width:100vw;
    position:relative;
    background-color:grey ;
`
export const ConfirmationMessageBox = styled.div`
    position:absolute;
    top : 50%;
    left : 50%;
    transform:translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding : 1.5rem 3rem;
    background-color:whitesmoke ;
    flex-direction:row;
    gap : 0.5rem;
`

export const ConfirmationText = styled.span`
    font-size: 0.9rem;
    font-weight: 300;
`

export const LoginLink = styled(Link)`
    font-size:0.9rem;
    font-weight: 300;
`