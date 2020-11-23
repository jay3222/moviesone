import React from 'react';
import {NavLink} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



const Card=(props)=>{
    const cardsize={
        width:'80%',
        height:'auto',
        borderRadius:'0px',
       
       
        


    };
    

    return(

        <>
                            
             <div className=" col-xl-4 col-xxl-4 col-lg-4 col-md-6 col-12 mx-auto mb-5">
                            <div className="card   shadow-sm  mb-5 " style={cardsize}>
                            <img style={{width:'100%',height:'45vh',margin:'0',padding:'0'}} src={props.imgsrc} className="card-img-top" alt="dark-img"  />
                            <div className="card-body">
                            <p className="card-text m-0 p-0" style={{fontSize:'14px'}}>{props.para}</p>
                            <h5 className="card-title" style={{fontWeight:'bold'}}>{props.title}</h5>
                            <a href={props.link} target="_blank" ><button className="btn btn-md btn-outline-secondary m-0" style={{fontSize:'15px',boxShadow:'none'}}>{props.btn}</button></a>                   
                                </div>
                                </div>
                            </div>




        </>
    );
};
export default Card;