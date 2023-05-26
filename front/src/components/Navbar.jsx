import React, { useState } from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { BsBookmarkHeart } from "react-icons/bs"
import { BiLogOut } from "react-icons/bi"
import { FaUser } from "react-icons/fa"
import { BiMenuAltLeft } from "react-icons/bi"
import { IoClose } from "react-icons/io5"

import { theme } from "../style/theme.js"
import { device } from '../style/device.js';
import logo from "../images/logo.jpg"
import useCurrentUserContext from "../hooks/useCurrentUserContext.js"

function Navbar({ titleSelected }) {

    const { token, setUser, setToken, setAccountCreated } = useCurrentUserContext();

    const [show, setShow] = useState(false);

    function logOut() {
        setUser({})
        setToken(null)
        localStorage.clear()
        setAccountCreated(false)
    }

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
                {!show ?
                    <BurgerMenuIcon type='button' onClick={() => setShow(true)} >
                        <BiMenuAltLeft size={45} color={theme.colors.blanc} />
                    </BurgerMenuIcon>
                    :
                    <MobileNavContainer>
                        <CloseBtn type='button' onClick={() => setShow(false)}>
                            <IoClose size={40} color={theme.colors.blanc} />
                        </CloseBtn>
                        <Link show column={1} row={2} to="/characters">Characters</Link>
                        <Link show column={2} row={3} to="/stuff">Equipements/Stuff</Link>
                        <Link show column={2} row={2} to="/worlds">Worlds</Link>
                        <Link show column={1} row={3} to="/guide">Guide</Link>
                        {token &&
                            <IconLink to="/saved">
                                <BsBookmarkHeart size={30} color={theme.colors.blanc} />
                            </IconLink>}
                        {!token ?
                            <IconLink to="/auth">
                                <FaUser size={30} color={theme.colors.blanc} />
                            </IconLink> :
                            <BiLogOut onClick={logOut} size={30} color={theme.colors.blanc} />
                        }
                    </MobileNavContainer>
                }
                <Link to="/worlds">Worlds</Link>
                <Link to="/guide">Guide</Link>
                {token &&
                    <IconLink to="/saved">
                        <BsBookmarkHeart size={30} color={theme.colors.blanc} />
                    </IconLink>
                }
                {!token ?
                    <IconLink to="/auth">
                        <FaUser size={30} color={theme.colors.blanc} />
                    </IconLink>
                    :
                    <IconLink logout="true" >
                        <BiLogOut onClick={logOut} size={30} color={theme.colors.blanc} />
                    </IconLink>
                }
            </SideContainer>
        </NavContainer>
    )
}

export default Navbar;

const CloseBtn = styled.button`
    height: 40px;
    width: 40px;
    margin-top: 15px;
    margin-left: 10px;
    border: none;
    background-color: ${theme.colors.noir};
    grid-column: 1;
    grid-row: 1;
    place-self: start;
`

const MobileNavContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 350px;
    background-color: ${theme.colors.noir};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 100px);
    place-items: center;
`

const BurgerMenuIcon = styled.button`
    height: 50px;
    width: 45px;
    margin: 0;
    padding: 0;
    display: none;
    cursor: pointer;
    border: none;
    background-color: ${theme.colors.noir};
    border-radius: 7px;
    :active{
        transform: scale(0.8);
    }
    @media ${device.mobileL} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const NavContainer = styled.div`
    width: 100vw;
    height: 100px;
    place-self: start;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.gris1};
    position: sticky;
    top: 0;
    @media ${device.mobileL} {
        height: 65px;
        flex-direction: row-reverse;
    }
`

const SideContainer = styled.div`
    width: 36%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media ${device.mobileL} {
        justify-content: start;
        padding-left: 10px;
    }
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
    @media ${device.mobileL} {
        display: none;
    }
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
    @media ${device.mobileL} {
        display: ${(props) => props.show ? "block" : "none"};
        grid-column: ${(props) => props.column};
        grid-row: ${(props) => props.row};
        border: 2px solid ${theme.colors.blanc};
        background-color: ${theme.colors.rouge};
        padding: 5px;
        border-radius: 25px;
        box-shadow: rgba(157, 2, 8, 0.5) 0px 8px 24px;
    }
`
const IconLink = styled(NavLink)`
    color: ${theme.colors.blanc};
    text-align: center;
    font-size: 20px;
    opacity: ${(props) => props.logout && 1};
    :hover {
        scale: 0.8;
    }
    @media ${device.mobileL} {
        display: none;
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
    @media ${device.mobileL} {
        font-size: 28px;
    }
`