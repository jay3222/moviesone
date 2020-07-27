import React,{useState, useEffect} from 'react';
import axios from 'axios';

// const Corona=()=>{
//     const [num,setNum]=useState();
//     const[name, setName]=useState();
//     const[moves ,setMoves]=useState();

//     useEffect(()=>{
//         async function getData(){
//             const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//            //console.log();
//             setName(res.data.name);
//             setMoves(res.data.moves.length);
//         }
//         getData();
//     })
//     return(

//         <>
//         <section style={{width:'100vw',height:'100vh'}}>
//         <div className="d-flex flex-column justify-content-center align-items-center my-5">
//         <h1 className="text-center"> you choose {num} value</h1>
//         <h1 className="text-center"> My name is {name} </h1>
//         <h1 className="text-center"> I have {moves} moves</h1>

//         <select value={num} onChange={(event)=>{
//             setNum(event.target.value);

//         }}>
//         <option value="1">1</option>
//         <option value="25">25</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>


//         </select>
//         </div>
//         </section>

//         </>
//     );
// };
const Corona=()=>{
    const[Country,setCountry]=useState();
    const[TotalConfirmed,setConfirmed]=useState();
    const[TotalRecovered,setRecovered]=useState();
    const[TotalDeaths,setDeaths]=useState();
    async  function getDataApi(){
        const res=await axios.get(`https://api.covid19api.com/summary`)
       // console.log(res.data.Countries[76]);
        setCountry(res.data.Countries[76].Country);
        setConfirmed(res.data.Countries[76].TotalConfirmed);
        setRecovered(res.data.Countries[76].TotalRecovered);
        setDeaths(res.data.Countries[76].TotalDeaths);
       
    }
    getDataApi();

    return(
         <>
         <div className="container  text-center">
         <div className="row">
         <div className="col-lg-5 col-md-5 col-10  bg-danger text-light  mx-auto   ">
         <div className="row">
         <h6 className="my-2">COVID-19 LIVE DATA TRACKER</h6>
         <table className=" table table-responsive table-striped my-2 text-white " style={{fontSize:'12px',fontWeight:'normal'}}> 
             <tr>
             <th>Country</th>
             <th>TotalConfirmed</th>
             <th>TotalRecovered</th>
             <th>TotalDeaths</th>
            </tr>
            <tr>
                <td>{Country}</td>
                <td>{TotalConfirmed}</td>
                <td>{TotalRecovered}</td>
                <td>{TotalDeaths}</td>
            </tr>
         </table>
         {/* <div className="col-lg-3 col-md-3 col-3 mt-0 p-0 ">
                 <p style={{fontSize:'10x'}} className="mt-3">Country</p>
                    <h5 className="p-2   ">{Country}</h5>
                 </div>
             <div className="col-lg-3 col-md-3 col-3 mt-0 p-0">
            <p style={{fontSize:'10x'}} className="mt-3">TotalConfirmed</p>
                <h5 className="p-2  ">{TotalConfirmed}</h5>
             </div>
             <div className="col-lg-3 col-md-3 col-3 mt-0 p-0">
             <p style={{fontSize:'10x'}} className="mt-3">TotalRecovered</p>
            <h5 className="p-2  ">{TotalRecovered}</h5>
                 
                 </div>
                 <div className="col-lg-3 col-md-3 col-3 mt-0 p-0">
                 <p style={{fontSize:'10x'}} className="mt-3">TotalDeaths</p>
                    <h5 className="p-2 ">{TotalDeaths}</h5>
                 </div> */}

                
         </div>

         </div>    
         </div>
         </div>
        </>
    );
};
export default Corona;