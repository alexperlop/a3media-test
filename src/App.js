import { Fragment } from 'react'
import Main from './components/UI/Main'
import Navbar from './components/UI/NavBar'
import Home from './pages/Home'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Main>
        <Home />
      </Main>
    </Fragment>
  )
}

export default App
