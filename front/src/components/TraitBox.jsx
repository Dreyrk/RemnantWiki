import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

import { theme } from "../style/theme.js"
import { NavLink } from 'react-router-dom'
import ModModal from './ModModal.jsx'
import Loading from './Loading.jsx'

function TraitBox({ trait, isLoading, isError }) {
    const [show, setShow] = useState(false)

    if (isLoading && !trait) {
        return (
            <Loading />
        )
    } else if (isError && !trait) {
        return (
            <p>{isError}</p>
        )
    } else {

        return (
            <StyledNavLink to={`${trait._id}`}>
                <BoxContainer onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                    <FlipContainer
                        animate={{ rotateX: show ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {show ?
                            <ModModal mod={trait} trait={true} />
                            :
                            <ImgContainer>
                                <BoxImg height={100} src={trait.img} alt={trait.name} />
                            </ImgContainer>}
                    </FlipContainer>
                    <BoxDescContainer>
                        <Name column={"1 / span 2"} row={1} >{trait.name}</Name>
                        <Text column={1} row={"2 / span 3"} >Base :
                            <span style={{ marginLeft: "8px", color: theme.colors.rouge }}>{trait.base}</span>
                        </Text>
                        <Text column={2} row={"2 / span 3"} >Max :
                            <span style={{ marginLeft: "8px", color: theme.colors.rouge }}>{trait.max}</span>
                        </Text>
                    </BoxDescContainer>
                </BoxContainer>
            </StyledNavLink>
        )
    }
}

export default TraitBox;

const BoxDescContainer = styled.div`
    height: 95px;
    width: 280px;
    border-radius: 15px;
    background-color: rgba(244, 244, 246, 0.4);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
    place-content: stretch center;
`

const Name = styled.p`
    border-bottom: 1px solid ${theme.colors.noir};
    margin: 0;
    font-family: 'Red Hat Text';
    font-style: normal;
    color: ${theme.colors.blanc};
    font-weight: 800;
    font-size: 24px;
    line-height: 42px;
    grid-column: 1 / span 2;
    grid-row: 1;
`

const Text = styled.p`
    margin: 0;
    font-size: ${(props) => props.size ? props.size : "18px"};
    font-weight: ${(props) => props.weight ? props.weight : 700};
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    place-self: center start;
`

const StyledNavLink = styled(motion(NavLink))`
    margin: 0;
    text-decoration: none;
    color: ${theme.colors.blanc};
    opacity: 1;
`

const FlipContainer = styled(motion.div)`
    margin: 0;
    height: 180px;
    width: 280px;
    display: grid;
    place-items: center;
`

const BoxImg = styled.img`
    height: ${(props) => props.height}%;
    width: auto;
`

const ImgContainer = styled(motion.div)`
    height: 160px;
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`

const BoxContainer = styled(motion.div)`
    height: 285px;
    width: 285px;
    border-radius: 25px;
    background-color: ${theme.colors.gris1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-top: 5px;
`
