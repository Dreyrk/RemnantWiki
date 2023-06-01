import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from '../style/theme.js';
import { device } from '../style/device.js';
import useFetch from "../hooks/useFetch.js";
import Navbar from './Navbar.jsx';
import TraitBox from './TraitBox.jsx';
import { useParams } from 'react-router-dom';
import TraitDetails from './TraitDetails.jsx';

function Traits() {

    const { id } = useParams()

    const { data: any, isLoading: anyIsLoading, isError: anyIsError } = useFetch("traits/worlds/any");
    const { data: rhom, isLoading: rhomIsLoading, isError: rhomIsError } = useFetch("traits/worlds/rhom");
    const { data: earth, isLoading: earthIsLoading, isError: earthIsError } = useFetch("traits/worlds/earth");
    const { data: corsus, isLoading: corsusIsLoading, isError: corsusIsError } = useFetch("traits/worlds/corsus");
    const { data: yaesha, isLoading: yaeshaIsLoading, isError: yaeshaIsError } = useFetch("traits/worlds/yaesha");
    const { data: ward_prime, isLoading: ward_primeIsLoading, isError: ward_primeIsError } = useFetch("traits/worlds/ward_prime");
    const { data: ward13, isLoading: ward13IsLoading, isError: ward13IsError } = useFetch("traits/worlds/ward13");
    const { data: ward17, isLoading: ward17IsLoading, isError: ward17IsError } = useFetch("traits/worlds/ward17");
    const { data: labyrinth, isLoading: labyrinthIsLoading, isError: labyrinthIsError } = useFetch("traits/worlds/labyrinth");

    if (id) {
        return (
            <>
                <Navbar />
                <TraitDetails id={id} />
            </>
        )
    } else {
        return (
            <>
                <Navbar />
                <Container>
                    <Title row={1}>Ward 13 :</Title>
                    <DataContainer row={2}>
                        {ward13 && ward13.map((trait) => (<TraitBox key={trait._id} isLoading={ward13IsLoading} isError={ward13IsError} trait={trait} />))}
                    </DataContainer>
                    <Title row={3}>Earth :</Title>
                    <DataContainer row={4} >
                        {earth && earth.map((trait) => (<TraitBox key={trait._id} isLoading={earthIsLoading} isError={earthIsError} trait={trait} />))}
                    </DataContainer>
                    <Title row={5}>Rhom :</Title>
                    <DataContainer row={6}>
                        {rhom && rhom.map((trait) => (<TraitBox key={trait._id} isLoading={rhomIsLoading} isError={rhomIsError} trait={trait} />))}
                    </DataContainer>
                    <Title row={7}>Corsus :</Title>
                    <DataContainer row={8} >
                        {corsus && corsus.map((trait) => (<TraitBox key={trait._id} isLoading={corsusIsLoading} isError={corsusIsError} trait={trait} />))}
                    </DataContainer>
                    <Title row={9}>Yaesha :</Title>
                    <DataContainer row={10} >
                        {yaesha && yaesha.map((trait) => (<TraitBox key={trait._id} isLoading={yaeshaIsLoading} isError={yaeshaIsError} trait={trait} />))}
                    </DataContainer>
                    <Title row={11}>Ward 17 :</Title>
                    <DataContainer row={12}>
                        {ward17 && ward17.map((trait) => (<TraitBox key={trait._id} isLoading={ward17IsLoading} isError={ward17IsError} trait={trait} />))}
                    </DataContainer>
                    <Title row={13}>Ward Prime :</Title>
                    <DataContainer row={14}>
                        {ward_prime && ward_prime.map((trait) => (<TraitBox key={trait._id} isLoading={ward_primeIsLoading} isError={ward_primeIsError} trait={trait} />))}
                    </DataContainer>
                    <Title row={15}>Labyrinth :</Title>
                    <DataContainer row={16}>
                        {labyrinth && labyrinth.map((trait) => (<TraitBox key={trait._id} isLoading={labyrinthIsLoading} isError={labyrinthIsError} trait={trait} />))}
                    </DataContainer>
                    <Title row={17}>Any :</Title>
                    <DataContainer row={18}>
                        {any && any.map((trait) => (<TraitBox key={trait._id} isLoading={anyIsLoading} isError={anyIsError} trait={trait} />))}
                    </DataContainer>
                </Container>
            </>
        );
    }
}

export default Traits;

const DataContainer = styled(motion.div)`
    display: flex;
    width: 90%;
    height: 320px;
    overflow-x: auto;
    gap: 25px;
    grid-column: ${(props) => props.column ? props.column : "1 / span 4"};
    grid-row: ${(props) => props.row};
`;

const Title = styled(motion.h2)`
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.blanc};
    font-weight: 700;
    font-size: 32px;
    margin: 0;
    grid-column: ${(props) => props.column ? props.column : "1 / span 4"};
    grid-row: ${(props) => props.row};
`;

const Container = styled.div`
    height: 89vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: stretch center;
    overflow-y: auto;
    gap: 15px;
    ::-webkit-scrollbar {
        display: none;
    }
    @media ${device.desktop} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.laptop} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.mobileL} {
        grid-template-columns: repeat(1, 1fr);
    }
`
