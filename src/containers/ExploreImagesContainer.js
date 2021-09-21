import { connect } from "react-redux"
import { MediaCard } from '@shopify/polaris'
import { logoutUser } from '../actions/userActions'
import ImageCard from '../components/ImageCard'

const ExploreImagesContainer = ({images, loading, logoutUser}) => {
    
    const renderImages = () => (images.map(image => (
            <ImageCard 
                key={image.title} 
                title={image.title} 
                imageUrl={image.image_url} 
                dateOfCapture={image.date_of_capture} 
                likeCount={image.like_count} 
            />)
        )
    )

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