import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import RatingBar from "./ratingBar";

function RatingList({content,value}){

    const [percentage,setPercentage] = useState(); 

    useEffect(()=>{
        if(content){
            const sum = content.reduce((a,b) =>{
                return a+b
            })
            var percent = [0,0,0,0,0]
            for (var i=0; i<5;i++ ){
                percent[i]= `${(content[i]*100/sum).toString()}%`;
            }

            setPercentage(percent)

        }
        
    },[content])

    return(
        <div className="">
            <div className="card user-list">
                <div className="card-header">
                    <h5>Rating</h5>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center m-b-20">
                        <div className="col-6">
                            <h2 className="f-w-300 d-flex align-items-center float-left m-0">{value} <i className="fas fa-star f-10 m-l-10 text-c-yellow"></i></h2>
                        </div>
                        <div className="col-6">
                            <h6 className="d-flex  align-items-center float-right m-0"> <i className="fas fa-caret-up text-c-green f-22 m-l-10"></i></h6>
                        </div>
                    </div>
                    {percentage ?<div className="row">
                        <RatingBar rate="5" count={content[0]} percentage={percentage[0]}/>
                        <RatingBar rate="4" count={content[1]} percentage={percentage[1]}/>
                        <RatingBar rate="3" count={content[2]} percentage={percentage[2]}/>
                        <RatingBar rate="2" count={content[3]} percentage={percentage[3]}/>
                        <RatingBar rate="1" count={content[4]} percentage={percentage[4]}/>
                    </div>:null}
                    {/* <div style={{paddingTop:"20px",float:"right"}}>
                        <Link to="" className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                            View 
                            <i className="fas fa-eye" style={{paddingLeft:'10px'}}></i>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default RatingList;