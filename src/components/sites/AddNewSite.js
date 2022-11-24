import classes from './AddNewSite.module.css'

const AddNewSite = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
    const bodyObj = {
      key: event.target.name.value,
      name: event.target.name.value,
      description: event.target.description.value,
      path: event.target.url.value,
      publicPath: event.target.url.value
    }
    props.onCreateNewSite(bodyObj)
  }

  return <div className={classes['a3media-form__post-container']}>
    <form className={classes['a3media-form__post']} onSubmit={onSubmitHandler}>
      <div className={classes['a3media-form__info']}>
        <label>
          Nombre:
        </label>
        <input className={classes['a3media-form__name']} type="text" id="name" />
        <label>
          Url:
        </label>
        <input className={classes['a3media-form__name']} type="text" id="url" />
        <label>
          Descripción:
        </label>
        <textarea className={classes['a3media-form__description']} rows="4" cols="50" id='description' />
      </div>
      <div className={classes['a3media-form__button']}>
        <button type="submit" className={classes['a3media-form__save']}>Guardar</button>
        <button type="button" className={classes['a3media-form__delete']} onClick={props.onCloseForm}>Cancelar</button>
      </div>
    </form >
  </div>
}

export default AddNewSite
