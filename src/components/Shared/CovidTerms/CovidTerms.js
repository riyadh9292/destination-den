import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./CovidTerms.css";

const CovidTerms = () => {
  const infoIcon = <FontAwesomeIcon icon={faInfoCircle} size="lg" />;
  return (
    <header className="position-fixed top-0 covid-terms">
      <p className=" ">
        {infoIcon}&nbsp; Your safety is our top priority &nbsp; &nbsp;
        <span className="text-success travel-guide">
          See our travel guidance on COVID-19
        </span>
      </p>
    </header>
  );
};

export default CovidTerms;
