import React, { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { Link } from 'react-router-dom';


import { SIGN_INSP } from '../GraphQL/Mutations';
import SignInForm from '../components/form/signInForm';

const SignIn = (props) => {

    const client = useApolloClient();
    const [signINSP, { loading, error }] = useMutation(SIGN_INSP, {
      onCompleted: data => {
        console.log(data.signINSP)
        if(data.signINSP){
          //store the token
        localStorage.setItem('token', data.signINSP);
        // update the local cache
        client.writeData({ data: { isLoggedIn: true } });
        // redirect the user to the homepage
        props.history.push('/CSA');
        }
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
                

                    <SignInForm action={signINSP} loading={loading} type="Moderator"/>
                    
                    <p className="mb-2 text-muted" >
                        Signin Worker? 
                        <Link to="/signinWorker" style={{color:'#038fcf',fontStyle:'italic',textDecoration:'underline'}}>
                            Worker
                        </Link>
                    </p>
                    <p className="mb-0 text-muted" >
                        Create a Service Provider? 
                        <Link to="signup" style={{color:'#038fcf',fontStyle:'italic',textDecoration:'underline'}}>
                            Signup
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    </div>
     );
}

export default SignIn;
