import React, { useState } from 'react';
import { BiHide, BiShow } from "react-icons/bi";
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { theme } from "../style/theme.js";
import useCurrentUserContext from '../hooks/useCurrentUserContext.js';

function Login() {
    const { user, setUser, setToken } = useCurrentUserContext()
    const [hide, setHide] = useState(true);

    async function loginUser() {
        try {
            const BASE_URL = process.env.REACT_APP_BASE_API_URL_DEV;
            const fetchOpts = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            };

            const res = await fetch(`${BASE_URL}/auth/login`, fetchOpts);
            if (res.status === 200) {
                toast.success("Login Success !")
            } else {
                toast.error("Bad Request")
            }
        } catch (e) {
            toast.error("Failed to Fetch :/")
        }
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                theme="dark"
            />
            <LoginContainer>
                <SubTitle>Login</SubTitle>
                <LabelInputContainer>
                    <Label htmlFor="login-email">Email :</Label>
                    <Input onChange={(e) => setUser({ ...user, email: e.target.value })} name='login-email' type="email" placeholder='johndoe@email.com' />
                </LabelInputContainer>
                <PasswordContainer>
                    <Label htmlFor="login-password">Password :</Label>
                    <Password onChange={(e) => setUser({ ...user, password: e.target.value })} name='login-password' type={hide ? "password" : "text"} placeholder='********' />
                    {hide ? <BiHide color={theme.colors.blanc} style={{ position: 'absolute', right: 110, top: 21 }} size={20} onClick={() => setHide(false)} /> : <BiShow color={theme.colors.blanc} style={{ position: 'absolute', right: 110, top: 21 }} size={20} onClick={() => setHide(true)} />}
                </PasswordContainer>
                <StyledBtn onClick={loginUser} type='button'>Login</StyledBtn>
            </LoginContainer>
        </>
    )
}

export default Login;

const LoginContainer = styled.div`
    height: 35%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    border: 1px solid ${theme.colors.gris2};
    box-shadow: 0px 4px 4px ${theme.colors.noir};
    padding: 10px;
    border-radius: 50px;
    background-color: ${theme.colors.gris2};
`

const SubTitle = styled.h2`
    margin: 0;
    text-align: center;
    color: ${theme.colors.blanc};
`

const Label = styled.label`
    width: 20%;
    color: ${theme.colors.blanc};
`

const Input = styled.input`
    width: 380px;
    height: 10px;
    border-radius: 35px;
    padding: 5px;
`
const Password = styled.input`
    width: 250px;
    height: 10px;
    border-radius: 35px;
    padding: 5px;
`

const StyledBtn = styled.button`
    height: 35px;
    width: 120px;
    align-self: center;
    border-radius: 40px;
    background-color: ${theme.colors.rouge};
    color: ${theme.colors.blanc};
    border: none;
    box-shadow: 0px 2px 2px ${theme.colors.noir};
`

const LabelInputContainer = styled.div`
    height: 50px;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
`
const PasswordContainer = styled.div`
    height: 50px;
    width: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
`
