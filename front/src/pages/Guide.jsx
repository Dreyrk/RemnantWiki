import React from 'react'
import styled from "styled-components"
import { NavLink } from "react-router-dom"

import StyledBtn from "../style/StyledBtn.js"
import Navbar from '../components/Navbar';

function Guide() {
    return (
        <>
            <Navbar />
            <Container>
                <StyledLink to={"walkthrough"} column={1} row={1}>
                    <StyledBtn type='button'>Walkthrough</StyledBtn>
                </StyledLink>
                <StyledLink to={"newgame"} column={2} row={1}>
                    <StyledBtn type='button' disabled={true} >New Game +</StyledBtn>
                </StyledLink>
                <StyledLink to={"achievements"} column={"1 / span 2"} row={2}>
                    <StyledBtn type='button' >Achievements</StyledBtn>
                </StyledLink>
            </Container>
        </>
    )
}

export default Guide;

const Container = styled.div`
    height: 90vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    grid-row: ${(props) => props.row};
    grid-column: ${(props) => props.column};
    opacity: 1;
`