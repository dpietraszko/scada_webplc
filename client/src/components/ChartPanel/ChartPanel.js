import React, { useState } from "react";
import styled, { css } from "styled-components";
import Axios from "axios";
import BarChart from "../../components chart/BarChart/BarChart";
import LineChart from "../../components chart/LineChart/LineChart";
// import PieChart from "../../components chart/PieChart/PieChart";   // Odkomentować jeśli chcemy wykres okołowy
import { UserData } from "./ChartData";

function ChartPanel(props) {
  const { filteringQuantityData } = props;

  const [chartData, setChartData] = useState({
    labels: filteringQuantityData.map((data) => data.date.substr(0,10)),
    datasets: [
      {
        label: "Filtering Quantity",
        data: filteringQuantityData.map((data) => data.filteringQuantity),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <Container>
      <Row>
        <BarChart chartData={chartData} />
      </Row>
      <Row>
        <LineChart chartData={chartData} />
      </Row>
      {/* <Row>
        <PieChart chartData={chartData} />               // Odkomentować jeśli chcemy wykres okołowy
      </Row> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Row = styled.div`
  width: 600px ;
`;

export default ChartPanel;
