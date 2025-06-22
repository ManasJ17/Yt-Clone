import { useState } from 'react';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Videos/Video';
function App() {
  const[sidebar , setSidebar] = useState(true);
  return (
    // use of the useState to Show the side bar or not 
    <>
    <Navbar setSidebar={setSidebar}></Navbar>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home sidebar={sidebar}/>}></Route>
        <Route exact path='/video/:categoryId/:videoId' element={<Video/>}></Route>
      </Routes>
    </Router>
    </>
  );
}
export default App;
