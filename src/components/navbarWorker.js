import {BrowserRouter as Router,Link} from 'react-router-dom';

function NavBarWorker(){
    return(
        <nav className="pcoded-navbar">
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                    <a href="/Worker" className="b-brand">
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
                            <a href="/Worker" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                        </li>

                        
                        <li className="nav-item pcoded-menu-caption">
                            <label>Works</label>
                        </li>
                        
                        {/* <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">
                            <a href="#" className="nav-link" style={{pointerEvents:"none"}}><span className="pcoded-micon"><i className="fas fa-file-word"></i></span><span className="pcoded-mtext">Ongoing Work</span></a>
                            <ul className="pcoded-submenu">
                                <li className="">
                                    <a href="/Worker/viewWork" className="">
                                    <i className="fas fa-file-word"></i>
                                        View Work
                                    </a>
                                </li>
                                
                            </ul>
                            
                        </li> */}
                        <li data-username="" className="nav-item" >
                            <a href="/Worker/viewWork" className="nav-link ">
                                <span className="pcoded-micon"><i className="fas fa-file-word"></i> </span>
                                <span className="pcoded-mtext">View Ongoing Works</span>
                            </a>
                        </li>
                        {/* <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">
                            <a href="#" className="nav-link" style={{pointerEvents:"none"}}><span className="pcoded-micon"><i className="fas fa-edit"></i></span><span className="pcoded-mtext">Finished Work</span></a>
                            <ul className="pcoded-submenu">
                                <li className="">
                                    <a href="/Worker/viewFinishWork" className="">
                                        <i className="fas fa-edit"></i>
                                        View Work
                                    </a>
                                    </li>
                                
                            </ul>
                            
                        </li> */}
                        <li data-username="" className="nav-item" >
                            <a href="/Worker/viewFinishWork" className="nav-link ">
                                <span className="pcoded-micon"><i className="fas fa-edit"></i> </span>
                                <span className="pcoded-mtext">View Finished Works</span>
                            </a>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Worker</label>
                        </li>
                        <li data-username="" className="nav-item" ><a href="/Worker/profile" className="nav-link "><span className="pcoded-micon"><i className="fas fa-user-circle"></i></span><span className="pcoded-mtext">Profile</span></a></li>
                        
                        <li data-username="Disabled Menu" className="nav-item disabled" style={{marginTop:"15px"}}><a href="#" className="nav-link"><span className="pcoded-micon"><i className="feather icon-power"></i></span><span className="pcoded-mtext">Disabled menu</span></a></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBarWorker;