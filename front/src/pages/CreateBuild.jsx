import React, { useState } from 'react'
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import { GrPowerReset } from "react-icons/gr"

import useFetch from '../hooks/useFetch.js';
import { theme } from '../style/theme.js';
import Navbar from '../components/Navbar.jsx';
import ItemsList from '../components/ItemsList.jsx';
import CreateBtn from '../components/CreateBtn.jsx';
import useCurrentUserContext from '../hooks/useCurrentUserContext.js';
import updateUser from '../helpers/updateUser.js';



function CreateBuild() {

    const { user, setUser, token } = useCurrentUserContext()

    const { data: amuletsData, isLoading: amuletsLoading, isError: amuletsError } = useFetch("items/amulets");
    const { data: ringsData, isLoading: ringsLoading, isError: ringsError } = useFetch("items/rings");
    const { data: headData, isLoading: headLoading, isError: headError } = useFetch("items/armors/category/head");
    const { data: bodyData, isLoading: bodyLoading, isError: bodyError } = useFetch("items/armors/category/body");
    const { data: legsData, isLoading: legsLoading, isError: legsError } = useFetch("items/armors/category/legs");
    const { data: primaryData, isLoading: primaryLoading, isError: primaryError } = useFetch("items/weapons/category/primary");
    const { data: secondaryData, isLoading: secondaryLoading, isError: secondaryError } = useFetch("items/weapons/category/secondary");
    const { data: meleeData, isLoading: meleeLoading, isError: meleeError } = useFetch("items/weapons/category/melee");

    const [build, setBuild] = useState({
        name: '',
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

    const ResetBuild = () => {
        setBuild({
            name: '',
            description: '',
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
    }

    const SaveBuild = () => {
        const isValid = Object.values(build).every(value => value !== null && value !== '')
        if (isValid) {
            setUser((prevUser) => ({
                ...prevUser, saved: {
                    ...prevUser.saved, builds: [...prevUser.saved.builds, build]
                }
            }))
            try {
                updateUser(user, token)
                toast.success("Build Saved")
                setBuild({
                    name: '',
                    description: '',
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
            } catch (e) {
                toast.error("Updated Failed")
                console.error(e)
            }
        } else {
            toast.warn("Build is not complete")
        }
    }

    return (
        <Wrapper>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                theme="dark"
            />
            <Navbar />
            <BuildContainer>
                <Title>Create your Build</Title>
                <ResetBtn onClick={ResetBuild} type='button'>
                    <GrPowerReset size={40} color={theme.colors.blanc} />
                </ResetBtn>
                <NameContainer>
                    <Text>Name :</Text>
                    <NameInput value={build.name} onChange={(e) => setBuild({ ...build, name: e.target.value })} type='text' placeholder='Name your build...' />
                </NameContainer>
                <DescContainer>
                    <Text>Description :</Text>
                    <DescInput value={build.description} onChange={(e) => setBuild({ ...build, description: e.target.value })} type='text' placeholder='Enter a small description of your build...' />
                </DescContainer>
                <GridContainer
                    armor="true"
                    column={3} row={2}
                >
                    {!show.head ?
                        <CreateBtn item={build.head} setShow={setShow} setBuild={setBuild} part={"head"} />
                        :
                        <ItemsList data={headData} isLoading={headLoading} isError={headError} setShow={setShow} part={"head"} setBuild={setBuild} />
                    }
                </GridContainer>
                <GridContainer
                    armor="true"
                    column={3} row={"3 / span 2"}
                >
                    {!show.body ?
                        <CreateBtn item={build.body} setShow={setShow} setBuild={setBuild} part={"body"} />
                        :
                        <ItemsList data={bodyData} isLoading={bodyLoading} isError={bodyError} setShow={setShow} part={"body"} setBuild={setBuild} />
                    }
                </GridContainer>
                <GridContainer
                    armor="true"
                    column={3} row={5}
                >
                    {!show.legs ?
                        <CreateBtn item={build.legs} setShow={setShow} setBuild={setBuild} part={"legs"} />
                        :
                        <ItemsList data={legsData} isLoading={legsLoading} isError={legsError} setShow={setShow} part={"legs"} setBuild={setBuild} />
                    }
                </GridContainer>
                <GridContainer
                    jewel="true"
                    column={2} row={3}
                >
                    {!show.amulet ?
                        <CreateBtn item={build.amulet} setShow={setShow} setBuild={setBuild} part={"amulet"} />
                        :
                        <ItemsList data={amuletsData} isLoading={amuletsLoading} isError={amuletsError} setShow={setShow} part={"amulet"} setBuild={setBuild} />
                    }
                </GridContainer>
                <GridContainer
                    jewel="true"
                    column={2} row={4}
                >
                    {!show.ring1 ?
                        <CreateBtn item={build.ring1} setShow={setShow} setBuild={setBuild} part={"ring1"} />
                        :
                        <ItemsList data={ringsData} isLoading={ringsLoading} isError={ringsError} setShow={setShow} part={"ring1"} setBuild={setBuild} />
                    }
                </GridContainer>
                <GridContainer
                    jewel="true"
                    column={1} row={4}
                >
                    {!show.ring2 ?
                        <CreateBtn item={build.ring2} setShow={setShow} setBuild={setBuild} part={"ring2"} />
                        :
                        <ItemsList data={ringsData} isLoading={ringsLoading} isError={ringsError} setShow={setShow} part={"ring2"} setBuild={setBuild} />
                    }
                </GridContainer>
                <GridContainer
                    primary="true"
                    column={"5 / span 2"} row={"3 / span 2"}
                >
                    {!show.primary ?
                        <CreateBtn item={build.primary} setShow={setShow} setBuild={setBuild} part={"primary"} />
                        :
                        <ItemsList data={primaryData} isLoading={primaryLoading} isError={primaryError} setShow={setShow} part={"primary"} setBuild={setBuild} />
                    }
                </GridContainer>
                <GridContainer
                    secondary="true"
                    column={4} row={3}
                >
                    {!show.secondary ?
                        <CreateBtn item={build.secondary} setShow={setShow} setBuild={setBuild} part={"secondary"} />
                        :
                        <ItemsList data={secondaryData} isLoading={secondaryLoading} isError={secondaryError} setShow={setShow} part={"secondary"} setBuild={setBuild} />
                    }
                </GridContainer>
                <GridContainer
                    secondary="true"
                    column={4} row={4}
                >
                    {!show.melee ?
                        <CreateBtn item={build.melee} setShow={setShow} setBuild={setBuild} part={"melee"} />
                        :
                        <ItemsList data={meleeData} isLoading={meleeLoading} isError={meleeError} setShow={setShow} part={"melee"} setBuild={setBuild} />
                    }
                </GridContainer>
            </BuildContainer>
            <StyledBtn onClick={SaveBuild} type='button'>Save</StyledBtn>
        </Wrapper>
    )
}

export default CreateBuild;

const ResetBtn = styled.button`
    place-self: center;
    height: 60px;
    width: 60px;
    border: none;
    border-radius: 50%;
    display: grid;
    place-content: center;
    background-color: ${theme.colors.rouge};
`

const Text = styled.p`
    margin: 0;
    color: ${theme.colors.blanc};
    font-size: 1.2rem;
`

const NameContainer = styled.div`
    grid-column: 5 / span 2;
    grid-row: 1;
    display: flex;
    align-items: center;
    gap: 10px;
`
const DescContainer = styled.div`
    grid-column: 5 / span 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`

const DescInput = styled.textarea`
    height: 200px;
    width: 80%;
    font-weight: 500;
    border-radius: 20px;
    padding: 10px;
    text-align: justify;
    font-size: 14px;
    transition: background-color 0.3s;
    color: ${theme.colors.rouge};

    &::placeholder {
    color: ${theme.colors.rouge};
    opacity: 0.5;
    }

    &:focus {
    outline: none;
    background-color: ${theme.colors.gris2};
    color: ${theme.colors.blanc};
    border: 2px solid ${theme.colors.blanc};
    }
`

const NameInput = styled.input`
    height: 20px;
    width: 150px;
    font-weight: 600;
    border-radius: 20px;
    border: none;
    padding: 0 15px;
    color: ${theme.colors.rouge};
    background-color: ${theme.colors.blanc};
    transition: background-color 0.3s;

    &::placeholder {
    color: ${theme.colors.rouge};
    opacity: 0.5;
    }

    &:focus {
    outline: none;
    background-color: ${theme.colors.gris2};
    }
`

const StyledBtn = styled.button`
    height: 35px;
    width: 120px;
    font-weight: 700;
    font-size: 20px;
    margin-right: 145px;
    border-radius: 40px;
    background-color: ${theme.colors.rouge};
    color: ${theme.colors.blanc};
    border: none;
    box-shadow: 0px 2px 2px ${theme.colors.noir};
    :hover {
        transform: scale(1.1);
    }
    :active {
        transform: scale(0.9);
    }
`

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
    position: relative;
`

const GridContainer = styled.div`
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
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`
