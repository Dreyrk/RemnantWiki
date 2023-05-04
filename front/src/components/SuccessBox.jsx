import React from 'react'
import styled from 'styled-components';
import { theme } from '../style/theme';

function SuccessBox() {
    return (
        <BoxContainer>
            success
        </BoxContainer>
    )
}

export default SuccessBox;

const BoxContainer = styled.div`
    height: 200px;
    width: 300px;
    border: 2px solid;
    color: ${theme.colors.blanc};
`
