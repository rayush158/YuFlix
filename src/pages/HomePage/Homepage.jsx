import React from 'react'
import { VideoCard } from '../../component'
const Homepage = () => {
  return (
    <div className='flex-[0.8] flex  flex-wrap text-white p-4'>
  <VideoCard 
  image="https://i.ytimg.com/vi/ARTK33xBOUI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhbMUjtakdstVtADh3pEp3hTs68g"
   title="Become a web developer"
   channel="hitesh Choudhary"
   channelImage="https://source.unsplash.com/100x100/?portrait"
   view="2.3M view"
   timestamp="3 days ago"
  />
  <VideoCard 
   image="https://i.ytimg.com/vi/ARTK33xBOUI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhbMUjtakdstVtADh3pEp3hTs68g"
   title="Become a web developer"
   channel="hitesh Choudhary"
   channelImage="https://source.unsplash.com/100x100/?portrait"
   view="2.3M view"
   timestamp="3 days ago"/>
  <VideoCard />
  <VideoCard />
  <VideoCard />
  <VideoCard />
    </div>
  )
}

export default Homepage