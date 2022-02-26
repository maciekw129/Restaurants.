import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './Pages/MainPage';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='*' element={ <Navigate to='/' />} />
        <Route path='/' element={ <MainPage />} />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> }>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
