
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path='/' element={
          <Main />
        } />
      </Routes>
    </div>
  );
}

export default App;
