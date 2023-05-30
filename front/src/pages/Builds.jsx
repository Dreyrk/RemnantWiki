import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import useCurrentUserContext from '../hooks/useCurrentUserContext';
import Navbar from '../components/Navbar';
import ChallengeBuild from '../components/ChallengeBuild';
import SavedBuilds from '../components/SavedBuilds';
import BestBuilds from '../components/BestBuilds';

function Builds() {
    const { token } = useCurrentUserContext()
    const { type } = useParams()
    switch (type) {
        case "challenge":
            return (
                <Wrapper>
                    <Navbar />
                    <ChallengeBuild />
                </Wrapper>
            )
        case "saved":
            return (
                <Wrapper>
                    <Navbar />
                    {token && <SavedBuilds />}
                </Wrapper>
            )
        default:
            return (
                <Wrapper>
                    <Navbar />
                    <BestBuilds />
                </Wrapper>
            )
    }
}

export default Builds;

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    height: 89vh;
    max-height: 100vh;
`
