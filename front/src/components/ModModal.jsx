import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { motion, useTime, useTransform } from 'framer-motion';

import { theme } from '../style/theme.js';

function ModModal({ mod, trait }) {

    const [descHeight, setDescHeight] = useState(0);
    const [unlockHeight, setUnlockHeight] = useState(0);

    useEffect(() => {
        const desc = mod.description.length
        const descLength = parseInt(desc, 10)
        setDescHeight(descLength * 0.2)

        if (mod.unlock) {
            const unlock = mod.unlock.length
            const unlockLength = parseInt(unlock, 10)
            setUnlockHeight(unlockLength * 0.2)
        }

    }, [mod.description, mod.unlock])

    const time = useTime()
    const scroll = useTransform(
        time,
        [2000, 8000], // For every x ms...
        [0, -descHeight], // ...translateY based on desc length
        { clamp: true }
    )
    const scroll2 = useTransform(
        time,
        [2000, 8000], // For every x ms...
        [0, -unlockHeight], // ...translateY based on desc length
        { clamp: true }
    )


    if (!trait) {
        return (
            <ModalContainer transition={{ delay: 0.3 }}>
                <ModImg src={mod.img} alt={mod.name} />
                <ModName>{mod.name}</ModName>
                <ModDescContainer>
                    <ModDesc height={descHeight} style={{ translateY: descHeight > 18 && scroll }}>{mod.description}</ModDesc>
                </ModDescContainer>
            </ModalContainer>
        )
    } else {
        return (
            <ModalContainer transition={{ delay: 0.3 }}>
                <Title>Description :</Title>
                <TextContainer>
                    <ModDesc height={descHeight} style={{ translateY: descHeight > 18 && scroll }}>{mod.description}</ModDesc>
                </TextContainer>
                <Title>Unlock :</Title>
                <TextContainer>
                    <ModDesc height={descHeight} style={{ translateY: unlockHeight > 18 && scroll2 }}>{mod.unlock}</ModDesc>
                </TextContainer>
            </ModalContainer>
        )
    }
}

export default ModModal;

const TextContainer = styled.div`
    overflow: hidden;
    height: 35%;
`

const ModalContainer = styled(motion.div)`
    height: 150px;
    width: 95%;
    display: flex;
    flex-direction: column;
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
    display: flex;
    flex-flow: column;
`

const Title = styled.p`
    height: 15%;
    color: ${theme.colors.rouge};
    font-weight: 700;
    font-size: 20px;
    margin: 0;
`
