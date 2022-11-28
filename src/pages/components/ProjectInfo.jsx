import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import '@fontsource/titillium-web/700.css';

const InfoLeft = styled(motion.article)`
    order: 1;
    width: 400px;
    h2 {
        font-size: 3em;
        font-weight: 600;
        font-family: "Titillium Web", sans-serif;
    }
    p {
        font-size: 1.8em;
    }
    @media (max-width: 2066px) {
        margin: 80px;
        h2 {
            font-size: 2.8em;
        }
        p {
            font-size: 1.5em;
        }
    }
`;

const InfoRight = styled(motion.article)`
    order: 3;
    position: relative;
    width: 400px;
    font-size: 3em;
    z-index: 0;
    a {
        display: block;
        text-decoration: underline;
        color: #000000;
        cursor: pointer;
    }
    @media (max-width: 2066px) {
        margin: 80px;
    }
    @media (max-width: 1368px) {
        margin: 78px;
    }
`;

const CrossedOut = styled(motion.p)`
    margin: 0;
    display: block;
    text-decoration: underline;
    cursor: pointer;
    &::before {
        content: '';
        position: absolute;
        height: 140px;
        border-left: 2px solid #ff0000;
        transform: rotate(65deg);
        bottom: 20px;
        left: 85px;
    }
    &::after {
        content: '';
        position: absolute;
        height: 140px;
        border-left: 2px solid #ff0000;
        transform: rotate(-65deg);
        bottom: 20px;
        left: 85px;
    }
`;
const Text1 = () => {
    return (
        <>
            <InfoLeft initial={{opacity: 0, x: -500}} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.8 }}>
                <h2>Nick's Garage</h2>
                <p>Auto repair garage based in West Palm Beach.</p>
            </InfoLeft>
            <InfoRight initial={{opacity: 0, x: 500}} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.8 }}>
                <CrossedOut>Live Site</CrossedOut>
                <motion.a whileHover={{color: "#fff24e"}} href="https://github.com/Gympiecuddles/nicks-garage" target="_blank">Github</motion.a>
            </InfoRight>
        </>
    )
}

const Text2 = () => {
    return (
        <>
            <InfoLeft initial={{opacity: 0, x: -500}} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.8 }}>
                <h2>Your Life Well Lived</h2>
                <p>Retreats with Wild Dolphins and Whales & Holistic Coaching and Counseling</p>
            </InfoLeft>
            <InfoRight initial={{opacity: 0, x: 500}} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.8 }}>
                <CrossedOut>Live Site</CrossedOut>
                <motion.a whileHover={{color: "#fff24e"}} href="https://github.com/Gympiecuddles/YourLifeWellLived" target="_blank">Github</motion.a>
            </InfoRight>
        </>
    )
}

const Text3 = () => {
    return (
        <>
            <InfoLeft initial={{opacity: 0, x: -500}} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.8 }}>
                <h2>HRIS Team</h2>
                <p>HR consultant based in Delray.</p>
            </InfoLeft>
            <InfoRight initial={{opacity: 0, x: 500}} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.8 }}>
                <motion.a whileHover={{color: "#fff24e"}} href="https://gympiecuddles.github.io/hristeam/" target="_blank" >Live Site</motion.a>
                <motion.a whileHover={{color: "#fff24e"}} href="https://github.com/Gympiecuddles/hristeam" target="_blank">Github</motion.a>
            </InfoRight>
        </>
    )
}
export default function ProjectInfo({project}) {
   console.log(project);
    if (project === 1) {
        return <Text1 />
    } else if (project === 2) {
        return <Text2 />
    } else if (project === 3) {
        return <Text3 />
    }
}
