import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import { theme } from '../style/theme.js'


function LikeBtn({ item }) {
    const [liked, setLiked] = useState(false)

    const like = (item) => {
        setLiked(false)
    }

    const unlike = (item) => {
        setLiked(true)
    }

    return (
        liked ?
            <LikeContainer type='button' onClick={like}>
                < AiFillHeart size={35} color={theme.colors.rouge} />
            </LikeContainer >
            :
            <LikeContainer onClick={unlike} type='button'>
                <AiOutlineHeart size={35} />
            </LikeContainer>

    )
}

export default LikeBtn;

const LikeContainer = styled.button`
    border: none;
    background: none;
    place-self: end;
`
