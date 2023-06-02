import React, { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'

import fetchData from '../helpers/fetchData'
import BuildDisplay from './BuildDisplay'



function BestBuilds() {

    const [builds, setBuilds] = useState([])

    console.log(builds)

    const getData = useCallback(async () => {
        const data = await fetchData(`builds/bests`);
        setBuilds(data)
    }, []);

    useEffect(() => {
        getData()
    }, [])

    return (
        <Container>
            {builds.map((build) => (<BuildDisplay build={build} showBuild={true} />))}
        </Container>
    )
}

export default BestBuilds;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 150px;
    align-items: center;
`
