const baseUrl = "http://localhost:3001/api/v1/"
const baseHerokuUrl = "https://insta-space-api.herokuapp.com/api/v1/"

export const addLike = (image, userId) => ({type: 'ADD_LIKE', payload: { image, userId }})

export const saveLike = ( image ) => {
    return (dispatch) => {
   
        const token = localStorage.getItem("token")
        const configObj = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(image)
        }
        fetch(`${baseUrl}likes`, configObj)
        .then(resp => resp.json())
        .then(returnData => {
            console.log(returnData)
        })
     }
}