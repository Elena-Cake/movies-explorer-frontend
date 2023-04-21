

import { Route, Routes } from 'react-router-dom';
import './Footer.css';
import FooterContent from './FooterContent/FooterContent';
import { endpoints } from '../../constans/pathContent';

function Footer() {
  return (
    <Routes>
      <Route path={endpoints.ABOUT} element={
        <FooterContent />
      } />
      <Route path={endpoints.MOVIES} element={
        <FooterContent />
      } />
      <Route path={endpoints.SAVED_MOVIES} element={
        <FooterContent />
      } />
    </Routes>
  );
}

export default Footer;
