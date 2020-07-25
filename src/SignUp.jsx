import React from "react";
import {NavLink} from "react-router-dom";

const SignUp=()=>{

    return(
        <>
        <div className=" bg-info">
            <div className="row">
                <div className=" bg-info d-flex justify-content-center  align-items-center" style={{width:'100vw',height:'100vh'}}>
            
                <div className=" col-lg-5 col-md-5 col-8 bg-danger ">
                <form  className="pt-3 pb-3" >
                <h4 className="text-center text-white my-3">  SignUp</h4>
                <div className="  col-lg-8 col-md-8 col-10 form-group mx-auto mb-3 " style={{borderRadius:'0px'}}>
                  <input type="text"
                  className="form-control"
                  style={{boxShadow:'none',border:'0px'}}
                  id="1"
                  placeholder="Enter Username"
                  name="uname"
                
                  />

                </div>

                <div className="  col-lg-8 col-md-8 col-10 form-group mx-auto mb-3 " style={{borderRadius:'0px'}}>
                  <input type="password"
                  className="form-control"
                  style={{boxShadow:'none',border:'0px'}}
                  id="2"
                  placeholder="Enter Password"
                  name="password"
                
                  />

                </div>

                <div className="  col-lg-8 col-md-8 col-10 form-group mx-auto mb-3 " style={{borderRadius:'0px'}}>
                  <input type="password"
                  className="form-control"
                  style={{boxShadow:'none',border:'0px'}}
                  id="3"
                  placeholder="Confirm Password"
                  name="cpassword"
                
                  />

                </div>
                
                <div className="  col-lg-8 col-md-8 col-10 form-group mx-auto mb-3  " style={{borderRadius:'0px'}}>
              <NavLink to="/Signin"style={{textDecoration:'none'}}> <button className=" btn btn-md  btn-outline-light d-block mx-auto "    style={{boxShadow:'none'}}>Submit</button></NavLink> 
                 
                 
                </div>

                

                </form>
                </div>

                </div>

            </div>
        </div>

        </>
    );
};

export default SignUp;