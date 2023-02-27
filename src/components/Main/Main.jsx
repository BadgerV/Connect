import { BigText, ImageContainer, MainContainer, MainLeft, MainRight, RightImage, SmallText, TextContainer } from "./MainStyle"
import image from '../../assets/image1.jpg';


import { useState } from "react";


const Main = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
  return (
    <MainContainer>
        <MainLeft>
            <TextContainer>
                <BigText>Lorem Ipsum</BigText>
                <SmallText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolores voluptatem ducimus. Magnam optio nisi provident nesciunt autem eius dolores expedita temporibus distinctio, facere, repellendus laborum a cum ipsa nulla.</SmallText>
            </TextContainer>
        </MainLeft>
        <MainRight>
            <ImageContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <RightImage src = {image} style={{
          transform: isHovered ? 'translateX(40px)' : 'none',
        }}/>
            </ImageContainer>
        </MainRight>
    </MainContainer>
  )
}

export default Main