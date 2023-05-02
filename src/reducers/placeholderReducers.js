const placeActionTypes = {
    LOAD_ALL:'LOAD',
    ADD_ONE:'ADD'
}

const placeActions = {
    loadUsers:(users)=>({type:placeActionTypes.LOAD_ALL, payload:users}),
    loadPosts:(posts)=>({type:placeActionTypes.LOAD_ALL, payload:posts}),
    addUser:(user)=>({type:placeActionTypes.ADD_ONE, payload:user}),
    addPost:(post)=>({type:placeActionTypes.ADD_ONE, payload:post})
}

const placeInitialState = [];


const userReducer = (state=placeInitialState,action) =>{
    switch (action.type) {
        case placeActions.loadUsers:
            return [...action.payload];
        case placeActions.addUser:
            state.push(action.payload)
            return [...state]
        default:
    return state;
    }
}

const postReducer = (state=placeInitialState,action) =>{
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
    placeInitialState,
    postReducer,
    userReducer
}

