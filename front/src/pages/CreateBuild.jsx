import React from 'react'
import styled from 'styled-components';
import { BsPlusCircle } from "react-icons/bs"

import { theme } from '../style/theme.js';
import Navbar from '../components/Navbar.jsx';

function CreateBuild() {
    return (
        <Wrapper>
            <Navbar />
            <BuildContainer>
                <Title>Create your Build</Title>
                <GridContainer
                    armor column={3} row={"2 / span 1"}
                >
                    <CreateBtn type='button'>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </GridContainer>
                <GridContainer
                    armor column={3} row={"3 / span 2"}
                >
                    <CreateBtn type='button'>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </GridContainer>
                <GridContainer
                    armor column={3} row={"5 / span 1"}
                >
                    <CreateBtn type='button'>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </GridContainer>
                <GridContainer
                    jewel column={2} row={3}
                >
                    <CreateBtn type='button'>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </GridContainer>
                <GridContainer
                    jewel column={2} row={4}
                >
                    <CreateBtn type='button'>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </GridContainer>
                <GridContainer
                    jewel column={1} row={4}
                >
                    <CreateBtn type='button'>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </GridContainer>
                <GridContainer
                    primary column={"5 / span 2"} row={"3 / span 2"}
                >
                    <CreateBtn type='button'>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </GridContainer>
                <GridContainer
                    secondary column={4} row={3}
                >
                    <CreateBtn type='button'>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </GridContainer>
                <GridContainer
                    secondary column={4} row={4}
                >
                    <CreateBtn type='button'>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </GridContainer>
            </BuildContainer>
        </Wrapper>
    )
}

export default CreateBuild;


const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    width: 100%;
    text-align: center;
    color: ${theme.colors.blanc};
    grid-row: 1;
    grid-column: 1 / span 5;
    text-decoration: underline;
    font-weight: 700;
    font-size: 40px;
`

const BuildContainer = styled.div`
    margin: 0;
    height: 85%;
    width: 85%;
    display: grid;
    grid-template-columns: repeat(6, 16.66%);
    grid-template-rows: repeat(6, 16.66%);
    gap: 20px;
`

const GridContainer = styled.div`
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
    display: grid;
    place-content: center;
`

const CreateBtn = styled.button`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: ${theme.colors.gris2};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 1;
    :active {
        transform: scale(0.8);
    }
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
