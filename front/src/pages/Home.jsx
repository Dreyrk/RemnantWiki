import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import background from "../images/background.jpg"
import { device } from '../style/device'

function Home() {
    return (
        <Wrapper>
            <Navbar />
            <HomeSection>
            </HomeSection>
        </Wrapper>
    )
}

export default Home;

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    
`

const HomeSection = styled.section`
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    @media ${device.mobileL} {
        background: none;
    }
`
