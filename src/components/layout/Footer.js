import React from 'react';
import LogoTransparent from '../../assets/LogoTransparent.svg';

const Footer = () => {
  return (
    <footer className='footer bg-primary'>
      <h1>Copy Rights Reserved &#169; {new Date().getFullYear()}</h1>
      <img src={LogoTransparent} alt='Logo' className='logo' />
    </footer>
  );
};

export default Footer;
