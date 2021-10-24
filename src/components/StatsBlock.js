import React from "react";

const StatsBlock = ({ title, text }) => {
  return (
    <div className="stats-block">
      <h2 className="stats-block__title">{title}</h2>
      <p className="stats-block__text">{text}</p>
    </div>
  );
};

export default StatsBlock;
