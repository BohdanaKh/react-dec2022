
const placeActionTypes = {
    LOAD_ALL:'LOAD',
    ADD_ONE:'ADD'
}

const placeActions = {
    // loadUsers:(users)=>({type:placeActionTypes.LOAD_ALL, payload:users}),
    getAll:(users)=>({type:placeActionTypes.LOAD_ALL, payload:users}),
    loadPosts:(posts)=>({type:placeActionTypes.LOAD_ALL, payload:posts}),
    addUser:(user)=>({type:placeActionTypes.ADD_ONE, payload:user}),
    addPost:(post)=>({type:placeActionTypes.ADD_ONE, payload:post})
}


const userInitialState = [];



const userReducer = (state=userInitialState,action) =>{
    switch (action.type) {
        case placeActions.getAll():
        // case placeActionTypes.LOAD_ALL:
            return [...state, action.payload];
        case placeActions.addUser:
            state.push(action.payload)
            return [...state]
        default:
    return state;
    }
}

const postInitialState =[];
const postReducer = (state=postInitialState,action) =>{
    switch (action.type) {
        case placeActions.loadPosts:
            return [...action.payload];
        case placeActions.addPost:
            state.push(action.payload)
            return [...state]
        default:
    return state;
    }
}


export {
    placeActions,
   userInitialState,
    postInitialState,
    postReducer,
    userReducer,
    placeActionTypes
}

