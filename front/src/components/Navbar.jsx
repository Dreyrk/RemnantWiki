import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { BsBookmarkHeart } from "react-icons/bs"
import { FaUser } from "react-icons/fa"

import { theme } from "../style/theme.js"
import logo from "../images/logo.jpg"

function Navbar({ titleSelected }) {
    return (
        <NavContainer>
            <SideContainer>
                <LogoLink to="/">
                    <Logo src={logo} />
                </LogoLink>
                <Link to="/characters">Characters</Link>
                <Link to="/stuff">Equipements/Stuff</Link>
            </SideContainer>
            <Title to="/">{titleSelected ? titleSelected : "Remnant Wiki"}</Title>
            <SideContainer>
                <Link to="/worlds">Worlds</Link>
                <Link to="/guide">Guide</Link>
                <IconLink to="/saved"><BsBookmarkHeart size={30} color={theme.colors.blanc} /></IconLink>
                <IconLink to="/login"><FaUser size={30} color={theme.colors.blanc} /></IconLink>
            </SideContainer>
        </NavContainer>
    )
}

export default Navbar;

const NavContainer = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.gris1};
    position: sticky;
    top: 0;
`

const SideContainer = styled.div`
    width: 36%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Logo = styled.img`
    max-height: 80px;
    max-width: 80px;
`

const LogoLink = styled(NavLink)`
    height: 80px;
    width: 80px;
    opacity: 1;
    text-decoration: none;
    display: flex;
`

const Link = styled(NavLink)`
    font-size: 20px;
    font-style: bold;
    color: ${theme.colors.blanc};
    text-align: center;
    font-weight: 500;
    line-height: 30px;
    :hover {
        scale: 0.8;
    }
`
const IconLink = styled(NavLink)`
    color: ${theme.colors.blanc};
    text-align: center;
    font-size: 20px;
    :hover {
        scale: 0.8;
    }
`

const Title = styled(NavLink)`
    width: 260px;
    text-decoration: none;
    font-size: 42px;
    font-weight: 700;
    line-height: 55px;
    color: ${theme.colors.rouge};
    text-align: center;
    -webkit-text-stroke-color: ${theme.colors.noir};
    -webkit-text-stroke-width: thin;
    text-shadow: 0px 4px 4px ${theme.colors.noir};
    opacity: 1;
    cursor: default;
`