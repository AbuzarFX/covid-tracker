import { useEffect, useState } from "react";
import axios from "axios";

const useCountriesStats = (countryName: string = "") => {
  const [countryStat, setCountryStat] = useState<any>([]);
  const [error, setError] = useState<any>(null);

  /* Effect to get country statistics */
  useEffect(() => {
    try {
      const URL =
        countryName === ""
          ? `https://disease.sh/v3/covid-19/countries`
					: `https://disease.sh/v3/covid-19/countries/${countryName}`;
					
					axios.get(URL).then(resp=>{
						setCountryStat(resp.data);
					})
    } catch (err) {
      setError(err.response);
    }
  }, [countryName]);

  return [countryStat,error];
};

export default useCountriesStats;
