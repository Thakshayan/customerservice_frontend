import BreadCrumb from '../../breadcrumb';
import PasswordChanger from '../../form/changePassword';
import ChangeCard from '../../form/changeCard';
import WorkerInfoCard from '../../profile/workerInfoCard';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function EditEmployeeInfo({type}){


    const {id} = useParams()
    const [Id,setID] = useState(id);
    

    useEffect(()=>{        
        setID(Id)
    },[Id])

    
    const formik = useFormik({
        initialValues:{
            id:id,
            phone:'',
            date:'',
            email:'',
            // type: type,
        },validationSchema: Yup.object({

            id: Yup.string()
                .required('Please enter the Worker ID')
                .matches(/^[\w\d]+$/,"can only have letters and digits"),
            phone: Yup.number()
                .required('Please enter the phone number'),
            email: Yup.string()
                .email('Invalid email Address')
                .required('Please enter the email address'),
            date:Yup.date()
                .required("Please select a date"),
            // type:Yup.string()
            //     .required("Please select a type")
            //     .matches(/\w+/,"cannot have special characters")  
        }),
        onSubmit: values => {
            alert(JSON.stringify(values,null,2))
            const employee = values
            
            console.log(employee)

            
            }
    })





    return(  
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">

                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Employee" reason="Edit" />
                        {/*<!-- [ breadcrumb ] end -->*/}

                        <div className="main-body">
                            <div className="page-wrapper">


                                 {/*<!-- [ Basic info ] start -->*/}
                                 <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Worker Componant</h5>
                                            </div>
                                            <div className="card-body">
                                                <h5>{type}</h5>
                                                <hr/>
                                                <form onSubmit={formik.handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-6">

                                                            <div className="form-group">
                                                                <label htmlFor="workerId">Worker ID</label>
                                                                <input type="text" className="form-control" id="id" value={formik.values.id} placeholder="Worker ID" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.errors.id && formik.touched.id ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.id}</small>: null}
                                                            </div> 
                                                            <div className="form-group">
                                                                <label htmlFor="phone">Phone Number</label>
                                                                <input type="tel" className="form-control" value={formik.values.phone} id="phone" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.phone && formik.errors.phone ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.phone}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="joinedDate">Joined Date</label>
                                                                <input type='date'  className="form-control" id="date" value={formik.values.date} placeholder="DD/MM/YYYY" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.date && formik.errors.date ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.date}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Email address</label>
                                                                <input type="email" className="form-control" value={formik.values.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.email && formik.errors.email ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.email}</small>: null}
                                                            </div>
                                                            {/* <div className="form-group">
                                                                <label htmlFor="type">Designation</label>
                                                                <input type='text'  className="form-control" id="type" value={formik.values.type} placeholder="Designation" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.type && formik.errors.type ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.type}</small>: null}
                                                            </div>
                                                             */}


                                                        
                                                    </div>

                                                    <div className="col-md-6">    
                                                        <WorkerInfoCard id={id} />
                                                    </div>

                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                        
                                            </form>
                                            </div>
                                        </div>
                                 
                                    </div>
                                </div>
                                {/*<!-- [ Basic info ] end -->*/}

                                {/*<!-- [ password update form ] start -->*/}
                                <ChangeCard
                                    title ='Change Password'
                                    setID = {setID}
                                    id = {id}
                                    childComponent ={
                                        <PasswordChanger
                                            id={id}
                                        />}
                                />
                                {/*<!-- [ password update form ] end -->*/}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEmployeeInfo;