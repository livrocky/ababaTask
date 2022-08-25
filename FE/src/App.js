import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage.js';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
