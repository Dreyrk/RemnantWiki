import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

import { theme } from "../style/theme.js"

function BuildDisplay({ build }) {
    return (
        <BuildContainer>
            <Title>Random Build</Title>
            <GridContainer column={4} row={"3 / span 1"}>
                <BuildImg src={build.head.img} />
            </GridContainer>
            <GridContainer column={4} row={"4 / span 2"}>
                <BuildImg src={build.body.img} />
            </GridContainer>
            <GridContainer column={4} row={"6 / span 1"}>
                <BuildImg src={build.legs.img} />
            </GridContainer>
            <GridContainer jewel column={3} row={4}>
                <BuildImg src={build.amulet.img} />
            </GridContainer>
            <GridContainer jewel column={3} row={5}>
                <BuildImg src={build.ring1.img} />
            </GridContainer>
            <GridContainer jewel column={2} row={5}>
                <BuildImg src={build.ring2.img} />
            </GridContainer>
            <GridContainer primary column={"6 / span 2"} row={"4 / span 2"}>
                <BuildImg src={build.primary.img} />
            </GridContainer>
            <GridContainer secondary column={5} row={4}>
                <BuildImg src={build.secondary.img} />
            </GridContainer>
            <GridContainer secondary column={5} row={5}>
                <BuildImg src={build.melee.img} />
            </GridContainer>
        </BuildContainer >
    )
}

export default BuildDisplay;

const Title = styled(motion.h1)`
    margin: 0;
    place-self: center;
    color: ${theme.colors.blanc};
    text-decoration: underline;
    grid-column: 1 / span 7;
    grid-row: 1;
`

const BuildContainer = styled(motion.div)`
    margin: 0;
    height: 85%;
    width: 85%;
    border-radius: 25px;
    background-color: ${theme.colors.gris2};
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: repeat(8, 12.5%);
`

const GridContainer = styled(motion.div)`
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    place-self: ${(props) => props.primary ? "center stretch" : "stretch center"};
    padding: ${(props) => props.jewel ? 10 : 0}px;
    height: ${(props) => props.primary ? "105px" : "80%"};
    width: ${(props) => props.secondary ? "140%" : "auto"};
`

const BuildImg = styled.img`
    height: 90%;
    width: 100%;
`
