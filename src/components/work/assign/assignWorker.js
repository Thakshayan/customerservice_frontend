import { useState, useEffect } from 'react';


import BreadCrumb from '../../breadcrumb';
import SearchBar from '../../searchBar';

import ChangeCard from '../../form/changeCard';
import AssignForm from '../../form/assignWorkerForm';
import AssignWorkerCard from './assignWorkerCard';




const AssignWorkerForm = ({type,contents,setID,workerId,setAssignWorkerID,workId,assignWorkerId}) => {

    const [content,setContent] = useState([])

    useEffect(()=>{
        if(contents){
            
            setContent(contents)
        }
    },[contents])


    
    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Work" reason="Assign" />
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    
                                    {/*<!-- [ Assign-table ] end -->*/}
                                    <div className="col-xl-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Assign Workers Details</h5>
                                            </div>
                                            <div className="" style={{marginTop:'20px'}}>
                                            {/*<!-- [ search bar ] start -->*/}
                                            <SearchBar  placeholder="Search with senders ..."  setId={setID} id={workerId}/>
                                            {/*<!-- [ search bar ] end -->*/}
                                            </div>
                                            
                                            <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="">
                                                        <div className="" style={{margin:'auto'}}>

                                                            {content[0] ? content.map(e =>{
                                                                console.log(e)
                                                                return   <AssignWorkerCard
                                                                            id={e.username}
                                                                            designation="Worker"
                                                                            phone={e.contact_no}
                                                                            rating= {e.rating}
                                                                            email = {e.email}
                                                                            viewURL={`/CSA/profile/${e._id}`}
                                                                            delURL=""
                                                                            key = {e._id}
                                                                        />  
                                                            })

                                                            :
                                                            null}   
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- [ Assign-table ] end -->*/}
                                    
                                </div>

                                    {/*<!-- [ Add-Worker-Card ] end -->*/}
                                        <ChangeCard
                                            title ='Add Workers'
                                            setID={setAssignWorkerID}
                                            childComponent = {
                                                <AssignForm 
                                                    workId = {workId}
                                                    workerId={assignWorkerId}
                                                />}
                                        />
                                    {/*<!-- [ Add-worker-card ] end -->*/}

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default AssignWorkerForm;