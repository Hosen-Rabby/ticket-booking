import { NEWBOOK, DELETEBOOK } from "./actionTypes";

export const newBook = (value) => {
    return {
        type: NEWBOOK,
        payload: value,
    };
};

// console.log(payload);

export const deleteBook = (value) => {
    return {
        type: DELETEBOOK,
        payload: value,
    };
};
