import { connect } from "react-redux"
import { useEffect, useRef, useState } from 'react'
import { fetchImages } from '../actions/imagesActions'
import { Page, Button } from '@shopify/polaris'
import ImageCard from '../components/ImageCard'
import StackGrid from 'react-stack-grid'

const ExploreImagesContainer = ({ images, fetchImages }) => {
      
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
            <Page>
                <StackGrid columnWidth={300} >
                    {renderImages()}
                </StackGrid>
            </Page>
            <Button primary={true} size="Large" removeUnderline={true} onClick={() => fetchImages()}>Load More</Button>
            <br></br>
            <br></br>
        </>
    )
}

export default connect(({images}) => ({images}), { fetchImages })(ExploreImagesContainer)