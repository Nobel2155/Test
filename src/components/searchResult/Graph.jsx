'use client';
import React, { useEffect, useState } from 'react'

import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { IoAirplaneOutline } from "react-icons/io5";
import ModifyOnWay from './modifyTrip/ModifyOnWay';
import ModifyTrip from './modifyTrip/ModifyTrip';

const Graph = () => {
  const data = [
    {
      price: 1200,
    },
    {
      price: 900,
    },
    {
      price: 300,
    },
    {
      price: 800,
    },
    {
      price: 1200,
    },
    {
      price: 100,
    },
    {
      price: 500,
    },
  ];

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload[0]) {
      const { price } = payload[0].payload;
      return (
        <div className="bg-white shadow px-3 py-1 rounded-md">
          <p>${price}</p>
        </div>
      );
    }

    return null;
  };


  return (
    <div className="w-[100%] px-1 lg:h-24 flex lg:flex-row md:flex-col flex-col items-center justify-between pt-5 lg:mx-0 md:mx-5 mx-5">
      {/* <div className="flex items-center w-[30%]">
        <div className="lg:w-[450px] md:w-[400px] w-full h-24 flex flex-col">
          <ResponsiveContainer width="100%" height="55%">
            <LineChart width={300} height={100} data={data}>
              <Line
                type="monotone"
                dataKey="price"
                stroke="#0094FF"
                strokeWidth={2}
              />
              <Tooltip content={customTooltip} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center gap-5 text-sm">
            <p className="flex flex-col items-center">
              <IoAirplaneOutline /> Departure
            </p>
            <p className="flex flex-col items-center">
              <IoAirplaneOutline className="rotate-180" /> Return
            </p>
          </div>
        </div>
        <p className="text-sm pl-3">
          20/03/2024 <br />
          Sat-Aprl-2024
        </p>
      </div> */}

      <div className='w-[70%]'>
        <ModifyOnWay/>
        <ModifyTrip/>
      </div>
          
    </div>
  );
};

export default Graph;
