import classes from './ErrorMessage.module.css'

const ErrorMessage = (props) => {
  return <div className={classes['a3media-error__container']}>
    <button onClick={props.onClose}>X</button>
    <p>{props.message}</p>
    <p>Try again later</p>
  </div>
}
export default ErrorMessage
