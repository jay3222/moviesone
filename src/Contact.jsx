import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import MapContainer from "./MapContainer";




const Contact=()=>{
    

  const[data,setData]=useState(({

      uname:'',
      phone:'',
      email:'',
      message:"",

  }));


  const inputEvent=(event)=>{
    console.log(event.target.value);
    const{name,value}=event.target;
    setData((preValue)=>{
      return{
      ...preValue,
      [name]:value,
      };

    });

  };


  const formSubmit=(event)=>{
  event.preventDefault();
  alert( `my name is  ${data.uname} my phone no is ${data.phone}  my email id is ${data.email} message ${data.message}`);

  }
    return (
        <>
            <section className="" style={{backgroundColor:'#038387',width:"100%",height:"100vh"}}>
           
          


             <div className="container">
             <div className="row">
             <div className="col-12">
             <div className="row">
                <div className="col-lg-5 col-md-5 col-10 mx-auto  bg-danger text-white my-5 mx-3  ">
                <h1 className="text-center my-2">Contact</h1>
                <h6>our team is happy to answer your questions.Fill out the form  and we will be in touch as soon as possible.</h6>
                <form className="form-group" onSubmit={formSubmit}>
  <div className="form-group ">
    <label for="exampleFormControlInput1"> Name</label>
    <input type="text"
     className="form-control"
     style={{boxShadow:'none',border:'0px'}}
      id="exampleFormControlInput1" 
      name="uname"
      value={data.uname}
      onChange={inputEvent}
       placeholder="Enter your Name  "/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" 
    className="form-control"
    style={{boxShadow:'none',border:'0px'}}
     id="exampleFormControlInput1"
      placeholder="Enter mobile number  "
      name="phone"
      value={data.phone}
      onChange={inputEvent}
      />
  </div>

  <div className="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email"
     className="form-control"
     style={{boxShadow:'none',border:'0px'}}
      id="exampleFormControlInput1"
       placeholder="xyz@gmail.com"
       name="email"
      value={data.email}
      onChange={inputEvent}
       />
  </div>
 
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <input type="text" className="form-control"
        style={{boxShadow:'none',border:'0px'}}
     id="exampleFormControlTextarea1" rows="3"
       name="message"
      value={data.message}
      onChange={inputEvent}
    />
  </div>
  <input type="submit"  className="btn btn-outline-light bg-light text-dark btn-md my-2"    style={{boxShadow:'none'}} />
</form>
   </div>
   <div className="col-lg-7 col-md-7 col-10 d-flex mx-auto flex-row justify-content-center align-items-center my-5 " >

  <h1><MapContainer/></h1>

                    </div>
            </div>

                </div>
                </div>
                </div>
    
      </section>
  
    </>


    );
};
export default Contact;
