
import './App.css';
import './style.css';
import nature from './img/img-1.jpg';
import ReactPlayer from 'react-player';
import video from './video/nature.mp4';

function App() {
  return (
    <div className="App">


      <h1 className="titleRed">Import img with React</h1>
       <img src={nature}></img>
       <img src='./img-2.jpg'></img><br></br>
      
      <h1 className='tB'>Import video from youtube and from gallerie</h1> 
      <div className="videoPlayer">
      <ReactPlayer 
          width='480px' height='240px'
          controls
          url='https://www.youtube.com/watch?v=CULSxI6evTc' 
      />
      <video controls src={video} width='480px' height='240px' poster={nature}></video>
      </div>
      
      
     </div> 
  );
}

export default App;
