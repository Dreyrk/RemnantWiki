import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar'
import Bosses from '../components/Bosses';
import useFetch from '../hooks/useFetch';

const worlds = ["Earth", "Rhom", "Corsus", "Yaesha", "Ward 17", "Ward Prime", "Resium"]

function BossPage() {
    const bossData = {
        earth: useFetch("bosses/earth"),
        rhom: useFetch("bosses/rhom"),
        corsus: useFetch("bosses/corsus"),
        yaesha: useFetch("bosses/yaesha"),
        wardPrime: useFetch("bosses/wardPrime"),
        ward17: useFetch("bosses/ward17"),
        resium: useFetch("bosses/resium"),
    };
    return (
        <>
            <Navbar />
            <Wrapper>
                {Object.entries(bossData).map(([world, { data, isLoading, isError }], i) => (
                    <Bosses
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

export default BossPage;



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


