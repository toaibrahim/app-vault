import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";


const Chart = ({ratings}) => {
    const data = ratings;

    return (
        <div className="w-full h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical" // 🔹 makes the bars horizontal
            >
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis type="number" /> {/* count → X axis */}
              <YAxis dataKey="name" type="category" /> {/* name → Y axis */}
              <Tooltip wrapperStyle={{ backgroundColor: "#ccc" }} />
              <Legend
                wrapperStyle={{
                  top: 0,
                  right: 20,
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #d5d5d5",
                  borderRadius: 3,
                  lineHeight: "40px",
                }}
              />
              <Bar dataKey="count" fill="#FF8811" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
    );
};

export default Chart;