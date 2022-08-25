import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage.js';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <div className='App'>
      <Toaster autoClose={6000} />
      <Switch>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route exact path={'/home'}>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
