import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaRandom } from 'react-icons/fa';

import { theme } from '../style/theme.js';
import { device } from '../style/device.js';
import StyledBtn from '../style/StyledBtn.js';
import category from '../utils/category.js';

import Navbar from '../components/Navbar'
import Weapons from '../components/Weapons';
import Armors from '../components/Armors'
import Amulets from '../components/Amulets'
import Rings from '../components/Rings'
import Mods from '../components/Mods'

function Stuff() {

    const { itemCategory } = useParams()

    switch (itemCategory) {
        case "weapons":
            return (
                <Wrapper>
                    <Navbar />
                    <Weapons />
                </Wrapper>
            )
        case "armors":
            return (
                <Wrapper>
                    <Navbar />
                    <Armors />
                </Wrapper>
            )
        case "amulets":
            return (
                <Wrapper>
                    <Navbar />
                    <Amulets />
                </Wrapper>
            )
        case "rings":
            return (
                <Wrapper>
                    <Navbar />
                    <Rings />
                </Wrapper>
            )
        case "mods":
            return (
                <Wrapper>
                    <Navbar />
                    <Mods />
                </Wrapper>
            )
        default:
            return (
                <Wrapper>
                    <Navbar />
                    <CategoryContainer>
                        {category.map((cat) => {
                            if (cat.name !== "Challenge") {
                                return (
                                    <StyledLink key={cat.name} to={cat.link}>
                                        <StyledBtn disabled={cat.disabled ? true : false} type='button'>{cat.name}</StyledBtn>
                                    </StyledLink>
                                )
                            } else {
                                return (
                                    <CircleLink key={cat.name} to={cat.link}>
                                        <CircleBtn type='button'>
                                            <Text>{cat.name}</Text>
                                            <FaRandom size={60} color={theme.colors.blanc} />
                                        </CircleBtn>
                                    </CircleLink>
                                )
                            }
                        })}
                    </CategoryContainer>
                </Wrapper>
            )
    }
}

export default Stuff;

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    height: 89vh;
    max-height: 100vh;
`

const CategoryContainer = styled.div`
    height: calc(100% - 100px);
    width: 100%;
    display: grid;
    grid-template-columns: 33% 34% 33%;
    grid-template-rows: 32.5% 35% 32.5%;
    place-items: center;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 15px;
    @media ${device.mobileL} {
    height: 90px;
    width: 90px;
    font-size: 12px;
    padding-top: 3px;
  }
`

const Text = styled.span`
    font-weight: 700;
    font-size: 38px;
    line-height: 50px;
    @media ${device.mobileL} {
        display: none;
    }
`
