import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineDown } from "react-icons/ai";

import { theme } from '../style/theme.js';


function DownBtn({ buildRefs, index }) {
    const [hovered, setHovered] = useState(false);
    return (
        <Button
            onClick={() => buildRefs.current[index + 1].scrollIntoView({ behavior: 'smooth' })}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{ y: !hovered && [-30, 5, -30] }}
            transition={{ repeat: Infinity, ease: "easeInOut", duration: 3, bounce: 0.25 }}
        >
            <AiOutlineDown color={theme.colors.noir} size={50} />
        </Button>
    )
}

export default DownBtn;

const Button = styled(motion.button)`
    cursor: pointer;
    position: absolute;
    bottom: -5%;
    left: 46.5%;
    height: 65px;
    width: 65px;
    background-color: ${theme.colors.blanc};
    border: 6px solid ${theme.colors.rouge};
    border-radius: 50%;
    display: grid;
    place-content: center;
`
