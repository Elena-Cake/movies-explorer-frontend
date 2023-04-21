

import { Route, Routes } from 'react-router-dom';
import './Footer.css';
import FooterContent from './FooterContent/FooterContent';

function Footer() {
  return (
    <footer className='footer'>
      <Routes>
        <Route path='/' element={
          <FooterContent />
        } />
        <Route path='/movies' element={
          <FooterContent />
        } />
        <Route path='/saved-movies' element={
          <FooterContent />
        } />
      </Routes>
    </footer>
  );
}

export default Footer;
