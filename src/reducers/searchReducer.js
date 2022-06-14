const initialState = {
    searched: [],
}

const searchReducers = (state=initialState, action ) => {
    switch (action.type) {
        case 'SEARCH_GAMES':
            return {...state}
            
    
        default:
            return {...state}
    }
}

export default searchReducers;