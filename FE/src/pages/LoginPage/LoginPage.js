import LoginForm from '../../components/LoginForm/LoginForm';
import css from '../LoginPage/LoginPage.module.css';
import pokemon from '../../assets/pokemon.png';

function LoginPage() {
  return (
    <div className={css['login-page']}>
      <div className={css.logo}>
        <img className={css['img-left']} src={pokemon} alt='logo' />
      </div>
      <h1 className={css.title}>Login Page</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
