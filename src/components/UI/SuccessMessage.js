import classes from './SuccessMessage.module.css'

const SuccessMessage = (props) => {
  const onCloseHandler = () => {
    props.onCloseModal()
  }
  return <div className={classes['a3media-success__main-container']}>
    <div className={classes['a3media-success__container']}>
      <h1 className={classes['a3media-success__a3media__title']}>Su site ha sido creado con éxito</h1>
      <button className={classes['a3media-success__btn']} onClick={onCloseHandler}>Cerrar</button>
    </div>
  </div>
}

export default SuccessMessage
