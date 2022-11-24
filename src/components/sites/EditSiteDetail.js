import classes from './EditSiteDetail.module.css'

const EditSiteDetail = (props) => {
  const submitHandler = (event) => {
    event.preventDefault()
    props.onSaveEdit({
      name: event.target.form.name.value,
      description: event.target.form.description.value
    })
  }

  return <div className={classes['a3media-form__edit-container']}>
    <form className={classes['a3media-form__edit']} onSubmit={submitHandler}>
      <label>Nombre</label>
      <input type='text' defaultValue={props.name} id='name' />
      <label>Descripción</label>
      <textarea rows="4" cols="50" defaultValue={props.description} id='description' />
      <div className={classes['a3media-form__buttons']}>
        <button type="submit" className={classes['a3media-form__save']} onClick={submitHandler}>Guardar</button>
        <button type="button" className={classes['a3media-form__delete']} onClick={props.onCancelEdit}>Cancelar</button>
      </div>
    </form>
  </div>
}

export default EditSiteDetail
