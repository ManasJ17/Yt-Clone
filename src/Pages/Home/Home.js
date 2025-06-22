import React from 'react'
import './Home.css';
import Sidebar from '../../Components/Sidebar/sidebar';
export default function Home({sidebar}) {
  return (
    <div>
     <Sidebar sidebar={sidebar}></Sidebar>
      
    </div>
  )
}
