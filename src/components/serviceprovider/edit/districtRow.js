import { useState } from 'react';
import swal from 'sweetalert';


const DistrictRow = ({district,action,loading,workRanges,setWorkRange}) => {

   

    const remove = (e)=>{
        e.preventDefault()
        action({
            variables:{
                district:district
            }
        }).then(async res=> {
            

            setWorkRange(workRanges.filter(item => item !== district));

                swal({
                    title: "Success",
                    text: "successfully deleted",
                    icon: "success",
                    button: {
                      text: "Close",
                      closeModal: true,
                    }, 
                })
            }

            

        ).catch(err => {
            console.log(err)
            swal({
                title: "Error",
                text: "Error occurred removing",
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
    <div className="col-sm-12 col-md-7 col-xl-8">

        <div className="unread row align-items-center" style={{marginBottom:'15px'}}>
            
            <div className="col-1 col-sm-1 col-md-1 col-xl-1" >
                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>  </h6>
            </div>

            <div className="col-8 col-sm-7 col-md-5 col-xl-5" style={{margin:'10px'}}>
                <p className="m-0">{district}</p>
            </div>
            
            <div className="col-12 col-sm-3 col-md-4 col-xl-3" style={{margin:'10px'}}>
                {!loading ?
                    <button onClick={remove} className="label theme-bg2 text-white f-12" style={{float:'right',right:"20px"}}>
                        Remove
                        &nbsp; <i className="far fa-trash-alt"></i>
                    </button>
                :
                    <button className="label theme-bg2 text-white f-12" style={{float:'right',right:"20px"}} disabled>
                        Remove
                        &nbsp; <i className="far fa-trash-alt"></i>
                    </button>
                }
            </div>
        </div>
    </div>
     );
}
 
export default DistrictRow;