import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: white;
  position: relative;
  overflow: hidden;
  ${mobile({display: "none"})}
`;

const Arrow = styled.div`
  width: 50px;
  font-size:20px;
  height: 50px;
  background-color: #dfd8d8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw; 
  height: 100vh;
  background-color: #${props=> props.bg} ;
`;

const ImgCon = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
height: 100%;
`;

const InfoCon = styled.div`
  flex: 1;
  padding: 70px;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {

    const [slideIndex, setSliderIndex] = useState(0);

    const handleSlide = (direction) => {
        if(direction === 'left'){
            setSliderIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }
        else{
            setSliderIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }

    };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleSlide('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id} >
          <ImgCon>
            <Image src={item.img} />
          </ImgCon>
          <InfoCon>
          <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
          </InfoCon>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleSlide('right')}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  );
};

export default Slider;
