import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import { theme } from '../style/theme.js'
import useCurrentUserContext from '../hooks/useCurrentUserContext.js';
import updateUser from '../helpers/updateUser.js';


function LikeBtn({ item }) {
    const [liked, setLiked] = useState(false);

    const { user, setUser, token } = useCurrentUserContext()

    const like = async (e) => {
        e.preventDefault();
        setLiked(true)
        const newUser = {
            ...user,
            saved: {
                ...user.saved,
                items: [...user.saved.items, item]
            }
        };
        setUser(newUser);
        await updateUser(newUser, token);
    }

    const unlike = async (e) => {
        e.preventDefault();
        setLiked(false)
        const newUser = {
            ...user,
            saved: {
                ...user.saved,
                items: user.saved.items.filter(savedItem => savedItem._id !== item._id)
            }
        };
        setUser(newUser);
        await updateUser(newUser, token);
    }


    return (
        liked || user.saved.items.some((el) => el._id === item._id) ?
            <LikeContainer type='button' onClick={(e) => unlike(e)}>
                < AiFillHeart size={35} color={theme.colors.rouge} />
            </LikeContainer >
            :
            <LikeContainer onClick={(e) => like(e)} type='button'>
                <AiOutlineHeart size={35} />
            </LikeContainer>

    )
}

export default LikeBtn;

const LikeContainer = styled.button`
    border: none;
    background: none;
    place-self: end;
    position: absolute;
    top: 2.5;
    left: 5;
    z-index: 3;
`
