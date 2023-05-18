import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import UpperCaseFirstLetter from "../helpers/UpperCaseFirstLetter.js"
import { theme } from "../style/theme.js"

import radiationLogo from "../images/radiationLogo.png"
import frost from "../images/ice.png"
import fire from "../images/fire.png"
import lightning from "../images/lightning.png"
import corrosive from "../images/corrosive.png"
import rot from "../images/rot.png"


function ArmorsDetails({ item }) {
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
                <Text>Armor Part : {item.category && UpperCaseFirstLetter(item.category)}</Text>
            </ListItem>
            <ListItem
                variants={{
                    initial: { y: -10, opacity: 0 },
                    animate: { y: 0, opacity: 1 }
                }}>
                <DamageTitle>
                    <Text>Armor :</Text>
                </DamageTitle>
                <DamageContainer>
                    <Text>Base: {item.baseArmor}</Text>
                    <Text>Max: {item.maxArmor}</Text>
                </DamageContainer>
            </ListItem>
            <ListItem variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: 0, opacity: 1 }
            }}>
                <Text decorate>Part of {item.armorSet} Set</Text>
            </ListItem>
            <ListItem variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: 0, opacity: 1 }
            }}>
                <DamageTitle>
                    <Text>Resistance :</Text>
                </DamageTitle>
                <DamageContainer>
                    <Text><TypeImg src={fire} alt='fire' /> {item.fire}</Text>
                    <Text><TypeImg src={frost} alt='frost' /> {item.frost ? item.frost : 0}</Text>
                    <Text><TypeImg src={corrosive} alt='corrosive' /> {item.corrosive}</Text>
                    <Text><TypeImg src={rot} alt='rot' /> {item.rot}</Text>
                    <Text><TypeImg src={radiationLogo} alt='radiation' /> {item.radiation}</Text>
                    <Text><TypeImg src={lightning} alt='shock' /> {item.shock}</Text>
                </DamageContainer>
            </ListItem>
            <ListItem variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: 0, opacity: 1 }
            }}>
                <Text>Weight: {item.weight}</Text>
            </ListItem>
            <ListItem variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: 0, opacity: 1 }
            }}>
                <Text>Worlds: {item.worlds}</Text>
            </ListItem>
        </DetailsList>
    )
}

export default ArmorsDetails;

const TypeImg = styled.img`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-inline: 10px;
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
    position: ${(props) => props.decorate && "relative"};
    font-size: 26px;
    font-weight: 700;
    place-self: center;
    margin: 0;
    padding: 0;
    color: ${theme.colors.blanc};
    &::before,
    &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: ${theme.colors.rouge};
  }
    &::before {
    top: ${props => props.decorate ? '-5px' : '0'};
  }
    &::after {
    bottom: ${props => props.decorate ? '-5px' : '0'};
  }
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
Text.defaultProps = {
    decoration: "none"
}