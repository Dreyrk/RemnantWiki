import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import WeaponsDetails from './WeaponsDetails.jsx';
import ArmorsDetails from './ArmorsDetails.jsx';
import { theme } from '../style/theme.js';


function ItemDetailsList({ item, category }) {
    switch (category) {
        case "weapons":
            return (
                <WeaponsDetails item={item} />
            )
        case "amulets":
            return (
                <DetailsList
                    initial="initial"
                    animate="animate"
                    variants={{
                        initial: { opacity: 0 },
                        animate: { opacity: 1, transition: { staggerChildren: 0.2, delay: 0.2 } }
                    }}
                >
                    <ListItem variants={{
                        initial: { y: -10, opacity: 0 },
                        animate: { y: 0, opacity: 1 }
                    }}>
                        <ModDesc>
                            <span style={{ textDecoration: `underline ${theme.colors.rouge}` }} >Location :</span> <br /> {item.location}
                        </ModDesc>
                    </ListItem>
                    <ListItem variants={{
                        initial: { y: -10, opacity: 0 },
                        animate: { y: 0, opacity: 1 }
                    }}>
                        <ModDesc>
                            <span style={{ textDecoration: `underline ${theme.colors.rouge}` }} >Effect</span> : <br /> {item.description}
                        </ModDesc>
                    </ListItem>
                </DetailsList>
            )
        case "armors":
            return (
                <ArmorsDetails item={item} />
            )
        default:
            return (
                <DetailsList initial="initial"
                    animate="animate"
                    variants={{
                        initial: { opacity: 0 },
                        animate: { opacity: 1, transition: { staggerChildren: 0.2, delay: 0.2 } }
                    }}>
                    <ListItem variants={{
                        initial: { y: -10, opacity: 0 },
                        animate: { y: 0, opacity: 1 }
                    }}>
                        <ModDesc>
                            <span style={{ textDecoration: `underline ${theme.colors.rouge}` }} >Effect</span> : <br /> {item.description}
                        </ModDesc>
                    </ListItem>
                </DetailsList>
            )
    }
}

export default ItemDetailsList;

const ModDesc = styled.p`
    font-size: 38px;
    font-weight: 700;
    margin: 0;
    width: 100%;
`

const DetailsList = styled(motion.ul)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const ListItem = styled(motion.li)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
