import Messager from "../../components/message/messager";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router';

import { SEND_MESSAGE } from '../../GraphQL/Mutations';
import {  GET_WORKER_MESSAGES} from '../../GraphQL/workerQueries';

import { CHECK_USER } from '../../GraphQL/Queries'
//components
import Header from "../../components/headerWorker";
import NavBarWorker from '../../components/navbarWorker';
import Preloader from '../../components/preloader';
import { sumArray } from "../../components/formatter";

const Message = () => {


    const {id} = useParams();
    const [content,setContent] = useState([]);
    const [Id,setID] = useState('');

    const [To,setTo] = useState('');
    const [toError,setToError] = useState('');


    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState(1);
    const limit = 10;

    const {error,loading,data} = useQuery(GET_WORKER_MESSAGES,{
        variables:{
            offset:3,
            page:page
        }
    });

    const [sendMessage,{loadingMessages,loadingError}] = useMutation(SEND_MESSAGE,{
        onCompleted:data => {
            window.location.href = '/success'
        }
    });
    
    useEffect(()=>{
        
        if(data){
            console.log(data)
            setContent(data.getMyMessages)
            setOffSet(sumArray(data.getCountMessages)/3)
        }
    },[data])
    
    const fetchContent =useQuery(CHECK_USER,{
        variables:{
            username:To
        }
    })

    useEffect(()=>{
        console.log(To)
        if(To){
            fetchContent.refetch({
                username:To
            }).then(data =>{

                if(data.data.CheckUsername){
                  
                    setToError('Recipient not exist');
                }else{
                    setToError('');
                }
            }).catch(err =>{
                setToError('Check Recipient');
            });
        }
    },[To])


    return ( 
        <>
        {/* [ Pre-loader ] start */}
            <Preloader/>
        { /* [ Pre-loader ] End 

          [ navigation menu ] start */}
        <NavBarWorker/>
        {/* </div> [ navigation menu ] end 

        [ Header ] start */}
        <Header/>
        {/*<!-- [ Header ] end --> */}
        <Messager
            content={content}
            setPage={setPage}
            page= {page}
            offSet = {offSet}
            loading = {loading}
            action = {sendMessage}
            setToError = {setToError}
            toError = {toError}
            To = {To}
            setTo = {setTo}
            loadingMessages = {loadingMessages}
        />
        </>
     );
}
 
export default Message;