import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import fetchData from '../helpers/fetchData.js'
import { theme } from "../style/theme.js"
import ItemDetailsList from './ItemDetailsList';

function TraitDetails({ id }) {
    const [trait, setTrait] = useState({});

    const getData = useCallback(async () => {
        const data = await fetchData(`items/traits/${id}`);
        setTrait(data)
    }, [id]);

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <BigContainer>
            <LeftSideContainer>
                <Title>{trait.name}</Title>
                <Img src={trait.img} alt={trait.name} />
            </LeftSideContainer>
            <RightSideContainer>
                <Title>Item Details</Title>
                <ItemDetailsList item={trait} category={"trait"} />
            </RightSideContainer>
        </BigContainer>
    )
}

export default TraitDetails;

const BigContainer = styled.div`
    height: 86vh;
    width: 95%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 15px;
`

const Img = styled.img`
    height: 120px;
    width: auto;
`

const Title = styled(motion.h1)`
    margin: 0;
    padding-left: 3rem;
    grid-column: 1 / span 5;
    grid-row: 1;
    place-self: center;
    color: ${theme.colors.blanc};
    text-decoration: underline;
    text-align: center;
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
    letter-spacing: 0.05em;
`

const LeftSideContainer = styled(motion.div)`
    height: 100%;
    border-right: 2px solid ${theme.colors.blanc};
    grid-column: 1 / span 2;
    grid-row: 1 / span 5;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
const RightSideContainer = styled(motion.div)`
    overflow-y: auto;
    grid-column: 3 / span 5;
    grid-row: 1 / span 5;
    color: white;
    ::-webkit-scrollbar {
        display: none;
    }
`
