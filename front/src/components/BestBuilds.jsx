import React, { useEffect, useCallback, useState, useRef } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { AiOutlineDown } from "react-icons/ai"

import { theme } from "../style/theme.js"
import fetchData from '../helpers/fetchData'
import BuildDisplay from './BuildDisplay'
import Navbar from './Navbar'



function BestBuilds() {
    const [builds, setBuilds] = useState([])
    const [currentBuildIndex, setCurrentBuildIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

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
                {builds.map((build, i) => (
                    <div key={build._id} ref={(el) => (buildRefs[i] = el)}>
                        <BuildDisplay build={build} showBuild={true} />
                        {i &&
                            <DownBtn
                                onClick={downBuild}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                animate={{ y: !hovered && [-30, 5, -30] }}
                                transition={{ repeat: Infinity, ease: "easeInOut", duration: 3, bounce: 0.25 }}
                            >
                                <AiOutlineDown color={theme.colors.noir} size={50} />
                            </DownBtn>
                        }
                    </div>
                ))}
            </Container>
        </Wrapper>
    )
}

export default BestBuilds;

const DownBtn = styled(motion.button)`
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 46.5%;
    height: 65px;
    width: 65px;
    background-color: ${theme.colors.blanc};
    border: 6px solid ${theme.colors.rouge};
    border-radius: 50%;
    display: grid;
    place-content: center;
`

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
