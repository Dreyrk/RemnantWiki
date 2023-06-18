import React, { useEffect, useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from "../style/theme.js";
import { device } from '../style/device.js';
import fetchData from '../helpers/fetchData.js';
import FilterCheck from './FilterCheck.jsx';
import ItemBox from './ItemBox.jsx';

const amuletsFilters = ["Earth", "Rhom", "Yaesha", "Corsus", "Reisum", "Any"];

function Amulets() {
    const [amulets, setAmulets] = useState([]);
    const originalData = useRef(amulets);

    const getData = useCallback(async () => {
        const { data } = await fetchData("items/amulets");
        setAmulets(data)
        originalData.current = data
    }, []);

    useEffect(() => {
        getData()
    }, [getData]);

    return (
        <BigContainer>
            <FilterContainer>
                {amuletsFilters.map((filter, i) => (
                    <FilterCheck key={i} filter={filter} originalData={originalData} setData={setAmulets} />
                ))}
            </FilterContainer>
            <DisplayContainer>
                <Title>Amulets</Title>
                <BoxDisplayContainer>
                    {amulets.map((item) => (
                        <ItemBox key={item._id} item={item} />))}
                </BoxDisplayContainer>
            </DisplayContainer>
        </BigContainer>
    )
}

export default Amulets;



const BoxDisplayContainer = styled.div`
    width: 95%;
    height: 1000px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow-y: auto;
    overflow-x: hidden;
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
    ::-webkit-scrollbar {
        display: none;
    }
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
    @media ${device.mobileL} {
        display: none;
    }
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