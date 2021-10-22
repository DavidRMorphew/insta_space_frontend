const baseUrl = "http://localhost:3001/api/v1/"
const baseHerokuUrl = "https://insta-space-api.herokuapp.com/api/v1/"

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
        fetch(`${baseUrl}images`, configObj)
        .then(resp => resp.json())
        .then(images => {
            dispatch(addImages(images))
            setTimeout(() => {dispatch({type: 'LOADING_COMPLETE'})}, 4000);
        })
    }
}