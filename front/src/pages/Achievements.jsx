import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import useFetch from '../hooks/useFetch'
import Navbar from '../components/Navbar'
import AchievementRow from '../components/AchievementRow'
import { theme } from '../style/theme.js'
import Loading from '../components/Loading'

const item = {
    hidden: { y: -500, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

function Achievements() {
    const { data, isLoading, isError } = useFetch("achievements")
    return (
        <Wrapper>
            <Navbar />
            <Title>Achievement List <span style={{ fontSize: "24px", textDecoration: "none" }}>(catch them all)</span></Title>
            <Container>
                {!isLoading && !isError ?
                    data.map((achievement, i) => (
                        <motion.div
                            key={achievement._id}
                            initial="hidden"
                            animate="visible"
                            variants={item}
                            transition={{ delay: i * 0.2 }}
                        >
                            <AchievementRow achievement={achievement} />
                        </motion.div>
                    ))
                    :
                    <Loading />}
            </Container>
        </Wrapper>
    )
}

export default Achievements;

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const Title = styled.h1`
    margin: 0;
    height: 10vh;
    width: 100%;
    text-align: center;
    color: ${theme.colors.blanc};
    font-weight: 700;
    font-size: 42px;
`

const Container = styled.div`
    height: 72vh;
    width: 81vw;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 5px;
    border: 2px solid ${theme.colors.gris2};
`
