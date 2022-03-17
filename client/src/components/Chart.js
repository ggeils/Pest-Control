import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { NavLink } from "react-router-dom";
import {
  Flex,
  Box,
  Link
} from "@chakra-ui/react";

class PieRechartComponent extends React.Component {
  COLORS = ["#00FF00", "#FFFF00", "#FF0000"];

  pieData = [
    {
      name: "Low",
      value: 7,
    },
    {
      name: "Medium",
      value: 4,
    },
    {
      name: "High",
      value: 2,
    },
  ];

  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}`}</label>
        </div>
      );
    }

    return null;
  };

  render() {
    return (
      <Flex>
      <ResponsiveContainer width='100%' height={400}>
        <PieChart>
        <Pie
          data={this.pieData}
          color="#000000"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
        >
          {this.pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={this.COLORS[index % this.COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<this.CustomTooltip />} />
        <Legend />
      </PieChart>
      </ResponsiveContainer>
      <Box>
                {"  "}
                <NavLink color="teal.500" to='/current'>
                    Return to Home
                </NavLink>
            </Box>
      </Flex>
    );
  }
}

export default PieRechartComponent;