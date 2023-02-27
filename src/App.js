import './App.css';


import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/HomePage/Home';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignIn from './pages/SignInPage/SignIn';
import SIgnUp from './pages/SignUpPage/SIgnUp';
import VerifyPage from './pages/VerifyPage/VerifyPage';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ConfirmationMessage from './components/ConfirmationMessage/ConfirmationMessage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element = {<Home />} />
          <Route  path='/signup' element = {<SIgnUp />} />
          <Route  path='/signin' element = {<SignIn />} />
          <Route  path='/profile' element = {<ProfilePage />} />
          <Route  path='/forgot-password' element = {<ForgotPassword />} />
          <Route  path='/verify' element = {<VerifyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
