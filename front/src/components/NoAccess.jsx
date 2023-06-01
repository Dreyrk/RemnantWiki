import React from 'react'
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { BiLogInCircle } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"

import { theme } from '../style/theme';

function NoAccess() {
    return (

        <Container>
            <Title>Please Login required for access all features</Title>
            <LinkContainer>
                <StyledLink to={"/"} replace={true}>
                    <AiFillHome size={50} color={theme.colors.blanc} />
                </StyledLink>
                <StyledLink to={"/auth"} replace={true}>
                    <BiLogInCircle size={50} color={theme.colors.blanc} />
                </StyledLink>
            </LinkContainer>
        </Container>
    )
}

export default NoAccess;

const LinkContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
`
const StyledLink = styled(NavLink)`
    text-decoration: none;
    :hover {
        opacity: 0.75;
        transform: scale(0.8);
        transition: 0.3s ease-in-out;
    }
    :active {
        transform: scale(0.5);
    }
`

const Container = styled.div`
    position: absolute;
    top: 40%;
    right: 23.5%;
    height: 350px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid ${theme.colors.rouge};
    border-radius: 3rem;
    background-color: ${theme.colors.gris1};
`

const Title = styled.h1`
    color: ${theme.colors.blanc};
    margin: 0;
    text-align: center;
    padding: 20px;
`
