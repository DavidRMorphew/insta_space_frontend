import { combineReducers } from 'redux'
import ImagesReducer from './ImagesReducer'
import LoadingReducer from './LoadingReducer'
import UserReducer from './UserReducer'
import LikesReducer from './LikesReducer'

export const rootReducer = combineReducers({
    images: ImagesReducer,
    loading: LoadingReducer,
    user: UserReducer,
    likes: LikesReducer
})