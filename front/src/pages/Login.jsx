import React, { useState } from 'react'
import { BiHide, BiShow } from "react-icons/bi"

import { theme } from "../style/theme.js"
import Navbar from '../components/Navbar'
import styled from 'styled-components'

function Login() {

    const [hide, setHide] = useState(true)

    return (
        <>
            <Navbar />
            <BigContainer>
                <h2>Log in to save your favorites builds, items and more</h2>
                <div>
                    <div>
                        <div>
                            <label htmlFor="login-email">Email :</label>
                            <input name='login-email' type="email" placeholder='johndoe@email.com' />
                        </div>
                        <div>
                            <label htmlFor="login-email">Password :</label>
                            <input name='login-email' type={hide ? "password" : "text"} placeholder='********' />
                            {hide ? <BiHide size={20} onClick={() => setHide(false)} /> : <BiShow size={20} onClick={() => setHide(true)} />}
                        </div>
                    </div>
                    <div></div>
                </div>
            </BigContainer>
        </>
    )
}

export default Login;

const BigContainer = styled.div`
    height: 740px;
    width: 740px;
    border-radius: 50px;
    background-color: ${theme.colors.gris1};
`
