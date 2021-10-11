import { useEffect, useState } from 'react';


import {useFormik} from 'formik';
import * as Yup from 'yup';

import BreadCrumb from "../../breadcrumb";
import SearchBar from '../../searchBar';
import RatingCard from '../ratingCard';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
//import { GET_RATING } from '../../../GraphQL/Queries';


const ViewEdit = ({type}) => {

    const {id} = useParams()
    const [Id,setID] = useState();
    const [content,setCardContent] = useState([]);

    const rating = [false,false,false,true,false];

 


    // const {error,loading,data} = useQuery(GET_RATING,{
    //     variables:{
    //         id:id
    //     }
    // })
    
    // useEffect(()=>{
    //    rating = [false,false,false,false,false];
    //     if(data){

    //     }
    // },[data])

    return ( 
        <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">

                    {/*<!-- [ breadcrumb ] start -->*/}
                    <BreadCrumb type={type} reason="View" />
                    {/*<!-- [ breadcrumb ] end -->*/}

                    <div className="main-body">
                        <div className="page-wrapper">

                            {/*<!-- [ Basic info ] start -->*/}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Basic Componant</h5>
                                        </div>
                                        <div className="" style={{marginTop:'20px'}}>
                                            <SearchBar placeholder="Enter worker ID ..." setCardContent={setCardContent} setId={setID}/>
                                        </div>
                                        {content?<div className="card-body">
                                            <h5>{type}</h5>
                                            <hr/>
                                            <form >
                                                <div className="row">
                                                    <div className="col-md-6">

                                                    <div className="star-rating">
                                                            <div className="thanks-msg">Thanks for your feedback !!!</div>
                                                            <div className="star-input">
                                                                <input type="radio" name="rating" id="rating-5" checked={rating[4]} disabled/>
                                                                <label htmlFor="rating-5" className="fas fa-star"></label>
                                                                <input type="radio" name="rating" id="rating-4" checked={rating[3]} disabled />
                                                                <label htmlFor="rating-4" className="fas fa-star"></label>
                                                                <input type="radio" name="rating" id="rating-3" checked={rating[2]}  disabled/>
                                                                <label htmlFor="rating-3" className="fas fa-star" ></label>
                                                                <input type="radio" name="rating" id="rating-2" checked={rating[1]} disabled/>
                                                                <label htmlFor="rating-2" className="fas fa-star"></label>
                                                                <input type="radio" name="rating" id="rating-1" checked={rating[0]} disabled/>
                                                                <label htmlFor="rating-1" className="fas fa-star"></label>

                                                                {/* <!-- Rating Submit Form --> */}
                                                                <span className="rating-reaction"></span>
                                                                
                                                            </div>
                                                        </div>

                                                       
                                                        <div className="form-group">
                                                            <label htmlFor="description">Comments</label>
                                                            <textarea className="form-control" id="description" rows="5" aria-label="Enter description" ></textarea>
                                                           </div>
                                                       
                                                </div>

                                                <div className="col-md-6">    
                                                <div className="card yearly-sales">
                                                    <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                                        <div className="card-header">
                                                            <h5>work info</h5>
                                                        </div>
                                                        <div className="" style={{paddingTop:"25px"}}>
                                                            <div className="row" style={{display:"flex"}}>
                                                                <div className="col-4 col-md-4 col-sm-4">
                                                                    Work Id:
                                                                </div>
                                                                <div className="col-8 col-md-8 col-sm-8">
                                                                    
                                                                </div>
                                                            </div>
                                                            <hr/>
                                                            
                                                            <div className="row" style={{display:"flex"}}>
                                                                <div className="col-4 col-md-4 col-sm-4">
                                                                    Ordered Date:
                                                                </div>
                                                                <div className="col-8 col-md-8 col-sm-8">
                                                                
                                                                </div>
                                                            </div>
                                                            <hr/>
                                                            <div className="row" style={{display:"flex"}}>
                                                                <div className="col-4 col-md-4 col-sm-4">
                                                                    Subject:
                                                                </div>
                                                                <div className="col-8 col-md-8 col-sm-8">
                                                                    
                                                                </div>
                                                            </div>
                                                            <hr/>
                                                            <div className="row" style={{display:"flex"}}>
                                                                <div className="col-4 col-md-4 col-sm-4">
                                                                    Details:
                                                                </div>
                                                                <div className="col-8 col-md-8 col-sm-8">
                                                                
                                                                </div>
                                                            </div>
                                                            <hr/>
                                                            <div className="row" style={{display:"flex"}}>
                                                                <div className="col-4 col-md-4 col-sm-4">
                                                                    Address:
                                                                </div>
                                                                <div className="col-8 col-md-8 col-sm-8">
                                                                
                                                                </div>
                                                            </div>
                                                            <hr/>
                                                            <div className="row" style={{display:"flex"}}>
                                                                <div className="col-4 col-md-4 col-sm-4">
                                                                    Finish Date:
                                                                </div>
                                                                <div className="col-8 col-md-8 col-sm-8">
                                                                    ...
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        <div style={{paddingTop:"20px",float:"right"}}>
                                                            <button className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                                                View
                                                                <i className="fas fa-eye" style={{paddingLeft:'10px'}}></i>
                                                            </button>
                                                        </div> 
                                                    
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                           
                                                    
                                        </form>
                                        </div>:null}
                                    </div>
                             
                                </div>
                            </div>
                            {/*<!-- [ Basic info ] end -->*/}



                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}
 
export default ViewEdit;