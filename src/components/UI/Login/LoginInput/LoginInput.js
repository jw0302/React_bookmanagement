/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import Input from '../../atoms/Input/Input';

const loginInput = css`
    position: relative;
    margin-bottom: 20px;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 5px 0px 40px;
    width: 100%;
`;

const icon = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
`;

const LoginInput = ({ type, placeholder, onChange, name, children }) => {
    return (
        <div css={loginInput}>
            <div css={icon}>{children}</div>
            <Input 
            type={type} 
            placeholder={placeholder} 
            onChange={onChange}
            name={name}/>
        </div>
    );
};

export default LoginInput;