import ViewNotifications from "../../components/notification/notifications";

import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";

import {GET_WORKER_NOTIFICATION} from "../../GraphQL/Queries";
import { useParams } from "react-router";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

const Notification = () => {

    const {id} = useParams();

    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

    const {error,loading,data} = useQuery(GET_WORKER_NOTIFICATION,{
        variables:{
            worker:id,
            page:page,
            offset:5
        }
    });


    useEffect(()=>{

        if(error){
            console.log(error)
        }
        if(data){
            console.log(data)
            setContent(data.getWorkerNotification); 
            //setOffSet(data.getCountNotification.Count/1) //change
        }


    },[data])



    return ( 
        <div>
         {/* [ Pre-loader ] start */}
         <Preloader/>
            { /* [ Pre-loader ] End 
            [ navigation menu ] start */}
            <NavBar/>
            {/* </div> [ navigation menu ] end 
            [ Header ] start */}
            <Header/>
            {/*<!-- [ Header ] end --> */}
        <ViewNotifications 
            content={content}
            setPage={setPage} 
            page={page} 
            offSet={offSet}
            loading={loading}
        />
        </div>
     );
}
 
export default Notification;