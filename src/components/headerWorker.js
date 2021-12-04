import {BrowserRouter as Router,Link} from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

import { Redirect } from 'react-router';

import {GET_ME} from '../GraphQL/workerQueries'

function Header(){

    const {error,loading,data} = useQuery(GET_ME);
    const [userName,setUserName] = useState();
    const [id,setId] = useState();

    const signOut = ()=>{
        localStorage.removeItem('token')
        window.location.href='/signin'
    }

    useEffect(()=>{
        if(data){
            if(data.worker_me){
                
                setId(data.worker_me._id)
                setUserName(data.worker_me.name)
            }
           
        }
        
    },[data])


    return(
        <header className="navbar pcoded-header navbar-expand-lg navbar-light">
            <div className="m-header">
                <a className="mobile-menu" id="mobile-collapse1" href="#" ><span></span></a>
                <a href="/" className="b-brand">
                       <div className="b-bg">
                           <i className="feather icon-trending-up"></i>
                       </div>
                       <span className="b-title">Customer Service App</span>
                   </a>
            </div>
            <a className="mobile-menu" id="mobile-header" href="#0">
                <i className="feather icon-more-horizontal"></i>
            </a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">

                    
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <div className="dropdown">
                            <a className="dropdown-toggle" href="#0" data-toggle="dropdown"><i className="icon feather icon-bell"></i></a>
                            <div className="dropdown-menu dropdown-menu-right notification">
                                
                                <div className="noti-footer">
                                    <a href="/Worker/notifications">show all notifications</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown drp-user">
                            <a href="#0" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="icon feather icon-settings"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right profile-notification">
                                <div className="pro-head">
                                    <img src="/assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile"/>
                                    <span>{userName}</span>
                                    <button onClick={signOut} className="dud-logout" style={{backgroundColor:'#04a9f5',border:'none'}} >
                                    <i className="feather icon-log-out"></i>
                                        <div className="tooltips" id="tooltips" >
                                            
                                            <span className="tooltiptext" style={{left:0}}>Logout</span>
                                        </div> 
                                        
                                    </button>
                                    
                                </div>
                                <ul className="pro-body">
                                    {/* <li><a href="#0" className="dropdown-item"><i className="feather icon-settings"></i> Settings</a></li> */}
                                    <li><a href={`/Worker/profile`} className="dropdown-item"><i className="feather icon-user"></i> My Profile</a></li>
                                    <li><a href={`/Worker/messages`} className="dropdown-item"><i className="feather icon-mail"></i> Messages</a></li>
                                    <li><button onClick={signOut} className="dropdown-item"><i className="feather icon-lock"></i> Log Out</button></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;