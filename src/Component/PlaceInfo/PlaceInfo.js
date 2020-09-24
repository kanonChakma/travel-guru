import React, { useState } from 'react';
import fakeData from '../fakeData/fakeData'
import './PlaceInfo.css'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
const PlaceInfo = () => {
  const{title}=useParams();
const placeData=fakeData.filter(data=>data.title===title);
const{picture}=placeData[0];
const mapStyles = {        
  height: "95vh",
  width: "100%"
};

  let placelat;
  let placelng
  if(title==="Sreemangal"){
    placelat=24.310577;
    placelng=91.725136 ;
  }
  else if(title=== "Sajek valley")
  {
    placelat=23.381993;
    placelng=92.293823;
  }else{
    placelat=22.673522;
    placelng=89.732363;
  }
const defaultCenter = {
   lat: placelat,
   lng: placelng 
}
    return (
          <div className="container">
           <div className="row placeDetails">
            <div className="col-md-7">
              <h3 m={3}>Stay in {title}</h3>
            {picture.map(data=>
              <div className="col-md-12 col-sm-12 d-flex info">
                <div className="col-md-6 info-first">
                  <img src={data.img} alt=""/>
                </div>
                <div className="info-second col-md-6">
                  <h4>{data.title}</h4>
                  <p>{data.bed}</p>
                  <p>{data.facilities}</p>
                </div>
            </div>
            )}
           </div>
          <div className="col-md-5 map">
               <LoadScript
                googleMapsApiKey="AIzaSyDSJtlGQjiE8N9yPaDNYaKh1CE7RFuZStM">
                  <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}>
                  <Marker position={defaultCenter}/>
            </GoogleMap>
     </LoadScript>
                </div>
             </div>
          </div>
    );
};
export default PlaceInfo;

