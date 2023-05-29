import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'

import { theme } from "../style/theme.js"
import { device } from '../style/device.js'

const finalPosition = { y: 0, x: 0, scale: 1, opacity: 1 }

function BuildDisplay({ build, showBuild }) {
    return (
        <Wrapper>
            {showBuild &&
                <BuildContainer>
                    <Title
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ delay: 0, type: 'spring', duration: 2, stiffness: 60, bounce: 0.5 }}
                    >
                        {build.name ? build.name : "Your Challenge Build is :"}
                    </Title>
                    {build.name &&
                        <Desc
                            initial={{ opacity: 0, scale: 0.2 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0, type: 'spring', stiffness: 60, bounce: 0.5, duration: 2 }}
                        >
                            <span style={{ textDecoration: "underline", color: theme.colors.rouge, fontWeight: 700, fontSize: "28px" }}>Your Build Description</span>
                            <br />
                            {build.description ? build.description : "No Description"}
                        </Desc>
                    }
                    <GridContainer
                        to={`/stuff/armors/${build.head._id}`}
                        armor="true"
                        column={4} row={"3 / span 1"}
                        initial={{ y: 150, scale: 0.2, opacity: 0 }}
                        animate={finalPosition}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 60, bounce: 0.5, duration: 0.5 }}
                        exit={{ y: 150, scale: 0.2, opacity: 0 }}
                    >
                        <BuildImg src={build.head.img} />
                    </GridContainer>
                    <GridContainer
                        to={`/stuff/armors/${build.body._id}`}
                        armor="true"
                        column={4} row={"4 / span 2"}
                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={finalPosition}
                        transition={{ delay: 0.7, type: 'spring', stiffness: 60, bounce: 0.5, duration: 0.5 }}
                        exit={{ scale: 0.2, opacity: 0 }}
                    >
                        <BuildImg src={build.body.img} />
                    </GridContainer>
                    <GridContainer
                        to={`/stuff/armors/${build.legs._id}`}
                        armor="true"
                        column={4} row={"6 / span 1"}
                        initial={{ y: -150, scale: 0.2, opacity: 0 }}
                        animate={finalPosition}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 60, bounce: 0.5, duration: 0.5 }}
                        exit={{ y: -150, scale: 0.2, opacity: 0 }}
                    >
                        <BuildImg src={build.legs.img} />
                    </GridContainer>
                    <GridContainer
                        to={`/stuff/amulets/${build.amulet._id}`}
                        jewel="true"
                        column={3} row={4}
                        initial={{ y: 50, x: 185, scale: 0.2, opacity: 0 }}
                        animate={finalPosition}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 60, bounce: 0.5, duration: 0.5 }}
                        exit={{ y: 50, x: 185, scale: 0.2, opacity: 0 }}
                    >
                        <BuildImg src={build.amulet.img} />
                    </GridContainer>
                    <GridContainer
                        to={`/stuff/rings/${build.ring1._id}`}
                        jewel="true"
                        column={3} row={5}
                        initial={{ y: -50, x: 185, scale: 0.2, opacity: 0 }}
                        animate={finalPosition}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 60, bounce: 0.5, duration: 0.5 }}
                        exit={{ y: -50, x: 185, scale: 0.2, opacity: 0 }}
                    >
                        <BuildImg src={build.ring1.img} />
                    </GridContainer>
                    <GridContainer
                        to={`/stuff/rings/${build.ring2._id}`}
                        jewel="true"
                        column={2} row={5}
                        initial={{ y: -50, x: 381, scale: 0.2, opacity: 0 }}
                        animate={finalPosition}
                        transition={{ delay: 0.1, type: 'spring', stiffness: 60, bounce: 0.5, duration: 0.5 }}
                        exit={{ y: -50, x: 381, scale: 0.2, opacity: 0 }}
                    >
                        <BuildImg src={build.ring2.img} />
                    </GridContainer>
                    <GridContainer
                        to={`/stuff/weapons/${build.primary._id}`}
                        primary="true"
                        column={"6 / span 2"} row={"4 / span 2"}
                        initial={{ x: -451, scale: 0.115, opacity: 0 }}
                        animate={finalPosition}
                        transition={{ delay: 0, type: 'spring', stiffness: 60, bounce: 0.5, duration: 0.5 }}
                        exit={{ x: -451, scale: 0.115, opacity: 0 }}
                    >
                        <BuildImg src={build.primary.img} />
                    </GridContainer>
                    <GridContainer
                        to={`/stuff/weapons/${build.secondary._id}`}
                        secondary="true"
                        column={5} row={4}
                        initial={{ y: 50, x: -195, scale: 0.2, opacity: 0 }}
                        animate={finalPosition}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 60, bounce: 0.5, duration: 0.5 }}
                        exit={{ y: 50, x: -195, scale: 0.2, opacity: 0 }}
                    >
                        <BuildImg secondary src={build.secondary.img} />
                    </GridContainer>
                    <GridContainer
                        to={`/stuff/weapons/${build.melee._id}`}
                        secondary="true"
                        column={5} row={5}
                        initial={{ y: -50, x: -195, scale: 0.2, opacity: 0 }}
                        animate={finalPosition}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 60, bounce: 0.5, duration: 0.5 }}
                        exit={{ y: -50, x: -195, scale: 0.2, opacity: 0 }}
                    >
                        <BuildImg src={build.melee.img} />
                    </GridContainer>
                </BuildContainer >
            }
        </Wrapper>
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
const Desc = styled(motion.p)`
    margin: 0;
    margin-left: 45px;
    color: ${theme.colors.blanc};
    grid-column: 1 / span 3;
    grid-row: 2;
    font-size: 18px;
    font-weight: 500;
`

const Wrapper = styled.div`
    top: 12%;
    height: 85%;
    max-height: 80vh;
    width: 1420px;
    border-radius: 25px;
    background-color: ${theme.colors.gris2};
    @media ${device.mobileL} {
     width: 400px;
    }
`

const BuildContainer = styled(motion.div)`
    margin: 0;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: repeat(8, 12.5%);
    gap: 20px;
    @media ${device.mobileL} {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(10, 1fr);
        gap: 15px;
    }
`

const GridContainer = styled(motion(NavLink))`
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    place-self: ${(props) => props.primary ? "center stretch" : "stretch"};
    margin: ${(props) => props.jewel ? 10 : 0}px;
    padding: ${(props) => props.armor ? 5 : 0}px;
    height: ${(props) => props.primary ? "105px" : "100%"};
    width: ${(props) => props.primary ? "80%" : "100%"};
    background-color: rgba(244, 244, 246, 0.4);
    border-radius: 25px;
    opacity: 1;
`

const BuildImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    transform: ${(props) => props.secondary && "scale(1.5)"};
    :hover {
        transform: ${(props) => props.secondary ? "scale(1.6)" : "scale(1.1)"};
    }
`
