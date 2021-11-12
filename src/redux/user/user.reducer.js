const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            console.log('ACTION',action)
            return{
                ...state,
                currentUser:action.paylod
            }
        default:
            return state;
    }
}

export default userReducer;