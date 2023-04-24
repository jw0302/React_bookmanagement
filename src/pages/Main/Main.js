/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import BookCard from '../../components/UI/BookCard/BookCard';

const mainContainer = css`
    padding: 10px;
`;

const header = css`
    display: flex;
    justify-content: space-between;
    height: 100px;
`;

const main = css`
    display: flex;
    flex-wrap: wrap;
    height: 750px;
    overflow-y: auto;
`;

const Main = () => {

    useEffect(() => {
        
    }, []);
    return (
        <div css={mainContainer}>
            <Sidebar></Sidebar>
            <header css={header}>
                <div>도서검색</div>
                <div>
                    <input type="search" />
                </div>
            </header>
            <main css={main}>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
            </main>
        </div>
    );
};

export default Main;

// Main 페이지에서는 도서 조회 가능하도록 만든다