import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { motion, useTime, useTransform } from 'framer-motion';

import { theme } from '../style/theme.js';

function ModModal({ mod }) {

    const [descHeight, setDescHeight] = useState(0)

    useEffect(() => {
        const descLength = parseInt(mod.description.length, 10)
        setDescHeight(descLength * 0.2)
    }, [mod.description])

    const time = useTime()
    const scroll = useTransform(
        time,
        [0, 4000], // For every x ms...
        [0, -descHeight], // ...translateY based on desc length
        { clamp: true }
    )

    return (
        <ModalContainer transition={{ delay: 0.3 }}>
            <ModImg src={mod.img} alt={mod.name} />
            <ModName>{mod.name}</ModName>
            <ModDescContainer>
                <ModDesc height={descHeight} style={{ translateY: scroll }}>{mod.description}</ModDesc>
            </ModDescContainer>
        </ModalContainer>
    )
}

export default ModModal;

const ModalContainer = styled(motion.div)`
    height: 150px;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    background-color: ${theme.colors.blanc};
    padding: 15px;
    border-radius: 25px;
    transform: rotateY(180deg);
`

const ModImg = styled.img`
    margin: 0;
    height: 60px;
    width: 60px;
`

const ModName = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    color: ${theme.colors.rouge};
`

const ModDesc = styled(motion.p)`
    height: ${(props) => props.height};
    margin: 0;
    color: ${theme.colors.gris2};
    font-weight: 500;
    font-size: 14px;
`

const ModDescContainer = styled(motion.div)`
    margin: 0;
    overflow: auto;
`
