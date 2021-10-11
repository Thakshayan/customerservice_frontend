import BreadCrumb from '../breadcrumb';
//import SearchBar from '../searchBar';
import PaginationBar from '../pagination';
import MessageBar from './messageBar';



import { useState, useEffect } from "react"
import { useFormik } from 'formik';
import * as Yup from "yup";



const Messager = ({content,setPage,page,offSet}) => {    



    const [To,setTo] = useState();
    const [toErr,setToErr] = useState();

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
            jobTitle:'',
            description:''
        },validationSchema: Yup.object({
            
            
            jobTitle:Yup.string()
                .required("Please give a title"),
            description: Yup.string()
                .required("Please give a short description"),
            
        }),
        onSubmit: values =>{
            if (!toErr){
                values.to = To
            }
             
            alert(JSON.stringify(values))

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
                                            
                                            {content ? <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="">
                                                        <div className="">

                                                        {content.map(e => {
                                                            console.log(e);

                                                            const monthNames = ["January", "February", "March", "April", "May", "June",
                                                            "July", "August", "September", "October", "November", "December"
                                                            ];
                                            
                                                            const date_ob = new Date(e.date);
                                                            
                                                        
                                                            const date = date_ob.getDate()+" "+monthNames[date_ob.getMonth()]+" "+date_ob.getFullYear();
                                                            return <MessageBar
                                                                By = "ID00"
                                                                received_date = "21 July 12:56"
                                                                message = "This is a xample Message"
                                                                read ={true}
                                                                key ={"key"}
                                                            />

                                                            

                                                        })}

                                                            <MessageBar
                                                                By = "ID00"
                                                                received_date = "21 July 12:56"
                                                                message = "This is a xample Message"
                                                                read ={true}     
                                                            /> 
                                                                     
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : null}
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


                                            <div className="form-group">
                                                <label htmlFor="to"> To </label>
                                                <input type="text" className="form-control" value={To} id="jobTitle" aria-label="Enter job title" placeholder="Job Title" onChange={e => setTo(e.target.value)} onBlur={toValidation} required/>
                                                    
                                                </div>
                                                { toErr  ?<small id="toError" className="error form-text text-muted error "> {toErr}</small>: null}
                                           
                                                <div className="form-group">
                                                    <label htmlFor="Title">Title</label>
                                                    <input type="text" className="form-control" value={formik.values.jobTitle} id="jobTitle" aria-label="Enter job title" placeholder="Job Title" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                    { formik.touched.jobTitle && formik.errors.jobTitle ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.jobTitle}</small>: null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="description">Description</label>
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