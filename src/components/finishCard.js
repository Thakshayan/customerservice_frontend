import { useState } from 'react';
import swal from 'sweetalert';

const FinishCard = ({title,action,workerId,leftDate,loading}) => {

    const [left_date,setLeftDate] = useState(leftDate)

    const deleteSubmit = (e)=>{
        e.preventDefault()
        
            action({
               variables:{
                   workerId:workerId
                }
            }).then(res =>{
                setLeftDate(true)
                swal({
                    title: "Success",
                    text: "Successfully removed",
                    icon: "success",
                    button: {
                      text: "Close",
                      closeModal: true,
                    } 
                
                })
                
            }).catch(err=>{
                swal({
                    title: "Error",
                    text: "Error occurred in the search",
                    icon: "warning",
                    button: {
                      text: "Close",
                      closeModal: true,
                    }, 
                    dangerMode: true  
                })
            })
    }

    return ( 
        <div className="card yearly-sales">
            <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                <div className="card-header">
                    <h5>{title}</h5>
                </div>
                                            
                                            
                <div style={{paddingTop:"20px",float:"right"}}>
                    {!left_date  ?
                    !loading ?<button className= "btn btn-mtd btn-danger" onClick={deleteSubmit} style={{width:"200px",height:"25px",padding:'0 0'}}> 
                        Suspend Employee
                        {<i className="fas fa-user-slash" style={{paddingLeft:'10px'}}></i>}                     
                    </button>: 
                    <button className= "btn btn-mtd btn-danger" style={{width:"200px",height:"25px",padding:'0 0'}} loading> 
                        Loading ...
                        {/* {<i className="fas fa-user-slash" style={{paddingLeft:'10px'}}></i>}                      */}
                    </button>:
                    <button className= "btn btn-mtd btn-success" style={{width:"200px",height:"25px",padding:'0 0'}} disabled> 
                        Already Suspended &nbsp;
                        <i className="fas fa-check-circle"></i>
                    </button>}
                </div>
            </div>
        </div>
     );
}
 
export default FinishCard;