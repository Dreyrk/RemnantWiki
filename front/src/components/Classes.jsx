import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import ClassCard from './ClassCard.jsx';
import useFetch from '../hooks/useFetch.js';

function Classes() {

    const { data: scrapper, isLoading: scrapperIsLoading, isError: scrapperIsError } = useFetch("classes/scrapper")
    const { data: hunter, isLoading: hunterIsLoading, isError: hunterIsError } = useFetch("classes/hunter")
    const { data: cultist, isLoading: cultistIsLoading, isError: cultistIsError } = useFetch("classes/cultist")

    return (
        <>
            <Navbar />
            <BigContainer>
                <ClassCard data={scrapper} isLoading={scrapperIsLoading} isError={scrapperIsError} />
            </BigContainer>
            <BigContainer>
                <ClassCard data={hunter} isLoading={hunterIsLoading} isError={hunterIsError} />
            </BigContainer>
            <BigContainer>
                <ClassCard data={cultist} isLoading={cultistIsLoading} isError={cultistIsError} />
            </BigContainer>
        </>
    )
}

export default Classes;

const BigContainer = styled.section`
    display: grid;
    place-content: center;
    height: 89vh;
    width: 100%;
    scroll-snap-align: end;
    scroll-behavior: smooth;
`


