import React from "react";
import "/src/styles/LineHead.css";

interface LineHeadProps {
  title: string;
}

const LineHead: React.FC<LineHeadProps> = ({ title }) => {
  return (
    <div className="head_line">
      <div className="line"></div>
      <span className="section_subtitle">{title}</span>
      <div className="line2"></div>
    </div>
  );
};

export default LineHead;
