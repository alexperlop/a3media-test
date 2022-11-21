import React, { useEffect, useState } from 'react'
import useHttp from './hooks/useHttp'

const App = () => {
  const [tasks, setTasks] = useState([])
  console.log('🚀 ~ file: App.js ~ line 9 ~ App ~ tasks', tasks)

  const { isLoading, error, sendRequest: fetchTasks } = useHttp()
  console.log('🚀 ~ file: App.js ~ line 11 ~ App ~ error', error)
  console.log('🚀 ~ file: App.js ~ line 11 ~ App ~ isLoading', isLoading)

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = []

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: tasksObj[taskKey]._id, name: tasksObj[taskKey].name })
      }

      setTasks(loadedTasks)
    }

    fetchTasks(
      { url: '/sites' },
      transformTasks
    )
  }, [fetchTasks])

  return (
    <React.Fragment>
    </React.Fragment>
  )
}

export default App
