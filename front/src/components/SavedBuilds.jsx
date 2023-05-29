import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { BsPlusCircle } from "react-icons/bs"
import { NavLink, useParams } from 'react-router-dom'

import { theme } from '../style/theme.js'
import useCurrentUserContext from '../hooks/useCurrentUserContext'
import BuildBox from './BuildBox'
import Navbar from './Navbar.jsx'
import BuildDisplay from './BuildDisplay.jsx'

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2
        }
    }
}


function SavedBuilds() {
    const { user } = useCurrentUserContext()
    const { name } = useParams()

    const [index, setIndex] = useState(0)


    useEffect(() => {
        if (name) {
            const decodedName = decodeURIComponent(name)
            setIndex(user.saved.builds.indexOf(user.saved.builds.find(build => build.name.includes(decodedName))))
        }
    }, [name, user.saved.builds])

    if (name) {
        return (
            <Wrapper>
                <Navbar />
                <BuildDisplay build={user.saved.builds[index]} showBuild={true} />
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <Navbar />
                <BigContainer
                    variants={variants}
                    initial="hidden"
                    animate="show"
                >
                    {user.saved.builds.map((build, i) => (<BuildBox key={i} build={build} />))}
                    <CreateBtn to={"create"}>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </BigContainer>
            </Wrapper>
        )
    }
}

export default SavedBuilds;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
`

const BigContainer = styled(motion.div)`
    height: 95%;
    width: 87%;
    display: grid;
    grid-template-columns: repeat(5, 250px);
    grid-template-rows: repeat(5, 250px);
    place-items: center;
    gap: 35px;
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
