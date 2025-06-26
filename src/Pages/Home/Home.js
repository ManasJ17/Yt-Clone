import React , {useState} from 'react'
import './Home.css';
import Sidebar from '../../Components/Sidebar/sidebar';
import Feed from "../../Components/Feed/feed";
export default function Home({sidebar}) {

const[category , setCategory] = useState(0);

  return (
    <div>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} ></Sidebar>
    <div className={`container ${sidebar?"":'large-container'}`}>
      <Feed category={category} sidebar={sidebar}></Feed>
    </div>
    </div>
  )
}
