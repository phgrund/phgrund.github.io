import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialItem from '../SocialItem';
import './styles.css';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub ,faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const size = 'lg'

const items = [
  {
    name: 'Email',
    link: 'mailto:phrgrund@gmail.com',
    user: 'phrgrund@gmail.com',
    logo: <FontAwesomeIcon icon={ faEnvelope } color="#D44638" size={ size } />,
    color: '#D44638'
  },
  {
    name: 'Github',
    link: 'https://github.com/phgrund/',
    user: 'phgrund',
    logo: <FontAwesomeIcon icon={ faGithub } color="#333" size={ size } />,
    color: '#333'
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/paulohgrund',
    user: 'Paulo Henrique Rodrigues Grund',
    logo: <FontAwesomeIcon icon={ faFacebook } color="#3B5998" size={ size } />,
    color: '#3B5998'
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/phgrund',
    user: '@phgrund',
    logo: <FontAwesomeIcon icon={ faTwitter } color="#00ACEE" size={ size } />,
    color: '#00ACEE'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/paulo-henrique-rodrigues-grund-aa8a55150/',
    user: 'Paulo Henrique Rodrigues Grund',
    logo: <FontAwesomeIcon icon={ faLinkedin } color="#0077b5" size={ size } />,
    color: '#0077b5'
  },
]

const SocialWrapper = () => {
  return (
    <div className="social-wrapper">
      <ul>
        {items.map((item, index) => (
          <li key={index}><SocialItem info={item} color={ item.color } /></li>
        ))}
      </ul>
    </div>
  );
}

export default SocialWrapper;
