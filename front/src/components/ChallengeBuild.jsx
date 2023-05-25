import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchData from '../helpers/fetchData.js'
import BuildDisplay from './BuildDisplay.jsx'
import { theme } from '../style/theme.js'
import { AnimatePresence } from 'framer-motion';


function ChallengeBuild() {
    const initialFullSet = () => JSON.parse(localStorage.getItem('ChallengeBuild')) || {
        head: null,
        body: null,
        legs: null,
        ring1: null,
        ring2: null,
        amulet: null,
        primary: null,
        secondary: null,
        melee: null
    };
    const [showBuild, setShowBuild] = useState(false);
    const [fullSet, setFullSet] = useState(initialFullSet);

    useEffect(() => {
        if (initialFullSet.head !== null) {
            localStorage.setItem('ChallengeBuild', JSON.stringify(fullSet));
            setShowBuild(true)
        } else {
            setShowBuild(false)
        }
    }, [fullSet]);



    async function getChallengeBuild() {
        setShowBuild(false)
        const { head, body, legs } = await fetchData("random/armors")
        const { ring1, ring2 } = await fetchData("random/rings")
        const amulet = await fetchData("random/amulets")
        const { primary, secondary, melee } = await fetchData("random/weapons")

        if (head && body && legs && ring1 && ring2 && amulet && primary && secondary && melee) {
            setFullSet({
                head, body, legs, ring1, ring2, amulet, primary, secondary, melee
            })
            setShowBuild(true)
        } else {
            toast.error("failed to get random challenge build")
        }
    }

    return (
        <BigContainer>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                theme="dark"
            />
            <AnimatePresence>
                {fullSet.head !== null ? <BuildDisplay build={fullSet} showBuild={showBuild} /> : <Title>Click to discover your challenge build</Title>}
            </AnimatePresence>
            <StyledBtn onClick={getChallengeBuild} type='button'>Challenge</StyledBtn>
        </BigContainer>
    )
}

export default ChallengeBuild;

const Title = styled.h1`
    color: ${theme.colors.blanc};
    text-decoration: underline;
    font-weight: 700;
    font-size: 50px;
    margin: 0;
    margin-top: 30px;
    margin-bottom: 35vh;
`

const BigContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const StyledBtn = styled.button`
    height: 45px;
    width: 140px;
    border-radius: 40px;
    background-color: ${theme.colors.rouge};
    color: ${theme.colors.blanc};
    border: none;
    box-shadow: 0px 2px 2px ${theme.colors.noir};
    font-weight: 700;
    font-size: 24px;
    :hover {
        transform: scale(1.1);
    }
    :active {
        transform: scale(0.9);
    }
`
