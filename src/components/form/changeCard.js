import SearchBar from "../searchBar";
import EmployeeCard from "../employee/employeeCard";
import FinishCard from "../finishCard";

import { useState,useEffect } from "react";

import { GET_WORKER } from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import ElementCard from "../employee/remove/elementCard";

const ChangeCard = ({title,content,setID,id,type,action,childComponent,loading}) => {


    useEffect(() => {
        console.log(content)
    }, [content])
    
    return ( 
        <div className="row"> 
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h5>{title}</h5>
                    </div>
                    <div className="" style={{marginTop:'20px'}}>
                        {/* <SearchBar placeholder="Enter worker ID ..." setCardContent={setCardContent} setId={setID} id={id}/>
                     */}
                     <SearchBar placeholder="Enter worker ID ..." id={id} setId={setID}/>
                                            
                     </div>
                    {content ?
                    <div className="card-block px-0 py-3">
                        <div className="">
                            <div className="">
                                <div className="row d-flex" style={{margin:'auto',alignItems:'center',justifyContent:'center'}}>

                                    { content[0] ? 

                                    content.map ((e) => {
                                    console.log("object Id",e._id)
                                    return <ElementCard
                                        key = {e._id}
                                        content = {e}
                                        type = {type}
                                        childComponent = {
                                            childComponent}
                                            
                                    />})
                                     
                                    :null
                                    }



                                   
                                                                       
                                </div>
                            </div>
                        </div>
                    </div> :null}
                                                
                </div>
            </div>
        </div>
     );
}
 
export default ChangeCard;