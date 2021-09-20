const base_url = "http://localhost:3001/api/v1/images"

export const addImages = (images) => ({type: 'ADD_IMAGES', payload: images})

export const fetchImages = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        fetch(base_url)
        .then(resp => resp.json())
        .then(images => {
            dispatch(addImages(images))
            dispatch({type: 'LOADING_COMPLETE'})
        })
    }
}