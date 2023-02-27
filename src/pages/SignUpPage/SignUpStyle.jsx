import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpContainer = styled.div`
    height: 100%;
    width:100%;
    position:relative;
    display: flex;
    flex-direction:row ;
`

export const SignUpLeft = styled.div`
    flex:1;
    position:relative;
    display: flex;
    flex-direction:column ;
    height : 100%;
    width : 100%;
    padding : 1.5rem 1rem;
    

`
export const SignUpRight = styled.div`
    flex:1;
    height: 100vh;
    overflow:hidden ;
`
export const SignUpRightMini = styled.div`
    height:80% ;
    width: 70%;
    overflow:hidden ;
    position:relative ;
    top : 50%;
    left : 50%;
    transform:translate(-50%, -50%) ;
    border-radius: 10px;
`
export const RightImage = styled.img`
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap : 0.2rem;

    .text {
        font-size: 1.5rem;
        font-weight: 800;
        background: linear-gradient(to right, blue, red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export const LogoImage = styled.img`
    height:25px ;
`


export const WelcomeText = styled.span`
    margin:auto ;
    margin-bottom:1.5rem ;
    font-size: 2rem;
    letter-spacing:1px ;
    font-weight: 600;
    color : #3F00FF;
`
export const SmallerContainer = styled.div`
    margin:auto ;
    width:80% ;
    padding:1.5rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`

export const SignUpForm = styled.form`
    display: flex;
    flex-direction:column ;
    width:100% ;
    gap : 1.5rem;
    padding:0 1rem ;
`
export const SignUpInputCont = styled.div`
    position:relative ;
`

export const ImgIcon = styled.img`
    position:absolute ;
    top : 50%;
    transform:translateY(-50%) ;
    left : 3%;
`

export const SignUpInput = styled.input`
    width: 100% ;
    padding: 0.9rem 2.5rem;
    border-radius:5px ;
    border:none ;
    outline:none ;
    background-color:rgba(0, 0, 0, 0.1) ;
`

export const SignUpButton = styled.button`
    width:100% ;
    letter-spacing:1px ;
    background-color: #3F00FF;
    color : white;
    padding : 0.8rem 1.3rem;
    font-weight:500 ;
    font-size:0.9rem ;
    outline : none;
    border: none;
    border-radius:10px ;
    cursor: pointer;
    letter-spacing:1px ;
    text-transform:uppercase ;
`

export const AlreadySignedUp = styled.span`
    display:block ;
    font-size:0.8rem ;
    text-align:center ;
    margin-top:1rem ; 
    color : rgba(0, 0, 0, 0.5);
`

export const SignText = styled(Link)`
        margin-left:0.2rem ;
        text-decoration:none ;
        border: none;
        color : black;
        font-weight: bold;
        cursor:pointer ;
        color: #3F00FF;
        
`