import BreadCrumb from '../../breadcrumb';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';
import ButtonCard from '../../buttonCard';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router';



function AddWorkerForm({type,action,workerId,setWorkerId,checkWorker}){

    const {id} = useParams();

    const [Id,setID] = useState('');
    const [workerArray,setWorkerArray] = useState([]);
    
    const [error,setError] = useState('');

    

    const addWorker = (e)=>{

        // checkWorker.refetch({
        //     workerId:workerId
        // }).then(data => {
        //     console.log(data)
        //     if(data){
        //         console.log(data)
        //         if (workerArray.indexOf(workerId) === -1){
        //             setWorkerArray([...workerArray,workerId])
        //             setError("");
        //         }else{
        //             setError("Already Added to the list");
        //         }
        //     }
        // })

        if (workerArray.indexOf(workerId) === -1){
            setWorkerArray([...workerArray,workerId])
            setError("");
        }else{
            setError("Already Added to the list");
        }
       
        

    }

    const removeWorker = (e)=>{
        if(e.target.firstChild){
            const value = e.target.firstChild.data
            setWorkerArray(workerArray.filter(item => item !== value))
        }else if(e.target.previousSibling){
            const value = e.target.previousSibling.previousSibling.data
            setWorkerArray(workerArray.filter(item => item !== value))
        }
        
    }
    
    const formik = useFormik({
        initialValues:{
            bookingID:id,
            workId:'',
            estimation:'',
            date:'',
            workers: workerArray
        },validationSchema: Yup.object({
            
            workId: Yup.string()
                .required('Please enter the Worker ID')
                .matches(/^[\w\d]+$/,"can only have letters and digits"),
            date:Yup.date()
                .required("Please select a date"),
            estimation: Yup.number()
                .required('Please enter duration period'),
                
            
        }),
        onSubmit: values => {

            values.workers = workerArray;
                values.estimation = String(values.estimation)
                
                alert(JSON.stringify(values,null,2))

               action({
                    variables:values
                })
                


           
            // if(workerArray.length >0){
                
            //     values.workers = workerArray;
            //     values.estimation = String(values.estimation)
                
            //     alert(JSON.stringify(values,null,2))

            //    action({
            //         variables:values
            //     })
                
                
            // }else {
            //     setError("Add Atleast one Worker");
            // }
        }
    })





    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">

                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type={type} reason="Add" />
                        {/*<!-- [ breadcrumb ] end -->*/}

                        <div className="main-body">
                            <div className="page-wrapper">

                                {/*<!-- [ Basic info ] start -->*/}
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Basic Componant</h5>
                                            </div>
                                            <div className="card-body">
                                                <h5>{type}</h5>
                                                <hr/>
                                                <form onSubmit={formik.handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-6">

                                                            <div className="form-group">
                                                                <label htmlFor="workId">Work ID</label>
                                                                <input type="text" className="form-control" id="workId" value={formik.values.workId} aria-label="Enter work Id" placeholder="Work ID" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.workId && formik.errors.workId ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.workId}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="estimation">Estimation(In days)</label>
                                                                <input type="Number" className="form-control" value={formik.values.estimation} min="1" aria-label="Enter estimation in days" id="estimation" placeholder="Estimation" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.estimation && formik.errors.estimation ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.estimation}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="date">Joined Date</label>
                                                                <input type='date'  className="form-control" id="date" value={formik.values.date}  onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.date && formik.errors.date ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.date}</small>: null}
                                                            </div> 

                                                        
                                                    </div>
                                                    <div className="col-md-6">
                                                        

                                                 
                                                            

                                                            <div className="form-group">
                                                                <label htmlFor="workerId">Worker ID</label>
                                                                <div className="input-group mb-3">
                                                                    <input type="text" className="form-control" placeholder="Add worker ID" aria-label="Add worker ID" aria-describedby="Add worker ID" onBlur={(e)=>{setWorkerId(e.target.value)}} />
                                                                    <div className="input-group-append">
                                                                        <button className="btn btn-primary" type="button" onClick={addWorker}>Add Workers</button>
                                                                    </div>
                                                                </div>
                                                                {error ? <small id="nameError" className="error form-text text-muted error "> { error }</small>:null}    
                                                            </div>

                                                            
                                                            <div className="d-flex row" style={{padding:"10px"}}>

                                                                {workerArray ? 

                                                                    workerArray.map((e)=>{
                                                                        return <ButtonCard id={e} method={removeWorker} key={e}/>
                                                                    })
                                                                :null}
                                                                
                                                            </div>
                                                        
                                                            


                                                            
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary" style={{float:'right'}}>Submit</button>
                                                        
                                            </form>
                                            </div>
                                        </div>
                                 
                                    </div>
                                </div>
                                {/*<!-- [ Basic info ] end -->*/}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWorkerForm;