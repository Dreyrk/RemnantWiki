import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


import { theme } from '../style/theme.js'
import useCurrentUserContext from "../hooks/useCurrentUserContext.js"
import LikeBtn from './LikeBtn.jsx'

function ItemBox({ item }) {

    const { token } = useCurrentUserContext()

    return (
        <BoxContainer>
            {token && <LikeBtn item={item} />}
            <ImgContainer>
                <BoxImg src={item.img} alt={item.name} />
            </ImgContainer>
            {item.category !== "melee" ?
                <BoxDescContainer>
                    <NameModContainer>
                        <Name>{item.name}</Name>
                        {item.weaponMod?.img && <WeaponMod src={item.weaponMod.img} />}
                    </NameModContainer>
                    <Desc>Range: <span style={{ color: theme.colors.rouge }}>{item.idealRange}m</span></Desc>
                    <DPS>Base DPS: <span style={{ color: theme.colors.rouge }}>{Math.ceil(item.baseDamage * item.rps)}</span></DPS>
                </BoxDescContainer>
                :
                <BoxDescContainer>
                    <MeleeName>{item.name}</MeleeName>
                    <Desc>Base DMG: <span style={{ color: theme.colors.rouge }}>{item.baseDamage}m</span></Desc>
                    <DPS>Crit chance: <span style={{ color: theme.colors.rouge }}>{item.critChance}%</span></DPS>
                </BoxDescContainer>
            }
        </BoxContainer>
    )
}

export default ItemBox;

const WeaponMod = styled.img`
    height: 25px;
    width: 25px;
    justify-self: end;
    :hover {
        transform: scale(1.5);
    }
`

const MeleeName = styled.p`
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

const BoxImg = styled.img`
    height: 50%;
    width: auto;
`

const ImgContainer = styled.div`
    height: 160px;
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
`

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

const BoxContainer = styled(motion.div)`
    height: 285px;
    width: 285px;
    border-radius: 25px;
    background-color: ${theme.colors.gris1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`
