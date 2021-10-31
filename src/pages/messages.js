import Messager from "../components/message/messager";
import { useState,useEffect } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router';

import { SEND_MESSAGE } from '../GraphQL/Mutations';
import {CHECK_ID, GET_MESSAGES} from '../GraphQL/Queries';

const Message = () => {


    const {id} = useParams();
    const [content,setContent] = useState();
    const [Id,setID] = useState('');
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();
    const limit = 10;

    const {error,loading,data} = useQuery(GET_MESSAGES,{
        variables:{
            offset:3,
            page:page
        }
    });

    useEffect(()=>{

        if(data){
            console.log("Hi")
            console.log(data)
            setContent(data.getMyMessages)
            setOffSet(data.getCountMessages.Count)
        }
    },[data])
    
    // const [sendMessage,{loadingMessages,loadingError}] = useMutation(SEND_MESSAGE,{
    //     onCompleted:data => {
    //         console.log(data)
    //     }
    // })

    // const fetchContent =useQuery(CHECK_ID,{
    //     variables:{
    //         id:To
    //     }
    // })
    return ( 
        <Messager
            content={content}
            setPage={setPage}
            page= {page}
            offSet = {offSet}
        />
     );
}
 
export default Message;