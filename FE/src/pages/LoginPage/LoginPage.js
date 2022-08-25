import LoginForm from '../../components/LoginForm/LoginForm';
import css from '../LoginPage/LoginPage.module.css';

function LoginPage() {
  return (
    <div className={css['login-page']}>
      <h1 className={css.title}>Login Page</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
