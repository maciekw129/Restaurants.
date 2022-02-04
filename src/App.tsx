import Header from './components/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './Pages/MainPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={ <Navigate to='/' />} />
        <Route path='/' element={ <MainPage />} />
      </Routes>
    </>
  );
}

export default App;
