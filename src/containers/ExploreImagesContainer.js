import { connect } from "react-redux"
import { useEffect, useRef, useState } from 'react'
import { fetchImages } from '../actions/imagesActions'
import { Page } from '@shopify/polaris'
import ImageCard from '../components/ImageCard'
import StackGrid from 'react-stack-grid'
import InfiniteScroll from 'react-infinite-scroller';

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

    const [hasMoreImages, setHasMoreImages] = useState(true);

    const getMoreImages = (page) => {
        newPromise
        .then(resp => {
            setHasMoreImages(true)
        })
    }

    const newPromise = new Promise((resolve, reject) => {
        fetchImages();
    })
    
    useEffect(() => {
        fetchImages()
    }, [])


    return(
        <>

                {/* <Page> */}
                <InfiniteScroll
                    pageStart={0}
                    loadMore={getMoreImages}
                    hasMore={hasMoreImages}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                    useWindow={false}
                > 
                    <StackGrid
                        columnWidth={300}
                    >
                        {renderImages()}
                    </StackGrid>
                </InfiniteScroll>
                {/* </Page> */}
        </>
    )
}

export default connect(({images}) => ({images}), { fetchImages })(ExploreImagesContainer)