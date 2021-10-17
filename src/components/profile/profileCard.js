import { useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_WORKER, WORKER_PERSONAL, WORK_PROFILE } from "../../GraphQL/Queries";

const ProfileCard = ({id,edit,title}) => {


    const [content,setContent] = useState([]);

    const {error,loading,data} = useQuery(WORKER_PERSONAL,{
        variables:{
            id:id
        }
    })

    useEffect(()=>{
    
        if(data){
            setContent([data.getWorker]);
            console.log(data.getWorker);
        }
    },[data,id])

    return (  
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                    <div className="card-header">
                        <h5>{title}</h5>
                    </div>

                    {content[0] ?
                    <div className="" style={{paddingTop:"25px"}}>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Full Name:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                {content[0].name}
                            </div>
                        </div>
                        <hr/>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                NIC:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                {content[0].nic}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Email:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                {content[0].email}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Address:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                Sample Address
                            </div>
                        </div>
                    </div>
                    :null}

                    {edit ?<div style={{paddingTop:"20px",float:"right"}}>
                        <Link to={`/CSA/edit/basicInfo/${id}`} className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                            Edit 
                            <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                        </Link>
                    </div>: 
                    <br/>}
                   
                 </div>
            </div>
        </div>
    );
}
 
export default ProfileCard;