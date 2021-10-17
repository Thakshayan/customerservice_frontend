
import EditEmployee from "../components/employee/edit/editEmployee";


function EditBasicInfo({type}) {
    return (
        <div>
            {/*<!-- [ Main Content ] start -->*/}
                <EditEmployee type={type}/>
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default EditBasicInfo;
  