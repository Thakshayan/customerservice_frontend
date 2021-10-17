
import EmployeeCard from "../employeeCard";
import PaginationBar from '../../pagination';
import SearchBar from '../../searchBar';
import BreadCrumb from '../../breadcrumb';

import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import {gql,useQuery} from "@apollo/client";


import { GET_WORKERS,GET_WORKER } from "../../../GraphQL/Queries";

function ViewWorker({type}){


    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [id,setID] = useState('');
    const [page,setPage] = useState(0);
    const [offSet,setOffSet] = useState();

    const fetchContent = useQuery(GET_WORKER,{
        variables:{ workerId:id }
    });

    const {error,loading,data} = useQuery(GET_WORKERS,{
        variables:{
            page:page,
            offSet:3,
            type:type
        }
    });


    useEffect(()=>{
        
        if(error){
            console.log(error)
        }
        if(data){
            setContent(data.getWorkers)
            setContents(data.getWorkers)
            setOffSet(data.getWorkerCount/3)
        }
        

    },[data])



    // useEffect(()=>{
    //     console.log(data)
    //     console.log(id)
    //     if(id){
    //         console.log(contents)
    //         setContent([contents])
    //     }else if(data){
    //         console.log(data.getWorkers)
    //         setContent(data.getWorkers)
    //     }
        
    // },[id]);

    useEffect(()=>{
        
        if(id){
            fetchContent.refetch({
                id:id
            }).then( datas => {

                if(datas){
                    setContent([datas.data.getWorker])
                }
    
            })
        }else if(contents){
            setContent(contents)
        }
        
    },[id]);




    return(  
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type={type} reason="View"/>
                        {/*<!-- [ breadcrumb ] end -->*/}
                        {/*<!-- [ search bar ] start -->*/}
                        {/* <SearchBar  placeholder="Enter worker ID ..." setCardContent={setContents} setId={setID} id={id}/> */}
                        <SearchBar placeholder="Enter work ID ..." id={id} setId={setID}/>
                                           
                        {/*<!-- [ search bar ] end -->*/}
                        
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">

                                    {
                                        content[0] ? content.map((e) => <EmployeeCard

                                                content = {e}
                                                key = {e.id}
                                                type ={type}
                                        />): null
                                    }


                                    
                                </div>
                            </div>
                        </div>
                        
                        <hr/>
                        <PaginationBar setPage={setPage} page={page} offSet={offSet}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewWorker;