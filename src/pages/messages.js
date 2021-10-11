import Messager from "../components/message/messager";
import { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router';

import { SEND_MESSAGE } from '../GraphQL/Mutations';
import {CHECK_ID, GET_MESSAGES} from '../GraphQL/Queries';

const Message = () => {


    const {id} = useParams();
    const [content,setContent] = useState([]);
    const [Id,setID] = useState('');
    const [page,setPage] = useState(0);
    const [offSet,setOffSet] = useState(1);
    const limit = 10;

    // const {error,loading,data} = useQuery(GET_MESSAGES,{
    //     variables:{
    //         offSet,
    //         page
    //     }
    // });

    // useState(()=>{
    //     if(data){

    //     }
    // },[data])
    
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