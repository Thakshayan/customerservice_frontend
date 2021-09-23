import RemoveEmployeeCard from "../components/employee/remove/removeEmployee";

//components
import Header from "../components/header";
import Navbar from '../components/navbar';
import Preloader from '../components/preloader';


const RemoveEmployee = ({type}) => {
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
            <RemoveEmployeeCard type={type}/>
        </div>
        
     );
}
 
export default RemoveEmployee;