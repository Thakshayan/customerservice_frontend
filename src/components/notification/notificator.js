import NotificationBar from './notificationBar';
import {Link} from "react-router-dom"
import { useEffect,useState } from 'react';

function Notificator({title,content,id}){

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

                                {Notification[0] ? Notification.map((e)=>{

                                    <NotificationBar
                                        title = "closed"
                                        time = "21 July 12:56"
                                        description = "This is a xample description about the booking"
                                        workstation = "Jaffna"
                                    /> 

                                }):null}
                                
                                <NotificationBar
                                    title = "closed"
                                    time = "21 July 12:56"
                                    description = "This is a xample description about the booking"
                                    workstation = "Jaffna"
                                
                                />  
                                <hr/>
                                 <NotificationBar
                                    title = "closed"
                                    time = "21 July 12:56"
                                    description = "This is a xample description about the booking"
                                    workstation = "Kalutara"
                                
                                />        
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{padding:"0px 30px 10px 0px",float:"right"}}>
                    <Link to={id?`/CSA/notifications/${id}`:`/CSA/notifications`} className="btn btn-mtd btn-primary" style={{width:"150px",height:"25px",padding:'0 0',float:'right',background: 'linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%)'}}> 
                        View More 
                        <i className="far fa-eye" style={{paddingLeft:'10px'}}></i>
                    </Link>
                </div>
                    
            
            </div>
        </div>
    )
}

export default Notificator;