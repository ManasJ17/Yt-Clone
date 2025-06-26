// import React, {useEffect} from "react";
// import "./feed.css";
// import thumbnail1 from "../../assets/thumbnail1.png";
// import thumbnail2 from "../../assets/thumbnail2.png";
// import thumbnail3 from "../../assets/thumbnail3.png";
// import thumbnail4 from "../../assets/thumbnail4.png";
// import thumbnail5 from "../../assets/thumbnail5.png";
// import thumbnail6 from "../../assets/thumbnail6.png";
// import thumbnail7 from "../../assets/thumbnail7.png";
// import thumbnail8 from "../../assets/thumbnail8.png";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function feed({category}) {

//   const fetchData = async () =>{
//     const videoList_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=web+development&type=video&key=YOUR_API_KEY";
//   }

//   return (
//     <div className="feed">
//       <Link to={'video/20/4521'} className="card">
//         <img src={thumbnail1} alt="" />
//         <h2>Best Channel Just Subscribe this </h2>
//         <h3>Just Code</h3>
//         <p>15M views &bull , 1 min ago</p>
//       </Link>
//       <div className="card">
//         <img src={thumbnail2} alt="" />
//         <h2>Best Channel Just Subscribe this </h2>
//         <h3>Just Code</h3>
//         <p>15M views &bull , 1 min ago</p>
//       </div>
//       <div className="card">
//         <img src={thumbnail3} alt="" />
//         <h2>Best Channel Just Subscribe this </h2>
//         <h3>Just Code</h3>
//         <p>15M views &bull , 1 min ago</p>
//       </div>
//       <div className="card">
//         <img src={thumbnail4} alt="" />
//         <h2>Best Channel Just Subscribe this </h2>
//         <h3>Just Code</h3>
//         <p>15M views &bull , 1 min ago</p>
//       </div>
//       <div className="card">
//         <img src={thumbnail5} alt="" />
//         <h2>Best Channel Just Subscribe this </h2>
//         <h3>Just Code</h3>
//         <p>15M views &bull , 1 min ago</p>
//       </div>
//       <div className="card">
//         <img src={thumbnail6} alt="" />
//         <h2>Best Channel Just Subscribe this </h2>
//         <h3>Just Code</h3>
//         <p>15M views &bull , 1 min ago</p>
//       </div>
//       <div className="card">
//         <img src={thumbnail7} alt="" />
//         <h2>Best Channel Just Subscribe this </h2>
//         <h3>Just Code</h3>
//         <p>15M views &bull , 1 min ago</p>
//       </div>
//       <div className="card">
//         <img src={thumbnail8} alt="" />
//         <h2>Best Channel Just Subscribe this </h2>
//         <h3>Just Code</h3>
//         <p>15M views &bull , 1 min ago</p>
//       </div>
      
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../../data";
import "./feed.css";
import { Link } from "react-router-dom";

export default function Feed({ category, sidebar }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      let url = "";
      if (category === 0) {
        // Trending/home feed
        url = `${BASE_URL}/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
      } else {
        // Category feed
        url = `${BASE_URL}/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setVideos(data.items || []);
    };
    fetchVideos();
  }, [category]);

  // Add sidebar prop to feed class for CSS targeting
  return (
    <div className={`feed ${sidebar ? 'sidebar-open' : 'sidebar-closed'}`}>
      {videos.map((video) => (
        <Link to={`/video/${category}/${video.id}`} className="card" key={video.id}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <h2>{video.snippet.title}</h2>
          <h3>{video.snippet.channelTitle}</h3>
        </Link>
      ))}
    </div>
  );
}