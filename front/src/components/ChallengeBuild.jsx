import React, { useState } from 'react'
import styled from "styled-components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchData from '../helpers/fetchData.js'
import BuildDisplay from './BuildDisplay.jsx'
import { theme } from '../style/theme.js'


function ChallengeBuild() {
    const [fullSet, setFullSet] = useState({
        head: null,
        body: null,
        legs: null,
        ring1: null,
        ring2: null,
        amulet: null,
        primary: null,
        secondary: null,
        melee: null
    })

    async function getChallengeBuild() {
        const { head, body, legs } = await fetchData("random/armors")
        const { ring1, ring2 } = await fetchData("random/rings")
        const amulet = await fetchData("random/amulets")
        const { primary, secondary, melee } = await fetchData("random/weapons")

        if (head && body && legs && ring1 && ring2 && amulet && primary && secondary && melee) {
            setFullSet({
                head, body, legs, ring1, ring2, amulet, primary, secondary, melee
            })
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
            {fullSet.amulet !== null && <BuildDisplay build={fullSet} />}
            <StyledBtn onClick={getChallengeBuild} type='button'>Challenge</StyledBtn>
        </BigContainer>
    )
}

export default ChallengeBuild;

const BigContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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
