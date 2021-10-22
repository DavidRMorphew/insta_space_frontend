const baseUrl = "http://localhost:3001/api/v1/"
const baseHerokuUrl = "https://insta-space-api.herokuapp.com/api/v1/"

export const setUser = (user) => ({type: 'SET_USER', payload: user})

export const removeUser = () => ({type: 'REMOVE_USER'})

export const registerUser = (user, history) => {
    
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
        fetch(`${baseUrl}users`, configObj)
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
        fetch(`${baseUrl}login`, configObj)
        .then(resp => resp.json())
        .then(returnedUserData => {
            localStorage.setItem("token", returnedUserData.jwt)
            dispatch(setUser(returnedUserData.user))
            dispatch({type: 'LOADING_COMPLETE'})
            history.push('/home')
        })
    }
}

export const setUserIfAlreadyLoggedIn = (history) => {

    return (dispatch) => {
        const token = localStorage.getItem("token")
        if (token){
          fetch(`${baseUrl}logged_in`, {
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
                history.push('/home')
              }          
          })
          .catch(error => console.log(error))
        }
    }
}

export const logoutUser = () => {
    
    return (dispatch) => {
        const token = localStorage.getItem("token")
        const configObj = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        fetch(`${baseUrl}/logout`, configObj)
        .then(resp => resp.json())
        .then(returnData => {
            console.log(returnData)
            localStorage.removeItem("token")
            dispatch(removeUser())
        })
    }
}