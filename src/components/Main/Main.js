
import AboutProject from './AboutProject/AboutProject';
import './Main.css';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';

function Main() {
  return (
    <div className="main">
      <Promo />
      <AboutProject />
      <Techs />
    </div>
  );
}

export default Main;
