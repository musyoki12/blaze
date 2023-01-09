import React from 'react'
import ReactPlayer from 'react-player'
import Cards from './Cards'



function Gallery() {
  const src ="https://www.facebook.com/steve.mageto.1/videos/277238304257760/?idorvanity=356134222027911"
  
  return (
    <div>
      <div className='gallery'>
      <ReactPlayer
        url={src}
        controls={true}
        playing={true}
        loop={true}
        muted={true}
        width={500}
        height={500}
      /> 
  </div>
    
  <div>
        <Cards/>
        </div> 
    </div>
  )
}

export default Gallery