import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import useCurrentUserContext from '../hooks/useCurrentUserContext';

import Navbar from '../components/Navbar'
import { theme } from '../style/theme.js';

function Saved() {
    const { user } = useCurrentUserContext()

    console.log(user)
    return (
        <>
            <Navbar />
            <Container>
                <Title>{user.pseudo}'s Saved Page</Title>
                <StyledBtn to={"/saved/items"} >
                    Items
                </StyledBtn>
                <StyledBtn to={"/builds/saved"}>
                    Builds
                </StyledBtn>
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

const StyledBtn = styled(NavLink)`
    height: 100px;
    width: 350px;
    border: 10px solid ${theme.colors.blanc};
    background-color: ${theme.colors.rouge};
    border-radius: 30px;
    box-shadow: 0px 4px 4px ${theme.colors.gris1};
    color: ${theme.colors.blanc};
    font-weight: 700;
    font-size: 38px;
    line-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    grid-row: 2;
`
