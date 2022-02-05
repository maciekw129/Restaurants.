import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './Pages/MainPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='*' element={ <Navigate to='/' />} />
        <Route path='/' element={ <MainPage />} />
      </Routes>
    </>
  );
}

export default App;
