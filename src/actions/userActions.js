export const setUser = (user) => ({type: 'SET_USER', payload: user})

export const removeUser = () => ({type: 'REMOVE_USER'})


export const loginUser = (user, history) => {
    const url = "http://localhost:3001/api/v1/login"
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(user)
        }
        dispatch({type: 'LOADING'})
        fetch(url, configObj)
        .then(resp => resp.json())
        .then(returnedUserData => {
            localStorage.setItem("token", returnedUserData.jwt)
            dispatch(setUser(returnedUserData))
            dispatch({type: 'LOADING_COMPLETE'})
            history.push('/explore')
        })
    }
}

export const logoutUser = () => {
    const url = "http://localhost:3001/api/v1/logout"
    return (dispatch) => {
        const token = localStorage.getItem("token")
        console.log(token)
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