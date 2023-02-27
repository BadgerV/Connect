import { Button, DropdownWrapper,DropdownOptions,DropdownOption, HeaderContainer,HeaderLinkItem,HeaderProfileImg, LeftSide, Logo, RightSide, LeftImageContainer } from "./HeaderStyle"
import logo from '../../assets/logo.png';
import image from '../../assets/image1.jpg';

import { useState } from "react";
import { Link } from "react-router-dom";



const Header = () => {
  
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

  const user = true;
  return (
    <>
        <HeaderContainer>
            <LeftSide>
              <LeftImageContainer to = "/">
                <Logo src = {logo} />
              </LeftImageContainer>
            </LeftSide>

            {
              user ? (
                <RightSide>
                      <HeaderLinkItem>DISCOVER</HeaderLinkItem>
                      <HeaderLinkItem>BODY</HeaderLinkItem>


              
                    <DropdownWrapper>
                      <HeaderProfileImg src = {image} onMouseEnter={handleToggle} onMouseLeave={handleToggle}/>
                      <DropdownOptions isOpen={isOpen}>
                        <DropdownOption to = "/profile">My Profile</DropdownOption>
                        <DropdownOption href="#">Settings</DropdownOption>

                        <button className="logOutButton">Log Out</button>
                      </DropdownOptions>
                    </DropdownWrapper> 
                      
                      
                </RightSide>
              ):
              (
                <RightSide>
                  <Link to ='/signin'><Button >Sign In</Button></Link>
                  
                  <Link to ='/signup'><Button >Sign Up</Button></Link>

                </RightSide>
              )
            }
        </HeaderContainer>
    </>
  )
}

export default Header