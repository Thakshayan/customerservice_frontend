import React from "react";
import { Pie } from "react-chartjs-2";
	
const SummaryChart = ({value}) => {
	
// Sample data
const data = {
	labels: ["On-going Work","New Work","Finished Work"],
	datasets: [
		{
		label: "Works status",
		data: value,
		backgroundColor: [ "#f4c22b","#c04000", "#1de9b6"],
		}
	]
}
	
return (


    <div className="" >
        <div className="card yearly-sales chartCard">
            <div className="card-block" style={{padding:"0px"}}>
                <Pie data={data} 
                    option={{maintainAspectRatio:false,responsive:true}}
                    
                />
            </div>
        </div>
    </div>
	

	
);
}
	
export default SummaryChart;
