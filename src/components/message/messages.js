import MessageBar from './messageBar';
import {Link} from "react-router-dom"
import { useEffect,useState } from 'react';
//import { GET_SP_MESSAGE } from '../../GraphQL/Queries';

function Message({title,content,id}){

    const [Notification,setNotification] = useState([]);



    useEffect(()=>{
        if(content){
            setNotification(content)
        }
        
    },[])


    return(
        <div className="col-xl-12 col-md-12">
            <div className="card Notification">
                <div className="card-header">
                    <h5>{title}</h5>
                </div>
                <div className="card-block px-0 py-3">
                    <div className="">
                        <div className="">
                            <div className="">

                                {content && content[0]? content.map((e)=>{
                                    return <MessageBar
                                        By = "ID00"
                                        received_date = "21 July 12:56"
                                        message = "This is a xample Message"
                                        read ={true}
                                        
                                        /> 
                                    
                                }):null}

                                    <MessageBar
                                        By = "ID00"
                                        received_date = "21 July 12:56"
                                        message = "This is a xample Message"
                                        read ={true}
                                        
                                        /> 
                                    <MessageBar
                                        By = "ID00"
                                        received_date = "21 July 12:56"
                                        message = "This is a xample Message"
                                        read ={false}
                                        
                                        /> 
                                
                               
                               
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{padding:"0px 30px 10px 0px",float:"right"}}>
                    <Link to={id?`/CSA/messages/${id}`:`/CSA/messages`} className="btn btn-mtd btn-primary" style={{width:"150px",height:"25px",padding:'0 0',float:'right'}}> 
                        View More 
                        <i className="far fa-eye" style={{paddingLeft:'10px'}}></i>
                    </Link>
                </div>
                    
            
            </div>
        </div>
    )
}

export default Message;