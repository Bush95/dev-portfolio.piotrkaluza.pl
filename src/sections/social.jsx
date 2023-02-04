import React from 'react'
import "../scss/sections/social.scss"
import { SocialIcon } from 'react-social-icons';

export default function Social() {
  const socialLinks = [
    'https://www.linkedin.com/in/peterkaluza/',
    'https://github.com/Bush95',
    'https://piotrkaluza.pl/',
    'https://www.facebook.com/PiotrKaluzaFotografia'
  ];

  const socialLinkNodes = socialLinks.map((el, index) => <li key={index}><SocialIcon url={el} target="_blank" bgColor="#FFF" style={{ height: 45, width: 45 }} /></li>);

  return (
    <ul className="social">
        {socialLinkNodes}
    </ul>
  )
}
