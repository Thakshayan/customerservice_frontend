import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";



import BreadCrumb from '../../breadcrumb';
import SearchBar from '../searchBar';

import ChangeCard from '../../form/changeCard';
import AssignForm from '../../form/assignWorkerForm';
import AssignWorkerCard from './assignWorkerCard';
import { useParams } from 'react-router';

import {GET_BOOKINGS} from "../../../GraphQL/Queries";



const AssignWorkerForm = ({type}) => {

    const {id} = useParams()

    const [workId,setId] = useState(id);
    const [workerId,setID] = useState();
    const [assignWorkerId,setAssignWorkerID] = useState();
    
    // const [Id,setID] = useState(id);
    // const fetchContent = useQuery(GET_BOOKING,{
    //     variables:{ workId:id
    //     }
    // });



    const [content,setContent] = useState([]);
    const [page,setPage] = useState(0);
    const [offSet,setOffSet] = useState();

    // const {error,loading,data} = useQuery(GET_BOOKINGS,{
    //     variables:{
    //         page:page,
    //         offSet:1
    //     }
    // });


    // useEffect(()=>{

    //     if(error){
    //         console.log(error)
    //     }
    //     if(data){
      
    //         // setContent(data.getWorkers)
    //         // setOffSet(data.getWorkersCount/1)
    //     }


    // },[data])



    // // useEffect(()=>{
    // //     console.log(id)
    // //     if(id){
    // //         fetchContent.refetch({
    // //         workId:id
    // //         }).then( datas => {
          
    // //             if(datas){
    // //                 setContent([datas.data.getWork])
    // //                 console.log(datas.data.getWork)
    // //             }
    
    // //         })
    // //     }
        
    // // },[id]);



    
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
                                                        <div className="">
                                                            <AssignWorkerCard
                                                                id="ID89"
                                                                designation="Moderator"
                                                                phone="345678"
                                                                rating= "4.7"
                                                                viewURL=""
                                                                delURL=""
                                                            />     
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