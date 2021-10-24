import React from "react";
import StatsBlock from "./StatsBlock";

const SectionLanding = () => {
  return (
    <section className="section-landing">
      <div className="section-landing__inner">
        <div className="section-landing__left">
          <img src="/hands.png" alt="" />
        </div>
        <div className="section-landing__right">
          <h2>Become a Partner</h2>
          <h3>Why should you trust us?</h3>
          <div className="stats-blocks-container">
            <StatsBlock
              text="Global clients that already trust us. "
              title="40K+"
            />
            <StatsBlock
              text="Countries that we are operating in."
              title="150+"
            />
            <StatsBlock
              text="Producing innovative technology solutions."
              title="23 YEARS"
            />
            <StatsBlock
              text="Devices already deployed worldwide."
              title="15M+"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLanding;
