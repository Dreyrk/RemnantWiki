import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from '../style/theme';
import UpperCaseFirstLetter from '../helpers/UpperCaseFirstLetter.js';
import radiationLogo from "../images/radiationLogo.png"

function ItemDetailsList({ item, category }) {
    console.log(item)
    switch (category) {
        case "weapons":
            return (
                <DetailsList>
                    <ListItem>
                        <Text>Category: {UpperCaseFirstLetter(item.category)} weapon</Text>
                    </ListItem>
                    <ListItem>
                        <DamageTitle>
                            <Text>Damage :</Text>
                        </DamageTitle>
                        <DamageContainer>
                            <Text>Base: {item.baseDamage}</Text>
                            <Text>Max: {item.maxDamage}</Text>
                        </DamageContainer>
                    </ListItem>
                    <ListItem>
                        <Text>Rounds per second: {item.rps}/s</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Crit Chance: {item.critChance}%</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Magazine: {item.magazine}</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Ideal Range: {item.idealRange}m</Text>
                    </ListItem>
                    {item.type &&
                        <ListItem>
                            type:
                            <TypeImg src={radiationLogo} alt={item.name} />
                        </ListItem>
                    }
                </DetailsList>
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

const TypeImg = styled.img`
    height: 45px;
    width: 45px;
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
