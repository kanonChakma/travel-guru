import React, { useState } from 'react';
import fakeData from '../fakeData/fakeData'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useParams } from 'react-router-dom';
import bgimage from '../../Image/Rectangle1.png'
import './Booking.css'
const Booking = () => {
    const{title}=useParams();
    const newData=fakeData.filter(data=>data.title===title);
    const{info}=newData[0];
    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(0),
          marginRight: theme.spacing(1),
          width: 200,
          border:'none'
        },
      }));
      const classes = useStyles();
    return (
        <div className="container-fluid header" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgimage})`}}>
            <div className=" place-main container-fluid d-flex">
                <div className=" col-md-6  place-first">
                  <h1>{title}</h1>
                  <p>{info}.</p>
                  </div>
                <div className="col-md-6 place-Date">
                    <label htmlFor="origin">origin</label><br/>
                    <input type="text" placeholder="Dhaka" name="" id="origin"/><br/><br/>
                    <label htmlFor="destination">Destination</label> <br/> 
                    <input type="text" placeholder="Shylet" name="" id="destination"/><br/><br/>
                <div display="flex">
                    <TextField
                        id="date"
                        label="From"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                     />
                     <TextField
                        id="date"
                        label="To"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                     />
                    </div>
                    <Link to={`/placeinfo/${title}`}>
                       <input type="button" value="start booking"/> 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Booking;