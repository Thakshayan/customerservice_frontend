import BreadCrumb from '../../breadcrumb';
import PasswordChanger from '../../form/changePassword';
import ChangeCard from '../../form/changeCard';
import WorkerInfoCard from '../../profile/workerInfoCard';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Empty from '../../empty';
import Loading from '../../loading';
import ElementCard from '../elementCard';

function EditEmployeeInfo({type,content,loading,id,setID,action}){


    useEffect(()=>{
        console.log(loading)
    },[])
    
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

                                {/*<!-- [ password update form ] start -->*/}
                                    

                        <div className="row"> 
                                    <div className="col-xl-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Edit Password</h5>
                                            </div>
                                        
                                        
                                            {content ?
                                            <div className="card-block px-0 py-3">
                                        
                                                        <div className="row d-flex" style={{margin:'auto',alignItems:'center',justifyContent:'center'}}>

                                                            { content[0] ? 

                                                            content.map ((e) => {
                                                            
                                                            return <ElementCard
                                                                key = {e._id}
                                                                content = {e}
                                                                type = {type}
                                                                childComponent = {
                                                                    <PasswordChanger
                                                                        id={id}
                                                                    />    
                                                                }
                                                                    
                                                            />})
                                                            
                                                            :
                                                            <div style={{width:'100%'}}>
                                                                <Empty/>
                                                            </div>
                                                            }



                                                        
                                                                                            
                                                        </div>

                                            </div> :
                                                <Loading/>
                                            }
                                                                        
                                        </div>
                                    </div>
                                </div>

                                {/* <ChangeCard
                                    title ='Change Password'
                                    setID = {setID}
                                    id ={id}
                                    content = {content}
                                    loading = {loading}
                                    type = {type}
                                    action = {action}
                                    
                                    
                                    childComponent ={
                                        <PasswordChanger
                                            id={id}
                                        />}
                                /> */}
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