import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from 'react-router';

import Card from "../card";

import {WORK_PROFILE} from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { useState } from "react/cjs/react.development";


const WorkProfile = () => {


    const {id} = useParams();
    

    const [Id,setId] = useState(id);
    const [content,setContent] = useState();
    const {error,loading,data} = useQuery(WORK_PROFILE,{
        variables:{
            id:Id
        }
    });

    useEffect(()=>{
        if(Id){
            setId(Id)
        }
        
        console.log(Id)
    },[Id])

    useEffect(() => {
        console.log(data)
        if(data){
            setContent(data.getWork)
            console.log(data)

        }
    }, [data])


    return ( 

    <div className="pcoded-main-container main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">

                    <div className="main-body">
                        <div className="page-wrapper">
                            {//<!-- [ Main Content ] start -->
                            }
                            <div className="row">
                                

                                {/*<!--[ Messages section ] starts-->*/}
                                <div className="col-sm-12 col-md-12 col-xl-4">
                                <Card
                                    title='New Messages'
                                    symbol = {<i className="fas fa-comment-dots text-c-green f-30 m-r-10"></i>}
                                    count = ''
                                    button = {
                                        <Link to={`/CSA/messages/${id}`} className="label theme-bg text-white f-12" style={{width:"100%",float:"right",textAlign:"center"}}>
                                            View Info
                                            &nbsp; <i className="far fa-eye"></i>
                                        </Link>
                                    }
                                />
                                </div>
                                {/*<!--[ Messages section ] end-->*/}

                                
                                {/*<!--[ Workers detail link section ] starts-->*/}
                                <div className="col-sm-12 col-md-12 col-xl-4">
                                <Card
                                    title='Assigned Workers'
                                    symbol = {<i className="fas fa-users text-c-green f-30 m-r-10"></i>}
                                    count = ''
                                    button = {
                                        <Link to={`/CSA/assignWorker/${id}`} className="label theme-bg text-white f-12" style={{width:"100%",float:"right",textAlign:"center"}}>
                                            View Info
                                            &nbsp; <i className="far fa-eye"></i>
                                        </Link>}
                                />
                                </div>
                                {/*<!--[ Workers detail link section ] end-->*/}

                                {/*<!-- [ work status ] starts-->*/}    
                                {/* {content && content.finishDate?     */}
                                <div className="col-sm-12 col-md-12 col-xl-4">
                                {true?
                                
                                <Card
                                title='Rating'
                                symbol =  {<i className="fas fa-star text-c-yellow f-30 m-r-10"></i>}
                                count = ''
                                button = {
                                    <Link to={`/CSA/viewRating/${id}`} className="label theme-bg text-white f-12" style={{width:"100%",float:"right",textAlign:"center"}}>
                                    view 
                                        &nbsp; <i className="far fa-eye"></i>
                                    </Link>
                                }
                                />  :
                                <Card
                                    title='Work Status'
                                    symbol =  {<i className="feather icon-loader text-c-green f-30 m-r-10"></i>}
                                    count = 'pending'
                                    button = {
                                        <Link to="" className="label theme-bg2 text-white f-12" style={{width:"100%",float:"right",textAlign:"center"}}>
                                            Finish work
                                            &nbsp; <i className="far fa-trash-alt"></i>
                                        </Link>
                                    }
                                />
                            
                                  
                                }
                                </div>
                                {/*<!-- [ work status ] end-->*/}
                                
                            </div>

                            <div className="row">
                                {/*<!-- [ work info ] starts-->*/}
                                <div className="col-md-12 col-xl-6">
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                            <div className="card-header">
                                                <h5>work info</h5>
                                            </div>
                                            {content?<div className="" style={{paddingTop:"25px"}}>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Work Id:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content?content.workId:null}
                                                    </div>
                                                </div>
                                                <hr/>
                                                
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Ordered Date:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                            {content?content.date:null}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Subject:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content?content.jobTitle:null}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Details:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content?content.description:null}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Address:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content?content.Address:null}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Finish Date:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content?content.finishDate?content.finishDate:'...':null}
                                                    </div>
                                                </div>
                                            </div>
                                            :null}
                                            <br/>
                                            {/* <div style={{paddingTop:"20px",float:"right"}}>
                                                <button className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                                    Edit 
                                                    <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                                                </button>
                                            </div> */}
                                        
                                        </div>
                                    </div>
                                </div>
                                {/*<!--[ work info ] end-->*/}

                                
                                <div className="col-md-12 col-xl-6">

                                    
                                    {/*<!-- [ customer info ] starts-->*/}
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                            <div className="card-header">
                                                <h5>Customer info</h5>
                                            </div>
                                            <div className="" style={{paddingTop:"25px"}}>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Full Name:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        Thakshayan Thanabalasingam
                                                    </div>
                                                </div>
                                                <hr/>
                                                
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Customer ID:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        001
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Email:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        Thakshayan007@gmail.com
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
                                            <div style={{paddingTop:"20px",float:"right"}}>
                                                <button className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                                    View 
                                                    &nbsp; <i className="far fa-eye"></i>
                                                </button>
                                            </div>
                                        

                                        
                                        </div>
                                        
                                    </div>
                                    {/*<!--[ customer info ] end-->*/}

                                    <Card
                                    title='Work Images'
                                    symbol = {<i className="far fa-images text-c-green f-30 m-r-10"></i>}
                                    count = ''
                                    button = {
                                        <Link to={`/CSA/work/images/${id}`} className="label theme-bg text-white f-12" style={{width:"100%",float:"right",textAlign:"center"}}>
                                            View Images
                                            &nbsp; <i className="far fa-eye"></i>
                                        </Link>
                                    }
                                />

                                    
            
                                    
                                </div>
                                
                                
                                   
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


        
        
     );
}
 
export default WorkProfile;