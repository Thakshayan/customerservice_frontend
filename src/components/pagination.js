import { useState } from "react";

const PaginationBar = ({page,setPage,offSet}) => {

   
    const [disable,setDisable] = useState(true);
    const [offDisable,setOffDisable] = useState(false);

    const decrement = ()=>{
        if(page!=0){
            setPage(page-1)
            setDisable(false);
            setOffDisable(true);
        }else{
            setDisable(true);
        }
    }

    const increment = ()=>{
        if(page < offSet-1){
            setPage(page+1)
            setDisable(false);
        }else{
            setOffDisable(true);
        }
    }


    return (
    <div className="page-bar " aria-label="page navigation" >
        <ul className="pagination">
            <li className={"page-item" + ( disable ?' disabled':'')}>
                <span className="page-link" onClick={decrement}>Previous</span>
            </li>
            <li className={"page-item" + ( disable ?' disabled':'')}>
                <button className="page-link" onClick={decrement}>{page?page:".."}</button>
            </li>
            <li className="page-item active">
                <span className="page-link">{page+1}
                    <span className="sr-only">(current)</span>
                </span>
            </li>
            <li className={"page-item" + ( offDisable ?' disabled':'')}><button className="page-link" onClick={increment} >{page < offSet-1 ? page+2:".."}</button></li>
            <li className={"page-item" + ( offDisable ?' disabled':'')}><button className="page-link" onClick={increment}>Next</button></li>
        </ul>
    </div>
 );
}
 
export default PaginationBar;