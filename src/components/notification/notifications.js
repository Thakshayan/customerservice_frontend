import BreadCrumb from '../breadcrumb';
import SearchBar from '../searchBar';
import PaginationBar from '../pagination';
import NotificationBar from './notificationBar';

const ViewNotifications = ({content,setPage,page,offSet}) => {    


    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Notification" reason="view" />
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    
                                    
                                    {/*<!-- [ view-table ] start -->*/}
                                    <div className="col-xl-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Search Work ID</h5>
                                            </div>
                                            <div className="" style={{marginTop:'20px'}}>
                                                {/* <SearchBar placeholder="Enter work ID ..." id={id} setId={setID}/>
                                             */}
                                            </div>
                                            
                                            <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="">
                                                        <div className="">

                                                            {content[0]? content.map(e =>{


                                                                const monthNames = ["January", "February", "March", "April", "May", "June",
                                                                "July", "August", "September", "October", "November", "December"
                                                                ];

                                                                const date_ob = new Date(e.date);


                                                                const date = date_ob.getDate()+" "+monthNames[date_ob.getMonth()]+" "+date_ob.getFullYear();
                                                               console.log(date_ob)
                                                                return  <NotificationBar
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

                                                            <NotificationBar
                                                                title = "closed"
                                                                time = "21 July 12:56"
                                                                description = "This is a xample description about the booking"
                                                                workstation = "Jaffna"
                                                            /> 

                                                        
                                                                   
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- [ view-table ] end -->*/}

                                </div>
                            </div>
                        </div>
                        <hr/>
                        <PaginationBar setPage={setPage} page={page} offSet={offSet}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ViewNotifications;