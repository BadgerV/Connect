import styled from "styled-components";

export const VerifyPageContainer = styled.div`
    padding : 2rem;
    position:relative ;
    height:100vh ;
    
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

export const VerifyInnerContainer = styled.div`
    position:absolute;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    top:50% ;
    left : 50%;
    transform:translate(-50%, -50%) ;
    width:35% ;
    display: flex;
    flex-direction:column ;
    align-items: center;
    padding: 2rem;
    border-radius:5px ;
`

export const VerifyBigText = styled.span`
    font-size:1.5rem ;
    font-weight: 400;
    margin-bottom:1rem ;
    color :#3F00FF;
    font-weight: 500;
`

export const VerifySmallText = styled.span`
    font-size:0.8rem ;
    font-weight: 300;
    color :rgba(0, 0, 0, 0.5);
`

export const VerifySecondDiv = styled.div`
    display: flex;
    flex-direction:row ;
    gap : 1rem;
    justify-content: space-around;
    margin-top:2rem ;

`
export const VerifyMethod = styled.div`
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    width:40% ;
    font-size:0.8rem ;
    font-weight: 300;
    cursor: pointer;
    text-align:center ;
    justify-content: center;
    padding:1rem ;
    border-radius:5px ;
    color : rgba(0, 0, 0, 0.5);
`

export const VerifyInputCont = styled.div`
    position:relative ;
    margin-top:1rem ;
    width: 100%;
    display: flex;
    border-bottom:1px solid rgba(0, 0, 0, 0.5) ;
    padding: 0.5rem;

`


export const VerifyImgIcon = styled.img`
    position:absolute ;
    top : 50%;
    transform:translateY(-50%) ;
    left : 10%;
`

export const VerifyInput = styled.input`
    width: 100% ;
    border-radius:5px ;
    border:none ;
    outline:none ;
`

export const VerifyButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 2rem;
`

export const VerifyNextButton = styled.button`
    background-color: #3F00FF;
    color : white;
    padding : 0.4rem 1.3rem;
    font-weight:500 ;
    font-size:0.8rem ;
    outline : none;
    border: none;
    border-radius:10px ;
    cursor: pointer;
`

export const LittleBoxesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:100% ;
    margin-top:3rem ;
`

export const LittleBox = styled.input`
    width : 15%;
    aspect-ratio : 1;
    text-align:center ;
    outline:none ;
    font-size: 1.3rem;
`