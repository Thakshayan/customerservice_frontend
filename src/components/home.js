import Notificator from './notification/notificator';
import RatingList from "./rating/ratingSection/ratingList";

import Chart from "./chart";
import SummaryChart from "./pieChart";
import Message from './message/messages';


function Content({content}){
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
                                
                            
                                {//<!--[ New request section ] start-->
                                }
                                {/* <Card
                                    title ='New Work Request'
                                    symbol ={<i class="fas fa-cart-plus text-c-green f-30 m-r-10"></i>}
                                    count = '0'
                                /> */}
                                <Chart 
                                    ArrayX = {['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun']}
                                    Request = 'New Requests'
                                    ArrayY = {[6, 9, 8, 8, 6, 6,]}
                                />
                                {/*<!--[ New request section ] end-->

                                <!--[ Messages section ] starts-->*/}
                                
                                <Chart 
                                    ArrayX = {['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun']}
                                    Request = 'On Going Works'
                                    ArrayY = {[6, 11, 8, 4, 6, 3,]}
                                />

                                {/*<!--[ Messages section ] end-->*/}

                              
                                <div className="col-xl-8">
                                {/*<!--[ Recent Notification ] start-->*/}
                                <Notificator title="Notification" content={null}/>
                                {/* <!--[ Recent Notification ] end-->*/}
                                {/*<!--[ Recent Notification ] start-->*/}
                                <Message title="Messages" content={null}/>
                                {/* <!--[ Recent Notification ] end-->*/}
                                </div>



                                                                
                                
                            {/*<!-- [ statistics year chart ] start --> */}
                                
                                <div className="col-xl-4 col-md-6">

                                {/* <Card
                                    title ='On-going Works'
                                    symbol = {<i className="feather icon-loader text-c-green f-30 m-r-10"></i>}
                                    count = '10'
                                /> */}
                                {/* <Chart 
                                    Array = {['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun']}
                                /> */}
                                <SummaryChart
                                    value = {[2, 5, 6]}
                                />
                                {/*<!--[ On going work section ] end-->

                                    
                                    <div className="card">
                                        <div className="card-block border-bottom">
                                            <div className="row d-flex align-items-center">
                                                <div className="col-auto">
                                                    <i className="feather icon-zap f-30 text-c-green"></i>
                                                </div>
                                                <div className="col">
                                                    <h3 className="f-w-300">235</h3>
                                                    <span className="d-block text-uppercase">TOTAL BRANCHES</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                            <div className="row d-flex align-items-center">
                                                <div className="col-auto">
                                                    <i className="feather icon-map-pin f-30 text-c-blue"></i>
                                                </div>
                                                <div className="col">
                                                    <h3 className="f-w-300">26</h3>
                                                    <span className="d-block text-uppercase">TOTAL LOCATIONS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {/*<!-- [ rating list ] starts-->*/}
                                    <RatingList content={[50,60,6,7,3]}/>    
                                {/*<!-- [ rating list ] end-->*/}
                                </div>
                               {/* <!-- [ statistics year chart ] end -->
                               
                                {<!-- [ Main Content ] end --> */}
                                <br/>
                                <br/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Content;