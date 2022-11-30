import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { BsArrowUpLeft, BsArrowUpRight, BsArrowDownLeft, BsArrowDownRight } from 'react-icons/bs'
import { GiDiamonds } from 'react-icons/gi';
import '@fontsource/titillium-web/700.css';

import me from '../assets/me.png';

import Tech from './components/Tech'
import Title from './components/Title'

const BottomBox = styled(motion.section)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  background-color: #e9f0dd60;
  border-radius: 10px;
  z-index: 2;
  h2 {
    align-self: flex-start;
    margin-top: 60px;
    font-size: 3em;
    font-family: "Titillium Web", sans-serif;
    z-index: 0;
  }
  @media (max-width: 2140px) {
    h2 {
      margin-top: 35px;
    }
  }
  @media (max-width: 1846px) {
    h2 {
      margin-top: 10px;
    }
  }
`;

const Card1 = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 800px;
    height: 600px;
    background-color: #fff;
    outline: 5px #006e5f solid;
    outline-offset: -20px;
    border-radius: 30px;
    box-shadow: 0 10px 50px 0 #e7e7e7;
    overflow: hidden;
    cursor: grab;
    z-index: 0;
    img {
      position: absolute;
      bottom: 0;
      width: 450px;
      height: 680px;
      object-fit: cover;
      object-position: -37px 10px;
    }
    span {
      position: absolute;
      bottom: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      height: 100px;
      outline: 2px #3d3c00 solid;
      outline-offset: -14px;
      border-radius: 5px;
      background-color: #006e5f;
      z-index: 3;
      h4 {
        margin-top: 15px;
        font-size: 23px;
        color: #f2fedc;
      }
    }
    @media (max-width: 2424px) {
      width: 700px;
    }
    @media (max-width: 2140px) {
      width: 600px;
    }
    @media (max-width: 1846px) {
      width: 450px;
      height: 550px;
      img {
        width: 410px;
        height: 630px;
      }
    }
`;

const Card2 = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: 600px;
    background-color: #000000;
    outline: 5px #fafdf3 solid;
    outline-offset: -20px;
    border-radius: 30px;
    box-shadow: 0 10px 50px 0 #e7e7e7;
    overflow: hidden;
    cursor: grab;
    z-index: 0;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
      height: 50px;
      outline: 2px #fafdf3 solid;
      outline-offset: -7px;
      border-radius: 5px;
      background-color: #000000;
      z-index: 3;
      h4 {
        margin-top: 9px;
        margin-bottom: 5px;
        font-size: 20px;
        color: #fafdf3;
      }
    }
    p {
      margin-top: 35px;
      margin-left: 70px;
      margin-right: 70px;
      font-size: 17px;
      color: #fafdf3;
    }
    @media (max-width: 2424px) {
      width: 700px;
    }
    @media (max-width: 2140px) {
      width: 600px;
        p {
          margin-top: 25px;
          margin-left: 50px;
          margin-right: 50px;
          font-size: 16px;
      }  
    }
    @media (max-width: 1846px) {
      width: 450px;
      height: 550px;
        p {
          margin: 10px;
          margin-left: 40px;
          margin-right: 40px;
          font-size: 15px;
      }  
    }
`;

const Card3 = styled(motion.div)`
    position: absolute;
    width: 800px;
    height: 600px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 10px 50px 0 #e7e7e7;
    overflow: hidden;
    cursor: grab;
    z-index: 0;
    @media (max-width: 2424px) {
      width: 700px;
    }
    @media (max-width: 2140px) {
      width: 600px;
    }
    @media (max-width: 1846px) {
      height: 550px;
      width: 450px;
    }
    `;

const ArrowBox = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 800px;
    height: 600px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 10px 50px 0 #e7e7e7;
    overflow: hidden;
    z-index: 0;
    h5 {
      position: absolute;
      bottom: -20%;
      font-size: 1.2em;
      color: #888787;
    }
    @media (max-width: 2424px) {
      width: 700px;
    }
    @media (max-width: 2140px) {
      width: 600px;
    }
    @media (max-width: 1846px) {
      width: 450px;
      height: 530px;
    }
`;

const UpLeftArrow = styled(BsArrowUpLeft)`
    position: absolute;
    left: -10%;
    top: -10%;
    font-size: 2em;
    color: #888787;
`;

const UpRightArrow = styled(BsArrowUpRight)`
    position: absolute;
    right: -10%;
    top: -10%;
    font-size: 2em;
    color: #888787;
`;

const DownLeftArrow = styled(BsArrowDownLeft)`
    position: absolute;
    left: -10%;
    bottom: -10%;
    font-size: 2em;
    color: #888787;
`;

const DownRightArrow = styled(BsArrowDownRight)`
    position: absolute;
    right: -10%;
    bottom: -10%;
    font-size: 2em;
    color: #888787;
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 50px;
  z-index: 4;
  button {
    margin: 20px;
    width: 70px;
    height: 30px;
    font-weight: 600;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
  }
  @media (max-width: 2140px) {
    bottom: 35px;
  }
  @media (max-width: 1846px) {
    bottom: 20px;
  }
`

const Diamond = styled(GiDiamonds)`
  font-size: 14px;
`;

export default function Bottom() {

  //Controls visiblity of ArrowBox
  const [isVisible, setIsVisible] = useState(true);

  //Keeps track of which card should be up front
  const [ZIndex1, setZIndex1] = useState(false);
  const [ZIndex2, setZIndex2] = useState(false);
  const [ZIndex3, setZIndex3] = useState(false);

  //Keeps track of current width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //Sets "isVisible" state to false, causing ArrowBox to disapear, connects to card 1
  const handleVisible = () => {setIsVisible(false)};

  //Sets whatever card that was clicked to be up front using state
  const handleZIndex1 = () => {setZIndex1(true); setZIndex2(false); setZIndex3(false);};
  const handleZIndex2 = () => {setZIndex1(false); setZIndex2(true); setZIndex3(false);};
  const handleZIndex3 = () => {setZIndex1(false); setZIndex2(false); setZIndex3(true);};

  //Contrains card's dragable area, is responsive 
  function debounce(fn, ms) {
    let timer 
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null 
        fn.apply(this, arguments)
      }, ms)
    };
  }
  
  useEffect(() => {
    const debounceHandleResize = debounce(function handleResize() {
      setScreenWidth(window.innerWidth);
    }, 1000);

    window.addEventListener("resize", debounceHandleResize);

      return () => window.removeEventListener("resize", debounceHandleResize);
  })

  const dragConstraints = (currentWidth) => {
    if (currentWidth <= 1846){
      return {top: -280, right: 600, bottom: 355, left: -600 };
    } else if (currentWidth <= 2140) {
      return {top: -400, right: 950, bottom: 355, left: -950};
    } else if (currentWidth <= 2424) {
      return {top: -400, right: 950, bottom: 305, left: -950};
    } else {
      return {top: -400, right: 1100, bottom: 355, left: -1100};
    }
  }

  //Enables animation controls for each card
  const cardControls1 = useAnimation();
  const cardControls2 = useAnimation();
  const cardControls3 = useAnimation();

  //Resets position of cards on "reset" button click
  const handleClickReset = () => {
    cardControls1.start({ x: 0, y: 0 });
    cardControls2.start({ x: 0, y: 0 });
    cardControls3.start({ x: 0, y: 0 });
    setZIndex1(false);
    setZIndex2(false);
    setZIndex3(false);
  }

  //Displays cards horizontally on "display" button click, is responsive
  const handleClickDisplay = () => {
    const width1846 = window.matchMedia("(max-width: 1846px)");
    const width2140 = window.matchMedia("(max-width: 2140px)");
    const width2424 = window.matchMedia("(max-width: 2424px)");
    
    if (width1846.matches){
      cardControls1.start({ x: -460, y: 0 });
      cardControls2.start({ x: 0, y: 0 });
      cardControls3.start({ x: 460, y: 0 });
    } else if (width2140.matches) {
      cardControls1.start({ x: -610, y: 0 });
      cardControls2.start({ x: 0, y: 0 });
      cardControls3.start({ x: 610, y: 0 });
    } else if (width2424.matches) {
      cardControls1.start({ x: -710, y: 0 });
      cardControls2.start({ x: 0, y: 0 });
      cardControls3.start({ x: 710, y: 0 });
    } else {
      cardControls1.start({ x: -810, y: 0 });
      cardControls2.start({ x: 0, y: 0 });
      cardControls3.start({ x: 810, y: 0 });
    }
  }

  return (
    <BottomBox>
        <h2>Dig deeper</h2>
        <AnimatePresence>
          {isVisible && 
            <ArrowBox 
              style={{ backgroundColor: "#ffffff00", overflow: "visible" }}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{ durration: 2 }}
            >
              <UpLeftArrow />
              <UpRightArrow/>
              <DownLeftArrow />
              <DownRightArrow />
              <h5>Drag Me</h5>
            </ArrowBox>
          }
          {!isVisible &&
            <ButtonBox>  
            <motion.button onClick={handleClickReset} whileHover={{boxShadow: "0 0 10px #fff24e", color: "#fff24e"}}>Reset</motion.button>
            <motion.button onClick={handleClickDisplay} whileHover={{boxShadow: "0 0 10px #fff24e", color: "#fff24e"}}>Display</motion.button>
            </ButtonBox>
          }
        </AnimatePresence>
        <Card3 
            drag
            dragConstraints={dragConstraints(screenWidth)}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: .9}}
            onTapStart={handleZIndex1}
            style={{ zIndex: ZIndex1 ? 1 : 0 }}
            animate={cardControls3}
          >
          <Tech />
        </Card3>          
        <Card2 
            drag
            dragConstraints={dragConstraints(screenWidth)}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: .9 }}
            onTapStart={handleZIndex2}
            style={{ zIndex: ZIndex2 ? 1 : 0 }}
            animate={cardControls2}
          >
          <span>
            <h4><Diamond /> Who am I? <Diamond /></h4>
          </span>          
          <p>
            Hi I’m Richard! I am a 29-year-old South Florida native whose passion lies in creative, 
            fun and intuitive web development. I am addicted to the process of creation through 
            innovation and am motivated by the outcomes of my work. I draw inspiration from the more 
            unique, eye-catching, and interactive components of development (AKA what I like to call ‘web candy’). 
          </p>
          <p>
            Growing up through the ranks of a start up HR/IT company pushed me to further hone my development 
            skills and push the envelope for new and creative ways to display and deliver information. I’ve 
            found a particular love for using React, Framer Motion, and React Three Fiber as these tools allow 
            me to create seamless and timeless sites for clients.    
          </p>
          <p>
            I am now looking for a fun, creative, out-of-the-box group to work with on building the new 
            generation of innovative websites. I look forward to applying my skill set and passions to projects 
            while also maintaining a growth mindset to keep my mind sharp and my skills sharper. 
          </p>
        </Card2> 
        <Card1 
            drag
            dragConstraints={dragConstraints(screenWidth)}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing", scale: .9 }}
            onTap={handleVisible}
            onTapStart={handleZIndex3}
            style={{ zIndex: ZIndex3 ? 1 : 0 }}
            animate={cardControls1}
          >
          <img src={me} alt="" draggable={false} />
          <span>
            <h4><Diamond /> Richard Schembri <Diamond /></h4>
            <Title titleList={["Web Developer", "Software Engineer", "Programmer", "Coder"]} />
          </span>
        </Card1>
    </BottomBox>
  );
}
