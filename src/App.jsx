import './App.css';
import React from 'react';
import img1 from './img/rd.svg';
import img2 from './img/webby.svg';
import img3 from './img/pmi.svg';
import img4 from './img/wf.svg';
import img5 from './img/adweek.svg';
import img6 from './img/forbes.svg';
import pg2 from './img/pg3.jpg';
import play from './img/play.svg';
import Video from "./img/video.mp4";
import Navbar from './components/Navbar';



function App() {
  return (
<>
    <Navbar/>
    <div className="main">
       



        <div id ="page1">
        <h1>IP VULNERABILTY</h1>
        <h1>TRACKER</h1>
        <p> IP analyzer Lorem iillo  sdf sdf sdf sdf sdfsaepe labore? 
        <br></br>
        INFORMATION ASSETS
        </p>
        <div id="page1-bubble">
          <h4> Information </h4>
          <h4> Data </h4>
          <h4> Vulnerablity </h4>
        </div>


        <div id="moving-div">
        <div id="blur-left"></div>

          <div className="move">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />

          </div>
          <div className="move">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
          <div id="blur-right"></div>
        </div>
        </div>



        <div id ="page2">
          <img src={pg2} alt="" />
        </div>


        <div id="page3">
        <video controls autostart autoPlay src={Video} type="video/mp4"/>
        <div className="card">
      
          </div>
            <div class="page3-center">
                <div className="icon">
                    <img src={play} alt="" />
                </div>
                <h5>Watch Showreel</h5>
            </div>
        </div>

  <div id="page4">
  
  </div>


    </div>




</>


  );
}

export default App;

