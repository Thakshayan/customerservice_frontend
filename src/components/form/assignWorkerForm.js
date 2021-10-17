import { useMutation } from "@apollo/client";
// import { ASSIGN_WORKER } from "../../GraphQL/Mutations";


const AssignForm = (workId,workerId) => {

    // const [assignWorker,{loading,error}] = useMutation(ASSIGN_WORKER,{
    //     onCompleted:data=>{
    //         console.log(data)
    //     }
    // })

    const assignWorkerClick = () =>{

        // assignWorker({
        //     variables:{
        //         workerId:workerId,
        //         workId:workId
        //     }
        // })

    }

    return ( 
        
        <button type="submit" onClick={assignWorkerClick} className="btn btn-primary"> Add to the Work</button>                                                    

     );
}
 
export default AssignForm;