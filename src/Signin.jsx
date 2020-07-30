import React, { useState } from "react";
import{NavLink} from "react-router-dom";




const Signin=()=>{
    const[name ,setName]=useState({
        Uname:"",
        Password:"",

    });
    const inputEvent=(event)=>{

        //console.log(event.target.value);
     const{name,value}=event.target;
        setName((preValue)=>{
          return{
          ...preValue,
          [name]:value,
          };
    
        });
    
      };
    
    
      const formSubmit=(event)=>
      {
      event.preventDefault();
      alert( `my user-name is  ${name.Uname} my password is ${name.Password} `);
    
      }

  
    return(
        <>
        <section style={{backgroundColor:'#038387',width:'100vw',height:'100vh'}}>
         <div className="container">
   
    <div className="row">
     <div className=" form-div col-lg-6 col-md-6 col-11 col col-sm-10 mt-5 mb-5  d-flex justify-content-center align-items-center" style={{cursor:'pointer',width:'100vw',height:'70vh'}}>
<form className="text-center p-4 bg-danger text-white " onSubmit={formSubmit}>

    <h4 className=" mb-4">Sign in</h4>
      <div className="form-group">  
    <input type="text"
     name="Uname"
      className="form-control mb-4"
      style={{boxShadow:'none',border:'0px'}}
       placeholder="UserName"
       onChange={inputEvent}
       value={name.Uname}
       
       
        />
        </div>

        <div className="form-group">
    <input type="password"
      name="Password"
       className="form-control mb-4" 
       style={{boxShadow:'none',border:'0px'}}
       placeholder="Password"
       value={name.Password}
       onChange={inputEvent} />
       </div>

    <div className=" form-group d-flex justify-content-around">
        
          
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                <label className="custom-control-label ml-2" for="defaultLoginFormRemember"style={{fontSize:'13px'}}> Remember me</label>
            </div>
        
        <div>
           
            <NavLink to="/SignUp" href="" className="ml-2 text-dark " style={{textDecoration:'none',fontSize:'13px'}}> Forgot password?</NavLink>
        </div>
    </div>

   
    <button className="btn btn-info btn-block my-2"    style={{boxShadow:'none'}} name="submit" type="submit" >Sign in</button>

    <p>Not a member?
        <NavLink to="/SignUp"  className="ml-2 text-dark" style={{textDecoration:'none'}}> Signup</NavLink>
    </p>


</form> 
</div></div></div>
    </section>

        </>
    )

}
export default Signin;