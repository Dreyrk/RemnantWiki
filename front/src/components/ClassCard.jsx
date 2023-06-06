import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import { theme } from '../style/theme.js'
import missing from "../images/missing_img.jpg"
import AnimatedText from './AnimatedText.jsx'
import TraitCircle from './TraitCircle.jsx'
import Loading from './Loading.jsx'



function ClassCard({ data, isLoading, isError }) {
    const [imgSelected, setImgSelected] = useState(missing)

    useEffect(() => {
        if (data?.other.img.original) {
            setImgSelected(data.other.img.original)
        }
    }, [data])

    if (!data && isLoading) {
        return (
            <Loading />
        )
    }
    if (!data && isError) {
        return (
            <p>{isError}</p>
        )
    } else {
        return (
            <ClassContainer>
                <AnimatedText text={data.name} />
                <CarouselContainer>
                    <SkinImg src={imgSelected} alt="originalSkin" />
                    <StepsContainer>
                        <Circle fill={data.other.img.original === imgSelected ? 1 : 0} onClick={() => setImgSelected(data.other.img.original)} />
                        <Circle fill={data.other.img.skin[0] === imgSelected ? 1 : 0} onClick={() => setImgSelected(data.other.img.skin[0])} />
                        <Circle fill={data.other.img.skin[1] === imgSelected ? 1 : 0} onClick={() => setImgSelected(data.other.img.skin[1])} />
                    </StepsContainer>
                </CarouselContainer>
                <DescriptionContainer>
                    <AnimatedText justify={"start"} size={"32px"} text={"Description :"} />
                    <Desc>{data.description}</Desc>
                </DescriptionContainer>
                <BuildContainer>
                    <Title>Starting Build</Title>
                    <Container
                        to={`/stuff/armors/${data.head._id}`}
                        bottom={"135px"} row={"2 / span 4"} column={"2 / span 3"} place={"end stretch"}>
                        <BuildImg scale={"scale(0.6)"} src={data.head.img} alt='head' />
                    </Container>
                    <Container
                        to={`/stuff/armors/${data.body._id}`}
                        row={"4 / span 6"} column={"2 / span 3"} >
                        <BuildImg scale={"scale(1.15)"} src={data.body.img} alt='body' />
                    </Container>
                    <Container
                        to={`/stuff/armors/${data.legs._id}`}
                        row={"6 / span 7"} column={"2 / span 3"} >
                        <BuildImg scale={"scale(0.75)"} src={data.legs.img} alt='legs' />
                    </Container>
                    <Container
                        to={`/stuff/weapons/${data.secondary._id}`}
                        row={"4 / span 5"} column={"4 / span 5"}>
                        <BuildImg scale={"scale(2)"} src={data.secondary.img} alt='secondary' />
                    </Container>
                    <Container
                        to={`/stuff/weapons/${data.melee._id}`}
                        row={"5/ span 6"} column={"4 / span 5"} >
                        <BuildImg src={data.melee.img} alt='melee' scale={"scale(1.8)"} />
                    </Container>
                    <Container
                        to={`/stuff/weapons/${data.primary._id}`}
                        top={"50px"} row={"4 / span 6"} column={"6 / span 8"} >
                        <BuildImg src={data.primary.img} alt='primary' scale={"scale(1.8)"} />
                    </Container>
                    <TraitContainer
                        justify={"space-around"}
                        row={"2 / span 3"} column={"4 / span 7"} >
                        {data.traits.map((trait) => (
                            <TraitCircle key={trait._id} trait={trait} />
                        )
                        )}
                    </TraitContainer>
                </BuildContainer>
            </ClassContainer>
        )
    }
}

export default ClassCard;

const BuildImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    transform: ${(props) => props.scale};
    
`

const Container = styled(NavLink)`
    max-height: 180px;
    max-width: 200px;
    display: flex;
    justify-content: ${(props) => props.justify ? props.justify : "center"};
    align-items: center;
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    place-self: ${(props) => props.place};
    padding-bottom: ${(props) => props.bottom};
    padding-top: ${(props) => props.top};
    opacity: 1;
    :hover {
    transform: scale(1.2)
    }
`

const TraitContainer = styled.div`
    max-height: 180px;
    max-width: 200px;
    display: flex;
    justify-content: ${(props) => props.justify ? props.justify : "center"};
    align-items: center;
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    place-self: ${(props) => props.place};
    padding-bottom: ${(props) => props.bottom};
    padding-top: ${(props) => props.top};
`

const BuildContainer = styled.div`
    grid-column: 2;
    grid-row: 2 / span 3;
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: repeat(8, 12.5%);
    place-content: stretch center;
`

const Title = styled.p`
    margin: 0;
    color: ${theme.colors.blanc};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: 700;
    font-size: 32px;
    text-decoration: underline;
    grid-column: 1 / span 8;
    grid-row: 1;
`

const DescriptionContainer = styled.div`
    height: 80%;
    width: 90%;
    grid-column: 1;
    grid-row: 3;
    place-self: center;
    background-color: rgba(32, 32, 32, 0.55);
    padding: 15px;
    border-radius: 20px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1), -2px -2px 10px rgba(255, 255, 255, 0.5);
`

const StepsContainer = styled.div`
    height: 25px;
    width: 60px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    bottom: 0;
    left: 40%;
    z-index: 99;
`

const Circle = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.fill ? theme.colors.noir : theme.colors.blanc};
    border: 2px solid ${theme.colors.rouge};
`

const CarouselContainer = styled(motion.div)`
    height: 420px;
    width: 320px;
    background: none;
    position: relative;
    grid-column: 1;
    grid-row: 2;
    place-self: end center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1), -2px -2px 10px rgba(157, 2, 8, 0.5);
    border-radius: 5px;
    margin-bottom: 10px;
`

const SkinImg = styled(motion.img)`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
`

const ClassContainer = styled.div`
    height: 83vh;
    width: 95vw;
    background-color: ${theme.colors.gris1};
    border-radius: 25px;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 10% 55% 35%;
    place-content: center;
`
const Desc = styled.p`
    height: 80%;
    width: 100%;
    margin: 0;
    margin-top: 15px;
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.blanc};
    text-align: center;
    overflow-y: auto;
`
