import { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EditSiteDetail from '../components/sites/EditSiteDetail'
import ErrorMessage from '../components/UI/ErrorMessage'
import Spinner from '../components/UI/Spinner'
import useHttp from '../hooks/useHttp'
import classes from './SiteDetail.module.css'

const SiteDetail = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [errorMsg, setErrorMsg] = useState(true)
  const params = useParams()
  const [web, setWeb] = useState([])
  const { isLoading, error, sendRequest: fetchTasks } = useHttp()

  useEffect(() => {
    const transformSites = (tasksObj) => {
      setWeb(tasksObj)
    }

    fetchTasks(
      { url: `/site/${params.siteId}` },
      transformSites
    )
  }, [fetchTasks])

  const saveDataHandler = (newData) => {
    const { createDate, key, path, publicPath, site, __v, _id } = web
    newData = { ...newData, createDate, key, path, publicPath, site, __v, _id }
    const getSite = (tasksObj) => {
      setWeb(newData)
    }
    fetchTasks({
      url: `/site/${params.siteId}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newData
    }, getSite)
    setIsEditing(false)
  }

  const deleteDataHandler = (siteId) => {
    setErrorMsg(true)
    const deleteSite = () => {
      return siteId
    }
    fetchTasks({
      url: `/site/${params.siteId}`,
      method: 'DELETE'
    }, deleteSite)
  }

  const editHandler = () => {
    setIsEditing(true)
  }
  const cancelEditHandler = () => {
    setIsEditing(false)
  }
  const onCloseHandler = () => {
    setErrorMsg(false)
  }

  return <Fragment>
    <Link to={'/home'}>
      <p className={classes['a3media-section__back']}>Atrás</p>
    </Link>
    {error && errorMsg && <ErrorMessage message={error} onClose={onCloseHandler} />}
    {isLoading && <Spinner />}
    {!isLoading &&
      <section className={classes['a3media-section__detail']}>
        <h1 className={classes['a3media-section__title']}>{web.name}</h1>
        <p className={classes['a3media-section__description']}>{web.description}</p>
        <button className={classes['a3media-section__edit-btn']} onClick={editHandler}>Editar</button>
        <button className={classes['a3media-section__delete-btn']} onClick={deleteDataHandler}>Eliminar</button>
      </section>
    }
    {isEditing && <EditSiteDetail name={web.name} description={web.description} onSaveEdit={saveDataHandler} onCancelEdit={cancelEditHandler} />}
  </Fragment>
}

export default SiteDetail
