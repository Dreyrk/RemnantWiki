import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

import { theme } from "../style/theme.js"
import missing from "../images/notfound.webp"
import stone from "../images/RedStone.png"

const parentVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
            delayChildren: 0.3,
            staggerChildren: 0.2
        },
    },
};

const childVariants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.5,
            type: "spring",
            bounce: 0.5
        },
    },
};

function NotFound() {
    return (
        <BoxContainer
            initial="initial"
            animate="animate"
            variants={parentVariants}
        >
            <Title
                initial="initial"
                animate="animate"
                variants={childVariants}
            >Page not found
                <br />
                <StyledSpan
                    initial="initial"
                    animate="animate"
                    variants={childVariants}
                >(use Red Stone to return Ward 13)</StyledSpan>
            </Title>
            <BoxLink to={"/"} replace={true}
                initial="initial"
                animate="animate"
                variants={childVariants}
            >
                <StoneImg src={stone} alt='redStone' />
            </BoxLink>
        </BoxContainer>
    )
}

export default NotFound;

const StyledSpan = styled.span`
    font-size: 20px;
    color: ${theme.colors.blanc};
    opacity: 0.8;
    font-weight: 500;
`

const Title = styled(motion.h1)`
    width: 100%;
    text-align: center;
    color: ${theme.colors.blanc};
    font-size: 40px;
`

const StoneImg = styled(motion.img)`
    height: 250px;
    width: auto;
    object-fit: contain;
    padding-right: 50px;
    padding-top: 66px;
    :hover {
        transform: scale(1.4);
        padding-left: 15px;
        transition: 0.15s ease-in;
        opacity: 0.8;
    }
`

const BoxLink = styled(motion(NavLink))`
    height: 200px;
    width: 200px;
    opacity: 1;
    display: grid;
    place-content: center;
`

const BoxContainer = styled(motion.div)`
    position: absolute;
    top: 20%;
    right: 17.5%;
    height: 60%;
    width: 65%;
    border: 4px solid ${theme.colors.blanc};
    background-image: url(${missing});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
