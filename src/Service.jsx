import React from 'react';
import Ndata from './Ndata';
import Card from  './Card';
import { NavLink} from "react-router-dom";


const Service=()=>{
   
    return(
        <>
        <section >

    
       
        <div className="container">
            <div className="row">
                <div className="col-12 ">
                    <h3 className="text-capitalize text-center  mb-4 mt-3 " style={{letterSpacing:'2px'}}>List of top 6 netflix series in 2020</h3>
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

</section>



        </>
    );
};
export default Service;