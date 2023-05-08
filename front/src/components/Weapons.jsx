import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from "../style/theme.js";
import FilterCheck from './FilterCheck.jsx';

const weaponFilters = ["Primary", "Secondary", "Melee"];

function Weapons() {


    return (
        <BigContainer>
            <FilterContainer>
                {weaponFilters.map((filter, i) => (
                    <FilterCheck key={i} filter={filter} />
                ))}
            </FilterContainer>
            <DisplayContainer>
                <Title>Weapons</Title>
                <div>
                    box
                </div>
            </DisplayContainer>
        </BigContainer>
    )
}

export default Weapons;

const BigContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`

const FilterContainer = styled.div`
    height: 100%;
    width: 18rem;
    background-color: ${theme.colors.gris2};
    border: 2px solid ${theme.colors.noir};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DisplayContainer = styled(motion.div)`
    height: 95%;
    width: 100%;
    padding: 10px;
    overflow-y: auto;
    display: grid;
    place-content: center;
`

const Title = styled.h1`

`
