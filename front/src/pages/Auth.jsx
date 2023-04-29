import React from 'react'
import styled from 'styled-components'

import { theme } from "../style/theme.js"
import useCurrentUserContext from '../hooks/useCurrentUserContext.js'
import Navbar from '../components/Navbar.jsx'
import Login from '../components/Login.jsx'
import Register from '../components/Register.jsx'
import SuccessBox from '../components/SuccessBox.jsx'

function Auth() {
    const { token } = useCurrentUserContext()
    return (
        <Wrapper>
            <Navbar />
            <Title>Log in to save your favorites builds, items and more</Title>
            {!token ?
                <BigContainer>
                    <Login />
                    <Register />
                </BigContainer>
                :
                <SuccessBox />
            }
        </Wrapper>
    )
}

export default Auth;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BigContainer = styled.div`
    height: 740px;
    width: 740px;
    border-radius: 50px;
    background-color: ${theme.colors.gris1};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    border: 2px solid ${theme.colors.gris2};
    box-shadow: 0px 6px 6px ${theme.colors.noir};
    padding-bottom: 5px;
    padding-top: 10px;
`

const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    color: ${theme.colors.blanc};
`




