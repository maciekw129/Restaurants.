import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './Pages/MainPage';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ChooseType from './Pages/Register/ChooseType';
import RegisterGuest from './Pages/Register/RegisterGuest';
import RegisterRestaurant from './Pages/Register/RegisterRestaurant';
import RestaurantDetails from './Pages/RestaurantDetails';

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
          <Route path='/register' element={ <ChooseType /> } />
          <Route path=':register-guest' element={ <RegisterGuest /> } />
          <Route path=':register-restaurant' element={ <RegisterRestaurant /> } />
        </Route>
        <Route path="/restaurant/:id" element={ <RestaurantDetails /> } />
      </Routes>
    </>
  );
}

export default App;
