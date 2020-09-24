import React from 'react';
const NotFound = () => {
const notfound={
        color:"red",
        textTransform:"uppercase",
        border:'2px solid black',
        padding:"20px",
        margin:"10% auto",
        width:"50%"
    }
    return (
        <div>
           <h1 style={notfound}>page are not avialable</h1>  
        </div>
    );
};

export default NotFound;