import { useEffect , useState } from 'react';

import BreadCrumb from '../../breadcrumb';
import SearchBar from '../../searchBar';
import PaginationBar from '../../pagination';
import RequestBar from './requestBar';

// import { GET_BOOKINGS, GET_BOOKING } from '../../../GraphQL/Queries';

import { useQuery } from '@apollo/client';



const NewWorkRequest = () => {    

    const [id,setID] = useState('');
    // const [Id,setID] = useState(id);
    // const fetchContent = useQuery(GET_BOOKING,{
    //     variables:{ workId:id
    //     }
    // });


    const [contents,setContents] = useState([]);
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
    //     console.log(data)
    //     console.log(type)
    //     if(error){
    //         console.log(error)
    //     }
    //     if(data){
      
    //         setContent(data.getWorks)
    //         setContents(data.getWorks)
    //         setOffSet(data.getWorkCount/1)
    //     }


    // },[data])



    // useEffect(()=>{
    //     console.log(contents)
    //     if(id){
    //         fetchContent.refetch({
    //         workId:id
    //         }).then( datas => {
          
    //             if(datas){
    //                 setContent([datas.data.getWork])
    //                 console.log(datas.data.getWork)
    //             }
    
    //         })
    //     }else if(contents){
    //         setContent(contents)
    //     }
        
    // },[id]);




    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Work" reason="New Request" />
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
                                            
                                            <SearchBar placeholder="Enter work Booker ID ..." id={id} setId={setID}/>
                                            
                                            </div>
                                            
                                            <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="container">
                                                        <div className="justify-content-center" >
                                                            <RequestBar
                                                                by={"ID001"} //customerId
                                                                workstation ={"workstation"}
                                                                description ="This is a sample booking description"
                                                                key ={'1'}
                                                                date=""
                                                            /> 

                                                            {content.map((e)=>{

                                                            })}

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
 
export default NewWorkRequest;