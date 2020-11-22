import React from 'react';
import {NavLink} from "react-router-dom";





const Navbar=()=>{
   

    return(

        <>  
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-12">
            <nav className="navbarcol navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container mx-2">
              <NavLink id="jay1" style={{fontSize:'1.9rem',textDecoration:'none',color:'white',fontWeight:'bold',letterSpacing:'3px'}} to="/home">MOVIESONE</NavLink>
              <NavLink to="/Signin" ><button  className="btn signin-btn  btn-md  btn-danger  ">Signin</button></NavLink>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto text-center mr-5"style={{zIndex:999999}}>
                  <li className="nav-item active">
                    <NavLink activeClassName="menu_active"exact style={{color:'white',fontSize:'14px'}}  className="nav-link text-uppercase mr-2  " to="/home">Home <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active"exact style={{color:'white',fontSize:'14px'}} className="nav-link text-uppercase mr-2" to="/service">Service</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active"exact style={{color:'white',fontSize:'14px'}} className="nav-link text-uppercase mr-2" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active"exact style={{color:'white',fontSize:'14px'}} className="nav-link text-uppercase mr-5" to="/contact">Contact</NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink activeClassName="menu_active"exact style={{color:'white',fontSize:'14px'}} className="nav-link text-uppercase mr-2" to="/page/jay/yadav/25">Page</NavLink>
                  </li> */}
  
      
    </ul>

   
  </div></div>
</nav>
            </div>
          </div>
        </div>

        </>




    );
};
export default Navbar;



    // <li className="nav-item dropdown">
    //     <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //       Dropdown
    //     </NavLink>
    //     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //       <NavLink className="dropdown-item" to="/pageone">Pageone</NavLink>
    //       <NavLink className="dropdown-item" to="/pageto">Pageto</NavLink>
    //       <div className="dropdown-divider"></div>
    //       <NavLink className="dropdown-item" to="/home">Something else here</NavLink>
    //     </div>
    //   </li>