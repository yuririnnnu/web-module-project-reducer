export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const CURRENT_TO_MEMORY = "CURRENT_TO_MEMORY";
export const MEMOEY_TO_CURRENT = "MEMOEY_TO_CURRENT";
export const MEMORY_TO_ZERO = "MEMORY_TO_ZERO";

export const addOne = () => {
    console.log("addOne was excuted!")
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const actionCreator = (op) => {
    return ({type:CHANGE_OPERATION, payload:op})
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY})
}

export const currentToMemory = (number) => {
    return ({type: CURRENT_TO_MEMORY})
}

export const memoryToCurrent = (number) => {
    return ({type: MEMOEY_TO_CURRENT})
}

export const memoryToZero = () => {
    return ({type: MEMORY_TO_ZERO})
}