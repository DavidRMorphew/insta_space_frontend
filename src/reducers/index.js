import { combineReducers } from 'redux'
import ImagesReducer from './ImagesReducer'
import LoadingReducer from './LoadingReducer'

export const rootReducer = combineReducers({
    images: ImagesReducer,
    loading: LoadingReducer
})