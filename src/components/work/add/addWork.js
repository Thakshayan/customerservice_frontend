import BreadCrumb from '../../breadcrumb';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';
import ButtonCard from '../../buttonCard';
import { useMutation } from '@apollo/client';
import { ADD_WORK } from '../../../GraphQL/Mutations';


function AddWorkerForm({type}){

    const [id,setID] = useState('');
    const [workerArray,setWorkerArray] = useState([]);
    const [workerId,setWorkerId] = useState('');
    const [error,setError] = useState('');

    const [addWork,{loading,errors}] = useMutation(ADD_WORK,{
        onCompleted: data=>{
            console.log(data)
            //setID()
        }
    })

    const addWorker = (e)=>{
       
        if (workerArray.indexOf(workerId) === -1){
            setWorkerArray([...workerArray,workerId])
            setError("");
        }else{
            setError("Already Added to the list");
        }

    }

    const removeWorker = (e)=>{
        if(e.target.firstChild){
            const value = e.target.firstChild.data
            setWorkerArray(workerArray.filter(item => item !== value))
        }else if(e.target.previousSibling){
            const value = e.target.previousSibling.previousSibling.data
            setWorkerArray(workerArray.filter(item => item !== value))
        }
        
    }
    
    const formik = useFormik({
        initialValues:{
            workId:'',
            jobTitle:'',
            description:'',
            estimation:'',
            phone:'',
            address:'',
            customerId:'',
            workers: workerArray
        },validationSchema: Yup.object({
            
            workId: Yup.string()
                .required('Please enter the Worker ID')
                .matches(/^[\w\d]+$/,"can only have letters and digits"),
            jobTitle:Yup.string()
                .required("Please give a title"),
            description: Yup.string()
                .required("Please give a short description"),
            phone: Yup.number()
                .required('Please enter the phone number'),
            estimation: Yup.number()
                .required('Please enter the phone number'),
            address: Yup.string()
                .required('Please fill the address'),
            customerId: Yup.string()
                // .required('Please enter the Worker ID')
                .matches(/^[\w\d]+$/,"can only have letters and digits"),
        }),
        onSubmit: values => {

            if(workerArray.length >0){
                
                values.workers = workerArray;
                values.phone = Number(values.phone);
                values.estimation = Number(values.estimation)
                
                alert(JSON.stringify(values,null,2))

                addWork({
                    variables:values
                })
                
                
            }else {
                setError("Add Atleast one Worker");
            }
        }
    })





    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">

                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type={type} reason="Add" />
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
                                            <div className="card-body">
                                                <h5>{type}</h5>
                                                <hr/>
                                                <form onSubmit={formik.handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-6">

                                                            <div className="form-group">
                                                                <label htmlFor="workId">Work ID</label>
                                                                <input type="text" className="form-control" id="workId" value={formik.values.workId} aria-label="Enter work Id" placeholder="Work ID" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.workId && formik.errors.workId ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.workId}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="jobTitle">Job Title</label>
                                                                <input type="text" className="form-control" value={formik.values.jobTitle} id="jobTitle" aria-label="Enter job title" placeholder="Job Title" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                { formik.touched.jobTitle && formik.errors.jobTitle ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.jobTitle}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="description">Job Description</label>
                                                                <textarea className="form-control" id="description" rows="5" value={formik.values.description} aria-label="Enter description" onChange={formik.handleChange} onBlur={formik.handleBlur} required></textarea>
                                                                {formik.touched.description && formik.errors.description ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.description}</small>: null}
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                                <label htmlFor="estimation">Estimation(In days)</label>
                                                                <input type="Number" className="form-control" value={formik.values.estimation} aria-label="Enter estimation in days" id="estimation" placeholder="Estimation" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.estimation && formik.errors.estimation ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.estimation}</small>: null}
                                                            </div>
                                                            

                                                        
                                                    </div>
                                                    <div className="col-md-6">
                                                        

                                                            <div className="form-group">
                                                                <label htmlFor="customerId">Customer ID</label>
                                                                <input type="text" className="form-control" id="customerId" value={formik.values.id} aria-label="Enter Customer ID" placeholder="Customer ID" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.customerId && formik.errors.customerId ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.customerId}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="address">Address</label>
                                                                <input type="text" className="form-control" value={formik.values.address} aria-label="Enter Address" id="address" placeholder="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                { formik.touched.address && formik.errors.address ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.address}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="phone">Customer Contact Number</label>
                                                                <input type="tel" className="form-control" value={formik.values.phone} id="phone" aria-label="Enter phone Number" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.phone && formik.errors.phone ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.phone}</small>: null}
                                                            </div>

                                                            <div className="form-group">
                                                                <label htmlFor="workerId">Worker ID</label>
                                                                <div className="input-group mb-3">
                                                                    <input type="text" className="form-control" placeholder="Add worker ID" aria-label="Add worker ID" aria-describedby="Add worker ID" onBlur={(e)=>{setWorkerId(e.target.value)}} required/>
                                                                    <div className="input-group-append">
                                                                        <button className="btn btn-primary" type="button" onClick={addWorker}>Add Workers</button>
                                                                    </div>
                                                                </div>
                                                                {error ? <small id="nameError" className="error form-text text-muted error "> { error }</small>:null}    
                                                            </div>

                                                            
                                                            <div className="d-flex row" style={{padding:"10px"}}>

                                                                {workerArray ? 

                                                                    workerArray.map((e)=>{
                                                                        return <ButtonCard id={e} method={removeWorker} key={e}/>
                                                                    })
                                                                :null}
                                                                
                                                            </div>
                                                        
                                                            


                                                            
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                        
                                            </form>
                                            </div>
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
    )
}

export default AddWorkerForm;