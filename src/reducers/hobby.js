
const initialState = {
    list: [],
    activeId: null
}

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            const newHobby = [...state.list]
            newHobby.push(action.payload)
            return {
                ...state,
                list: newHobby
            };
        case 'SET_ACTIVE_HOBBY':
            const newActiveId = action.payload.id

            return {
                ...state,
                activeId: newActiveId
            };
        default:
            return state;
    }
}

export default hobbyReducer