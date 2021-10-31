import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AssignWorkerForm from "../components/work/assign/assignWorker";
import { GET_ASSIGNWORKER } from "../GraphQL/Queries";

const AssignWorker = () => {

    const {id} = useParams()
    const [Id,setID] = useState();
    const [workerId, setAssignWorkerID] = useState();
    const [content, setContent] = useState();
    const {error,loading,data} = useQuery(GET_ASSIGNWORKER,{
            variables:{
                id:id
            }       
    });

    useEffect(()=>{
        if(data){
            setContent(data.UniqueSearchAppointment.worker)
        }
    },[data])

    return ( 
        <AssignWorkerForm 
            type = "Employee"
            contents = {content}
            workerId = {workerId}
            setAssignWorkerID = {setAssignWorkerID}
            workId = {id}
            assignWorkerId = {workerId}
        />
     );
}
 
export default AssignWorker;