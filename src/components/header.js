import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className="navbar pcoded-header navbar-expand-lg navbar-light">
            <div className="m-header">
                <a className="mobile-menu" id="mobile-collapse1" href="#" ><span></span></a>
                <Link to="index.html" className="b-brand">
                       <div className="b-bg">
                           <i className="feather icon-trending-up"></i>
                       </div>
                       <span className="b-title">Customer Service App</span>
                   </Link>
            </div>
            <Link className="mobile-menu" id="mobile-header" to="#">
                <i className="feather icon-more-horizontal"></i>
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">

                    {//<li><Link to="#" className="full-screen" onClick="{#toggleFullScreen()}"><i className="feather icon-maximize"></i></Link></li>
                    }
                    <li className="nav-item dropdown">
                        <Link className="dropdown-toggle" to="#" data-toggle="dropdown">Dropdown</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                            <li><Link className="dropdown-item" to="#">Another action</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <div className="main-search">
                            <div className="input-group">
                                <input type="text" id="m-search" className="form-control" placeholder="Search . . ."/>
                                <Link to="#" className="input-group-append search-close">
                                    <i className="feather icon-x input-group-text"></i>
                                </Link>
                                <span className="input-group-append search-btn btn btn-primary">
                                    <i className="feather icon-search input-group-text"></i>
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <div className="dropdown">
                            <Link className="dropdown-toggle" to="#" data-toggle="dropdown"><i className="icon feather icon-bell"></i></Link>
                            <div className="dropdown-menu dropdown-menu-right notification">
                                <div className="noti-head">
                                    <h6 className="d-inline-block m-b-0">Notifications</h6>
                                    <div className="float-right">
                                        <Link to="#" className="m-r-10">mark as read</Link>
                                        <Link to="#">clear all</Link>
                                    </div>
                                </div>
                                <ul className="noti-body">
                                    <li className="n-title">
                                        <p className="m-b-0">NEW</p>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                            <div className="media-body">
                                                <p><strong>John Doe</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                <p>New ticket Added</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="n-title">
                                        <p className="m-b-0">EARLIER</p>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                            <div className="media-body">
                                                <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                <p>Prchace New Theme and make payment</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/>
                                            <div className="media-body">
                                                <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                <p>currently login</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="noti-footer">
                                    <Link to="#">show all</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown drp-user">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="icon feather icon-settings"></i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right profile-notification">
                                <div className="pro-head">
                                    <img src="assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image"/>
                                    <span>John Doe</span>
                                    <Link to="auth-signin.html" className="dud-logout" title="Logout">
                                        <i className="feather icon-log-out"></i>
                                    </Link>
                                </div>
                                <ul className="pro-body">
                                    <li><Link to="#" className="dropdown-item"><i className="feather icon-settings"></i> Settings</Link></li>
                                    <li><Link to="#" className="dropdown-item"><i className="feather icon-user"></i> Profile</Link></li>
                                    <li><Link to="message.html" className="dropdown-item"><i className="feather icon-mail"></i> My Messages</Link></li>
                                    <li><Link to="auth-signin.html" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</Link></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;