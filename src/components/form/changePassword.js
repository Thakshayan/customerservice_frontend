import React,{ useState } from "react";

import * as Yup from 'yup';
import {useFormik} from 'formik';

//import { passwordValidator } from "../formComponents/formValidator";

const PasswordChanger = ({id}) => {

    const [password,setPassword] = useState("password");
    const [className, setClassName] = useState("fa fa-eye");

    // const validate = values => {

    //     const errors = {};

    //     errors.passwordUpdate = passwordValidator(values.passwordUpdate);
    //     errors.confirmPasswordUpdate = (values.password !== values.confirmPasswordUpdate)?"Passwords not matching":null;

    //     console.log("Hi")

    //     if ( errors.passwordUpdate  || errors.confirmPasswordUpdate ){
    //         return errors;
    //     }
    //     const error = {};
    //     return error;

    // }

    const togglePassword = (e) => {
        if (password == "password"){
            setPassword("text");
            setClassName('fa fa-eye-slash');
        }else{
            setPassword("password");
            setClassName('fa fa-eye');
        } 
    };




    

    const passwordFormik = useFormik({
        initialValues:{
            passwordUpdate:'',
            confirmPasswordUpdate:''
        },
        validationSchema: Yup.object({
            passwordUpdate: Yup.string()
                .required('Please enter the password')
                .min(4,"Password should be more than 3 letters")
                .matches(/[A-Z]/,"Password should have a capital letter")
                .matches(/[0-9]/,"Password should have numbers"),
            confirmPasswordUpdate: Yup.string()
                .required("Please confirm the password")
                .oneOf([Yup.ref('passwordUpdate'),null],"Password must match")
        }) ,
        onSubmit: values => {
            alert(JSON.stringify(values));

            fetch(`http://localhost:8000/serviceprovider/editPassword/${id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(values)
            }).then(()=>{
                alert("Successfully submitted"); 
            }).catch((err)=>{
                console.log(err);
            })
            }
    });

    

    return ( 
        <form onSubmit={passwordFormik.handleSubmit}>
            <div className="form-group" >
                <label htmlFor="password">Password</label>    
                <input type={password} className="form-control"  id="passwordUpdate" value={passwordFormik.values.passwordUpdate} placeholder="Password" onChange={passwordFormik.handleChange} onBlur={passwordFormik.handleBlur} required/>
                <i className={className} id="visibile" style={{float:"right",cursor:"pointer",transform:"translate(-10px,-30px)"}} onClick={togglePassword}></i>
                {passwordFormik.touched.passwordUpdate && passwordFormik.errors.passwordUpdate ? <small id="nameError" className="error form-text text-muted error "> {passwordFormik.errors.passwordUpdate}</small>:null}
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type={password} className="form-control" id="confirmPasswordUpdate" value={passwordFormik.values.confirmPasswordUpdate} placeholder="Confirm Password" onChange={passwordFormik.handleChange} onBlur={passwordFormik.handleBlur} required/>
                <i className={className} id="visibile" style={{float:"right",cursor:"pointer",transform:"translate(-10px,-30px)"}} onClick={togglePassword}></i>
                {passwordFormik.touched.confirmPasswordUpdate && passwordFormik.errors.confirmPasswordUpdate ? <small id="nameError" className="error form-text text-muted error ">{passwordFormik.errors.confirmPasswordUpdate}</small>:null}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
     );
}
 
export default PasswordChanger;