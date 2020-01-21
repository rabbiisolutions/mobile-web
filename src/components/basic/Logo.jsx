import React from "react";
import logo from "../../icons/logo.svg";
import Icon from './icon'

const Logo = (props) => {
  return (
      <a href={'#nav-bar'}>
        <Icon src={logo} className={props.className} height={props.height} width={props.width} units={props.units}/>
      </a>
  );
};

// Exporting the component
export default Logo;