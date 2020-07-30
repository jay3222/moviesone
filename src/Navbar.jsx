import React from 'react';
import {NavLink} from "react-router-dom";





const Navbar=()=>{
   

    return(

        <>  
        <section className="bg-dark"style={{width:'100vw'}}>
        <div className="container nav_bg">
          <div className="row">
            <div className="col-12   ">
            <nav className="navbarcol navbar navbar-expand-md navbar-dark sticky-top    ">
              <NavLink id="jay1" style={{fontSize:'1.9rem',textDecoration:'none',color:'white',fontWeight:'bold',letterSpacing:'3px'}} to="/home">MOVIESONE</NavLink>
              
              <NavLink to="/Signin" id="jay"><button  className="btn signin-navbar btn-md  btn-danger m-0 " style={{borderRadius:'0px',boxShadow:'none'}}>Signin</button></NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto text-center ">
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
                    <NavLink activeClassName="menu_active"exact style={{color:'white',fontSize:'14px'}} className="nav-link text-uppercase mr-2" to="/contact">Contact</NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink activeClassName="menu_active"exact style={{color:'white',fontSize:'14px'}} className="nav-link text-uppercase mr-2" to="/page/jay/yadav/25">Page</NavLink>
                  </li> */}
  
      
    </ul>
   
  </div>
</nav>
            </div>
          </div>
        </div>
       </section>
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