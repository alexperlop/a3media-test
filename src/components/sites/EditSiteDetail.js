import { useState } from 'react'
import classes from './EditSiteDetail.module.css'

const EditSiteDetail = (props) => {
  const [formIsValid, setForm] = useState(false)
  const submitHandler = (event) => {
    event.preventDefault()
    const e = event.target.form
    if (e.name.value.trim() !== '' && e.name.value.length > 0) {
      props.onSaveEdit({
        name: e.name.value,
        description: e.description.value
      })
    } else {
      setForm(true)
    }
  }

  return <div className={classes['a3media-form__edit-container']}>
    <form className={classes['a3media-form__edit']} onSubmit={submitHandler}>
      <label>Nombre</label>
      <input type='text' defaultValue={props.name} id='name' />
      <label>Descripción</label>
      <textarea rows="4" cols="50" defaultValue={props.description} id='description' />
      <div className={classes['a3media-form__buttons']}>
        {formIsValid && <p>No está permitido dejar los campos vacíos</p>}
        <button type="submit" className={classes['a3media-form__save']} onClick={submitHandler}>Guardar</button>
        <button type="button" className={classes['a3media-form__delete']} onClick={props.onCancelEdit}>Cancelar</button>
      </div>
    </form>
  </div>
}

export default EditSiteDetail
