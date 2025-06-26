import React, { useEffect, useState } from 'react';
import './playvideo.css';
import { API_KEY, BASE_URL } from '../../data';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';

export default function Playvideo({ videoId }) {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const url = `${BASE_URL}/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setVideo(data.items && data.items[0]);
    };
    if (videoId) fetchVideo();
  }, [videoId]);

  useEffect(() => {
    const fetchComments = async () => {
      const url = `${BASE_URL}/commentThreads?part=snippet&videoId=${videoId}&maxResults=5&key=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setComments(data.items || []);
    };
    if (videoId) fetchComments();
  }, [videoId]);

  if (!video) return <div className='play-video'>Loading...</div>;

  const { snippet, statistics } = video;

  return (
    <div className='play-video'>
      <div className='video-responsive'>
        <iframe
          width='100%'
          height='500px'
          src={`https://www.youtube.com/embed/${videoId}`}
          title={snippet.title}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <h3>{snippet.title}</h3>
      <div className='play-video-info'>
        <p>{statistics.viewCount} views &bull; {new Date(snippet.publishedAt).toLocaleDateString()}</p>
        <div className='play-video-actions'>
          <span><img src={like} alt='' />{statistics.likeCount || 0}</span>
          <span><img src={dislike} alt='' />Dislike</span>
          <span><img src={share} alt='' />Share</span>
          <span><img src={save} alt='' />Save</span>
        </div>
      </div>
      <hr />
      <div className='publisher'>
        <img src={snippet.thumbnails.default.url} alt='' />
        <div>
          <p>{snippet.channelTitle}</p>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
        <p>{snippet.description}</p>
        <hr />
        <h4>{statistics.commentCount || 0} Comments</h4>
        {comments.map((item) => {
          const c = item.snippet.topLevelComment.snippet;
          return (
            <div className='comment' key={item.id}>
              <img src={c.authorProfileImageUrl} alt='' />
              <div>
                <h3>{c.authorDisplayName} <span>{new Date(c.publishedAt).toLocaleDateString()}</span></h3>
                <p>{c.textDisplay}</p>
                <div className='comment-action'>
                  <img src={like} alt='' />
                  <span>{c.likeCount}</span>
                  <img src={dislike} alt='' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
