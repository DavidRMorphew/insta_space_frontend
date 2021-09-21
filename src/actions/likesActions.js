export const addLike = (image, userId) => ({type: 'ADD_LIKE', payload: { image, userId }})

export const saveLike = ( image ) => {
    return (dispatch) => {
        const url = "http://localhost:3001/api/v1/likes"
        const token = localStorage.getItem("token")
        const configObj = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(image)
        }
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(returnData => {
            console.log(returnData)
        })
     }
}