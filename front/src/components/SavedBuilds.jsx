import React from 'react'
import styled from 'styled-components'
import { BsPlusCircle } from "react-icons/bs"
import { NavLink } from 'react-router-dom'

import { theme } from '../style/theme.js'
import useCurrentUserContext from '../hooks/useCurrentUserContext'
import BuildBox from './BuildBox'
import Navbar from './Navbar.jsx'

function SavedBuilds() {

    const { user } = useCurrentUserContext()

    return (
        <Wrapper>
            <Navbar />
            <BigContainer>
                <BuildBox build={user.saved.builds} />
                <CreateBtn to={"create"}>
                    <BsPlusCircle size={40} color={theme.colors.blanc} />
                </CreateBtn>
            </BigContainer>
        </Wrapper>
    )
}

export default SavedBuilds;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
`

const BigContainer = styled.div`
    height: 95%;
    width: 87%;
    display: grid;
    grid-template-columns: repeat(5, 250px);
    grid-template-rows: repeat(5, 250px);
    place-items: center;
`

const CreateBtn = styled(NavLink)`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: ${theme.colors.gris2};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 1;
    :active {
        transform: scale(0.8);
    }
`
