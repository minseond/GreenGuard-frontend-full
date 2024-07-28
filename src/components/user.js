import { atom } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: null, // 사용자 상태의 기본값 설정
});
