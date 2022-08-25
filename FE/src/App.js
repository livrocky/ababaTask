import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage.js';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
