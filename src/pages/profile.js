import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import ProfileContent from '../components/profile/employee/profile';

import {useState} from 'react'
import { GET_MODERATOR, GET_WORKER } from '../GraphQL/Queries';
import { useParams } from 'react-router';


import React from "react";


function Profile() {


    const {id} = useParams()

    const fetchWorker = useQuery(GET_WORKER,{
        variables:{
            offset:3,
            page:1
        }
    });

    const fetchModerator = useQuery(GET_MODERATOR,{
        variables:{
            offset:3,
            page:1
        }
    })


    
    const [content,setContent] = useState();
    const [notificationContent,setNotificationContent] = useState();

    // useEffect(()=>{
    //     if(data){
            
    //         setContent(data.worker_me)

    //         setNotificationContent(data.worker_getMyNotification)
            
    //     }
        

    // },[data]);

    return (
        <div>
        {/*<!-- [ Main Content ] start -->*/}
        {/* {content ? <ProfileContent contents={content} notification={notificationContent}/>:loading} */}
        {/*<!-- [ Main Content ] end --> */}

        </div>
    );
  }
  
  export default Profile;
  