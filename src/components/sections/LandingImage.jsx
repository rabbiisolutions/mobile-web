import React from "react";
import presidentJpeg from "../../images/carousel/1.png";
import presidentWebp from "../../images/carousel/1.webp";
import pilotJpeg from "../../images/carousel/2.png";
import pilotWebp from "../../images/carousel/2.webp";
import engineerJpeg from "../../images/carousel/3.png";
import engineerWebp from "../../images/carousel/3.webp";
import saxJpeg from "../../images/carousel/4.png";
import saxWebp from "../../images/carousel/4.webp";
import photographyJpeg from "../../images/carousel/5.png";
import photographyWebp from "../../images/carousel/5.webp";
import ImageWebp from "../../helpers/ImageWebp";
import { Zoom } from "react-slideshow-image";
import texts from "../../constants/texts";
import signUpHandler from "../../events/signUpModal";
import Button from "../utils/button";

const images = [
  {jpeg: pilotJpeg, webp: pilotWebp},
  {jpeg: engineerJpeg, webp: engineerWebp},
  {jpeg: saxJpeg, webp: saxWebp},
  {jpeg: photographyJpeg, webp: photographyWebp},
  {jpeg: presidentJpeg, webp: presidentWebp},
];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};


const Landing = () => {
  return (
      <div className="slide-container" id={'start'}>
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <ImageWebp key={index} style={{width: "100%"}} src={each.jpeg} srcWebp={each.webp} className={'slide-image'}/>)
          }
        </Zoom>
        <h2>achieve your potential</h2>
        <p>Providing you with a personal tutor to help you turn your dreams into reality.</p>
        <p>Sign up to see our price list.</p>
        <Button value={texts.signUp} onClick={e => signUpHandler(e)} className="services btn-link"/>
      </div>
  )
};
export default Landing;
