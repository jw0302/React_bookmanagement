/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from 'react';
import LoginInput from '../../components/UI/Login/LoginInput/LoginInput';
import { FiUser, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from 'react-icons/bs';
import { SiNaver, SiKakao } from 'react-icons/si';
import axios from "axios";
import { refreshState } from "../../atoms/Auth/AuthAtoms";
import { useRecoilState } from "recoil";

const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 30px;
`;

const logo = css`
    margin: 50px 0px;
    font-size: 34px;
    font-weight: 600;
`;

const mainContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 40px 20px;
    width: 400px;
`;

const authForm = css`
    width: 100%;
`;

const inputLabel = css`
    margin-left: 5px;
    font-size: 12px;
    font-weight: 600;
`;

const forgotPassword =css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 45px;
    width: 100%;
    font-size: 12px;
    font-weight: 600;
`;

const loginButton = css`
    margin: 10px 0px;
    border: 1px solid #dbdbdb;
    border-radius: 7px;
    width: 100%;
    height: 50px;
    background-color: white;
    font-weight: 900;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee;
    }
`;

const oauth2Container = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 100%;
`;

const oauth2 = (provider) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    border: 1px solid ${provider === "google" ? "#0075ff" : provider === "naver" ? "#19ce60" : "#ffdc00"};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: ${provider === "kakao" ? "30px" : "20px"};
    cursor: pointer;
    &:hover {
        background-color: ${provider === "google" ? "#0075ff" : provider === "naver" ? "#19ce60" : "#ffdc00"};
    }
`;

const signupMessage = css`
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    color: #777;
`;

const register = css`
    margin-top: 10px;
    font-weight: 600;
`;

const errorMsg = css`
    margin-left: 5px;
    margin-bottom: 20px;
    font-size: 12px;
    color: red;
`;

const Login = () => {

    const [ loginUser, setLoginUser ] = useState({email: "", password: ""});
    const [ errorMessages, setErrorMessages ] = useState({email: "", password: ""});
    const [ refresh, setRefresh ] = useRecoilState(refreshState);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginUser({...loginUser, [name]: value})
    }

    const loginHandleSubmit = async () => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post("http://localhost:8080/auth/login", JSON.stringify(loginUser), option);
            setErrorMessages({email: "", password: ""});
            const accessToken = response.data.grantType + " " + response.data.accessToken;
            localStorage.setItem("accessToken", accessToken);
            setRefresh(false);
            navigate("/");

        } catch(error) {
            setErrorMessages({email: "", password: "", ...error.response.data.errorData});
        }
    }

    return (
        <div css={container}>
            <header>
                <h1 css={logo}>Login</h1>
            </header>
            <main css={mainContainer}>
                <div css={authForm}>
                    <label css={inputLabel}>Email</label>
                    <LoginInput type="email" placeholder="Type your email" onChange={handleChange} name="email">
                        <FiUser />
                    </LoginInput>
                    <div css={errorMsg}>{errorMessages.email}</div>

                    <label css={inputLabel}>Password</label>
                    <LoginInput type="password" placeholder="Type your password" onChange={handleChange} name="password">
                        <FiLock />
                    </LoginInput>
                    <div css={errorMsg}>{errorMessages.password}</div>

                    <div css={forgotPassword}><Link to='/forgot/password'>Forgot Password?</Link></div>
                    <button css={loginButton} onClick={loginHandleSubmit}>LOGIN</button>
                </div>
            </main>

            <div css={signupMessage}>Or Sign Up Using</div>

            <div css={oauth2Container}>
                <div css={oauth2("google")}><BsGoogle /></div>
                <div css={oauth2("naver")}><SiNaver /></div>
                <div css={oauth2("kakao")}><SiKakao /></div>
            </div>

            <div css={signupMessage}>Or Sign Up Using</div>

            <footer>
                <div css={register}><Link to="/register">SIGN UP</Link></div>
            </footer>
        </div>
    );
};

export default Login;