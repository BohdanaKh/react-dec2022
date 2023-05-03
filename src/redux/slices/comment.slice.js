import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[],
    comments: [],
    cars: []
};

const slice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        setComments: (state, action) => {
            state.comments = action.payload},
        addComment: (state, action) => {
                const comment = action.payload.comment;
                state.comments.push(comment)
            }
        }
});


const {reducer:commentReducer,actions} = slice;


const commentActions = {
    ...actions
}

export {
    commentReducer,
    commentActions
}