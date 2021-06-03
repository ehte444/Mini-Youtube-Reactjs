import React from 'react';
import VideoItem from './VideoItem';


export default function VideoList({videos, onVideoSelect}) {

  const list = videos.map((video) => <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />);
  
  return (
    <div className='ui relaxed divided list'>
      {list}
    </div>
  )
}
