import AddWorkerForm from '../components/employee/add/addEmployee';

//components
import Header from "../components/header";
import Navbar from '../components/navbar';
import Preloader from '../components/preloader';


function AddModerator() {
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
            
            {/*<!-- [ Main Content ] start -->*/}
            <AddWorkerForm type="Moderator"/>
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default AddModerator;
  