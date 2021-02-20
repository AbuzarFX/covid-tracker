import React, { useState, useEffect } from "react";
import axios from "axios";

/* Styling */
import "./countryStatsSection.styles.scss";

/* Constants */
import { CaseType } from "../../constants/index";

/* Components */
import CountryStatMap from "../CountryStatMap/countryStatMap.component";

interface Props {}

const CountryStatsSection: React.FC<Props> = (props) => {
  const [selectedCaseType, setSelectedCaseType] = useState<CaseType>("all");
  const [countriesInfo, setCountriesInfo] = useState<any>([]);

  /* Effect to get all country Statistics */
  useEffect(() => {
    try {
      axios.get("https://disease.sh/v3/covid-19/countries").then((resp) => {
        setCountriesInfo(resp.data);
      });
    } catch (err) {
      console.log("Errror", err);
    }
  }, []);

  const handleCaseTypeChange = (e: any) => {
    setSelectedCaseType(e.target.value);
  };

  return (
    <div className="country-stats-section">
      <form className="globalStatsForm">
        <div className="case-choice">
          <div className="input__group">
            <label htmlFor="cases">Cases</label>
            <input
              type="radio"
              name="caseType"
              value="cases"
              id="cases"
              checked={selectedCaseType === "cases"}
              onChange={handleCaseTypeChange}
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
              onChange={handleCaseTypeChange}
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
              onChange={handleCaseTypeChange}
            />
          </div>
        </div>
      </form>

      <div className="statistics-map">
        <CountryStatMap caseType={selectedCaseType} countries={countriesInfo} />
      </div>
    </div>
  );
};

export default CountryStatsSection;
