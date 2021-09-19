const LoadingReducer = (state = false, action) => {
    switch (action.type){
        case "LOADING":
            return true
        case "LOADING_COMPLETE":
            return false
        default:
            return state
    }
}

export default LoadingReducer