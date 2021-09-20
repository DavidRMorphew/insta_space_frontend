export const setUser = (user) => ({type: 'SET_USER', payload: user})

export const removeUser = () => ({type: 'REMOVE_USER'})

const url = "http://localhost:3001/api/v1/logout"

export const logoutUser = (dispatch) => {
    return (dispatch) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(returnData => {
            console.log(returnData)
            localStorage.removeItem("token")
            dispatch(removeUser())
        })
    }
}