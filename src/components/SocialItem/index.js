import React from 'react';

import './styles.css';

const SocialItem = ({ info }) => {
  const { name, link, user, logo, color = '#000' } = info;

  const style = {
    color
  }

  return (
    <div className="social-item">
      <header>
        { logo }
        <strong style={ style }>
          { name }
        </strong>
      </header>
      <a href={ link } target="_blank" rel="noopener noreferrer"> { user }</a>
    </div>
  );
}

export default SocialItem;
