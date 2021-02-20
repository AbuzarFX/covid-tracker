import React from "react";

/* Styling */
import "./infobox.styles.scss";

/* Constants */
import { CaseType } from "../../constants/index";

/* Utilities */
import {prettyPrintNumber} from "../../utils/index"

interface Props {
  caseType: CaseType;
  todayStat: number;
  totalStat: number;
}

const InfoBox: React.FC<Props> = (props) => {
  const { caseType, todayStat, totalStat } = props;

  return (
    <div className={`infobox infobox--${caseType}`}>
      <h3 className="u-category">{caseType.toUpperCase()}</h3>
      <h3 className={`u-imp-stat u-${caseType}`}>{prettyPrintNumber(todayStat).toUpperCase()}</h3>
      <h3 className="u-history-stat">{prettyPrintNumber(totalStat).toUpperCase()} in total</h3>
    </div>
  );
};

export default InfoBox;
