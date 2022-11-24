import { Fragment, useEffect, useState } from 'react'
import ListOfSites from '../components/sites/ListOfSites'
import ErrorMessage from '../components/UI/ErrorMessage'
import classes from '../components/sites/ListOfSites.module.css'
import useHttp from '../hooks/useHttp'
import Spinner from '../components/UI/Spinner'
import AddNewSite from '../components/sites/AddNewSite'
import SuccessMessage from '../components/UI/SuccessMessage'

const Home = () => {
  const [sites, setSites] = useState([])
  const [errorMsg, setErrorMsg] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const { isLoading, error, sendRequest: fetchTasks } = useHttp()

  const transformSites = (siteObj) => {
    const loadedSites = []
    for (const siteKey in siteObj) {
      loadedSites.push(siteObj[siteKey])
    }
    setSites(loadedSites)
  }

  const createNewSiteHandler = (site) => {
    const createWebSite = () => {
      return site
    }
    fetchTasks(
      {
        url: '/site',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: site
      },
      createWebSite
    )
    setSites(prevSites => prevSites.concat(site))
    setShowForm(false)
    setShowModal(true)
  }

  useEffect(() => {
    fetchTasks(
      { url: '/sites' },
      transformSites
    )
  }, [fetchTasks])

  const onCloseHandler = () => {
    setErrorMsg(false)
  }
  const showFormHandler = () => {
    setShowForm(true)
  }
  const closeFormHandler = () => {
    setShowForm(false)
  }
  const onCloseModal = () => {
    setShowModal(false)
    fetchTasks(
      { url: '/sites' },
      transformSites
    )
  }

  return <Fragment>
    {showModal && <SuccessMessage onCloseModal={onCloseModal} />}
    {error && errorMsg && <ErrorMessage message={error} onClose={onCloseHandler} />}
    {isLoading && <Spinner />}
    <div className={classes['a3media-new__post-container']} onClick={showFormHandler}>
      <span className={classes['a3media-new__post-text']}>Crear Nuevo Site</span>
      <button className={classes['a3media-new__post']}>
        <i className="bi bi-plus"></i>
      </button>
    </div>
    {showForm && <AddNewSite onCreateNewSite={createNewSiteHandler} onCloseForm={closeFormHandler} />}
    <ul className={classes['a3media-list']}>
      <ListOfSites sites={sites} />
    </ul>
  </Fragment>
}

export default Home
