import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'


import { theme } from '../style/theme.js'
import useCurrentUserContext from "../hooks/useCurrentUserContext.js"
import LikeBtn from './LikeBtn.jsx'
import ItemBoxDesc from './ItemBoxDesc.jsx'
import ModModal from './ModModal.jsx'

function ItemBox({ item }) {
    const [show, setShow] = useState(false)
    const { token } = useCurrentUserContext()
    const { pathname } = useLocation()

    return (
        <NavLink to={`${pathname}${item._id}`} style={{ margin: 0, textDecoration: "none" }}>
            <BoxContainer>
                {token && <LikeBtn item={item} />}
                <FlipContainer animate={{ rotateY: show ? 180 : 0 }}
                    transition={{ duration: 0.6 }}>
                    {!show ?
                        <ImgContainer transition={{ delay: 0.3 }}>
                            <BoxImg src={item.img} alt={item.name} />
                        </ImgContainer>
                        :
                        <ModModal mod={item.weaponMod} />
                    }
                </FlipContainer>
                <ItemBoxDesc setShow={setShow} item={item} />
            </BoxContainer >
        </NavLink>
    )
}

export default ItemBox;

const FlipContainer = styled(motion.div)`
    margin: 0;
    height: 180px;
    width: 280px;
    display: grid;
    place-items: center;
`

const BoxImg = styled.img`
    height: 50%;
    width: auto;
`

const ImgContainer = styled(motion.div)`
    height: 160px;
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`

const BoxContainer = styled(motion.div)`
    height: 285px;
    width: 285px;
    border-radius: 25px;
    background-color: ${theme.colors.gris1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-top: 5px;
`
