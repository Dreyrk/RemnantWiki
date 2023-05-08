import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { theme } from "../style/theme.js"

function FilterCheck({ filter }) {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <LabelInputContainer>
            <Label>{filter}</Label>
            <CheckContainer justify={isChecked ? "flex-end" : "flex-start"} onClick={() => setIsChecked(!isChecked)} >
                <Checkbox
                    color={!isChecked ? theme.colors.rouge : theme.colors.vert}
                    layout
                    transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 30
                    }}
                />
            </CheckContainer>
        </LabelInputContainer>
    )
}

export default FilterCheck;

const LabelInputContainer = styled.div`
    height: 70px;
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Label = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: ${theme.colors.blanc};
`

const CheckContainer = styled(motion.div)`
    height: 20px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.justify};
    border-radius: 50px;
    padding: 8px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
`

const Checkbox = styled(motion.div)`
    height: 25px;
    width: 25px;
    border-radius: 40px;
    background-color: ${(props) => props.color};
`

