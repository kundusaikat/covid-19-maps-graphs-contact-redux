
import { Link } from "react-router-dom";
import CountryCharts from "./CountryCharts";


import { useWorldData } from "../../Hooks/useWorldData";

import { useHistoricalData } from "../../Hooks/useHistoricalData";
import Graphs from "../../Components/Graphs";

function WorldChart(): JSX.Element {
  const worlfFun = useWorldData();
  const timeFun = useHistoricalData();

  return worlfFun.isLoading || timeFun.isLoading ? (
    <div className="text-3xl font-serif font-bold h-[10vh] w-[10vw] flex justify-center items-center m-auto mt-[40vh]">
      Loading...
    </div>
  ) : worlfFun.error || timeFun.error ? (
    <div>Error: {(worlfFun.error as Error).message || (timeFun.error as Error).message}</div>
  ) : (
    <div className="text-center flex flex-col justify-center items-center gap-4 m-auto  ">
      <div className=" shadow-xl bg-white px-4 py-2 rounded-lg">
        <p className="font-bold text-xl font-[cursive]">World Data</p>
        <p>
          Total number of active:{" "}
          <span className="ml-7">
            {(worlfFun.data as { active: number }).active}
          </span>
        </p>
        <p>
          Recovered Cases:{" "}
          <span className="ml-[5vw]">
            {(worlfFun.data as { recovered: number }).recovered}
          </span>
        </p>
        <p>
          Deaths:{" "}
          <span className="ml-[10vw]">
            {(worlfFun.data as { deaths: number }).deaths}
          </span>
        </p>
        <CountryCharts data={worlfFun.data} />
      </div>

      <Graphs data={timeFun.data} />

      <Link to="/chart/country">
        <p className="shadow-xl border-2 border-white px-2 py-1 bg-greenhalf rounded-lg font-bold text-2xl">
          Go to Country Specific Data
        </p>
      </Link>
    </div>
  );
}

export default WorldChart;
