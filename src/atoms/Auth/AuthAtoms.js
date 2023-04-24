import { atom } from 'recoil';

export const refreshState = atom({
    key: "refreshState",
    default: true           // 초기 default 값을 true로 잡아둬야 AuthRouteReactQuery에서 enabled: refresh 처음 작동이 true로 전환이 가능해짐
})

export const authenticatedState = atom({
    key: "authenticatedState",
    default: false
});