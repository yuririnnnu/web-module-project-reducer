import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, CURRENT_TO_MEMORY, MEMOEY_TO_CURRENT, MEMORY_TO_ZERO } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            console.log("ADD_ONE was excuted!")
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        
        case(CLEAR_DISPLAY) :
            return initialState;
        
        case(CURRENT_TO_MEMORY):
            return ({
                ...state,
                memory: state.total
            })
        
        case (MEMOEY_TO_CURRENT):
            return({
                ...state,
                total: state.memory
            })
        
        case (MEMORY_TO_ZERO):
            return ({
                ...state,
                memory: 0
            })
        default:
            return state;
    }
}

export default reducer;