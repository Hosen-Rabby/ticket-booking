import { NEWBOOK, DELETEBOOK } from "./actionTypes"

const initialState = [{}]

console.log(typeof(initialState))
const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEWBOOK:
            return [
                ...state,
                action.payload]
        case DELETEBOOK:
            const indexOfObject = state.findIndex(object => {
                console.log(action.payload)
                return object.id === action.payload;
            });
            console.log(indexOfObject)
            state.splice(indexOfObject, 1)
            return [...state]

        default:return state
    }
}

export default bookingReducer
