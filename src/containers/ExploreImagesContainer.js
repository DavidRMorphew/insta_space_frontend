import { connect } from "react-redux"
import { useEffect } from 'react'
import { fetchImages } from '../actions/imagesActions'
import { Page } from '@shopify/polaris'
import ImageCard from '../components/ImageCard'
import StackGrid from 'react-stack-grid'

const ExploreImagesContainer = ({images, loading, fetchImages}) => {

    
    const renderImages = () => (images.map(image => (
            <ImageCard 
                key={image.title} 
                title={image.title} 
                imageUrl={image.image_url} 
                dateOfCapture={image.date_of_capture} 
                likeCount={image.like_count}
                commentCount={image.comment_count} 
            />)
        )
    )

    return(
        <>
            { loading ? 
                <h1>Loading</h1>
                :
                <Page> 
                    <StackGrid
                        columnWidth={300}
                    >
                        {renderImages()}
                    </StackGrid>
                </Page>
            }
        </>
    )
}

export default connect(({images, loading}) => ({images, loading}), { fetchImages })(ExploreImagesContainer)