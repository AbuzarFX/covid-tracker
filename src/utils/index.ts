import numeral from "numeral";

/* utility to pretty print values */
export const prettyPrintNumber = (value: number) => {
  const formattedNumber = value ? numeral(value).format("0.0 a") : "0";
  return formattedNumber;
};

/* Utility to sort data */

export const sortCases = (data: any) => {
  return data.sort((a: any, b: any) => b.cases - a.cases);
};

/* Utility to transform data for plotting in chart */
export const transformToChartData = (dataSet: any, caseType: any = "cases") => {
  let transformedData = [];
  const selectedData = dataSet[caseType];
  let lastDataPoint;

  for (let date in selectedData) {
    if (lastDataPoint) {
      const newPoint = {
        x: date,
        y: selectedData[date] - lastDataPoint,
      };
      transformedData.push(newPoint);
    }
    lastDataPoint = selectedData[date];
  }
  return transformedData;
};
