import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar'
import useFetch from '../hooks/useFetch';

const worlds = ["Earth", "Rhom", "Corsus", "Yaesha", "Ward 17", "Ward Prime", "Resium"]

function BossPage() {
    const { data: earthBosses, isLoading: earthLoading, isError: earthError } = useFetch("worlds/bosses/earth")
    const { data: rhomBosses, isLoading: rhomLoading, isError: rhomError } = useFetch("worlds/bosses/rhom")
    const { data: corsusBosses, isLoading: corsusLoading, isError: corsusError } = useFetch("worlds/bosses/corsus")
    const { data: yaeshaBosses, isLoading: yaeshaLoading, isError: yaeshaError } = useFetch("worlds/bosses/yaesha")
    const { data: wardPrimeBosses, isLoading: wardPrimeLoading, isError: wardPrimeError } = useFetch("worlds/bosses/wardPrime")
    const { data: ward17Bosses, isLoading: ward17Loading, isError: ward17Error } = useFetch("worlds/bosses/ward17")
    const { data: resiumBosses, isLoading: resiumLoading, isError: resiumError } = useFetch("worlds/bosses/resium")
    return (
        <>
            <Navbar />
            <Container>

            </Container>
        </>
    )
}

export default BossPage;

const Container = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    overflow-y: auto;
`
