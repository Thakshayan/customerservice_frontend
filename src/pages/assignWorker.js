import AssignWorkerForm from "../components/work/assign/assignWorker";

//components
import Header from "../components/header";
import Navbar from '../components/navbar';
import Preloader from '../components/preloader';


const AssignWorker = () => {
    return ( 
        <div>
            {/* [ Pre-loader ] start */}
            <Preloader/>
            { /* [ Pre-loader ] End 
            [ navigation menu ] start */}
            <Navbar/>
            {/* </div> [ navigation menu ] end 
            [ Header ] start */}
            <Header/>
            {/*<!-- [ Header ] end --> */}
            <AssignWorkerForm type="Employee"/>
        </div>
        
     );
}
 
export default AssignWorker;