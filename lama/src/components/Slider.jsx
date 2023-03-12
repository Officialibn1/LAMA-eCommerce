import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";
import { Mobile } from "../Responsive";

const Container = styled.div`
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;

    ${Mobile({
        display: 'none'
    })}
`

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${({direction}) => direction === 'left' && '10px'};
    right: ${({direction}) => direction === 'right' && '10px'};
    cursor: pointer;
    margin: auto;
    opacity: .7;
    z-index: 2;

`

const Wrapper = styled.div`
    height: 100%; 
    display: flex;
    transform: translateX(${({slideIndex}) => slideIndex * -100}vw);
    transition: all 1.5s ease;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100%;
    
    `

const ImgContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;

    img{
        height: 100%;
        width: 100%;
    }
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    background-color: ${({bg}) => bg};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 60px;
    }

    p{
        font-size: 20px;
        letter-spacing: 3px;
        margin: 40px 0;
    }

    button{
        padding: 7px;
        font-weight: 500;
        font-size: 18px;
        border: .8px solid grey;
        background: transparent;
        cursor: pointer;
        transition: .5s all ease;

        &:hover{
            background-color: rgba(117, 117, 117, 0.1);
        }
    }
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction='left'>
                <ArrowLeftOutlined style={{fontSize: '50px'}} onClick={() => handleClick('left')} />
            </Arrow>
            <Wrapper slideIndex={slideIndex} >
                {sliderItems.map(item => (
                    <Slide key={item.id}>
                        <ImgContainer>
                            <img src={item.src} alt=""></img>
                        </ImgContainer>
                        <InfoContainer bg={item.bg}>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <button>SHOP NOW</button>
                            </div>
                        </InfoContainer>
                    </Slide>
                ))}
   
            </Wrapper>
            <Arrow direction='right'>
                <ArrowRightOutlined style={{fontSize: '50px'}} onClick={() => handleClick('right')} />
            </Arrow>
        </Container>
    );
}

export default Slider;
