import React, { useEffect, useCallback, useState, useRef } from 'react'
import styled from 'styled-components'

import fetchData from '../helpers/fetchData'
import BuildDisplay from './BuildDisplay'
import Navbar from './Navbar'



function BestBuilds() {
    const [builds, setBuilds] = useState([])
    const [currentBuildIndex, setCurrentBuildIndex] = useState(0);
    const buildRefs = useRef([]);

    const getData = useCallback(async () => {
        const data = await fetchData(`builds/bests`);
        setBuilds(data)
    }, []);

    useEffect(() => {
        getData()
    }, [getData]);

    const downBuild = () => {
        if (currentBuildIndex < buildRefs.current.length - 1) {
            setCurrentBuildIndex(currentBuildIndex + 1);
            buildRefs.current[currentBuildIndex + 1].scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <Wrapper>
            <Navbar />
            <Container>
                {builds.map((build, i) => (<BuildDisplay ref={(el) => (buildRefs.current[i] = el)} key={build._id} build={build} showBuild={true} downBuild={downBuild} />))}
            </Container>
        </Wrapper>
    )
}

export default BestBuilds;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 150px;
    align-items: center;
`

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    height: 89vh;
    max-height: 100vh;
`
