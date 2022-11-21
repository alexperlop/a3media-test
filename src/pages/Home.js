import { Fragment, useEffect, useState } from 'react'
import ListOfSites from '../components/sites/ListOfSites'
import classes from '../components/sites/ListOfSites.module.css'
import useHttp from '../hooks/useHttp'

const Home = () => {
  const [sites, setSites] = useState([])

  const { isLoading, error, sendRequest: fetchTasks } = useHttp()
  console.log('🚀 ~ file: App.js ~ line 11 ~ App ~ error', error)
  console.log('🚀 ~ file: App.js ~ line 11 ~ App ~ isLoading', isLoading)

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

  return <Fragment>
    <ul className={classes['a3media-list']}>
      <ListOfSites sites={sites} />
    </ul>
  </Fragment>
}

export default Home
