import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // Transformamos la lista de dataPoints en un array de values
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // Obetenemos el mes con mas elementos, max recibe varios enteros no un array, por eso se utiliza el operador de propagacion
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
