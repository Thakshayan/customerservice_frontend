import EditEmployeeInfo from "../components/employee/edit/editWorkerInfo";

function EditWorkerInfo({type}) {
    return (
        <div>
            {/*<!-- [ Main Content ] start -->*/}
                <EditEmployeeInfo type={type}/>
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default EditWorkerInfo;
  