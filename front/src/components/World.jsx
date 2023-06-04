import React, { useRef } from 'react'
import styled from 'styled-components';

import { theme } from '../style/theme';
import corsusBackground from "../images/Corsus.png"
import ward17Background from "../images/ward17.png"
import labyrinthBackground from "../images/labyrinth.png"
import WorldSteps from './WorldSteps';
import AnimatedText from "./AnimatedText"

const backgroundImageUrl = (world) => {
    if (world.name === "Corsus") {
        return `url(${corsusBackground})`
    } else if (world.name === "Labyrinth") {
        return `url(${labyrinthBackground})`
    }
    else if (world.name === "Ward 17") {
        return `url(${ward17Background})`
    } else {
        return `url(${world.img})`
    }
}

function World({ world }) {
    const ref = useRef(null)

    return (
        <WorldContainer ref={ref} img={backgroundImageUrl(world)}>
            <AnimatedText col={3} row={1} size={"42px"} text={world.name} />
            <Desc>
                <span style={{ textDecoration: "underline", fontSize: "22px", fontWeight: 700, margin: 0 }}>Description</span>
                {world.description}
            </Desc>
            {world.steps.map((step, i) => {
                return (
                    <WorldSteps reference={ref} key={i} step={step} index={i} />
                )
            })}
        </WorldContainer>
    )
}

export default World;

const Desc = styled.p`
    grid-column: 4 / span 5;
    grid-row: 1;
    width: 500px;
    height: 220px;
    max-height: 180px;
    overflow-y: auto;
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.blanc};
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
`

const WorldContainer = styled.section`
    height: 90vh;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    place-items: center;
    scroll-behavior: smooth;
    scroll-snap-align: center;
    background-image: ${(props) => props.img};
    background-repeat: no-repeat;
    background-size: cover;
`