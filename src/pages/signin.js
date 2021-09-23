import React, { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { Link } from 'react-router-dom'; 


import { SIGNIN_USER } from '../GraphQL/Mutations';

const SignIn = () => {

    const client = useApolloClient();
    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
      onCompleted: data => {
        // store the token
        localStorage.setItem('token', data.signIn);
        // update the local cache
        client.writeData({ data: { isLoggedIn: true } });
        // redirect the user to the homepage
        window.location="/"
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
                        <i className="feather icon-unlock auth-icon"></i>
                    </div>
                    <h3 className="mb-4">Login</h3>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="ID"/>
                    </div>
                    <div className="input-group mb-4">
                        <input type="password" className="form-control" placeholder="password"/>
                    </div>
                    {/* <div className="form-group text-left">
                        <div className="checkbox checkbox-fill d-inline">
                            <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" checked=""/>
                            <label for="checkbox-fill-a1" className="cr"> Save Details</label>
                        </div>
                    </div> */}
                    <button className="btn btn-primary shadow-2 mb-4">Login</button>
                    <p className="mb-2 text-muted">Forgot password? <Link to="">Reset</Link></p>
                    <p className="mb-0 text-muted">Don’t have an account? <Link to="">Signup</Link></p>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default SignIn;