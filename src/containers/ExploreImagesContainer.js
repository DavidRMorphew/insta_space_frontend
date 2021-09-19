import { connect } from "react-redux"
import { Card } from '@shopify/polaris'

const ExploreImagesContainer = ({images, loading}) => {
    
    const renderImages = () => (images.map(image => <Card key={image.title}><img src={image.image_url}></img></Card>))

    return(
        <div>
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

export default connect(({images, loading}) => ({images, loading}))(ExploreImagesContainer)