import React  from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";

/* Styling */
import "./countryStatMap.styles.scss";

/* Constants */
import { caseTypeColors, CaseType,mapCenter} from "../../constants/index";



const buildCircleOnMap = (countries: any, caseType: CaseType) => {
  return countries.map((country: any) => {
    return (
      <Circle
        key={country.country}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        color={caseTypeColors[caseType].color}
        fillColor={caseTypeColors[caseType].color}
        fillOpacity={0.5}
        radius={Math.sqrt(country[caseType]) * caseTypeColors[caseType].multiplier}
      ></Circle>
    );
  });
};

interface Props {
  caseType: CaseType;
  countries: any;
}

const CountryStatMap: React.FC<Props> = (props) => {

  const { caseType, countries } = props;
	
  return countries.length > 0 ? (
    <MapContainer center={mapCenter} zoom={4} fadeAnimation={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { caseType==="cases" && buildCircleOnMap(countries,"cases")};
      { caseType==="deaths" && buildCircleOnMap(countries,"deaths")} 
      { caseType==="recovered" && buildCircleOnMap(countries,"recovered")} 
    </MapContainer>
  ) : null;
};

export default CountryStatMap;
