
import classes from './CSSButton.module.css';
const CSSButton = props => {
  return (
    <button type={props.type} className={classes.button}>
      {props.children}
    </button>
  );
};

export default CSSButton;
