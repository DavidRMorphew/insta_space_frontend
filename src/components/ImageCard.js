import { MediaCard } from '@shopify/polaris'
import { connect } from "react-redux"
import { useState } from 'react'

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const ImageCard = ({user, imageUrl, title, dateOfCapture, likeCount, commentCount}) => {

    const [heart, setHeart] = useState(EMPTY_HEART)

    const changeHeart = () => {
        heart === EMPTY_HEART ? setHeart(FULL_HEART) : setHeart(EMPTY_HEART)
    } 

    return(
        <div >
            <MediaCard
                title={title}
                description={`${dateOfCapture} | Likes: ${likeCount} | Comments: ${commentCount}`}
                portrait={true}
                primaryAction={{
                    content: heart,
                    onAction: () => { changeHeart() },
                }}
            >
            <img
                alt={title}
                width="60%"
                height="60%"
                style={{
                objectFit: 'cover',
                objectPosition: 'center',
                }}
                src={imageUrl}
            />
            </MediaCard>
        </div>
    )
}

export default connect(({ user }) => ({ user }))(ImageCard)