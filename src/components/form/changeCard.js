import SearchBar from "../work/searchBar";
import EmployeeCard from "../employee/employeeCard";


import { useState,useEffect } from "react";

import { GET_WORKER } from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client";

const ChangeCard = ({title,childComponent,setID,id}) => {


    const [Id,setId] = useState(id)

    const [content,setContent] = useState();
    const fetchContent = useQuery(GET_WORKER,{
        variables:{ id:Id }
    });

    useEffect(() => {
        setID(Id)
    }, [])

    useEffect(()=>{
        console.log(Id)
        if(Id){
            setID(Id)
            fetchContent.refetch({
                id:Id
            }).then( datas => {

                if(datas){
                    setContent(datas.data.getWorker)
                }
    
            })
        }
        
    },[Id]);
    
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
                     <SearchBar placeholder="Enter worker ID ..." id={Id} setId={setId}/>
                                            
                     </div>
                    {content ?
                    <div className="card-block px-0 py-3">
                        <div className="">
                            <div className="">
                                <div className="row d-flex" >

                                    
                                    {content ? 
                                        <EmployeeCard content={content} type=""/>
                                    : null} 

                                    {content ?                             
                                        <div className="col-10 col-sm-5 col-md-5 col-xl-7" style={{margin:'20px'}}>
                        
                                            {childComponent}
                                        </div>
                                    : null}  
                                   
                                                                       
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