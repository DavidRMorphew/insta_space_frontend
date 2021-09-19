const base_url = "http://localhost:3001/images"

export const fetchImages = () => {
    return (dispatch) => {
        fetch(base_url)
        .then(resp => resp.json())
        .then(images => {
            console.log(images)
        })
    }
}