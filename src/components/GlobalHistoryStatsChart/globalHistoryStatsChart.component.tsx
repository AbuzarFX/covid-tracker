import React, { useState, useEffect } from "react";
import axios from "axios";


/* Styling */
import "./globalHistoryStatsChart.style.scss";

/* Constants */
import { CaseType ,GLOBAL_HISTORY_STAT_URL} from "../../constants/index";

/* Components */
import LineGraph from "../../components/LineGraph/lineGraph.component";

interface Props {}

const GlobalHistoryStatsChart: React.FC<Props> = () => {
	const [selectedCaseType, setSelectedCaseType] = useState<CaseType>("cases");
	const [historyStatistics,setHistoryStatistics]=useState<any>({});

  /* Function to handle user input choice on graph */
  const handleClick = (e: any) => {
    const selectedInput = e.target.value;
    setSelectedCaseType(selectedInput);
	};
	
	/* Effect to fetch historical data*/
	useEffect(()=>{
		try{
			axios.get(GLOBAL_HISTORY_STAT_URL).then(resp=>{
				setHistoryStatistics(resp.data)
			})
		}catch(err){
			console.log("Error fetching global Stats>>",err);
		}
	},[selectedCaseType])

  return (
    <>
			<h3 className="graph-heading">Visualize new cases....</h3>
      <form  className="globalStatsForm">
        <div className="input__group">
          <label htmlFor="cases">Cases</label>
          <input
            type="radio"
            name="caseType"
            value="cases"
            id="cases"
						checked={selectedCaseType === "cases"}
						onChange={handleClick}
          />
        </div>

        <div className="input__group">
          <label htmlFor="deaths">Deaths</label>
          <input
            type="radio"
            name="caseType"
            value="deaths"
            id="deaths"
						checked={selectedCaseType === "deaths"}
						onChange={handleClick}
						
          />
        </div>

        <div className="input__group">
          <label htmlFor="recovered">Recovered</label>
          <input
            type="radio"
            name="caseType"
            value="recovered"
            id="recovered"
						checked={selectedCaseType === "recovered"}
						onChange={handleClick}
						
          />
        </div>
      </form>
		
      <LineGraph data={historyStatistics} caseType={selectedCaseType}/>
		</>
  );
};

export default GlobalHistoryStatsChart;
