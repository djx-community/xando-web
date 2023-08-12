import React from 'react';
import FooterButton from '../footer-button/FooterButton';

function BackToHomeButtonFooter() {
  return (
    <footer className="absolute bottom-4 right-4">
      <FooterButton text="Back To Home" path="/" />
    </footer>
  );
}

export default BackToHomeButtonFooter;
