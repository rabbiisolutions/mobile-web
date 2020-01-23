import React from "react";
import teeChaAreasLists from "../../../constants/teecha_areas_lists";
import services from "../../../constants/services";
import GetTutor from "../../composite/GetTutor";
import Icon from "../../basic/icon";
import chess from "../../../icons/services/pawn.svg"

const Sports = () => {
  return (
      <div>
        <p>{services.sports[0]}</p>
        <p>{services.sports[1]}</p>
        <div className={'display'}>
          {teeChaAreasLists.sports}
          <Icon src={chess} height={15} units={'vw'}/>
        </div>
        <GetTutor/>
      </div>
  )
};

export default Sports;
