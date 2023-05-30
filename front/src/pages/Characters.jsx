import React from 'react'
import styled from "styled-components"
import { NavLink } from "react-router-dom"

import StyledBtn from "../style/StyledBtn.js"
import Navbar from '../components/Navbar';

function Characters() {
    return (
        <>
            <Navbar />
            <Container>
                <StyledLink to={"classes"} column={1} row={1}>
                    <StyledBtn>Classes</StyledBtn>
                </StyledLink>
                <StyledLink to={"traits"} column={2} row={1}>
                    <StyledBtn>Traits</StyledBtn>
                </StyledLink>
                <StyledLink to={"builds/bests"} column={"1 / span 2"} row={2}>
                    <StyledBtn>Best Builds</StyledBtn>
                </StyledLink>
            </Container>
        </>
    )
}

export default Characters;

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