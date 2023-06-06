import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

import { theme } from "../style/theme.js"
import { device } from '../style/device.js'
import BuildPiece from './BuildPiece.jsx'


function BuildDisplay({ build, showBuild }) {
    return (
        <Wrapper>
            {showBuild &&
                <BuildContainer
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    big={build.description ? 1 : 0}>
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
                            {build?.description ? build?.description : "No Description"}
                        </Desc>
                    }
                    {Object.keys(build).map((piece) => (
                        piece !== "name" && piece !== "description" && piece !== "_id" &&
                        <BuildPiece
                            key={build[piece]._id}
                            item={build[piece]}
                            itemType={piece}
                        />
                    ))}
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

const Wrapper = styled.section`
    position: relative;
    height: 80vh;
    width: 100%;
    display: grid;
    place-content: center;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
    @media ${device.mobileL} {
     width: 400px;
    }
`

const BuildContainer = styled(motion.div)`
    margin: auto;
    height: 75%;
    width: 92%;
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: repeat(8, 12.5%);
    gap: 20px;
    border-radius: 25px;
    background-color: ${theme.colors.gris2};
    @media ${device.mobileL} {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(10, 1fr);
        gap: 15px;
    }
`
