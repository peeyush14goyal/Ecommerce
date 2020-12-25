import React from "react";

interface IProps {
    boxContent:string;
    boxSign:string;
}

const InfoBox:React.FC = () => {
  return (
    <div className="info-box">
      <span className="info-box-icon bg-info elevation-1">
        <i className="fas fa-cog"></i>
      </span>
      <div className="info-box-content">
        <span className="info-box-text">App Traffic</span>
        <span className="info-box-number">
          10
          <small>%</small>
        </span>
      </div>
    </div>
  );
};

export default InfoBox;