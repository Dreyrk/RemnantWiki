import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import useCurrentUserContext from '../hooks/useCurrentUserContext';

import Navbar from '../components/Navbar'
import { theme } from '../style/theme.js';
import StyledBtn from '../style/StyledBtn';

function Saved() {
    const { user, token } = useCurrentUserContext()

    return (
        <>
            <Navbar />
            <Container>
                <Title>{user.pseudo}'s Saved Page</Title>
                <StyledLink to={token ? "/saved/items" : "/auth"}>
                    <StyledBtn>Items</StyledBtn>
                </StyledLink>
                <StyledLink to={token ? "/saved/builds" : "/auth"}>
                    <StyledBtn>Builds</StyledBtn>
                </StyledLink>
            </Container>
        </>
    )
}

export default Saved;

const Title = styled.h1`
    grid-column: 1 / span 2;
    grid-row: 1;
    margin: 0;
    padding: 0;
    color: ${theme.colors.blanc};
`

const Container = styled.div`
    height: 90vh;
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 10% 80%;
    place-items: center;
`

const StyledLink = styled(NavLink)`
    opacity: 1;
    grid-row: 2;
`
