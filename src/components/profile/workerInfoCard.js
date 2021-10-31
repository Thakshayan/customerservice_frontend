import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { WORKER_PROFESSIONAL } from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client";

const WorkerInfoCard = ({id,edit,title,content}) => {

    const [contents,setContent] = useState(content);
    

    return (  
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                    <div className="card-header">
                        <h5>Worker Info</h5>
                    </div>
                    {content[0] ?
                    <div className="" style={{paddingTop:"25px"}}>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Worker ID:
                            </div>
                            <div className="col-6 col-md-6">
                                {content.username}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Designation:
                            </div>
                            <div className="col-6 col-md-6">
                                {content.type}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                phone:
                            </div>
                            <div className="col-6 col-md-6">
                                {content.phone}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Joined Date:
                            </div>
                            <div className="col-6 col-md-6">
                                {content.date}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Total Works:
                            </div>
                            <div className="col-6 col-md-6">
                                {content.works}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Left Date:
                            </div>
                            <div className="col-6 col-md-6">
                                {content.leftDate?content.leftDate:"..."}
                            </div>
                        </div>
                    </div>
                    :null}

                    {edit ? 
                        <div style={{paddingTop:"20px",float:"right"}}>
                            <Link to={`/CSA/edit/workerInfo/${id}`} className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                Edit 
                                <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                            </Link>
                        </div>
                    :<br/>}
                   
                 </div>
            </div>
        </div>
    );
}
 
export default WorkerInfoCard;