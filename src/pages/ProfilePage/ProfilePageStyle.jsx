import styled from "styled-components";

export const ProfilePageContainer = styled.div`
    display: grid;
    grid-template-columns:1fr 3fr ;
    padding: 1rem;
    position: relative;

`
export const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5); // replace with your desired color and opacity
  backdrop-filter: blur(5px); // replace with your desired blur amount
  z-index:3 ;
`;
export const ProfilePageLeft = styled.div`
    padding-top:3rem ;
`
export const ProfileImageCont = styled.div`
    position: relative;
    width: 80%;
    aspect-ratio : 1;
    left : 50%;
    transform: translateX(-50%);
`

export const ProfileImage = styled.img`
    border-radius: 5px;


`   

export const ProfileInterests = styled.div`
    width:90% ;
    padding: 0.5rem 1rem;
    position: relative;
    left : 50%;
    transform: translateX(-50%);
    border-top: 1px solid black;


    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ProfileInterestsHeader = styled.span`
    display: block;
    text-align: center;
    font-size : 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    color : #3F00FF;
`

export const ProfileInterest = styled.div`
    
    font-size : 0.8rem;
    font-weight: 400;

`

export const ProfilePageRight = styled.div`
    padding: 3rem;
`


export const ProfileName = styled.span`
    display: block;
    font-size:2rem ;
    font-weight: bold;
    margin : 0;
`

export const ProfileTitle = styled.span`
    display: block;
    font-size: 0.7rem;
    font-weight: 500;
    color:#3F00FF ;
    margin : 0;
`

export const ProfileOption = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
    gap : 2rem;
`

export const ProfileIcon = styled.img`
    position: absolute;
    top : 50%;
    transform: translateY(-50%);
    left:5% ;

`


export const ProfileAboutOption = styled.div`
    position: relative;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 0.5rem 1rem;
    padding-left:2rem ;
`

export const ProfileInfoCont = styled.div`
    display: flex;
    flex-direction: column;
    gap : 1rem;
    padding:1rem ;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    


    
`

export const ProfileTopContainer = styled.div`
    width : 100%;
    display: flex;
    flex-direction:row ;
    justify-content: space-between;
    padding: 0 0.5rem;
    .ProfileText {
        font-size: 0.8rem;
        font-weight: bold;
        letter-spacing:1px ;
        color: #3F00FF;
    }

    .EditProfileText {
        font-size: 0.6rem;
        font-weight: 400;
        letter-spacing:1px ;
        color: #3F00FF;
        cursor: pointer;
        font-weight: bold;
    }
`


export const ProfileInfoItem = styled.div`
    display: flex;
    flex-direction: row;
    gap : 2rem;
`

export const ProfileInfoLeft = styled.span`
    width : 4rem;
    font-size: 0.8rem;
    color: #3F00FF;
    font-weight: bold;

`

export const ProfileInfoRight = styled.span`
    font-size: 0.8rem;
    max-width: 15rem;
`
