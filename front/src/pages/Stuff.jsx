import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaRandom } from 'react-icons/fa';

import { theme } from '../style/theme.js';
import category from '../utils/category.js';

import Navbar from '../components/Navbar'
import Weapons from '../components/Weapons.jsx';
import Armors from '../components/Armors'
import Amulets from '../components/Amulets'
import Rings from '../components/Rings'
import Mods from '../components/Mods'

function Stuff() {

    const categorySelected = useParams()

    switch (categorySelected.item) {
        case "weapons":
            return (
                <>
                    <Navbar />
                    <Weapons />
                </>
            )
        case "armors":
            return (
                <>
                    <Navbar />
                    <Armors />
                </>
            )
        case "amulets":
            return (
                <>
                    <Navbar />
                    <Amulets />
                </>
            )
        case "rings":
            return (
                <>
                    <Navbar />
                    <Rings />
                </>
            )
        case "mods":
            return (
                <>
                    <Navbar />
                    <Mods />
                </>
            )
        default:
            return (
                <>
                    <Navbar />
                    <CategoryContainer>
                        {category.map((cat) => {
                            if (cat.name !== "Challenge Build") {
                                return <StyledLink key={cat.name} to={cat.link}><StyledBtn type='button'>{cat.name}</StyledBtn></StyledLink>
                            } else {
                                return <CircleLink key={cat.name} to={cat.link}><CircleBtn type='button'>{cat.name}<FaRandom size={30} color={theme.colors.blanc} /></CircleBtn></CircleLink>
                            }
                        })}
                    </CategoryContainer>
                </>
            )
    }
}

export default Stuff;

const CategoryContainer = styled.div`
    height: calc(100% - 100px);
    width: 100%;
    display: grid;
    grid-template-columns: 33% 34% 33%;
    grid-template-rows: 32.5% 35% 32.5%;
    place-items: center;
`

const StyledBtn = styled.button`
    height: 100px;
    width: 350px;
    border: 10px solid ${theme.colors.blanc};
    background-color: ${theme.colors.rouge};
    border-radius: 30px;
    box-shadow: 0px 4px 4px ${theme.colors.gris1};
    color: ${theme.colors.blanc};
    font-weight: 700;
    font-size: 38px;
    line-height: 50px;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;

`
const CircleLink = styled(NavLink)`
    text-decoration: none;
    grid-row: 1 / span 3;
    grid-column: 2;
`

const CircleBtn = styled.button`
    height: 330px;
    width: 330px;
    border: 10px solid ${theme.colors.blanc};
    background-color: ${theme.colors.rouge};
    border-radius: 50%;
    box-shadow: 0px 4px 4px ${theme.colors.gris1};
    color: ${theme.colors.blanc};
    font-weight: 700;
    font-size: 38px;
    line-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 15px;
`
