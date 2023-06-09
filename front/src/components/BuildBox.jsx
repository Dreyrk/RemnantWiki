import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import { theme } from '../style/theme.js';

const variants = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1 }
}

function BuildBox({ build }) {

    return (
        <BoxContainer
            variants={variants}
            transition={{ bounce: 1, stiffness: 80, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            to={`/saved/builds/${build.name && build.name}`}>
            <Name>{build.name ? build.name : "No Name"}</Name>
            <DetailsContainer>
                {build.primary.img && <BuildImg src={build.primary.img} alt='buildImg' />}
            </DetailsContainer>
            <Desc>
                {build.description ? build.description : "No Desc"}
            </Desc>
        </BoxContainer>
    )
}

export default BuildBox;

const BoxContainer = styled(motion(NavLink))`
    opacity: 1;
    text-decoration: none;
    height: 250px;
    width: 250px;
    border: 2px solid ${theme.colors.rouge};
    border-radius: 10px;
    background-color: ${theme.colors.gris2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const DetailsContainer = styled.div`
    height: 40%;
    width: 90%;
`

const Desc = styled.p`
    max-height: 25%;
    height: auto;
    width: 90%;
    margin: 0;
    text-align: center;
    overflow: auto;
    color: ${theme.colors.blanc};
    border-top: 2px dotted;
`

const Name = styled.p`
    width: 100%;
    margin: 0;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: ${theme.colors.blanc};
`

const BuildImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: ${(props) => props.part !== "secondary" ? "contain" : "cover"};
    transform: ${(props) => props.part === "melee" && "scale(1.4)"};
    :hover {
        transform: ${(props) => props.part === "melee" ? "scale(1.7)" : "scale(1.1)"};
    }
`
