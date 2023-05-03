
const placeActionTypes = {
    LOAD_ALL:'LOAD',
    ADD_ONE:'ADD'
}

const placeActions = {
    // loadUsers:(users)=>({type:placeActionTypes.LOAD_ALL, payload:users}),
    getAll:(users)=>({type:placeActionTypes.LOAD_ALL, payload:users}),
    loadPosts:(posts)=>({type:placeActionTypes.LOAD_ALL, payload:posts}),
    addUser:(user)=>({type:placeActionTypes.ADD_ONE, payload:{id:new Date().getMilliseconds(),name:'vasya shevchenko'}}),
    addPost:(post)=>({type:placeActionTypes.ADD_ONE, payload: {id:new Date().getMilliseconds(), title:'post'}})
}


const userInitialState = [];



const userReducer = (state=userInitialState,action) =>{
    switch (action.type) {
        case placeActionTypes.LOAD_ALL:
          return  state.users = action.payload;
        case placeActionTypes.ADD_ONE:
            state.push(action.payload)
           return [...state];
        default:
    return state;
    }
}

const postInitialState =[];
const postReducer = (state=postInitialState,action) =>{
    switch (action.type) {
        case placeActionTypes.LOAD_ALL:
            return state.posts = action.payload;
        case placeActionTypes.ADD_ONE:
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

