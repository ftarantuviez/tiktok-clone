import React, {useEffect, useState} from 'react';
import './App.css';
import Video from './Video'
import db from './firebase'

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    db
    .collection('videos')
    .onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => (doc.data())))
    })

  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        <img src="https://lh3.googleusercontent.com/proxy/5T9Pud4-vsMY0TNDUyVjjTFF_iYBgB4o_Co5ILq3bznDnTysNtvZwpG5lCvDY2igOR7TrWuKM6fPXvOtsOCtUr3SoSGTGYjvR_6GssaKU3PK1CRO_aE" alt="" className="app__videos-logo"/>
          {
            videos.map(video => (
              <Video 
                key={video}
                url={video.url}
                channel={video.channel}
                description={video.description}
                song={video.song}
                likes={video.likes}
                messages={video.messages}
                shares={video.shares}
              />
              
            ))
          }
      </div>
    </div>
  );
}

export default App;
