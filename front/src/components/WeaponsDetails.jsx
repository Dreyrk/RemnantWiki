import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import UpperCaseFirstLetter from "../helpers/UpperCaseFirstLetter.js"
import { theme } from "../style/theme.js"

import missing from "../images/missing_img.jpg"
import radiationLogo from "../images/radiationLogo.png"
import ice from "../images/ice.png"
import fire from "../images/fire.png"
import lightning from "../images/lightning.png"
import corrosive from "../images/corrosive.png"
import rot from "../images/rot.png"
import normal from "../images/normal.jpeg"

function typeImg(type) {
    switch (type) {
        case "radiation":
            return radiationLogo;
        case "frost":
            return ice;
        case "normal":
            return normal;
        case "rot":
            return rot;
        case "fire":
            return fire;
        case "shock":
            return lightning;
        case "corrosive":
            return corrosive;
        default:
            return missing
    }
}

function WeaponsDetails({ item }) {
    return (
        <DetailsList
            initial="initial"
            animate="animate"
            variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.2, delay: 0.2 } }
            }}>
            <ListItem variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: 0, opacity: 1 }
            }}>
                <Text>Category: {item.category && UpperCaseFirstLetter(item.category)} weapon</Text>
            </ListItem>
            <ListItem
                variants={{
                    initial: { y: -10, opacity: 0 },
                    animate: { y: 0, opacity: 1 }
                }}>
                <DamageTitle>
                    <Text>Damage :</Text>
                </DamageTitle>
                <DamageContainer>
                    <Text>Base: {item.baseDamage}</Text>
                    <Text>Max: {item.maxDamage}</Text>
                </DamageContainer>
            </ListItem>
            <ListItem variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: 0, opacity: 1 }
            }}>
                <Text>Rounds per second: {item.rps}/s</Text>
            </ListItem>
            <ListItem variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: 0, opacity: 1 }
            }}>
                <Text>Crit Chance: {item.critChance}%</Text>
            </ListItem>
            <ListItem variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: 0, opacity: 1 }
            }}>
                <Text>Magazine: {item.magazine}</Text>
            </ListItem>
            <ListItem variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: 0, opacity: 1 }
            }}>
                <Text>Ideal Range: {item.idealRange}m</Text>
            </ListItem>
            <ListItem variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: 0, opacity: 1 }
            }}>
                <Text>Type :</Text>
                <Text>{item.type}</Text>
                <TypeImg src={typeImg(item.type)} alt={item.name} />
            </ListItem>

        </DetailsList>
    )
}

export default WeaponsDetails;

const TypeImg = styled.img`
    height: 35px;
    width: 35px;
`

const DamageTitle = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    display: grid;
`

const DamageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-left: 1.5px solid ${theme.colors.blanc};
    margin-left: 15px;
`

const Text = styled.p`
    font-size: 26px;
    font-weight: 700;
    place-self: center;
    margin: 0;
    padding: 0;
    color: ${theme.colors.blanc};
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
    width: 350px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
