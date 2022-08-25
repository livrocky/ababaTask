import css from '../UI/Button.module.css';

function Button(props) {
  return (
    <div>
      <button
        type={props.submit ? 'submit' : 'button'}
        onClick={props.onClick}
        className={props.secondary ? css.secondary : css.primary}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
