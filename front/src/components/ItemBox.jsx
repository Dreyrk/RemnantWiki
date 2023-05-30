import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'


import { theme } from '../style/theme.js'
import useCurrentUserContext from "../hooks/useCurrentUserContext.js"
import LikeBtn from './LikeBtn.jsx'
import ItemBoxDesc from './ItemBoxDesc.jsx'
import ModModal from './ModModal.jsx'

const variants = {
    hidden: { x: -100, opacity: 0 },
    show: {
        x: 0,
        opacity: 1
    }
}

function ItemBox({ item, build, addItem, index, trait }) {
    const [show, setShow] = useState(false)
    const { token } = useCurrentUserContext()
    const { pathname } = useLocation()

    if (build) {
        return (
            <SelectBtn
                variants={{
                    hidden: { y: -100, opacity: 0 },
                    show: {
                        y: 0,
                        opacity: 1
                    }
                }}
                initial="hidden"
                animate="show"
                transition={{
                    delay: index * 0.2,
                }}
                type='button'
                onClick={() => addItem(item)}
            >
                <BoxContainer>
                    <FlipContainer
                        animate={{ rotateY: show ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {!show ?
                            <ImgContainer transition={{ delay: 0.3 }}>
                                <BoxImg height={pathname.includes("mods") ? 100 : 50} src={item.img} alt={item.name} />
                            </ImgContainer>
                            :
                            <ModModal mod={item.weaponMod} />
                        }
                    </FlipContainer>
                    <ItemBoxDesc setShow={setShow} item={item} />
                </BoxContainer >
            </SelectBtn>
        )
    } else if (!trait) {
        return (
            <NavLinkContainer
                variants={variants}
                initial="hidden"
                animate="show"
                transition={{
                    delay: index * 0.2,
                }}
                to={`/stuff/${item.section}/${item._id}`}>
                <BoxContainer>
                    {token && <LikeBtn item={item} />}
                    <FlipContainer
                        animate={{ rotateY: show ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {!show ?
                            <ImgContainer transition={{ delay: 0.3 }}>
                                <BoxImg height={pathname.includes("mods") ? 100 : 50} src={item.img} alt={item.name} />
                            </ImgContainer>
                            :
                            <ModModal mod={item.weaponMod} />
                        }
                    </FlipContainer>
                    <ItemBoxDesc setShow={setShow} item={item} />
                </BoxContainer >
            </NavLinkContainer>
        )
    } else {
        <SelectBtn
            variants={variants}
            initial="hidden"
            animate="show"
            transition={{
                delay: index * 0.2,
            }}
            type='button'
        >
            <BoxContainer>
                <FlipContainer
                    animate={{ rotateY: show ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <ImgContainer transition={{ delay: 0.3 }}>
                        <BoxImg height={100} src={item.img} alt={item.name} />
                    </ImgContainer>
                </FlipContainer>
                <ItemBoxDesc setShow={setShow} item={item} />
            </BoxContainer >
        </SelectBtn>
    }
}

export default ItemBox;

const NavLinkContainer = styled(motion(NavLink))`
    margin: 0;
    position: relative;
    text-decoration: none;
`

const SelectBtn = styled(motion.div)`
    margin: 0;
`

const FlipContainer = styled(motion.div)`
    margin: 0;
    height: 180px;
    width: 280px;
    display: grid;
    place-items: center;
`

const BoxImg = styled.img`
    height: ${(props) => props.height}%;
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
