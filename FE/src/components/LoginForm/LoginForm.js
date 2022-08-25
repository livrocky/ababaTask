import css from './LoginForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { baseUrl, myFetch } from '../../utils.js';
import { useHistory } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';
import toast from 'react-hot-toast';
import Button from '../UI/Button';

const initValues = {
  email: '',
  password: '',
};
function LoginForm() {
  const history = useHistory();
  const ctx = useAuthCtx();
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Please check your Email').required(),
      password: Yup.string().min(4, 'At least 4 symbols are required').max(20).required(),
    }),
    onSubmit: async (values) => {
      const fetchResult = await myFetch(`${baseUrl}/api/login`, 'POST', values);
      if (fetchResult.success === true) {
        toast.success('Logged in Successfully!');
        ctx.login(fetchResult.token, values.email, fetchResult.payload.userId);
        history.replace('/home');
      }
      if (!fetchResult.token) {
        toast.error('Your Email or Password is Incorrect!');
        return;
      }
    },
  });

  return (
    <form className={css['login-container']} onSubmit={formik.handleSubmit}>
      <label htmlFor='email'>Enter Your Email:</label>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={formik.touched.email && formik.errors.email ? css['error-input'] : ''}
        name='email'
        type='text'
        placeholder='Your Email'
        id='email'
      />
      {formik.touched.email && formik.errors.email && (
        <p className={css.errorMsg}>{formik.errors.email}</p>
      )}
      <label htmlFor='password'>Enter Your Password:</label>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className={formik.touched.password && formik.errors.password ? css['error-input'] : ''}
        name='password'
        type='password'
        placeholder='Your Password'
        id='password'
      />
      {formik.touched.password && formik.errors.password && (
        <p className={css.errorMsg}>{formik.errors.password}</p>
      )}
      <div className={css['login-form-bottom']}>
        <p className={css['reg-link-text']}>
          Don't have an account yet?
          <a href='/register' className={css['reg-link']}>
            Register here!
          </a>
        </p>
        <Button button secondary submit>
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
