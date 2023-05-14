import React, { useEffect, useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from "../style/theme.js";
import fetchData from '../helpers/fetchData.js';
import FilterCheck from './FilterCheck.jsx';
import ItemBox from './ItemBox.jsx';

const armorsFilters = ["Head", "Body", "Legs"];

function Armors() {
    const [armors, setArmors] = useState([]);
    const originalData = useRef(armors);

    const getData = useCallback(async () => {
        const data = await fetchData("items/armors");
        setArmors(data)
        originalData.current = data
    }, []);

    useEffect(() => {
        getData()
    }, [getData]);

    return (
        <BigContainer>
            <FilterContainer>
                {armorsFilters.map((filter, i) => (
                    <FilterCheck key={i} filter={filter} originalData={originalData} setData={setArmors} />
                ))}
            </FilterContainer>
            <DisplayContainer>
                <Title>Armors</Title>
                <BoxDisplayContainer>
                    {armors.map((weapon) => (
                        <ItemBox key={weapon._id} item={weapon} />))}
                </BoxDisplayContainer>
            </DisplayContainer>
        </BigContainer>
    )
}

export default Armors;



const BoxDisplayContainer = styled.div`
    width: 95%;
    height: 1000px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow-y: auto;
    gap: 15px;
`

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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-decoration: underline;
    color: ${theme.colors.blanc};
`