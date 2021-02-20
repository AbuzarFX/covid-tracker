import React from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

/* Styling */
import "./lineGraph.styles.scss";

/* Constants */
import { CaseType,caseTypeColors } from "../../constants/index";

/* Utils */
import { transformToChartData } from "../../utils/index";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem: any, data: any) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value: any, index: any, values: any) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

interface Props {
  caseType: CaseType;
  data?: any;
  options?: any;
}

const LineGraph: React.FC<Props> = (props) => {
  const { data, caseType } = props;

	const buildChartData = transformToChartData(data, caseType);

  return (
		buildChartData.length > 0 ? (
    <Line
      data={{
        datasets: [
          {
            data: buildChartData,
            backgroundColor: caseTypeColors[caseType].backgroundColor,
            borderColor: caseTypeColors[caseType].color,
          },
        ],
      }}
      options={options}
    />
  ) : (
    <h1>Building your chart!!!</h1>
  ));
};

export default LineGraph;
