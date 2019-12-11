import React from "react";
import Icon from "../utils/icon";
import phone from "../../icons/contacts/ic_round-perm-phone-msgphone.svg"
import whatsapp from "../../icons/contacts/bx_bxl-whatsappwhatsapp.svg"
import mail from "../../icons/contacts/bx_bx-mail-sendmail.svg"
import twitter from "../../icons/social/jam_twitter-circletwitter.svg"
import youtube from "../../icons/social/jam_youtube-circleyoutube.svg"
import facebook from "../../icons/social/jam_facebook-circlefacebook.svg"
import linkedin from "../../icons/social/jam_linkedin-circlelinkedin.svg"
import texts from "../../constants/texts";


const Footer = () => {
  return (
      <footer>
        <div id="lighter">
          <div id="contacts-title">{texts.contacts}</div>
          <div id="contacts">
              <span className="icon-text">
                <Icon src={phone} className="footer-icon" height={2.5} width={2.5}/>
                <span>{texts.safaricom}</span>
              </span>
              <span className="icon-text">
                <Icon src={whatsapp} className="footer-icon" height={2.5} width={2.5}/>
                <span>{texts.telkom}</span>
              </span>
              <span className="icon-text">
                <Icon src={mail} className="footer-icon" height={3} width={2.5}/>
                <span>{texts.sema}</span>
              </span>
          </div>
          <div id="find-us-title">{texts.findUs}</div>
          <div id="social">
            <a href="https://www.facebook.com/rabbiitech/" target="_blank" rel="noopener noreferrer">
              <Icon src={facebook} className="footer-icon" height={2.5} width={2.5}/>
            </a>
            <a href="https://www.youtube.com/channel/UC5dpUzgKA46Iuh8r9ni1Syg" target="_blank" rel="noopener noreferrer">
              <Icon src={youtube} className="footer-icon" height={2.5} width={2.5}/>
            </a>
            <a href="https://twitter.com/RabbiiTech" target="_blank" rel="noopener noreferrer">
              <Icon src={twitter} className="footer-icon" height={2.5} width={2.5}/>
            </a>
            <a href="https://www.linkedin.com/company/Rabbii-technology-innovations-ltd/" target="_blank" rel="noopener noreferrer">
              <Icon src={linkedin} className="footer-icon" height={2.5} width={2.5}/>
            </a>
          </div>
          <div id="links-title">Links</div>
          <div id={'links'}>
            <a href={'https://privacy.rabbii.co.ke'}>Privacy Policy</a>
          </div>
        </div>
        <div id="darken">
          <span className="copyright">&copy;&nbsp;{new Date().getFullYear()}&nbsp;Copyright:&nbsp;</span>
          <span className="company">&nbsp;Rabbii&nbsp;Technology&nbsp;Solutions&nbsp;®&nbsp;</span>
        </div>
      </footer>
  );
};

export default Footer;