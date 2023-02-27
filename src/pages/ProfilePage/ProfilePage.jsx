import Header from "../../components/Header/Header"
import { ProfileImageCont,ProfileIcon, ProfileInterest,ProfileImage, ProfileInterests, ProfilePageContainer, ProfilePageLeft, ProfilePageRight, ProfileInterestsHeader, ProfileName, ProfileTitle, ProfileOption, ProfileTimelineOption, ProfileAboutOption, ProfileInfoItem, ProfileInfoLeft, ProfileInfoRight, ProfileInfoCont, ProfileTopContainer, BackgroundLayer } from "./ProfilePageStyle"
import image from '../../assets/background.jpg';
import vector from '../../assets/Vector.png'
import EditProfile from "../../components/EditProfile/EditProfile";
import { useState } from "react";

const ProfilePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <Header />

        
        <ProfilePageContainer isOpen = {isOpen}>

            {
                isOpen ? (<BackgroundLayer />) : <></>
            }
        
            <ProfilePageLeft>
                <ProfileImageCont>
                    <ProfileImage src = {image}/>
                </ProfileImageCont>

                <ProfileInterests>
                    <ProfileInterestsHeader>Interests</ProfileInterestsHeader>
                    <ProfileInterest>
                        BasketBall
                    </ProfileInterest>

                    <ProfileInterest>
                        VolleyBall
                    </ProfileInterest>

                    <ProfileInterest>
                        Table Tennis
                    </ProfileInterest>
                </ProfileInterests>
            </ProfilePageLeft>
            <ProfilePageRight>
                <ProfileName> Segunmaru Faozan</ProfileName>
                <ProfileTitle>Software Developer</ProfileTitle>

                <ProfileOption>
                    <ProfileAboutOption><ProfileIcon src = {vector} /> About</ProfileAboutOption>
                </ProfileOption>

                <ProfileInfoCont>
                    <ProfileTopContainer>
                        <span className="ProfileText">CONTACT INFORMATION</span>
                        <span className="EditProfileText" onClick={() => handleClick()}>Edit Profile</span>
                    </ProfileTopContainer>
                    <ProfileInfoItem>
                        <ProfileInfoLeft>Username: </ProfileInfoLeft>
                        <ProfileInfoRight>Faozy</ProfileInfoRight>
                    </ProfileInfoItem>

                    <ProfileInfoItem>
                        <ProfileInfoLeft>Phone: </ProfileInfoLeft>
                        <ProfileInfoRight>+234 80 7875 4215</ProfileInfoRight>
                    </ProfileInfoItem>


                    <ProfileInfoItem>
                        <ProfileInfoLeft>Email: </ProfileInfoLeft>
                        <ProfileInfoRight>Segunfaozan112@gmail.com</ProfileInfoRight>
                    </ProfileInfoItem>

                </ProfileInfoCont>

                
            </ProfilePageRight>

            {
                isOpen ? (<EditProfile setIsOpen = {setIsOpen} isOpen = {isOpen} />) : <></>
            }
            
        </ProfilePageContainer>


    </>
  )
}

export default ProfilePage