
export const setUser = (user) => ({type: 'SET_USER', payload: user})

export const removeUser = () => ({type: 'REMOVE_USER'})

export const registerUser = (user, history) => {
    const url = "http://localhost:3001/api/v1/users"
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
            localStorage.setItem("token", returnedUserData.jwt);
            dispatch(setUser(returnedUserData.user));
            dispatch({type: 'LOADING_COMPLETE'})
            history.push('/home')
        })
    }
}

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
            dispatch(setUser(returnedUserData.user))
            dispatch({type: 'LOADING_COMPLETE'})
            history.push('/home')
        })
    }
}

export const setUserIfAlreadyLoggedIn = () => {
    const url = "http://localhost:3001/api/v1/logged_in"
    return (dispatch) => {
        const token = localStorage.getItem("token")
        if (token){
          fetch(url, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(resp => {
            if (!resp.ok){
              throw Error(resp.statusText)
            } else {
              return resp.json();
            }
          })
          .then(returnUserData => {
            if (!returnUserData.error){
                dispatch(setUser(returnUserData))
              }          
          })
          .catch(error => console.log(error))
        }
    }
}

export const logoutUser = () => {
    const url = "http://localhost:3001/api/v1/logout"
    return (dispatch) => {
        const token = localStorage.getItem("token")
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