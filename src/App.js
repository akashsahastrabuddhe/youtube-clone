import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import youtube from './apis/youtubeapi'
import './App.css'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
const App = () => {

  const [videos,setVideos]=useState([]);
  const [selectedVideo,setSelectedVideo]=useState('');

  const onSelectVideo=(video)=>{
    setSelectedVideo(video)
  }

  const onTermSubmit=async(term)=>{
    const resp=await youtube.get('/search',{
      params:{
        q:term
      }
    })
    console.log(resp.data)
    setVideos(resp.data.items)
  }

  return (
    <>
      {/* div for search engine */}
      <div className='container'>
        <div className='row yt'>
          <h1 className='text-center col-md-12'><i className="fa-brands fa-square-youtube"></i>&nbsp;Video Search Engine</h1>
        </div>
        <div className='row my-2'>
          <div className='col-md-8'>
            <SearchBar onFormSubmit={onTermSubmit}/>
            <VideoDetails video={selectedVideo}/> 
          </div>
          <div className='col-md-4'>
            <VideoList videos={videos} onSelectVideo={onSelectVideo}/>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
