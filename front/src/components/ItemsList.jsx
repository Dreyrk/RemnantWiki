import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"
import { IoClose } from 'react-icons/io5';

import { theme } from '../style/theme.js';
import UpperCaseFirstLetter from "../helpers/UpperCaseFirstLetter.js"
import ItemBox from "./ItemBox.jsx"


function ItemsList({ data, isLoading, isError, setShow, part, top, left }) {

    const handleClose = () => {
        setShow((prevShow) => ({ ...prevShow, [part]: false }));
    };

    return (
        <Container left={left} top={top} >
            <CloseBtn type='button' onClick={handleClose}>
                <IoClose size={35} color={theme.colors.blanc} />
            </CloseBtn>
            <PartName>{UpperCaseFirstLetter(part)}</PartName>
            <List>
                {data.map((item) => (
                    <ItemBox item={item} key={item._id} />
                ))}
            </List>
        </Container>
    )
}

export default ItemsList;

const PartName = styled(motion.p)`
    margin: 0;
    width: 100%;
    text-align: center;
    color: ${theme.colors.blanc};
    font-weight: 700;
    font-size: 22px;
`

const List = styled(motion.div)`
    height: 80%;
    width: 95%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: auto;
`

const Container = styled(motion.div)`
    position: absolute;
    top: ${(props) => props.top ? props.top : 0};
    left: ${(props) => props.left};
    z-index: 99;
    height: 500px;
    width: 325px;
    background-color: ${theme.colors.gris2};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 8px;
    padding-bottom: 15px;
    border-radius: 2rem;
    
`
const CloseBtn = styled.button`
    height: 40px;
    width: 40px;
    margin-top: 5px;
    margin-left: 5px;
    border: none;
    background-color: ${theme.colors.rouge};
    display: grid;
    place-content: center;
    border-radius: 50%;
    place-self: start;
`