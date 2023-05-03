import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[]
};

const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload},
        addUser: (state, action) => {
            const user = action.payload.user;
            state.users.push(user)
        }


        }

});


const {reducer:userReducer,actions} = slice;

const userActions = {
    ...actions
}

export {
    userReducer,
    userActions
}