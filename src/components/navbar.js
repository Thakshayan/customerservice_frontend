import { useEffect,useState } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {GET_ME} from '../GraphQL/Queries'

function NavBar(){

    const {error,loading,data} = useQuery(GET_ME);
    const [userName,setUserName] = useState();
    const [id,setId] = useState();
    const [type,setType] = useState('moderator');

   
    return(
        <nav className="pcoded-navbar">
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                    <a href="/CSA" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up"></i>
                        </div>
                        <span className="b-title" style={{fontSize: "0.875rem"}}>Customer Service App</span>
                    </a>
                    <a className="mobile-menu" id="mobile-collapse" href="#"><span></span></a>
                </div>
                <div className="navbar-content scroll-div">
                    <ul className="nav pcoded-inner-navbar">
                        <li className="nav-item pcoded-menu-caption">
                            <label>Navigation</label>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
                            <a href="/CSA" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                        </li>

                        <li className="nav-item pcoded-menu-caption">
                            <label>Employees</label>
                        </li>
                        
                            <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">
                                <a href="" className="nav-link" style={{pointerEvents:"none"}}><span className="pcoded-micon"><i className="far fa-id-card"></i></span><span className="pcoded-mtext">Moderators</span></a>
                                <ul className="pcoded-submenu">
                                    <li className=""><a href="/CSA/addModerator" className="">Add Moderator</a></li>
                                    <li className=""><a href="/CSA/viewModerator" className="">View Moderator</a></li>
                                    <li className=""><a href="/CSA/removeModerator" className="">Remove Moderator</a></li>
                                </ul>
                            </li>
                      
                        <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">
                            <a href="#" className="nav-link" style={{pointerEvents:"none"}}><span className="pcoded-micon"><i className="fas fa-users"></i></span><span className="pcoded-mtext">Workers</span></a>
                            <ul className="pcoded-submenu">
                                <li className=""><a href="/CSA/addWorker" className="">Add Worker</a></li>
                                <li className=""><a href="/CSA/viewWorker" className="">View Worker</a></li>
                                <li className=""><a href="/CSA/removeWorker" className="">Remove Worker</a></li>
                            </ul>
                        </li>

                        <li className="nav-item pcoded-menu-caption">
                            <label>Works</label>
                        </li>
                        <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">
                            <a href="#" className="nav-link" style={{pointerEvents:"none"}}><span className="pcoded-micon"><i className="fas fa-file-word"></i></span><span className="pcoded-mtext">New Requests</span></a>
                            <ul className="pcoded-submenu">
                                <li className=""><a href="/CSA/viewRequest" className="">View Request</a></li>
                                {/* <li className=""><a href="/CSA/addWork" className="">Add Work</a></li> */}
                                <li className=""><a href="/CSA/notifications" className="">View Notification</a></li>

                            </ul>
                        </li>
                        <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">
                            <a href="#" className="nav-link" style={{pointerEvents:"none"}}><span className="pcoded-micon"><i className="fas fa-file-word"></i></span><span className="pcoded-mtext">Ongoing Work</span></a>
                            <ul className="pcoded-submenu">
                                <li className=""><a href="/CSA/viewWork" className="">View Work</a></li>
                                {/* <li className=""><a href="/CSA/assignWorker" className="">Assign Workers</a></li> */}
                            </ul>
                        </li>
                        <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">
                            <a href="#" className="nav-link" style={{pointerEvents:"none"}}><span className="pcoded-micon"><i className="fas fa-edit"></i></span><span className="pcoded-mtext">Finished Work</span></a>
                            <ul className="pcoded-submenu">
                                <li className=""><a href="/CSA/viewFinishedWork" className="">View Work</a></li>
                                {/* <li className=""><a href="/CSA/editRating" className="">Edit Rating</a></li> */}
                                <li className=""><a href="/CSA/viewRating" className=""> View Rating</a></li>
                            </ul>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Service Provider</label>
                        </li>
                        <li data-username="" className="nav-item" ><a href="/CSA/profile" className="nav-link "><span className="pcoded-micon"><i className="fas fa-user-circle"></i></span><span className="pcoded-mtext">Profile</span></a></li>
                        
                        <li data-username="Disabled Menu" className="nav-item disabled" style={{marginTop:"15px"}}><a href="#" className="nav-link"><span className="pcoded-micon"><i className="feather icon-power"></i></span><span className="pcoded-mtext">Disabled menu</span></a></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;