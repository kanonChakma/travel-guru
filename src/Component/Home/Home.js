import React, { useState } from 'react';
import bgimage from '../../Image/Rectangle1.png'
import './Home.css'
import Button from 'react-bootstrap/Button'
import OwlCarousel from 'react-owl-carousel'; 
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import sajek from '../../Image/Sajek.png'

import sundorbon from '../../Image/sundorbon.png'
import Sreemangol from '../../Image/Sreemongol.png'
import fakeData from '../fakeData/fakeData'
import { Link } from 'react-router-dom';
const Home = () => {
    const[count,setCount]=useState(3)
     const newData=fakeData.filter(data=>data.id===count)
     const{title,info}=newData[0];
    const options = {
        items: 3,
        autoWidth:true,
        autoHeight:true,
        autoplay:true,
        slideSpeed: 300,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        margin:8,
        rewind:true,
    };
    return (
       <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgimage})`}} className="header">  
         <div className="container-fluid">
              <div className="home-main d-flex">
                  <div className="home-info">
                     <h1>{title}</h1>
                     <p>{info}</p>
                  <Link to={`/booking/${title}`}>
                     <Button  style={{backgroundColor:'orange'}} variant="warning">Booking <ArrowForwardIcon/> </Button>
                    </Link>
                  </div>
           <div className=" home-slide">    
             <OwlCarousel  {...options} className="owl-theme" >  
                    <div  className="item" onClick={()=>setCount(3)} style={{width:"230px"}}><img  src={sajek}  alt="The Last of us"/><h4>sajek</h4></div>
                    <div  className="item"  onClick={()=>setCount(1)} style={{width:"230px"}}><img  src={Sreemangol} alt="GTA V"/> <h4>Sreemangol</h4></div>
                    <div  className="item"  onClick={()=>setCount(2)} style={{width:"230px"}}><img  src={sundorbon} alt="Mirror Edge"/><h4>sundorbon</h4></div>
                </OwlCarousel>
              </div>
          </div>
        </div>
    </div>
    );
};
export default Home;