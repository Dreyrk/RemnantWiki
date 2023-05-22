import React from 'react'
import styled from 'styled-components';
import { theme } from '../style/theme';
import { AiOutlineCheck } from "react-icons/ai"
import { motion } from "framer-motion"

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

function SuccessBox() {
    return (
        <BoxContainer variants={container}
            initial="hidden"
            animate="visible">
            <IconContainer variants={item}><AiOutlineCheck size={200} color={theme.colors.vert} /></IconContainer>
            <TextContainer variants={item}>
                <Text>Login Success</Text>
            </TextContainer>
        </BoxContainer>
    )
}

export default SuccessBox;

const BoxContainer = styled(motion.div)`
    height: 480px;
    width: 600px;
    border: 2px solid ${theme.colors.rouge};
    color: ${theme.colors.blanc};
    background-color: ${theme.colors.gris1};
    position: absolute;
    top: 15%;
    left: 30%;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 25px;
`

const IconContainer = styled(motion.div)`
    height: 240px;
    width: 240px;
    border: 6px solid ${theme.colors.noir};
    box-shadow: 0px 10px 10px ${theme.colors.noir};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.gris2};
`

const TextContainer = styled(motion.div)`
    height: 85px;
    width: 490px;
    background-color: ${theme.colors.gris2};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(157, 2, 8, 0.35);
    box-shadow: 0px 0px 0px 1px rgba(157, 2, 8, 0.35);
    border-radius: 15px;
`
const Text = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 46px;
`