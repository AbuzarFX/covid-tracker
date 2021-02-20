import React from "react";

/* Styling */
import "./trackerpage.styles.scss";

/* Components */
import SummaryContainer from "../../components/SummaryContainer/summarycontainer.component";
import CountryStatsTable from "../../components/CountryStatsTable/countryStatsTable.component";
import GlobalHistoryStatsChart from "../../components/GlobalHistoryStatsChart/globalHistoryStatsChart.component";
import CountryStatsSection from "../../components/CountryStatsSection/countryStatsSection.component";

interface Props {}

const TrackerPage: React.FC<Props> = () => {
  return (
    <div className="trackerpage u-container">
      <h1>Global Statistics 🌎</h1>
      <div className="trackerpage-section">
        <div className="trackerpage-section__left">
          <SummaryContainer />
          <GlobalHistoryStatsChart />
        </div>
        <div className="trackerpage-section__right">
          <CountryStatsTable />
        </div>
      </div>

      <h1>Country Statistics 🏳️‍🌈</h1>
      <CountryStatsSection />
    </div>
  );
};

export default TrackerPage;
