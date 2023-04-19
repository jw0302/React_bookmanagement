import React from 'react';

const PromiseStudy = () => {

    // Promise 함수
    const a = new Promise((resolve, reject) => {
        console.log("프로미스 호출");
        if(1 === 1) {
            resolve();
        } else {
            // throw new Error("오류입니다.");          //reject 대신 써도 됨
            reject(new Error("오류입니다."));
        }
    });

    const clickHandler = () => {
        a
        .then(() => {
            console.log("1번 then 호출")
            return new Promise((resolve, reject) => {
                resolve("리턴!!!");
            })
        })
        .catch((error) => {
            console.log(error);
        })
        .then(b);
    }

    const b = (str) => {
        console.log(str);
    }

    return (
        <div>
            <button onClick={clickHandler}>버튼</button>
        </div>
    );
};

export default PromiseStudy;