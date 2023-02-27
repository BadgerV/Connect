import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
    width : 100%;
    display: flex;
    flex-direction: row ;
    height:89vh ;
    background: url(../../assets/background.jpg) ;
`

export const MainLeft = styled.div`
    flex : 1;
`

export const MainRight = styled.div`
    flex:1 ;
`

export const TextContainer = styled.div`
    position:relative ;
    top:50% ;
    left:50% ;
    transform:translate(-50%, -50%) ;
    display: flex;
    flex-direction : column;
    gap : 1rem;
    width : 70%;
`

export const BigText = styled.span`
    font-size: 3rem;
    font-weight: 700;
    text-align:center ;
    color : rgba(0, 0, 0, 0.5);
`

export const SmallText = styled.span`
    font-weight:300 ;
    font-size: 0.9rem;
    color : rgba(0, 0, 0, 0.5);
`

const slide = keyframes`
  0% {
    transform: translateX(-40px);
  }
  50% {
    transform: translateX(40px);
  }
  100% {
    transform: translateX(-40px);
  }
`;

export const ImageContainer = styled.div`
     position: relative;
    height: 80%; // set height according to image height
    width : 50%;
    top:50% ;
    left : 50%;
    transform:translate(-50%, -50%) ;
    background-color:rgba(0, 0, 0, 0.1) ;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

`





export const RightImage = styled.img`
  position: absolute;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;

`
