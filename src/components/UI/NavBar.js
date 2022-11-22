import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'

const Navbar = () => {
  const imgUrl = 'https://statics.atresmedia.com/atresplayer/assets/web/images/svg/logo-atresplayer.svg'

  return <header>
    <nav className={classes['a3media-nav__container']}>
      <Link to={'/home'}>
        <figure className={classes['a3media-nav__figure']}>
          <img src={imgUrl} alt="a3media-logo" className={classes['a3media-nav__logo']} />
        </figure>
      </Link>
    </nav>
  </header>
}

export default Navbar
