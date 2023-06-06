import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { motion, useTime, useTransform } from 'framer-motion';

import { theme } from '../style/theme.js';

function ModModal({ mod, trait }) {

    const [descHeight, setDescHeight] = useState(0);
    const [unlockHeight, setUnlockHeight] = useState(0);

    useEffect(() => {
        const descLength = mod.description.length
        setDescHeight(descLength * 0.1)
        if (mod.unlock) {
            const unlockLength = mod.unlock.length
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
                <Container>
                    <ModImg src={mod.img} alt={mod.name} />
                    <ModName>{mod.name}</ModName>
                </Container>
                <ModDescContainer>
                    <ModDesc height={descHeight} style={{ translateY: descHeight > 18 && scroll }}>{mod.description}</ModDesc>
                </ModDescContainer>
            </ModalContainer>
        )
    } else {
        return (
            <ModalContainer trait transition={{ delay: 0.3 }}>
                <Title>Description :</Title>
                <TextContainer>
                    <ModDesc height={descHeight} style={{ translateY: descHeight > 18 && scroll }}>{mod.description}</ModDesc>
                </TextContainer>
                <Title>Unlock :</Title>
                <TextContainer>
                    <ModDesc height={unlockHeight} style={{ translateY: unlockHeight > 18 && scroll2 }}>{mod.unlock}</ModDesc>
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
    transform: ${(props) => props.trait ? "rotateX(180deg)" : "rotateY(180deg)"};
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

const Container = styled.div`
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    z-index: 99;
    background-color: ${theme.colors.blanc};
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
    overflow: hidden;
`

const Title = styled.p`
    height: 15%;
    color: ${theme.colors.rouge};
    font-weight: 700;
    font-size: 20px;
    margin: 0;
`
