import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from "../style/theme.js";
import FilterCheck from './FilterCheck.jsx';

const weaponFilters = ["Primary", "Secondary", "Melee"];

async function fetchData(url) {
    const res = await fetch(`${process.env.REACT_APP_BASE_API_URL_DEV}${url}`);

    if (res.status === 200) {
        const data = await res.json()
        return data.data
    } else {
        throw new Error("fetch failed")
    }
}

function Weapons() {
    const [weapons, setWeapons] = useState([])

    const getData = useCallback(async () => {
        const data = await fetchData("/items/weapons");
        setWeapons(data)
    }, [])

    useEffect(() => {
        getData()
    }, [getData])

    console.log(weapons)

    return (
        <BigContainer>
            <FilterContainer>
                {weaponFilters.map((filter, i) => (
                    <FilterCheck key={i} filter={filter} />
                ))}
            </FilterContainer>
            <DisplayContainer>
                <Title>Weapons</Title>
                <BoxDisplayContainer>
                    {weapons.map((weapon) => (
                        <BoxContainer key={weapon.name}>
                            <img src={weapon.img} alt={weapon.name} />
                            <div></div>
                        </BoxContainer>))}
                </BoxDisplayContainer>
            </DisplayContainer>
        </BigContainer>
    )
}

export default Weapons;

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
const BoxContainer = styled(motion.div)`
    height: 285px;
    width: 285px;
    border-radius: 25px;
    background-color: ${theme.colors.gris1};
`