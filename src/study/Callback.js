import React, { useState } from 'react';


// Callback , promise 학습

const Callback = () => {

    const [ cnt, setCnt ] = useState(0);
    let count1 = 0;

    // callback 함수        / 비동기 안에서 순서대로 작동하도록 하기 위해 사용한다.
    const a = (fx, fx2) => {
        console.log("A함수 실행");

        setCnt(() => fx(fx2));
    }

    const b = (fx2) => {
        console.log("B함수 실행");
        count1 = cnt + 100;
        fx2();
        return count1;
    }

    const c = () => {
        console.log("C함수 호출");
        console.log(count1);
    }

    const clickHandler = () => {
        a(b, c);
    }

    return (
        <div>
           <button onClick={clickHandler}>버튼</button> 
        </div>
    );
};

export default Callback;