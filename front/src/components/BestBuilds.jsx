import React, { useEffect, useCallback, useState, useRef } from 'react'
import styled from 'styled-components'

import fetchData from '../helpers/fetchData.js'
import DownBtn from './DownBtn.jsx'
import BuildDisplay from './BuildDisplay'
import Navbar from './Navbar'



function BestBuilds() {
    const [builds, setBuilds] = useState([]);
    const buildRefs = useRef([]);

    const getData = useCallback(async () => {
        const data = await fetchData(`builds/bests`);
        setBuilds(data.data);
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <Wrapper>
            <Navbar />
            <Container>
                {builds.map((build, i) => (
                    <BigSection first={i === 0} key={build._id} ref={(el) => buildRefs.current[i] = el}>
                        <BuildDisplay build={build} showBuild={true} />
                        {i !== builds.length - 1 &&
                            <DownBtn buildRefs={buildRefs} index={i} />
                        }
                    </BigSection>
                ))}
            </Container>
        </Wrapper>
    )
}

export default BestBuilds;

const BigSection = styled.section`
    height: 100vh;
    position: relative;
    scroll-snap-align: center;
    scroll-behavior: smooth;
    margin-top: ${(props) => props.first && "30px"};
`

const Container = styled.div`
    height: 300vh;
    display: flex;
    flex-direction: column;
    gap: 20vh;
    align-items: center;
`

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
`
