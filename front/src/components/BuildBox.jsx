import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { theme } from '../style/theme.js';

function BuildBox({ build }) {

    return (
        <BoxContainer to={`/saved/builds/${build.name ? build.name : "noname"}`}>
            <Name>{build.name ? build.name : "No Name"}</Name>
            <DetailsContainer>
                <BuildImg src={build.primary.img} alt='buildImg' />
            </DetailsContainer>
            <Desc>
                {build.description ? build.description : "No Desc"}
            </Desc>
        </BoxContainer>
    )
}

export default BuildBox;

const BoxContainer = styled(NavLink)`
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
