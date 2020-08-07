import React, {useState} from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'

function VideoSidebar({ likes, shares, messages}) {
    const [liked, setLiked] = useState(false)

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {
                    liked
                    ? (<FavoriteIcon fontSize="large"  onClick={() => setLiked(false)}/>)
                    : (<FavoriteBorderIcon fontSize="large"  onClick={() => setLiked(true)} />)
                }
                <p>{liked ? Number(likes) + 1 : Number(likes)}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{Number(messages)}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{Number(shares)}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
