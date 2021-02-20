import React from "react";

/* Styling */
import "./countryStatsTable.styles.scss";

/* Hooks */
import useCountryStats from "../../hooks/useCountriesStat";

/* Utilities */
import {sortCases} from "../../utils/index"

interface Props {}

const CountryStatsTable: React.FC<Props> = () => {
	const [countryStats, error] = useCountryStats("");
	const sortedDataForDisplay=sortCases(countryStats);

  return (
    <div className="country-stats-table">
      <h4>Today's Cases</h4>
      <div className="table">
				{
					error ? (<h1>Oops!! Something went wrong!!</h1>) :null
				}
        {sortedDataForDisplay?.length > 0 &&
          sortedDataForDisplay.map((country:any) => {
            return (
              <tr key={country.country}>
                <td>
                  <img
                    src={country.countryInfo.flag}
                    alt={country.country}
                  />{" "}
                  <span>{country.country}</span>
                </td>
                <td>{country.cases}</td>
              </tr>
            );
          })}
      </div>
    </div>
  );
};

export default CountryStatsTable;
