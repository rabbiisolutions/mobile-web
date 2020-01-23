import React from "react";
import sectionCollapseHandler from "../../events/collapse";
import Icon from "../basic/Icon";
import downIcon from "../../icons/collapse/bx_bx-caret-downdown.svg";
import upIcon from "../../icons/collapse/bx_bx-caret-downup.svg";

const panel = (data, bgClass, filter) => {
  return (
      <div className={"panel "+ bgClass}>
        <div className={filter}>
        {data}
        </div>
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
