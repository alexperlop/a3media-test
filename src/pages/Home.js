import { Fragment, useEffect, useState } from 'react'
import ListOfSites from '../components/sites/ListOfSites'
import ErrorMessage from '../components/UI/ErrorMessage'
import classes from '../components/sites/ListOfSites.module.css'
import useHttp from '../hooks/useHttp'
import Spinner from '../components/UI/Spinner'

const Home = () => {
  const [sites, setSites] = useState([])
  const [errorMsg, setErrorMsg] = useState(true)

  const { isLoading, error, sendRequest: fetchTasks } = useHttp()

  useEffect(() => {
    const transformSites = (tasksObj) => {
      const loadedTasks = []

      for (const taskKey in tasksObj) {
        loadedTasks.push(tasksObj[taskKey])
      }

      setSites(loadedTasks)
    }

    fetchTasks(
      { url: '/sites' },
      transformSites
    )
  }, [fetchTasks])

  const onCloseHandler = () => {
    setErrorMsg(false)
  }

  return <Fragment>
    {error && errorMsg && <ErrorMessage message={error} onClose={onCloseHandler} />}
    {isLoading && <Spinner />}
    <ul className={classes['a3media-list']}>
      <ListOfSites sites={sites} />
    </ul>
  </Fragment>
}

export default Home
