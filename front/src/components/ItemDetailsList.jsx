import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import WeaponsDetails from './WeaponsDetails.jsx';
import ArmorsDetails from './ArmorsDetails.jsx';
import Loading from "./Loading.jsx"
import { theme } from '../style/theme.js';



function ItemDetailsList({ item, category, isLoading, isError }) {
    if (isLoading) {
        return <Loading />
    } else if (isError) {
        return <p>{isError.info}</p>
    } else {
        switch (category) {
            case "weapons":
                return (
                    <WeaponsDetails item={item} />
                )
            case "amulets":
                return (
                    <DetailsList
                        initial="initial"
                        animate="animate"
                        variants={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1, transition: { staggerChildren: 0.2, delay: 0.2 } }
                        }}
                    >
                        <ListItem variants={{
                            initial: { y: -10, opacity: 0 },
                            animate: { y: 0, opacity: 1 }
                        }}>
                            <ModDesc>
                                <span style={{ textDecoration: `underline ${theme.colors.rouge}` }} >Location :</span>
                                <br />
                                {item.location ? item.location : "Unknown informations"}
                            </ModDesc>
                        </ListItem>
                        <ListItem variants={{
                            initial: { y: -10, opacity: 0 },
                            animate: { y: 0, opacity: 1 }
                        }}>
                            <ModDesc>
                                <span style={{ textDecoration: `underline ${theme.colors.rouge}` }} >Effect</span> :
                                <br />
                                {item.description ? item.description : "Unknown informations"}
                            </ModDesc>
                        </ListItem>
                    </DetailsList>
                )
            case "armors":
                return (
                    <ArmorsDetails item={item} />
                )
            case "trait":
                return (
                    <DetailsList initial="initial"
                        animate="animate"
                        variants={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1, transition: { staggerChildren: 0.2, delay: 0.2 } }
                        }}>
                        <ListItem variants={{
                            initial: { y: -10, opacity: 0 },
                            animate: { y: 0, opacity: 1 }
                        }}>
                            <ModDesc>
                                <span style={{ textDecoration: `underline ${theme.colors.rouge}` }} >Effect</span> : <br /> {item.description}
                            </ModDesc>
                        </ListItem>
                        <ListItem variants={{
                            initial: { y: -10, opacity: 0 },
                            animate: { y: 0, opacity: 1 }
                        }}>
                            <ModDesc>
                                <span style={{ textDecoration: `underline ${theme.colors.rouge}` }} >How to Unlock</span> : <br /> {item.unlock}
                            </ModDesc>
                        </ListItem>
                        <StatsContainer
                            variants={{
                                initial: { y: -10, opacity: 0 },
                                animate: { y: 0, opacity: 1 }
                            }}>
                            <Tile>
                                <Text>Stats :</Text>
                            </Tile>
                            <Container>
                                <Text>Base: {item.base}</Text>
                                <Text>Max: {item.max}</Text>
                            </Container>
                        </StatsContainer>
                    </DetailsList>
                )
            default:
                return (
                    <DetailsList initial="initial"
                        animate="animate"
                        variants={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1, transition: { staggerChildren: 0.2, delay: 0.2 } }
                        }}>
                        <ListItem variants={{
                            initial: { y: -10, opacity: 0 },
                            animate: { y: 0, opacity: 1 }
                        }}>
                            <ModDesc>
                                <span style={{ textDecoration: `underline ${theme.colors.rouge}` }} >Effect</span> : <br /> {item.description}
                            </ModDesc>
                        </ListItem>
                    </DetailsList>
                )
        }
    }
}

export default ItemDetailsList;

const StatsContainer = styled(motion.li)`
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 50% 50%;
`

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
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

const Tile = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    grid-row: 1 / span 2;
    grid-column: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1.5px solid ${theme.colors.blanc};
    padding-right: 10px;
`

const ModDesc = styled.p`
    font-size: 38px;
    font-weight: 700;
    margin: 0;
    width: 100%;
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
