import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import missing from "../images/missing_img.jpg"

const finalPosition = { y: 0, x: 0, scale: 1, opacity: 1 };

const getUrl = (itemType, item) => {
    if (["head", "body", "legs"].includes(itemType)) {
        return `/stuff/armors/${item._id}`;
    }

    if (["primary", "secondary", "melee"].includes(itemType)) {
        return `/stuff/weapons/${item._id}`;
    }

    if (itemType.includes("ring")) {
        return `/stuff/rings/${item._id}`;
    }
    return `/stuff/${itemType}s/${item._id}`;
};

function BuildPiece({ item, itemType }) {
    let column;
    let row;
    let initial;
    let exit;
    let delay;

    switch (itemType) {
        case 'head':
            column = 4;
            row = "3 / span 1";
            initial = { y: 150, scale: 0.2, opacity: 0 };
            exit = { ...initial };
            delay = 0.5
            break;
        case 'body':
            column = 4;
            row = "4 / span 2";
            initial = { scale: 0.2, opacity: 0 };
            exit = { ...initial };
            delay = 0.7
            break;
        case 'legs':
            column = 4;
            row = "6 / span 1";
            initial = { y: -150, scale: 0.2, opacity: 0 };
            exit = { ...initial };
            delay = 0.5
            break;
        case 'amulet':
        case 'ring1':
            column = 3;
            row = itemType === 'amulet' ? 4 : 5;
            initial = { y: itemType === 'amulet' ? 50 : -50, x: 185, scale: 0.2, opacity: 0 };
            exit = { ...initial };
            delay = 0.3
            break;
        case 'ring2':
            column = 2;
            row = 5;
            initial = { y: -50, x: 381, scale: 0.2, opacity: 0 };
            exit = { ...initial };
            delay = 0.1
            break;
        case 'primary':
            column = "6 / span 2";
            row = "4 / span 2";
            initial = { x: -451, scale: 0.115, opacity: 0 };
            exit = { ...initial };
            delay = 0
            break;
        case 'secondary':
        case 'melee':
            column = 5;
            row = itemType === 'secondary' ? 4 : 5;
            initial = { y: itemType === 'secondary' ? 50 : -50, x: -195, scale: 0.2, opacity: 0 };
            exit = { ...initial };
            delay = 0.3
            break;
        default:
            break;
    }

    return (
        <GridContainer
            to={getUrl(itemType, item)}
            armor={['head', 'body', 'legs'].includes(itemType) ? 1 : 0}
            jewel={['amulet', 'ring1', 'ring2'].includes(itemType) ? 1 : 0}
            primary={itemType === 'primary' ? 1 : 0}
            secondary={['secondary', 'melee'].includes(itemType) ? 1 : 0}
            column={column}
            row={row}
            initial={initial}
            animate={finalPosition}
            transition={{ delay: delay, type: 'spring', stiffness: 60, bounce: 0.5, duration: 0.5 }}
            exit={exit}
        >
            <BuildImg src={item.img ? item.img : missing} alt='build-item' />
            {item.weaponMod?.img && (
                <ModLink to={`/stuff/mods/${item.weaponMod?._id}`}>
                    <ModImg src={item.weaponMod.img} alt='weapon-mod' />
                </ModLink>
            )}
        </GridContainer>
    );
};

export default BuildPiece;

const ModLink = styled(NavLink)`
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 1;
    :hover {
        transform: scale(1.4);
    }
`

const ModImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`

const GridContainer = styled(motion(NavLink))`
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
    position: relative;
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
