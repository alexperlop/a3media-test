import { Fragment } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Main from './components/UI/Main'
import Navbar from './components/UI/NavBar'
import Home from './pages/Home'
import SiteDetail from './pages/SiteDetail'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Main>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/site/:siteId' element={<SiteDetail />} />
        </Routes>
      </Main>
    </Fragment>
  )
}

export default App
