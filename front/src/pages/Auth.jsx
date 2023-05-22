import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai"

import { theme } from "../style/theme.js"
import useCurrentUserContext from '../hooks/useCurrentUserContext.js'
import Navbar from '../components/Navbar.jsx'
import Login from '../components/Login.jsx'
import Register from '../components/Register.jsx'
import SuccessBox from '../components/SuccessBox.jsx'

function Auth() {
    const { token, accountCreated, setAccountCreated } = useCurrentUserContext()

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <Wrapper>
            <Navbar />
            {!token && <Title>Log in to save your favorites builds, items and more</Title>}
            {!token ?
                <BigContainer variants={container}
                    initial="hidden"
                    animate="visible" height={accountCreated ? 550 : 740}>
                    <Login variants={item} accountCreated={accountCreated} />
                    {!accountCreated && <Register variants={item} setAccountCreated={setAccountCreated} />}
                </BigContainer>
                :
                <Container>
                    <SuccessBox />
                    <HomeLink to={"/"}><AiFillHome color={theme.colors.blanc} size={40} /></HomeLink>
                </Container>
            }
        </Wrapper>
    )
}

export default Auth;

const Container = styled.div`
    height: 70%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
`

const HomeLink = styled(NavLink)`
    font-size: 24px;
    opacity: 0.5;
    :hover {
        opacity: 1;
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const BigContainer = styled(motion.div)`
    height: ${(props) => props.height};
    width: 760px;
    border-radius: 50px;
    background-color: ${theme.colors.gris1};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    border: 2px solid ${theme.colors.gris2};
    box-shadow: 0px 6px 6px ${theme.colors.noir};
    padding: 5px;
`

const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    color: ${theme.colors.blanc};
`




