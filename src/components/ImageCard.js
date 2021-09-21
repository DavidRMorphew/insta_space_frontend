import { MediaCard } from '@shopify/polaris'
import { connect } from "react-redux"

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const ImageCard = ({imageUrl, title, dateOfCapture}) => {
    return(
        <div >
            <MediaCard
                title={title}
                description={dateOfCapture}
                portrait={true}
            >
            <img
                alt=""
                width="100%"
                height="100%"
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