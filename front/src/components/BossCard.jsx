import React from 'react'
import styled from 'styled-components'

import { theme } from '../style/theme.js';
import { Link } from 'react-router-dom';

function BossCard({ boss }) {
    return (
        <CardContainer>
            <ImgContainer>
                <BossImg src={boss.img} alt={boss.name} />
            </ImgContainer>
            <InfoContainer row={2}>
                <Text>
                    {boss.name}
                </Text>
            </InfoContainer>
            <InfoContainer row={3}>
                <StyledLink to={boss.link} replace={true} >More information</StyledLink>
            </InfoContainer>
        </CardContainer>
    )
}

export default BossCard;

const StyledLink = styled(Link)`
    :hover {
        color: ${theme.colors.rouge};
    }
`

const CardContainer = styled.div`
aspect-ratio: 1 / 1;
    height: 500px;
    width: 300px;
    border: 4px solid ${theme.colors.rouge};
    background-color: ${theme.colors.gris1};
    display: grid;
    grid-template-rows: 80% 10% 10%;
`

const ImgContainer = styled.div`
    width: 100%;
    grid-row: 1;
`

const BossImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    width: 100%;
    display: grid;
    place-content: center;
    grid-row: ${(props) => props.row};
    border-top: 2px solid ${theme.colors.rouge};
`

const Text = styled.p`
    width: 100%;
    text-align: center;
    margin: 0;
    color: ${theme.colors.blanc};
    font-size: 24px;
    font-weight: 700;
`
