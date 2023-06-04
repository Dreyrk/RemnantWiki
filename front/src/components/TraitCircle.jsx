import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import { theme } from '../style/theme.js'


function TraitCircle({ trait }) {
    const [hovered, setHovered] = useState(false)

    return (
        <TraitContainer
            to={`/characters/traits/${trait._id}`}
            replace={true}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{ translateY: hovered ? -20 : 0, scale: 2 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <BuildImg src={trait.img} alt='trait' />
        </TraitContainer>
    )
}

export default TraitCircle;

const TraitContainer = styled(motion(NavLink))`
    height: 50px;
    width: 50px;
    background-color: ${theme.colors.noir};
    border-radius: 50%;
    cursor: pointer;
    opacity: 1;
`

const BuildImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    transform: ${(props) => props.scale};
`
