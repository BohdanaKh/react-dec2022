

const petActionTypes = {
    ADD_CAT:'ADD_CAT',
    ADD_DOG:'ADD_DOG',
    DELETE_CAT:'DELETE_CAT',
    DELETE_DOG:'DELETE_DOG'
}

const petActions = {
    addCat:(cat) => ({type:petActionTypes.ADD_CAT,payload:cat}),
    addDog:(dog) => ({type:petActionTypes.ADD_DOG,payload:dog}),
    deleteCat:(id) => ({type:petActionTypes.DELETE_CAT,payload:id}),
    deleteDog:(id) => ({type:petActionTypes.DELETE_DOG,payload:id})
}


const petInitialState = {
    cats:[],
    dogs: []
}

const petReducer = (state, action) => {
    switch (action.type) {
        case petActionTypes.ADD_CAT:
        const cat = action.payload
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1
         cat.id = catId
            return {...state, cats:[...state.cats, cat]};
        case petActionTypes.ADD_DOG:
            const dog = action.payload
            const dogId = state.dogs.slice(-1)[0]?.id+1||1
          dog.id = dogId
            return {...state, dogs:[...state.dogs, dog]};
        case petActionTypes.DELETE_CAT:
            const idForDelCat = action.payload
            const catIndex = state.cats.findIndex(value => value.id===idForDelCat)
            state.cats.splice(catIndex,1)
            return {...state};
        case petActionTypes.DELETE_DOG:
            const idForDelDog = action.payload
            const dogIndex = state.dogs.findIndex(value => value.id===idForDelDog)
            state.dogs.splice(dogIndex,1)
            return {...state};
        default:
            return state;

    }
}

export {
    petActions,
    petInitialState,
    petReducer
}