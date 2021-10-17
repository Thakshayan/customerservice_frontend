import ViewNotifications from "../components/notification/notifications";

import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";

//import {GET_NOTIFICATIONS} from "../GraphQL/Queries";


const SPNotification = () => {


    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(0);
    const [offSet,setOffSet] = useState();

    // const {error,loading,data} = useQuery(GET_NOTIFICATIONS,{
    //     variables:{
    //         page:page,
    //         offSet:1,
    //         status:type
    //     }
    // });


    // useEffect(()=>{
    //     console.log(data)
    //     console.log(type)
    //     if(error){
    //         console.log(error)
    //     }
    //     if(data){
      
    //         setContent(data.getNotifications) //change
    //     }


    // },[data])



    return ( 
        <ViewNotifications 
            content={content}
            setPage={setPage} 
            page={page} 
            offSet={offSet}
        />
     );
}
 
export default SPNotification;