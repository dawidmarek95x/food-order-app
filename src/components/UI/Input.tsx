import { forwardRef, ForwardedRef, InputHTMLAttributes } from 'react';
import classes from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={classes.input}>
        <label htmlFor={props.id}>{props.label}</label>
        <input ref={ref} {...props} />
      </div>
    );
  }
);

export default Input;
