import React from 'react';
import Ndata from './Ndata';
import Card from  './Card';
import { useLocation, NavLink} from "react-router-dom";


const Service=()=>{
    const location=useLocation();
    console.log(location);
   
    return(
        <>
        <p>user current location-{location.pathname} <NavLink to="/home"style={{textDecoration:'none'}}>go back </NavLink></p>
        <p>{new URLSearchParams(location.search).get('name')}</p>
    
       
        <div className="container">
            <div className="row">
                <div className="col-12 ">
                    <h3 className="text-capitalize text-center  mb-4 mt-0 " style={{letterSpacing:'2px'}}>List of top 6 netflix series in 2020</h3>
                        <div className="row gy-4 ">
                        {
                            Ndata.map((val,ind)=>{
                                return  <Card
                                key={ind}
                                
                                imgsrc={val.imgsrc}
                                title={val.title}
                                para={val.para}
                                link={val.link}
                                btn={val.btn}

                                
                                
                                
                                
                                 />
                            })

                        }

                        </div>
                   

    
                   
                </div>
            </div>
        </div>





        </>
    );
};
export default Service;