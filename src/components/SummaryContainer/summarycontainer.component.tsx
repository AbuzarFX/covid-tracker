import React, { useEffect, useState } from "react";
import axios from "axios";

/* Styling */
import "./summarycontainer.styles.scss";

/* Components */
import InfoBox from "../Infobox/infobox.component";

/* Constants */
import { GLOBAL_STATS_URL } from "../../constants/index";

/* Utilities */
import { prettyPrintNumber } from "../../utils/index";

/* Asset */
import clock from "../../asset/clock.svg";

interface Props {}

const SummaryContainer: React.FC<Props> = () => {
  const [globalStatsSummary, setGlobalStatsSummary] = useState<any>({});

  /* Effect to get global stats */
  useEffect(() => {
    async function getGlobalStats() {
      const response = await axios.get(GLOBAL_STATS_URL);
      const data = response.data;
      setGlobalStatsSummary(data);
    }
    getGlobalStats();
  }, []);

  return (
    <>
      <div className="summary">
        <h2>
          <img src={clock} alt="Clock Illustration" />:
         <span> {new Date(globalStatsSummary?.updated).toLocaleString()}</span> 
        </h2>

        <h3>
          <span className="u-highlight-text">
            {globalStatsSummary?.affectedCountries}
          </span>{" "}
          countries affected...
        </h3>
        <h3>
          <span className="u-highlight-text">
            {prettyPrintNumber(globalStatsSummary?.tests).toUpperCase()}
          </span>{" "}
          tests conducted...
        </h3>
        <h3>
          <span className="u-highlight-text">
            {prettyPrintNumber(globalStatsSummary?.population).toUpperCase()}
          </span>{" "}
          population affected...
        </h3>
      </div>

      <div className="summary__infobox">
        <InfoBox
          caseType="cases"
          todayStat={globalStatsSummary?.todayCases}
          totalStat={globalStatsSummary?.cases}
        />
        <InfoBox
          caseType="deaths"
          todayStat={globalStatsSummary?.todayDeaths}
          totalStat={globalStatsSummary?.deaths}
        />
        <InfoBox
          caseType="recovered"
          todayStat={globalStatsSummary?.todayRecovered}
          totalStat={globalStatsSummary?.recovered}
        />
      </div>
    </>
  );
};

export default SummaryContainer;
