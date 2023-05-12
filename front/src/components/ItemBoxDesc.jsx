import React from 'react'
import styled from 'styled-components';

import { theme } from '../style/theme.js';

function ItemBoxDesc({ item, setShow }) {

    switch (item.category) {
        case "melee":
            return (
                <BoxDescContainer>
                    <AltName>{item.name}</AltName>
                    <Desc>Base DMG: <span style={{ color: theme.colors.rouge }}>{item.baseDamage}m</span></Desc>
                    <DPS>Crit chance: <span style={{ color: theme.colors.rouge }}>{item.critChance}%</span></DPS>
                </BoxDescContainer>
            )
        case "primary":
        case "secondary":
            return (
                <BoxDescContainer>
                    <NameModContainer>
                        <Name>{item.name}</Name>
                        {item.weaponMod?.img && <WeaponMod onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} src={item.weaponMod.img} />}
                    </NameModContainer>
                    <Desc>Range: <span style={{ color: theme.colors.rouge }}>{item.idealRange}m</span></Desc>
                    <DPS>Base DPS: <span style={{ color: theme.colors.rouge }}>{Math.ceil(item.baseDamage * item.rps)}</span></DPS>
                </BoxDescContainer>
            )
        case "head":
        case "body":
        case "legs":
            return (
                <BoxDescContainer>
                    <AltName>{item.name}</AltName>
                    <Desc>Base Armor: <span style={{ color: theme.colors.rouge }}>{item.baseArmor}</span></Desc>
                    <ArmorSet>Set: <span style={{ color: theme.colors.rouge }}>{item.armorSet}</span></ArmorSet>
                </BoxDescContainer>
            )
        default:
            return (
                <BoxDescContainer>
                    <AltName>{item.name}</AltName>
                    <BaseDesc>Worlds: <span style={{ color: theme.colors.rouge }}>{item.worlds}</span></BaseDesc>
                </BoxDescContainer>
            )
    }
}

export default ItemBoxDesc;

const BoxDescContainer = styled.div`
    height: 95px;
    width: 280px;
    border-radius: 15px;
    background-color: rgba(244, 244, 246, 0.4);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 50%);
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
`

const WeaponMod = styled.img`
    height: 25px;
    width: 25px;
    justify-self: end;
    :hover {
        transform: scale(1.5);
    }
`

const AltName = styled.p`
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

const NameModContainer = styled.div`
    grid-column: 1 / span 2;
    grid-row: 1;
    border-bottom: 1px solid ${theme.colors.noir};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const DPS = styled.p`
    margin: 0;
    color: ${theme.colors.noir};
    grid-column: 2;
    grid-row: 2;
    place-self: center;
    font-family: 'Red Hat Text';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
`

const ArmorSet = styled.p`
    margin: 0;
    color: ${theme.colors.noir};
    grid-column: 2;
    grid-row: 2;
    place-self: center;
    font-family: 'Red Hat Text';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
`

const Desc = styled.p`
    margin: 0;
    color: ${theme.colors.noir};
    grid-column: 1;
    grid-row: 2;
    font-family: 'Red Hat Text';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
`

const BaseDesc = styled.p`
    margin: 0;
    color: ${theme.colors.noir};
    grid-column: 1 / span 2;
    grid-row: 2;
    font-family: 'Red Hat Text';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
`

const Name = styled.p`
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
