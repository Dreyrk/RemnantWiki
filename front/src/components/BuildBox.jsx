import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { theme } from '../style/theme.js';
import useCurrentUserContext from '../hooks/useCurrentUserContext.js';

function BuildBox({ build }) {

    const { user } = useCurrentUserContext()

    return (
        <BoxContainer to={`/builds/${user.pseudo}/${build.name ? build.name : "noname"}`}>
            <Name>{build.name ? build.name : "No Name"}</Name>
            <DetailsContainer>

            </DetailsContainer>
            <Desc>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corporis, laboriosam illum blanditiis, quos animi,
                atque obcaecati necessitatibus a perspiciatis consequatur voluptas ratione odit vel similique facere nisi quo consectetur.
            </Desc>
        </BoxContainer>
    )
}

export default BuildBox;

const BoxContainer = styled(NavLink)`
    opacity: 1;
    text-decoration: none;
    height: 250px;
    width: 250px;
    border: 2px solid ${theme.colors.rouge};
    border-radius: 10px;
    background-color: ${theme.colors.gris2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const DetailsContainer = styled.div`
    height: 40%;
    width: 90%;
`

const Desc = styled.p`
    max-height: 25%;
    max-width: 90%;
    margin: 0;
    overflow: auto;
`

const Name = styled.p`
    width: 100%;
    margin: 0;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: ${theme.colors.blanc};
`


