import { useState, useReducer } from 'react'
import classes from './AddNewSite.module.css'

const defaultValue = {
  value: '',
  valid: true
}

const nameReducer = (state, action) => {
  if (action.type === 'INPUT_NAME') {
    if (action.value.trim() === '' && action.value.length <= 0) {
      return {
        value: action.value,
        valid: false
      }
    }
  }
  return defaultValue
}

const descriptionReducer = (state, action) => {
  if (action.type === 'INPUT_DESCRIPTION') {
    if (action.value.trim() === '' && action.value.length <= 0) {
      return {
        value: action.value,
        valid: false
      }
    }
  }
  return defaultValue
}

const urlReducer = (state, action) => {
  if (action.type === 'INPUT_URL') {
    if (action.value.trim() === '' && action.value.length <= 0) {
      return {
        value: action.value,
        valid: false
      }
    }
  }
  return defaultValue
}
const AddNewSite = (props) => {
  const [formState, setForm] = useState(false)
  const [nameState, dispatchName] = useReducer(nameReducer, defaultValue)
  const [descriptionState, dispatchDescription] = useReducer(descriptionReducer, defaultValue)
  const [urlState, dispatchUrl] = useReducer(urlReducer, defaultValue)

  const nameHandler = (event) => {
    dispatchName({
      type: 'INPUT_NAME',
      value: event.target.value
    })
  }
  const descriptionHandler = (event) => {
    dispatchDescription({
      type: 'INPUT_DESCRIPTION',
      value: event.target.value
    })
  }
  const urlHandler = (event) => {
    dispatchUrl({
      type: 'INPUT_URL',
      value: event.target.value
    })
  }
  const onSubmitHandler = (event) => {
    event.preventDefault()
    const e = event.target

    if ((e.name.value.trim() !== '' && e.name.value.length > 0) &&
      (e.description.value.trim() && e.description.value.length > 0) &&
      (e.url.value.trim() && e.url.value.length > 0)) {
      const bodyObj = {
        key: event.target.name.value,
        name: event.target.name.value,
        description: event.target.description.value,
        path: event.target.url.value,
        publicPath: event.target.url.value
      }
      props.onCreateNewSite(bodyObj)
    } else {
      setForm(true)
    }
  }

  return <div className={classes['a3media-form__post-container']}>
    <form className={classes['a3media-form__post']} onSubmit={onSubmitHandler}>
      <div className={classes['a3media-form__info']}>
        <label>
          Nombre:
        </label>
        <input className={classes['a3media-form__name']} type="text" id="name" onChange={nameHandler} />
        {!nameState.valid && <p>Por favor introduzca un nombre válido</p>}
        <label>
          Url:
        </label>
        <input className={classes['a3media-form__name']} type="text" id="url" onChange={urlHandler} />
        {!urlState.valid && <p>Por favor introduzca una url válida</p>}
        <label>
          Descripción:
        </label>
        <textarea className={classes['a3media-form__description']} rows="4" cols="50" id='description' onChange={descriptionHandler} />
        {!descriptionState.valid && <p>Por favor introduzca una descripción válida</p>}
      </div>
      <div className={classes['a3media-form__button']}>
        {formState && <p>Rellene los campos</p>}
        <button type="submit" className={classes['a3media-form__save']}
          disabled={!nameState.valid && !urlState.valid && !descriptionState.valid}
        >Guardar</button>
        <button type="button" className={classes['a3media-form__delete']} onClick={props.onCloseForm}>Cancelar</button>
      </div>
    </form >
  </div>
}

export default AddNewSite
