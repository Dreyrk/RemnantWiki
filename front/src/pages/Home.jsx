import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import background from "../images/background.jpg"

function Home() {
    return (
        <Wrapper>
            <Navbar />
            <HomePage>
                <div></div>
            </HomePage>
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

const HomePage = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`
