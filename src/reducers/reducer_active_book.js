//state argument is not application state
//It is the state this reducer is reponsible for
//default state is null because state of reducer cannot be undefined
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}