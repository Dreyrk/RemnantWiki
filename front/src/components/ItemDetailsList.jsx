import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import WeaponsDetails from './WeaponsDetails.jsx';


function ItemDetailsList({ item, category }) {
    console.log(item)
    switch (category) {
        case "weapons":
            return (
                <WeaponsDetails item={item} />
            )
        case "rings":
            return (
                <DetailsList>
                    <ListItem></ListItem>
                </DetailsList>
            )
        case "amulets":
            return (
                <DetailsList>
                    <ListItem></ListItem>
                </DetailsList>
            )
        case "armors":
            return (
                <DetailsList>
                    <ListItem></ListItem>
                </DetailsList>
            )
        case "mods":
            return (
                <DetailsList>
                    <ListItem></ListItem>
                </DetailsList>
            )
        case "items":
            return (
                <DetailsList>
                    <ListItem></ListItem>
                </DetailsList>
            )

        default:
            return (
                <DetailsList>
                    <ListItem></ListItem>
                </DetailsList>
            )
    }
}

export default ItemDetailsList;

const DetailsList = styled(motion.ul)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const ListItem = styled(motion.li)`
    width: 350px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
