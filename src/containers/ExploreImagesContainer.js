import { connect } from "react-redux"
import { MediaCard } from '@shopify/polaris'
import { logoutUser } from '../actions/userActions'
import ImageCard from '../components/ImageCard'

const ExploreImagesContainer = ({images, loading, logoutUser}) => {
    
    const renderImages = () => (images.map(image => <MediaCard key={image.title}><img src={image.image_url}></img></MediaCard>))

    const handleLogout = () => {
        console.log('click')
        logoutUser();
    }

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
            <h1>Explore!</h1>
            { loading ? 
                <h1>Loading</h1>
                : 
                <ul>
                    {renderImages()}
                </ul>
            }
        </div>
    )
}

export default connect(({images, loading}) => ({images, loading}), { logoutUser })(ExploreImagesContainer)