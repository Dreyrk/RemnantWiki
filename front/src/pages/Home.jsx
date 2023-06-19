import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import AnimatedText from "../components/AnimatedText"
import background from "../images/background.jpg"
import { device } from '../style/device.js'
import { theme } from '../style/theme'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <Wrapper>
            <Navbar />
            <HomeSection>
                <TitleContainer>
                    <AnimatedText size={"50px"} text={"Welcome to the Ward 13 Traveler !"} />
                </TitleContainer>
                <Title>Story Overview</Title>
                <Text>Remnant From the Ashes is set in a post-apocalyptic world where it has been thrown into chaos by an ancient evil from another dimension
                    which is now overrun by monstrous creatures. As one of the last remnants of humanity, you'll set out alone or alongside up to two other players
                    to face down hordes of deadly enemies and epic bosses, and try to carve a foothold, rebuild, and then retake what was lost.
                </Text>
                <StyledLink to={"/guide/walkthrough"} replace={true}>
                    Discover Game Story Now !
                </StyledLink>
            </HomeSection>
        </Wrapper>
    )
}

export default Home;

const StyledLink = styled(NavLink)`
    opacity: 1;
    grid-row: 7;
    grid-column: 4 / span 2;
    background-color: ${theme.colors.rouge};
    color: ${theme.colors.blanc};
    font-size: 34px;
    font-weight: 700;
    text-align: center;
    padding: 5%;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(244, 244, 246, 0.3);
    :hover {
        box-shadow: 0px 6px 14px rgba(244, 244, 246, 0.3);
    }
    @media ${device.mobileL} {
        font-size: 20px;
        width: 250px;
    }
`

const Text = styled.p`
    grid-row: 5 / span 1;
    grid-column: 3 / span 4;
    color: ${theme.colors.blanc};
    text-align: center;
    margin: 0;
    padding: 5%;
    font-size: 24px;
    background-color: ${theme.colors.gris1};
    border-radius: 15px;
    @media ${device.mobileL} {
        font-size: 20px;
        height: 290px;
        width: 350px;
    }
`

const Title = styled.h2`
    grid-row: 3;
    grid-column: 3 / span 4;
    margin: 0;
    font-size: 40px;
    font-weight: 600;
    display: grid;
    place-content: center;
    text-decoration: underline;
    color: ${theme.colors.blanc};
    -webkit-text-stroke: 2px ${theme.colors.rouge};
`

const TitleContainer = styled.div`
    grid-row: 1 / span 2;
    grid-column: 1 / span 8;
    display: grid;
    place-content: center;
`

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
`

const HomeSection = styled.section`
    height: calc(100vh - 100px);
    width: 100vw;
    margin: 0;
    padding: 0;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    @media ${device.mobileL} {
        background: none;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
`
