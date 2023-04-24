/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';

const list = css`
    display: flex;
    align-items: center;
    border-radius: 7px;
    width: 100%;
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
`;

const listIcon = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
`;

const listTitle = css`
    display: flex;
    align-items: center;
    font-weight: 600;
`;

const ListButton = ({children, title, onClick }) => {
    return (
        <div css={list} onClick={onClick}>
            <div css={listIcon}>{children}</div>
            <div css={listTitle}>{title}</div>
        </div>
    );
};

export default ListButton;