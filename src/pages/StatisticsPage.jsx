import React from 'react';
import { Helmet } from "react-helmet-async";

const StatisticsPage = () => {
  return (
    <div className="p-10">
      <Helmet>
        <title>Statistics - TechVerse</title>
      </Helmet>
      <h1 className=" text-4xl font-bold text-center"> Statistics Page</h1>
    </div>
  );
};

export default StatisticsPage;