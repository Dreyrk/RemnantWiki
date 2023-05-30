import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

import { theme } from '../style/theme.js';
import { device } from '../style/device.js';
import Navbar from './Navbar'

function Traits() {
    return (
        <>
            <Navbar />
            <Container>

            </Container>
        </>
    )
}

export default Traits;

const Container = styled(motion.div)`
    height: 89vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow-y: auto;
    gap: 15px;
    @media ${device.desktop} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${device.laptop} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.mobileL} {
        grid-template-columns: repeat(1, 1fr);
    }
`
