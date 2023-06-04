import React, { useRef } from 'react'
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

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

function AnimatedText({ text, size, justify, col, row, decoration }) {

    const ref = useRef(null)

    const inView = useInView(ref, {
        once: true
    });

    const letters = Array.from(text)

    return (
        <Container
            ref={ref}
            decoration={decoration}
            column={col}
            row={row}
            size={size}
            justify={justify}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            {letters.map((letter, i) => (
                <motion.span variants={child} key={i}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
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
    grid-column: ${(props) => props.column ? props.column : "1 / span 2"};
    text-decoration: ${(props) => props.decoration};
    color: ${theme.colors.blanc};
`
