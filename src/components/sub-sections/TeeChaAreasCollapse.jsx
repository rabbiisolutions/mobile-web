import Accordion from "../utils/Accordion";
import texts from "../../constants/texts";
import teeChaAreasLists from "../../constants/TeeChaAreasLists";
import React from "react";

const name = 'teecha-collapse';

const skills_areas = (
    <div>
      <div className="sub-category">Foreign Languages</div>
      {teeChaAreasLists.fl}
      <div className="sub-category">Games & Sports</div>
      {teeChaAreasLists.gs}
    </div>
);

const teeChaAreasCollapse = () => {
  const collapses = [];
  collapses.push(
      <div className={name} key={11}>
        {Accordion.toggle(texts.dot + texts.academic)}
        {
          Accordion.panel(teeChaAreasLists.academics)
        }
      </div>
      ,
      <div className={name} key={12}>
        {Accordion.toggle(texts.dot + texts.skills)}
        {
          Accordion.panel(skills_areas)
        }
      </div>
  );

  return ( // return the academic areas list
      collapses.map((panel) => (panel))
  );
};

export default teeChaAreasCollapse;