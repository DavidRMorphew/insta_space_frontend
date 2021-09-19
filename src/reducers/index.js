import { combineReducers } from 'redux'
import ImagesReducer from './ImagesReducer'

export const rootReducer = combineReducers({
    images: ImagesReducer
})