
const ImagesReducer = (state = [], action) => {
    switch (action.type){
        case "ADD_IMAGES":
            return [...state, action.payload]
        default:
            return state
    }
}

export default ImagesReducer