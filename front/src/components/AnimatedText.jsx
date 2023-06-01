import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from '../style/theme.js';

const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.10, delayChildren: 0.04 * i }
    })
};

const child = {
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
    hidden: {
        opacity: 0,
        x: -20,
        y: 10,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    }
}

function AnimatedText({ text, size, justify }) {

    const letters = Array.from(text)

    return (
        <Container
            size={size}
            justify={justify}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, i) => (
                <DescLetter variants={child} key={i}>
                    {letter === " " ? "\u00A0" : letter}
                </DescLetter>
            ))}
        </Container>
    )
}

export default AnimatedText;

const Container = styled(motion.div)`
    display: flex;
    justify-content: ${(props) => props.justify ? props.justify : "center"};
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    font-size: ${(props) => props.size ? props.size : "42px"};
    font-weight: 700;
    grid-column: 1 / span 2;
`

const DescLetter = styled(motion.span)`
    color: ${theme.colors.blanc};
`
