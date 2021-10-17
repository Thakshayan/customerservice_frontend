import BreadCrumb from "../../breadcrumb";

import {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; 

import { Link } from "react-router-dom";

const EditServiceInfo = () => {

    const {error,setErr} = useState();

    const validate = (e)=>{
        e.preventDefault()
    }

    const submitDistrict = ()=>{

    }

    const removeDistrict = ()=>{

    }

    
    const removeService = ()=>{

    }

    const formik = useFormik({
        initialValues:{},validationSchema: Yup.object({
            
            
            jobTitle:Yup.string()
                .required("Please give a title"),
            description: Yup.string()
                .required("Please give a short description"),
            
        }),
        onSubmit: values =>{

        }
    })

    return ( 
        <div className="pcoded-main-container main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    {/*<!-- [ breadcrumb ] start -->*/}
                    <BreadCrumb type="Services"  />
                    {/*<!-- [ breadcrumb ] end -->*/}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/*<!-- [ Main Content ] start -->*/}


                            <div className="card yearly-sales">
                                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                    <div className="card-header">
                                        <h5>Services</h5>
                                    </div>


                                    <div className="unread row align-items-center" style={{marginBottom:'15px 0 15px 0'}}>
                                        
                                        <div className="col-4 col-sm-4 col-md-3 col-xl-3" >
                                            <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i> &nbsp; Name  </h6>
                                        </div>

                                        <div className="col-sm-8 col-md-5 col-xl-5" style={{margin:'10px'}}>
                                            <p className="m-0">this is a sample service</p>
                                        </div>
                                        
                                        <div className="col-12 col-sm-12 col-md-3 col-xl-3" style={{margin:'10px'}}>
                                            <button onClick={removeService} className="label theme-bg2 text-white f-12" style={{float:'right',right:"20px"}}>
                                                Remove
                                                &nbsp; <i className="far fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-md-8 col-xl-6" style={{marginBottom:"30px"}}>
                                    <form onSubmit={formik.handleSubmit} style={{marginTop:"50px"}}>
                                            <div className="form-group">
                                                <label htmlFor="Title">Name</label>
                                                <input type="text" className="form-control" value={formik.values.jobTitle} id="jobTitle" aria-label="Enter job title" placeholder="Job Title" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                { formik.touched.jobTitle && formik.errors.jobTitle ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.jobTitle}</small>: null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Description</label>
                                                <textarea className="form-control" id="description" rows="5" value={formik.values.description} aria-label="Enter description" onChange={formik.handleChange} onBlur={formik.handleBlur} required></textarea>
                                                {formik.touched.description && formik.errors.description ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.description}</small>: null}
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                        </div>

                                </div>
                            </div>

                            <div className="card yearly-sales">
                                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                    <div className="card-header">
                                        <h5>Available districts</h5>
                                    </div>
                                    
                                    <div className="row">

                                    

                                    <div className="col-sm-12 col-md-7 col-xl-8">

                                        <div className="unread row align-items-center" style={{marginBottom:'15px'}}>
                                            
                                            <div className="col-1 col-sm-1 col-md-1 col-xl-1" >
                                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>  </h6>
                                            </div>

                                            <div className="col-8 col-sm-7 col-md-5 col-xl-5" style={{margin:'10px'}}>
                                                <p className="m-0">Jaffna</p>
                                            </div>
                                            
                                            <div className="col-12 col-sm-3 col-md-4 col-xl-3" style={{margin:'10px'}}>
                                                <button onClick={removeDistrict} className="label theme-bg2 text-white f-12" style={{float:'right',right:"20px"}}>
                                                    Remove
                                                    &nbsp; <i className="far fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 col-md-5 col-xl-4">
                                        <form >
                                            <div className="form-group">
                                                <label htmlFor="district"> Districts</label>
                                               
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option selected></option>
                                                    <option>Jaffna</option>
                                                    <option>Mannar</option>
                                                    <option>Ampara</option>
                                                    <option>Badulla</option>
                                                    <option>Batticaloa</option>
                                                    <option>Colombo</option>
                                                    <option>Galle</option>
                                                    <option>Gampaha</option>
                                                    <option>Hambantota</option>
                                                    <option>Kalutara</option>
                                                    <option>Kandy</option>
                                                    <option>Kegalle</option>
                                                    <option>Kilinochchi</option>
                                                    <option>Kurunegala</option>
                                                    <option>Matale</option>
                                                    <option>Matara</option>
                                                    <option>Monaragala</option>
                                                    <option>Mullaitivu</option>
                                                    <option>Nuwara Eliya</option>
                                                    <option>Polonnaruwa</option>
                                                    <option>Puttalam</option>
                                                    <option>Ratnapura</option>
                                                    <option>Trincomalee</option>
                                                    <option>Vavuniya</option>
                                                    <option>Anuradhapura</option>
                                                </select>
                                                </div>
                                                { error ? <small id="districtError" className="error form-text text-muted error "> {error}</small>: null}
                                           
                                            <button type="submit" onClick={submitDistrict } className="btn btn-primary" style={{float:"right",marginBottom:"30px"}}>Add</button>
                                        </form>
                                    </div>

                                    </div>

                                    
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
 
export default EditServiceInfo;