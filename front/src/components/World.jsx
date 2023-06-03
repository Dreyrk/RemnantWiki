import React from 'react'
import styled from 'styled-components';

import { theme } from '../style/theme';
import corsusBackground from "../images/Corsus.png"
import ward17Background from "../images/ward17.png"
import labyrinthBackground from "../images/labyrinth.png"

//Function to determinate properties grid-row and grid-column for steps
function calculatePosition(i) {
    const row = Math.floor(i / 5) * 2 + 2;
    const col = ((i < 5) ? i : (9 - i)) + 1;
    return { row, col };
}

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

function Steps({ step, index }) {
    const { row, col } = calculatePosition(index);
    return (
        <StyledFragment key={index} row={row} col={col} direction={row === 4 ? 'rtl' : 'ltr'}>
            <Step>{index + 1}</Step>
            <StepPath vertical={index === 5} row={row} />
        </StyledFragment>
    );
}


function World({ world }) {
    return (
        <WorldContainer img={backgroundImageUrl(world)}>
            <Title>{world.name}</Title>
            <Desc>
                <span style={{ textDecoration: "underline", fontSize: "22px", fontWeight: 700, margin: 0 }}>Description</span>
                {world.description}
            </Desc>
            {world.steps.map((step, i) => {
                return (
                    <Steps key={i} step={step} index={i} />
                )
            })}
        </WorldContainer>
    )
}

export default World;

const Title = styled.h1`
    grid-column: 3;
    grid-row: 1;
    margin: 0;
    text-decoration: underline;
    font-weight: 700;
    font-size: 42px;
    color: ${theme.colors.blanc};
`

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

const StyledFragment = styled.div`
    position: relative;
    grid-row: ${(props) => props.row};
    grid-column: ${(props) => props.col};
    direction: ${(props) => props.direction};
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

const Step = styled.div`
    height: 120px;
    width: 120px;
    display: grid;
    place-content: center;
    border-radius: 50%;
    background-color: ${theme.colors.rouge};
    z-index: 2;
    color: ${theme.colors.blanc};
    font-size: 22px;
    font-weight: 700;
    :hover {
        transform: scale(1.2);
        transition: 0.1s ease-in-out;
    }
`

const StepPath = styled.div`
    position: absolute;
    width: calc(100% + 140px);
    bottom: ${(props) => props.vertical ? '200%' : '50%'};
    left: ${(props) => props.row === 2 && !props.vertical ? '-230px' : '-60%'};
    right: ${(props) => props.row === 4 && !props.vertical ? '-230px' : 'auto'};
    border-top: 2px solid ${theme.colors.rouge};
    z-index: 1;
    transform: ${(props) => props.vertical && 'rotate(90deg)'};
`
