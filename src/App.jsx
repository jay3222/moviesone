import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Socialicon from "./Socialicon";
import Footer from "./Footer";
import { Switch , Route ,Redirect } from "react-router-dom";
import Signin from "./Signin";
import SignUp from "./SignUp";




const App=() =>{
    return(
        <>
        <Navbar/>
        <Socialicon />
        <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/signin" component={Signin}  />
            <Route exact path="/signUp" component={SignUp}  />
            <Redirect to="/home"/>  
         
        
          <Footer/> 
        </>
    );


};
export default App;
//  
//     <Route exact component={Error}/>