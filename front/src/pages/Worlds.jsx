import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import StyledBtn from "../style/StyledBtn.js"
import Navbar from '../components/Navbar'

function Worlds() {
    return (
        <>
            <Navbar />
            <Container>
                <StyledLink to={"enemy"}>
                    <StyledBtn>Enemies</StyledBtn>
                </StyledLink>
                <StyledLink to={"bosses"}>
                    <StyledBtn >Bosses</StyledBtn>
                </StyledLink>
            </Container>
        </>
    )
}

export default Worlds;

const Container = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    opacity: 1;
`
