import React, {useRef, useState} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({url, channel, description, song, likes, messages, shares}) {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    

    const onVideoPress = () => {
        if(playing) videoRef.current.pause()
        else videoRef.current.play()
            
        setPlaying(!playing)
    }

    return (
        <div className="video">
            <video 
                ref={videoRef}
                className="video__player" 
                loop
                onClick={onVideoPress}
                src={url}
            ></video>

        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video
