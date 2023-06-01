import React from 'react'
import styled from 'styled-components';
import { BsPlusCircle } from "react-icons/bs"
import { BiMinusCircle } from "react-icons/bi"

import { theme } from '../style/theme';


function getMinusPosition(part) {
    if (part === "head" && part === "body" && part === "legs") {
        return { top: "2%", right: "2%" }
    } else {
        return { top: "5%", right: "5%" }
    }
}

function CreateBtn({ setShow, part, item, setBuild }) {

    const { top, right } = getMinusPosition(part)

    return (
        item !== null ?
            <SelectedContainer>
                <IconContainer top={top} right={right} onClick={() => setBuild((prevBuild) => ({ ...prevBuild, [part]: null }))} >
                    <BiMinusCircle size={30} color={theme.colors.blanc} />
                </IconContainer>
                <BuildImg src={item.img} alt={part} part={part} />
            </SelectedContainer>
            :
            <StyledCreateBtn onClick={() => setShow((prevShow) => ({ ...prevShow, [part]: true }))} type='button'>
                <BsPlusCircle size={40} color={theme.colors.blanc} />
            </StyledCreateBtn>
    )
}

export default CreateBtn;

const SelectedContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`

const IconContainer = styled.button`
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    position: absolute;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 1;
    z-index: 90;
`

const StyledCreateBtn = styled.button`
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
    transform: ${(props) => props.part === "melee" && "scale(1.4)"};
    :hover {
        transform: ${(props) => props.part === "melee" ? "scale(1.7)" : "scale(1.1)"};
    }
`
