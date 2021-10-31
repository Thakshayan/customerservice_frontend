import BreadCrumb from '../breadcrumb';
//import SearchBar from '../searchBar';
import PaginationBar from '../pagination';
import MessageBar from './messageBar';



import { useState, useEffect } from "react"
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../../GraphQL/Mutations';

import { dateFormatter } from '../formatter';
import Empty from '../empty';
import Loading from '../loading';



const Messager = ({content,setPage,page,offSet,loading}) => {    

    const [sendMessage,{loadingMessage,error}] = useMutation(SEND_MESSAGE,{
        onCompleted:data=>{
            if(data){
                alert("Success")
            }
        }
    })

    const [To,setTo] = useState();
    const [toErr,setToErr] = useState();
    const [contents,setContent] = useState();

    useEffect(() => {
        console.log("content")
        console.log(content)
        setContent(content)
    }, [content])

    const toValidation = ()=>{

        // fetchContent({
        //     variables:{
        //         To
        //     }
        // })
    }

    const formik = useFormik({
        initialValues:{
            to:'',
           
            description:''
        },validationSchema: Yup.object({
            
            
            to:Yup.string()
                .required("Please enter a receiver"),
            description: Yup.string()
                .required("Please give a short description"),
            
        }),
        onSubmit: values =>{
           
             
            alert(JSON.stringify(values))
            sendMessage({
                variables:{
                    to:values.to,
                    message:values.description
                }
            })

        }
    })

    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Message" reason="view" />
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    
                                    
                                    {/*<!-- [ view-table ] start -->*/}
                                    <div className="col-xl-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>View Messages</h5>
                                            </div>
                                            {/* <div className="" style={{marginTop:'20px'}}>
                                                <SearchBar placeholder="Enter worker ID ..." setCardContent={setContent} setId={setID} URL="getMessages"/>
                                            </div> */}
                                            { !loading ?
                                            contents ? <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="">
                                                        <div className="">

                                                        {contents.map(e => {
                                                            // console.log(e);

                                      
                                                            return <MessageBar
                                                                By = {e.by}
                                                                received_date = {dateFormatter(e.received_date)}
                                                                message = {e.message}
                                                                read ={e.read}
                                                                key={e._id}
                                                                object={e}
                                                            /> 

                                                            

                                                        })}


                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <Empty/>
                                            : 
                                            <Loading/>
                                            }
                                        <div>
                                            <PaginationBar setPage={setPage} page={page} offSet={offSet}/>
                                            </div>  
                                        </div>
                                    </div>
                                    {/*<!-- [ view-table ] end -->*/}
                                    

                                    {/*<!-- [ view-table ] start -->*/}
                                    <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                            <div className="card-header">
                                                <h5>Message</h5>
                                            </div>
                                                                        
                                                                        
                                            <div className="" style={{marginBottom:"30px",margin:"auto"}}>
                                            <form onSubmit={formik.handleSubmit} style={{marginTop:"50px"}}>


                                            {/* <div className="form-group">
                                                <label htmlFor="to"> To </label>
                                                <input type="text" className="form-control" value={To} id="jobTitle" aria-label="Enter job title" placeholder="Job Title" onChange={e => setTo(e.target.value)} onBlur={toValidation} required/>
                                                    
                                                </div>
                                                { toErr  ?<small id="toError" className="error form-text text-muted error "> {toErr}</small>: null}
                                            */}
                                                <div className="form-group">
                                                    <label htmlFor="to">To</label>
                                                    <input type="text" className="form-control" value={formik.values.jobTitle} id="to" aria-label="Enter the receiver" placeholder="To" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                    { formik.touched.to && formik.errors.to ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.to}</small>: null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="description">Message</label>
                                                    <textarea className="form-control" id="description" rows="5" value={formik.values.description} aria-label="Enter description" onChange={formik.handleChange} onBlur={formik.handleBlur} required></textarea>
                                                    {formik.touched.description && formik.errors.description ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.description}</small>: null}
                                                </div>
                                                <button type="submit" className="btn btn-primary" >Submit</button>
                                            </form>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/*<!-- [ view-table ] start -->*/}
                                </div>
                            </div>
                        </div>
                        <hr/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Messager;