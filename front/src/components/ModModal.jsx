import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { motion, useTime, useTransform } from 'framer-motion';

import { theme } from '../style/theme.js';

function ModModal({ mod }) {

    const [descHeight, setDescHeight] = useState(0)

    useEffect(() => {
        const descLength = parseInt(mod.description.length, 10)
        if (descLength < 150) {
            setDescHeight(descLength * 0.1)
        } else {
            setDescHeight(descLength * 0.2)
        }
        console.log(parseInt(mod.description.length, 10))
    }, [mod.description])

    console.log(parseInt(mod.description.length, 10))

    const time = useTime()
    const scroll = useTransform(
        time,
        [0, 2000], // For every x seconds...
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
