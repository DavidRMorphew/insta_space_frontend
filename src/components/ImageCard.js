import { MediaCard } from '@shopify/polaris'
import { connect } from "react-redux"

const ImageCard = ({image}) => {
    return(
        <div className="e-card e-card-horizontal">
            <MediaCard>

            </MediaCard>
        </div>
    )
}

export default connect()(ImageCard)