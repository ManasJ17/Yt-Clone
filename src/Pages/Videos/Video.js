import React from 'react'
import './Video.css';
import { useParams } from 'react-router-dom';
import Playvideo from '../../Components/PlayVideo/playvideo';
import Recomended from '../../Components/Recomended/Recomended';
export default function Video() {
  const { videoId, categoryId } = useParams();
  return (
    <div className='play-container'>
      <Playvideo videoId={videoId} />
      <Recomended videoId={videoId} categoryId={categoryId} />
    </div>
  )
}
