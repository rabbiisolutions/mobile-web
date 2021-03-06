import React from "react";
import sectionCollapseHandler from "../../events/collapse";
import Icon from "./Icon";
import downIcon from "../../assets/icons/collapse/bx_bx-caret-downdown.svg";
import upIcon from "../../assets/icons/collapse/bx_bx-caret-downup.svg";

const panel = (data, bgClass) => {
  return (
      <div className={"panel "+ bgClass}>
        {data}
      </div>
  )
};

const toggle = (title) => {
  return (
      <div className="section-toggle" onClick={e => sectionCollapseHandler(e)}>
        <span className="section-title">{title}</span>
        <Icon src={downIcon} height={1.5} width={1.5} className="down"/>
        <Icon src={upIcon} height={1.5} width={1.5} className="up hidden"/>
      </div>);
};

const Accordion = {panel: panel, toggle: toggle};

export default Accordion;
