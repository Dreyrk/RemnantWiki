import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

import { theme } from '../style/theme.js';

function AchievementRow({ achievement }) {

    return (
        <Row>
            <Container>
                <Name>{achievement.name}</Name>
                <ImgContainer>
                    <RowImg src={achievement.img} alt={achievement.name} />
                </ImgContainer>
            </Container>
            <Description>{achievement.description}</Description>
            <UnlockContainer>
                <Text>{achievement.unlock}</Text>
                <Text>{achievement.dlc}</Text>
            </UnlockContainer>
        </Row>
    )
}

export default AchievementRow;

const UnlockContainer = styled.div`
    height: 100%;
    width: 30%;
    border-left: 2px solid ${theme.colors.noir};
    display: grid;
    grid-template-rows: 50% 50%;
    place-items: center;
    color: ${theme.colors.blanc};
`

const Text = styled.p`
    margin: 0;
    font-size: 26px;
    font-weight: 700;
`

const Row = styled(motion.div)`
    height: 15vh;
    width: 80vw;
    background-color: ${theme.colors.gris1};
    border: 4px solid ${theme.colors.rouge};
    color: ${theme.colors.blanc};
    display: flex;
    align-items: center;
`

const Container = styled.div`
    width: 30%;
    height: 100%;
`

const Name = styled.p`
    width: 100%;
    height: 30%;
    text-align: center;
    margin: 0;
    font-weight: 700;
    font-size: 32px; 
`

const Description = styled.p`
    height: 100%;
    width: 40%;
    border-left: 2px solid ${theme.colors.noir};
    margin: 0;
    display: grid;
    place-content: center;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    overflow-y: auto;
    overflow-x: hidden;
`

const ImgContainer = styled.div`
    height: 70%;
    width: 100%;
    display: grid;
    place-content: center;
`

const RowImg = styled.img`
    width: auto;
    height: 100%;
    object-fit: contain;
`
