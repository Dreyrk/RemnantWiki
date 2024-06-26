import React from 'react'
import styled from 'styled-components';

import { theme } from '../style/theme.js';
import Loading from "./Loading.jsx"
import BossCard from './BossCard.jsx';

function CardsDisplay({ data, isLoading, isError, world, boss }) {
    if (!data && isLoading) {
        return (
            <Loading />
        )
    } else if (!data && isError) {
        return (
            <p>{isError}</p>
        )
    } else {
        return (
            <LocationContainer>
                <Title>{world} {boss ? "Bosses" : "Enemies"}</Title>
                <Container>
                    {data.map((boss) => (
                        <BossCard key={boss.name} boss={boss} />
                    ))}
                </Container>
            </LocationContainer>
        )
    }
}

export default CardsDisplay;

const LocationContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 50px;
`

const Container = styled.div`
    margin: auto;
    width: 83%;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
`

const Title = styled.h1`
    width: 100%;
    font-size: 38px;
    font-weight: 700;
    color: ${theme.colors.blanc};
    text-decoration: underline;
    text-align: center;
    text-transform: capitalize;
`
