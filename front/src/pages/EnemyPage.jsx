import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar'
import CardsDisplay from '../components/CardsDisplay';
import useFetch from '../hooks/useFetch';

const worlds = ["Earth", "Rhom", "Corsus", "Yaesha", "Reisum"]

function EnemyPage() {
    const enemyData = {
        earth: useFetch("enemies/earth"),
        rhom: useFetch("enemies/rhom"),
        corsus: useFetch("enemies/corsus"),
        yaesha: useFetch("enemies/yaesha"),
        resium: useFetch("enemies/reisum"),
    };

    return (
        <>
            <Navbar />
            <Wrapper>
                {Object.entries(enemyData).map(([world, { data, isLoading, isError }], i) => (
                    <CardsDisplay
                        key={world}
                        data={data}
                        isLoading={isLoading}
                        isError={isError}
                        world={worlds[i]}
                    />
                ))}
            </Wrapper>
        </>
    )
}

export default EnemyPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
