import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import FinishCard from '../../finishCard';
import Notificator from '../../notification/notificator';
import RatingList from "../../rating/ratingSection/ratingList";
import ProfileCard from '../profileCard';
import PhotoCard from '../profilephoto';
import WorkerInfoCard from "../workerInfoCard";



function ProfileContent(){

    const {id} = useParams();
    
    const [content,setContent] = useState([]);

    useEffect(()=>{

        console.log(id)


    },[id])

    return(
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                    {//<!-- [ breadcrumb ] start -->

                    //<!-- [ breadcrumb ] end -->
                    }
                    <div className="main-body">
                        <div className="page-wrapper">
                            {//<!-- [ Main Content ] start -->
                            }
                            <div className="row">

                                {/*<!--[ profile section ] starts-->*/}
                                <div className="col-md-12 col-xl-5">
                                    <PhotoCard id={id}/>
                                </div>
                                
                                {/*<!--[ profile section ] end-->

                                /*<!--[ basic info section ] start-->*/}
                                <div className="col-md-12 col-xl-7">
                                    <ProfileCard id={id} edit={true} title="Personal Info"/>
                                </div>
                                
                                {/*<!--[ basic info section ] end-->*/}

                                <div className="col-xl-4">
                                    {/*<!--[ Worker info section ] starts-->*/}
                                    <WorkerInfoCard id={id} edit={true} title="Worker Info"/>
                                    {/*<!--[ Worker info section ] end-->

                                    <!-- [ rating list ] starts-->*/}
                                    <RatingList 
                                        content={[5,4,5,2,1]} 
                                        value = {4.7}
                                    />
                                    {/*<!-- [ rating list ] end-->*/}

                                    {/*<!-- [ finish button ] starts-->*/}
                                    <FinishCard
                                        title='Remove Employee'
                                        icon ={<i className="fas fa-user-slash" style={{paddingLeft:'10px'}}></i>}
                                        button = 'Suspend'
                                        buttonClass = 'btn-danger'
                                        id = {id}
                                    />
                                    {/*<!-- [ finish button ] end-->*/}

                                </div>
                                
                                <div className="col-xl-8">
                                    {/*<!--[ Recent Notification ] start-->*/}
                                    <Notificator title="New Notifications" content={null}/>  {/* Need add the content */}
                                    {/*<!--[ Recent Notification ] end--> */}
                                    
                                    {/*<!--[ Recent Notification ] start-->*/}
                                    {/* <Notificator title="New Messages"/> */}
                                    {/*<!--[ Recent Notification ] end--> */}
                                </div>
                                {/* <!-- [ Main Content ] end -->  */}
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileContent;