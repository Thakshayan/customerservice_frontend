import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import AddWorkForm from "../components/work/add/addWork";
import { ADD_WORK } from "../GraphQL/Mutations";
//import { CHECK_WORKER } from "../GraphQL/Queries";

const AddWork = (props) => {

    const [appointment,{loading,error}] = useMutation(ADD_WORK,{
        onCompleted: data =>{
            console.log(data)
            if(data && data.appointment){
                props.history.push(`/CSA/work/${data.appointment._id}`)
            }
            
        }
    })

    const [workerId,setWorkerId] = useState('');
    const [workId,setWorkId] = useState('');

    // const fetchWorker = useQuery(CHECK_WORKER,{
    //     variables:{
    //         workerId:workerId
    //     }
    // })

    // const fetchWorker = useQuery(GET_WORK,{
    //     variables:{
    //         workId:workId
    //     }
    // })

    return ( 
        <AddWorkForm 
            type="Work"
            action={appointment}
            workerId = {workerId}
            setWorkerId = {setWorkerId}
            // checkWorker = {fetchWorker}
            // checkWork = {fetchWork}

        />
     );
}
 
export default AddWork;