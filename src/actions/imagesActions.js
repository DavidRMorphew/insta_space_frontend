const base_url = "http://localhost:3001/api/v1/images"

export const addImages = (images) => ({type: 'ADD_IMAGES', payload: images})

export const fetchImages = () => {
    return (dispatch) => {
        const token = localStorage.getItem("token")
        const configObj = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        dispatch({type: 'LOADING'})
        fetch(base_url, configObj)
        .then(resp => resp.json())
        .then(images => {
            dispatch(addImages(images))
            setTimeout(() => {dispatch({type: 'LOADING_COMPLETE'})}, 4000);
        })
    }
}