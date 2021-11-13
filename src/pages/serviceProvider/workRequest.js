import NewWorkRequest from "../../components/work/request/newWorkRequest";
import { GET_NEWBOOKINGS, GET_SEARCH_BOOKING } from '../../GraphQL/Queries';

import { useQuery } from '@apollo/client';
import { useEffect , useState } from 'react';

import swal from "sweetalert";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

const WorkRequest = () => {
    const [id,setID] = useState('');
    


    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

    //retrieve booking
    const {error,loading,data} = useQuery(GET_NEWBOOKINGS,{
        variables:{
            page:page,
            offset:3
        }
    });

    useEffect(()=>{

        if(data){
            
            setContent(data.getMyBooking)
            setContents(data.getMyBooking)
            var count = data.getCountBooking.filter(e => (e._id ==='open'))
           
            if(count[0]){
                
                setOffSet(count[0].Count/3)
            }
        }


    },[data])

    // error occurred
    useEffect(()=>{
        
        if(error){
            swal({
                title: "Error",
                text: "Error occurred in retrieving please refresh",
                icon: "warning",
                button: {
                    text: "Close",
                    closeModal: true,
                }, 
                dangerMode: true  
             })
        }
    
    },[error])

    
    //search booking
    const fetchContent = useQuery(GET_SEARCH_BOOKING,{
        variables:{
            id:id
        }
    });

    useEffect(()=>{
        if(id){
            fetchContent.refetch({
                id:id
            }).then(result =>{
                
                setContent(result.data.searchBooking)
            })
        }else if(contents){
            setContent(contents)
        }
    },[id])


    useEffect(()=>{

        if(data){
            
            setContent(data.getMyBooking)
            setContents(data.getMyBooking)
            var count = data.getCountBooking.filter(e => (e._id ==='open'))
           
            if(count[0]){
                
                setOffSet(count[0].Count/3)
            }
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
            {/*<!-- [ main content] start --> */}
            <NewWorkRequest
                id = {id}
                setID = {setID}
                content = {content}
                setPage = {setPage}
                page = {page}
                offSet = {offSet}
                loading = {loading}
                setContent = {setContent}
            />
            {/*<!-- [ main content] end --> */}
        </div>
    );
}
 
export default WorkRequest;