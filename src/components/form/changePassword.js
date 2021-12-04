import React,{ useState } from "react";

import * as Yup from 'yup';
import {useFormik} from 'formik';
import { useMutation } from "@apollo/client";

import swal from 'sweetalert';

//import { passwordValidator } from "../formComponents/formValidator";

const PasswordChanger = ({id,action}) => {

    const [addPassword,setAddPassword] = useState("password");
    const [addClassName, setAddClassName] = useState("fa fa-eye");

    const toggleAddPassword = (e) => {
        if (addPassword === "password"){
            setAddPassword("text");
            setAddClassName('fa fa-eye-slash');
        }else{
            setAddPassword("password");
            setAddClassName('fa fa-eye');
        } 
    };




    

    const formik = useFormik({
        initialValues:{
            password:'',
            confirmPassword:''
        },
        validationSchema: Yup.object({
            password:  Yup.string()
                .required('Please enter the password')
                .min(4,"Password should be more than 3 letters")
                .matches(/[A-Z]/,"Password should have a capital letter")
                .matches(/[0-9]/,"Password should have numbers"),
            confirmPassword: Yup.string()
                .required("Please confirm the password")
                .oneOf([Yup.ref('password'),null],"Password must match")
        }) ,
        onSubmit: values => {
           

                action({
                    variables:{
                        password:values.password
                    }
                }).then(data=>{
                    swal({
                        title: "Success",
                        text: "successfully updated",
                        icon: "success",
                        button: {
                          text: "Ok",
                          closeModal: true,
                        }, 
                        
                    })
                    
                }).catch(err =>{
                    swal({
                        title: "Error",
                        text: "Error occurred in the update",
                        icon: "warning",
                        button: {
                          text: "Close",
                          closeModal: true,
                        }, 
                        dangerMode: true  
                    })
                })
            }
    });

    

    return ( 
        <form onSubmit={formik.handleSubmit}>
           <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type={addPassword} className="form-control" value={formik.values.password} id="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                <div className="tooltips" id="tooltips" style={{float:'right'}} >
                    <i className={addClassName} id="visibile" style={{float:"right",cursor:"pointer",transform:"translate(-10px,-30px)"}} onClick={toggleAddPassword}></i>
                    <span className="tooltiptext" style={{width:'150px',transform:"translate(-20px,-30px)"}}>{addPassword=='password'?'view password':'hide password'}</span>
                </div> 
                {formik.touched.password && formik.errors.password ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.password}</small>: null}
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type={addPassword} className="form-control" id="confirmPassword"  placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                <div className="tooltips" id="tooltips" style={{float:'right'}} >
                    <i className={addClassName} id="visibile" style={{float:"right",cursor:"pointer",transform:"translate(-10px,-30px)"}} onClick={toggleAddPassword}></i>
                                        
                    <span className="tooltiptext" style={{width:'150px',transform:"translate(-20px,-30px)"}}>{addPassword=='password'?'view password':'hide password'}</span>
                </div> {formik.touched.confirmPassword && formik.errors.confirmPassword ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.confirmPassword}</small>: null}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
     );
}
 
export default PasswordChanger;