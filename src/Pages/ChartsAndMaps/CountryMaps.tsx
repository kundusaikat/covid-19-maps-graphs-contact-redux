import React, { useState } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import map from "../../map.json";

import CountryCharts from "./CountryCharts";
import { useCountryData } from "../../Hooks/useCountryData";
const CountryMaps: React.FC = () => {
  const { isLoading, error, data } = useCountryData();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const [popupData, setPopupData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  

  if (isLoading) {
    return (
      <div className="text-3xl font-serif font-bold h-[10vh] w-[10vw] flex justify-center items-center m-auto mt-[40vh]">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  const handleClick = (geo: any) => {
    const countryName = geo.properties["Alpha-2"];
    setIsOpen(true);
    setPopupData(data?.find((el: any) => el.countryInfo.iso2 === countryName));
    setSelectedCountry(countryName);
  };

  

  return (
    <>
      <div className="no-scrollbar overflow-hidden w-full h-[calc(90svh-10px)]">
        <ComposableMap projection="geoMercator" style={{width:"100%",height:"90vh"}} >
          <ZoomableGroup center={[0, 0]} zoom={1} >
            <Geographies geography={map}>
              {({ geographies }) =>
                geographies?.map((geo) => {
                  const item = data?.find(
                    (d: any) => d.countryInfo.iso2 === geo.properties["Alpha-2"]
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        selectedCountry === geo.properties["Alpha-2"]
                          ? "#FF0000"
                          : item
                          ? "#AAA"
                          : "#DDD"
                      }
                      stroke="#FFF"
                      onClick={() => handleClick(geo)}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      {popupData && isOpen ? (
        <div className="fixed w-full h-[100svh] top-0 left-0 flex justify-center items-center backdrop-brightness-[0.3]" onClick={() => setIsOpen(false)} >
          <div className=" bg-white  m-auto p-4  border border-red-600 rounded-3xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <table className="text-center w-full">
              <tbody>
                <tr>
                  <td>Country Name:</td>
                  <td>{(popupData as { country: string }).country}</td>
                </tr>
                <tr>
                  <td>Total number of active:</td>
                  <td>{(popupData as { active: number }).active}</td>
                </tr>
                <tr>
                  <td>Recovered Cases:</td>
                  <td>{(popupData as { recovered: number }).recovered}</td>
                </tr>
                <tr>
                  <td>Deaths:</td>
                  <td>{(popupData as { deaths: number }).deaths}</td>
                </tr>
              </tbody>
            </table>
            <CountryCharts data={popupData}/>
            <button
              className="float-right px-2 bg-red-500 text-white font-[cursive] font-semibold mt-4 shadow-2xl  rounded-2xl"
              onClick={() => setIsOpen(false)}
            >
              close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CountryMaps;
