import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from '../style/theme';


function calculatePosition(i) {
    const row = Math.floor(i / 5) * 2 + 2;
    const col = ((i < 5) ? i : (9 - i)) + 1;
    return { row, col };
}

const calculateScrollValues = (textLength) => {
    if (textLength > 40) {
        const overflowPercentage = ((textLength - 10) / textLength) * 100;
        return {
            initial: { y: textLength < 100 ? "20%" : "35%" },
            animate: { y: `${overflowPercentage - 100}%` }
        };
    }
    return {
        initial: { y: "0%" },
        animate: { y: "0%" }
    };
}

function WorldSteps({ step, index }) {
    const [show, setShow] = useState(false)
    const { row, col } = calculatePosition(index);

    console.log(step)

    return (
        <StyledFragment key={index} row={row} col={col} direction={row === 4 ? 'rtl' : 'ltr'}>
            <Step onMouseLeave={() => setShow(false)} onMouseEnter={() => setShow(true)}>{index + 1}</Step>
            <StepPath vertical={index === 5} row={row} />
            {show &&
                <ModalContainer>
                    <ScrollText
                        {...calculateScrollValues(step.length)}
                        transition={{ ease: "linear", duration: step.length / 10 }}
                    >
                        {step}
                    </ScrollText>
                </ModalContainer>
            }
        </StyledFragment>
    );
};

export default WorldSteps;

const ScrollText = styled(motion.div)`
    display: block;
    color: ${theme.colors.noir};
    font-size: 22px;
`;

const ModalContainer = styled(motion.div)`
    position: absolute;
    z-index: 3;
    width: 200px;
    height: 100px;
    bottom: -120px;
    left: 50%;
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

const StyledFragment = styled.div`
    position: relative;
    grid-row: ${(props) => props.row};
    grid-column: ${(props) => props.col};
    direction: ${(props) => props.direction};
`

const Step = styled.div`
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

const StepPath = styled.div`
    position: absolute;
    width: calc(100% + 140px);
    bottom: ${(props) => props.vertical ? '200%' : '50%'};
    left: ${(props) => props.row === 2 && !props.vertical ? '-230px' : '-60%'};
    right: ${(props) => props.row === 4 && !props.vertical ? '-230px' : 'auto'};
    border-top: 2px solid ${theme.colors.rouge};
    z-index: 1;
    transform: ${(props) => props.vertical && 'rotate(90deg)'};
`