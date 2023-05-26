import React, { useState } from 'react'
import styled from 'styled-components';
import { BsPlusCircle } from "react-icons/bs"

import useFetch from '../hooks/useFetch.js';
import { theme } from '../style/theme.js';
import Navbar from '../components/Navbar.jsx';
import ItemsList from '../components/ItemsList.jsx';



function CreateBuild() {
    const { data: amuletsData, isLoading: amuletsLoading, isError: amuletsError } = useFetch("items/amulets");
    const { data: ringsData, isLoading: ringsLoading, isError: ringsError } = useFetch("items/rings");
    const { data: headData, isLoading: headLoading, isError: headError } = useFetch("items/armors/category/head");
    const { data: bodyData, isLoading: bodyLoading, isError: bodyError } = useFetch("items/armors/category/body");
    const { data: legsData, isLoading: legsLoading, isError: legsError } = useFetch("items/armors/category/legs");
    const { data: primaryData, isLoading: primaryLoading, isError: primaryError } = useFetch("items/weapons/category/primary");
    const { data: secondaryData, isLoading: secondaryLoading, isError: secondaryError } = useFetch("items/weapons/category/secondary");
    const { data: meleeData, isLoading: meleeLoading, isError: meleeError } = useFetch("items/weapons/category/melee");

    const [build, setBuild] = useState({
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
    const [show, setShow] = useState({
        head: false,
        body: false,
        legs: false,
        ring1: false,
        ring2: false,
        amulet: false,
        primary: false,
        secondary: false,
        melee: false
    })
    return (
        <Wrapper>
            <Navbar />
            <BuildContainer>
                <Title>Create your Build</Title>
                <GridContainer
                    armor="true"
                    column={3} row={2}
                >
                    {!show.head ?
                        <CreateBtn onClick={() => setShow({ ...show, head: true })} type='button'>
                            <BsPlusCircle size={40} color={theme.colors.blanc} />
                        </CreateBtn>
                        :
                        <ItemsList data={headData} isLoading={headLoading} isError={headError} setShow={setShow} part={"head"} />
                    }
                </GridContainer>
                <GridContainer
                    armor="true"
                    column={3} row={"3 / span 2"}
                >
                    {!show.body ?
                        <CreateBtn onClick={() => setShow({ ...show, body: true })} type='button'>
                            <BsPlusCircle size={40} color={theme.colors.blanc} />
                        </CreateBtn>
                        :
                        <ItemsList data={bodyData} isLoading={bodyLoading} isError={bodyError} setShow={setShow} part={"body"} />
                    }
                </GridContainer>
                <GridContainer
                    armor="true"
                    column={3} row={5}
                >
                    {!show.legs ?
                        <CreateBtn onClick={() => setShow({ ...show, legs: true })} type='button'>
                            <BsPlusCircle size={40} color={theme.colors.blanc} />
                        </CreateBtn>
                        :
                        <ItemsList data={legsData} isLoading={legsLoading} isError={legsError} setShow={setShow} part={"legs"} />
                    }
                </GridContainer>
                <GridContainer
                    jewel="true"
                    column={2} row={3}
                >
                    {!show.amulet ?
                        <CreateBtn onClick={() => setShow({ ...show, amulet: true })} type='button'>
                            <BsPlusCircle size={40} color={theme.colors.blanc} />
                        </CreateBtn>
                        :
                        <ItemsList data={amuletsData} isLoading={amuletsLoading} isError={amuletsError} setShow={setShow} part={"amulet"} />
                    }
                </GridContainer>
                <GridContainer
                    jewel="true"
                    column={2} row={4}
                >
                    {!show.ring1 ?
                        <CreateBtn onClick={() => setShow({ ...show, ring1: true })} type='button'>
                            <BsPlusCircle size={40} color={theme.colors.blanc} />
                        </CreateBtn>
                        :
                        <ItemsList data={ringsData} isLoading={ringsLoading} isError={ringsError} setShow={setShow} part={"ring1"} />
                    }
                </GridContainer>
                <GridContainer
                    jewel="true"
                    column={1} row={4}
                >
                    {!show.ring2 ?
                        <CreateBtn onClick={() => setShow({ ...show, ring2: true })} type='button'>
                            <BsPlusCircle size={40} color={theme.colors.blanc} />
                        </CreateBtn>
                        :
                        <ItemsList data={ringsData} isLoading={ringsLoading} isError={ringsError} setShow={setShow} part={"ring2"} />
                    }
                </GridContainer>
                <GridContainer
                    primary="true"
                    column={"5 / span 2"} row={"3 / span 2"}
                >
                    {!show.primary ?
                        <CreateBtn onClick={() => setShow({ ...show, primary: true })} type='button'>
                            <BsPlusCircle size={40} color={theme.colors.blanc} />
                        </CreateBtn>
                        :
                        <ItemsList data={primaryData} isLoading={primaryLoading} isError={primaryError} setShow={setShow} part={"primary"} />
                    }
                </GridContainer>
                <GridContainer
                    secondary="true"
                    column={4} row={3}
                >
                    <CreateBtn onClick={() => setShow({ ...show, secondary: true })} type='button'>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </GridContainer>
                <GridContainer
                    secondary="true"
                    column={4} row={4}
                >
                    <CreateBtn onClick={() => setShow({ ...show, melee: true })} type='button'>
                        <BsPlusCircle size={40} color={theme.colors.blanc} />
                    </CreateBtn>
                </GridContainer>
            </BuildContainer>
        </Wrapper>
    )
}

export default CreateBuild;

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    width: 100%;
    text-align: center;
    color: ${theme.colors.blanc};
    grid-row: 1;
    grid-column: 1 / span 5;
    text-decoration: underline;
    font-weight: 700;
    font-size: 40px;
`

const BuildContainer = styled.div`
    margin: 0;
    height: 85%;
    width: 85%;
    display: grid;
    grid-template-columns: repeat(6, 16.66%);
    grid-template-rows: repeat(6, 16.66%);
    gap: 20px;
`

const GridContainer = styled.div`
    position: relative;
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    place-self: ${(props) => props.primary ? "center stretch" : "stretch"};
    margin: ${(props) => props.jewel ? 10 : 0}px;
    padding: ${(props) => props.armor ? 5 : 0}px;
    height: ${(props) => props.primary ? "105px" : "100%"};
    width: ${(props) => props.primary ? "80%" : "100%"};
    background-color: rgba(244, 244, 246, 0.4);
    border-radius: 25px;
    opacity: 1;
    display: grid;
    place-content: center;
`

const CreateBtn = styled.button`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: ${theme.colors.gris2};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 1;
`

const BuildImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    transform: ${(props) => props.secondary && "scale(1.5)"};
    :hover {
        transform: ${(props) => props.secondary ? "scale(1.6)" : "scale(1.1)"};
    }
`
