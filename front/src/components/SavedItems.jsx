import React from 'react'
import styled from "styled-components"

import useCurrentUserContext from '../hooks/useCurrentUserContext.js'
import Navbar from './Navbar'
import NoAccess from './NoAccess'
import ItemBox from './ItemBox'


function SavedItems() {

    const { user, token } = useCurrentUserContext()

    return (
        <Wrapper>
            <Navbar />
            {token ?
                <BigContainer>
                    {user.saved.items ? user.saved.items.map((item, i) => (<ItemBox key={item._id} item={item} index={i} />)) : <h1>No Favs</h1>}
                </BigContainer>
                :
                <NoAccess />
            }
        </Wrapper>
    )
}

export default SavedItems;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`

const BigContainer = styled.div`
    margin: auto;
    padding: 30px;
    height: 80vh;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    overflow-y: auto;
    row-gap: 15px;
`

