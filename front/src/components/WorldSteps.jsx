import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

import { theme } from '../style/theme';
import { calculatePosition } from '../helpers/calculatePosition';

const calculateScrollValues = (textLength) => {
    if (textLength > 40) {
        //Overflow restant à scroll (en %)
        const overflowPercentage = ((textLength > 200 ? textLength - 100 : textLength - 20) / textLength) * 100;
        return {
            initial: { y: textLength < 200 ? "25%" : "40%" },
            animate: { y: `${overflowPercentage - 100}%` }
        };
    }
    return {
        initial: { y: "0%" },
        animate: { y: "0%" }
    };
}

const initial = {
    scale: 0,
    x: -114,
    y: -50
}

const visible = {
    scale: 1,
    x: -114,
    y: 0
}

const variants = {
    hidden: (i = 1) => ({
        x: i !== 5 && -2000,
        y: i === 5 && -2000,
        opacity: 0
    }),
    visible: {
        x: 0,
        opacity: 1
    }
};

function WorldSteps({ step, index, reference }) {
    const [show, setShow] = useState(false)
    const { row, col } = calculatePosition(index);
    const transitionDelay = index * 0.2;

    const inView = useInView(reference, {
        once: true
    });

    return (
        <StyledFragment
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay: transitionDelay, stiffness: 100, duration: 0.8 }}
            row={row}
            col={col}
            direction={row === 4 ? 'rtl' : 'ltr'}>
            <StepPath vertical={index === 5 ? 1 : 0} row={row} />
            <Step onMouseLeave={() => setShow(false)} onMouseEnter={() => setShow(true)}>{index + 1}</Step>
            {show &&
                <ModalContainer
                    initial={initial}
                    animate={visible}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <ScrollText
                        {...calculateScrollValues(step.length)}
                        transition={{ ease: "linear", duration: step.length / 20 }}
                    >
                        {step}
                    </ScrollText>
                </ModalContainer>
            }
        </StyledFragment>
    );
};

export default WorldSteps;

const StyledFragment = styled(motion.div)`
    position: relative;
    grid-row: ${(props) => props.row};
    grid-column: ${(props) => props.col};
    direction: ${(props) => props.direction};
`

const ScrollText = styled(motion.p)`
    display: block;
    color: ${theme.colors.noir};
    font-size: 22px;
    white-space: pre-line;
    text-align: center;
    margin: 0;
`;

const ModalContainer = styled(motion.div)`
    position: absolute;
    z-index: 3;
    width: 250px;
    height: 100px;
    bottom: -120px;
    left: 30%;
    transform: translateX(-50%);
    background-color: ${theme.colors.blanc};
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
`

const Step = styled(motion.div)`
    height: 120px;
    width: 120px;
    display: grid;
    place-content: center;
    border-radius: 50%;
    background-color: ${theme.colors.rouge};
    z-index: 2;
    color: ${theme.colors.blanc};
    font-size: 22px;
    font-weight: 700;
    :hover {
        transform: scale(1.2);
        transition: 0.1s ease-in-out;
    }
`

const StepPath = styled(motion.div)`
    position: absolute;
    width: calc(100% + 140px);
    bottom: ${(props) => props.vertical ? '200%' : '50%'};
    left: ${(props) => props.row === 2 && props.vertical ? '-60%' : '-230px'};
    right: ${(props) => props.row === 4 && props.vertical ? '-60%' : '-230px'};
    border-top: 2px solid ${theme.colors.rouge};
    z-index: 1;
    transform: ${(props) => props.vertical && 'rotate(90deg)'};
`