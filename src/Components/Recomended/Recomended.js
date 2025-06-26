
import React, { useEffect, useState } from 'react';
import './Recomended.css';
import { API_KEY, BASE_URL } from '../../data';
import { Link, useParams } from 'react-router-dom';

export default function Recomended({ videoId, categoryId }) {
  const [videos, setVideos] = useState([]);
  const { categoryId: urlCategoryId } = useParams();

  useEffect(() => {
    // Always fetch all videos for the current category (or trending if none)
    let url = '';
    if (urlCategoryId && urlCategoryId !== 'undefined' && urlCategoryId !== 'null' && urlCategoryId !== '' && urlCategoryId !== '0') {
      url = `${BASE_URL}/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${urlCategoryId}&key=${API_KEY}`;
    } else {
      url = `${BASE_URL}/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
    }
    const fetchAll = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setVideos(data.items || []);
      } catch (e) {
        setVideos([]);
      }
    };
    fetchAll();
  }, [urlCategoryId]);

  return (
    <div className='recomended'>
      {videos.map((video) => {
        const vid = video.id.videoId || video.id;
        const thumb = video.snippet?.thumbnails?.medium?.url;
        return (
          <Link
            to={`/video/${urlCategoryId || 0}/${vid}`}
            className='side-video-list'
            key={vid}
          >
            <img src={thumb} alt={video.snippet.title} />
            <div className='vid-info'>
              <h4>{video.snippet.title}</h4>
              <p>{video.snippet.channelTitle}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
