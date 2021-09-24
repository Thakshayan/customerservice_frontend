import React, { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { Link } from 'react-router-dom'


import SignUpForm from '../components/form/signupForm';
import { SIGNUP_USER } from '../GraphQL/Mutations';



const SignUp = props => {




    const client = useApolloClient();
    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {

        
      onCompleted: data => {
          console.log(data)
        // store the token
        localStorage.setItem('token', data.signUp);
        // update the local cache
        client.writeData({ data: { isLoggedIn: true } });
        // redirect the user to the homepage
        props.history.push('/');
      }
    });

    return ( 
    <div className="auth-wrapper">
        <div className="auth-content">
            <div className="auth-bg">
                <span className="r"></span>
                <span className="r s"></span>
                <span className="r s"></span>
                <span className="r"></span>
            </div>
            <div className="card">
                <div className="card-body text-center">
                    <div className="mb-4">
                        <i className="feather icon-user-plus auth-icon"></i>
                    </div>
                    <h3 className="mb-4">Sign up</h3>

                    <SignUpForm action={signUp} formType="signup"/>
                    <p className="mb-0 text-muted">Allready have an account? <a href="auth-signin.html"> Log in</a></p>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default SignUp;
    // <div className="auth-wrapper">
    //     <div className="auth-content">
    //         <div className="auth-bg">
    //             <span className="r"></span>
    //             <span className="r s"></span>
    //             <span className="r s"></span>
    //             <span className="r"></span>
    //         </div>
    //         <div className="card">
    //             <div className="card-body text-center">
    //                 <div className="mb-4">
    //                     <i className="feather icon-user-plus auth-icon"></i>
    //                 </div>
    //                 <h3 className="mb-4">Sign up</h3>
    //                 <div className="input-group mb-3">
    //                     <input type="text" className="form-control" placeholder="Username"/>
    //                 </div>
    //                 <div className="input-group mb-3">
    //                     <input type="email" className="form-control" placeholder="Email"/>
    //                 </div>
    //                 <div className="input-group mb-4">
    //                     <input type="password" className="form-control" placeholder="password"/>
    //                 </div>
    //                 <div className="form-group text-left">
    //                     <div className="checkbox checkbox-fill d-inline">
    //                         <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-1" checked=""/>
    //                         <label for="checkbox-fill-1" className="cr"> Save Details</label>
    //                     </div>
    //                 </div>
    //                 <div className="form-group text-left">
    //                     <div className="checkbox checkbox-fill d-inline">
    //                         <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"/>
    //                         <label for="checkbox-fill-2" className="cr">Send me the <a href="#!"> Newsletter</a> weekly.</label>
    //                     </div>
    //                 </div>
    //                 <button className="btn btn-primary shadow-2 mb-4">Sign up</button>
    //                 <p className="mb-0 text-muted">Allready have an account? <a href="auth-signin.html"> Log in</a></p>
    //             </div>
    //         </div>
    //     </div>
    // </div>