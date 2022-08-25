import css from './NotFoundPage.module.css';
import robot from '../../assets/pngegg.png';

function NotFoundPage() {
  return (
    <div>
      <div className={css.logo}>
        <img className={css['img-left']} src={robot} alt='logo' />
      </div>
      <h1 className={css['title']}>Page Not Found 404 🤷🏻‍♂️</h1>
    </div>
  );
}

export default NotFoundPage;
