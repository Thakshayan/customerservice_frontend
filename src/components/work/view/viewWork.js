import BreadCrumb from '../../breadcrumb';
import SearchBar from '../../searchBar';
import PaginationBar from '../../pagination';
import WorkBar from './workBar';


import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";

import {GET_WORKS} from "../../../GraphQL/Queries";
import {GET_WORK} from "../../../GraphQL/Queries";



const ViewWorks = ({type}) => {    



    const [id,setID] = useState('');
    // const [Id,setID] = useState(id);
    const fetchContent = useQuery(GET_WORK,{
        variables:{ workId:id
        }
    });


    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(0);
    const [offSet,setOffSet] = useState();

    const {error,loading,data} = useQuery(GET_WORKS,{
        variables:{
            page:page,
            offSet:1,
            status:type
        }
    });


    useEffect(()=>{
        console.log(data)
        console.log(type)
        if(error){
            console.log(error)
        }
        if(data){
      
            setContent(data.getWorks)
            setContents(data.getWorks)
            setOffSet(data.getWorkCount/1)
        }


    },[data])



    useEffect(()=>{
        console.log(contents)
        if(id){
            fetchContent.refetch({
            workId:id
            }).then( datas => {
          
                if(datas){
                    setContent([datas.data.getWork])
                    console.log(datas.data.getWork)
                }
    
            })
        }else if(contents){
            setContent(contents)
        }
        
    },[id]);




    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Work" reason="view" />
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    
                                    
                                    {/*<!-- [ view-table ] start -->*/}
                                    <div className="col-xl-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Search Work ID</h5>
                                            </div>
                                            <div className="" style={{marginTop:'20px'}}>
                                                <SearchBar placeholder="Enter work ID ..." id={id} setId={setID}/>
                                            </div>
                                            
                                            <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="">
                                                        <div className="">

                                                            {content[0]? content.map(e =>{


                                                                const monthNames = ["January", "February", "March", "April", "May", "June",
                                                                "July", "August", "September", "October", "November", "December"
                                                                ];

                                                                const date_ob = new Date(e.date);


                                                                const date = date_ob.getDate()+" "+monthNames[date_ob.getMonth()]+" "+date_ob.getFullYear();
                                                               console.log(date_ob)
                                                                return  <WorkBar
                                                                title = {e.jobTitle}
                                                                time = {date}
                                                                description = {e.description}
                                                                viewURL = {`/CSA/work/${e.workId}`}
                                                                
                                                                id = {e.workId}
                                                                key = {e.workId}
                                                            />  


                                                            }):null}

                                                        
                                                                   
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- [ view-table ] end -->*/}

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
 
export default ViewWorks;