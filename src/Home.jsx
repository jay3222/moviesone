import React from 'react';
//import web from "./images/img2.jpg";
import {NavLink} from "react-router-dom";




const Home=()=>{
  
    return(
        <>

        

     
        <section className="home">
        <div className="container-fluid header-img  ">
        <div className="row">
            <div className=" col-12  header-content d-flex flex-column align-items-center  justify-content-center mx-auto  text-light header-text >">
          
            <h1  className=" text-center header-para">Unlimited movies, TV<br/>shows and more.</h1>
            <p classNam="">Watch anywhere. Cancel anytime.</p>
            <div className="d-block mx-auto text-center ">
            <NavLink to="/Signin"><button className="btn btn-lg btn-danger mr-3" style={{boxShadow:'none',border:'0px'}}> Sign In</button></NavLink>
        <NavLink to="/service"><button className=" ml-2 btn btn-lg btn-outline-light"style={{boxShadow:'none'}}> Free Demo</button> </NavLink> 
         </div>

          </div>
     
        </div>
        </div>
        </section>




        </>
    );
};
export default Home;