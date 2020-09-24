import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound'
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import PlaceInfo from './Component/PlaceInfo/PlaceInfo';
import Booking from './Component/Booking/Booking';
export const userContext=createContext();
function App(){
  const[signInUser,setSignInUser]=useState({});
  return (
    <userContext.Provider value={[signInUser,setSignInUser]}>
           <Router>
             <Header></Header>
             <Switch>
               <Route path="/home">
                   <Home></Home>
               </Route>
               <Route path="/login">
                   <Login></Login>
               </Route>
               <Route path="/booking/:title">
                  <Booking></Booking>
               </Route>
                <PrivateRoute path="/placeinfo/:title">
                     <PlaceInfo></PlaceInfo>
                </PrivateRoute>
               <Route exact path="/">
                   <Home></Home>
               </Route>
               <Route path="*">
                   <NotFound></NotFound>
               </Route>
             </Switch>           
           </Router>
    </userContext.Provider>
  );
}
export default App;
