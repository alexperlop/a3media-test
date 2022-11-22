import { Link } from 'react-router-dom'
import classes from './ListOfSites.module.css'

const ListOfSites = (props) => {
  return props.sites.map((item) => {
    return <Link key={item._id} to={`/site/${item._id}`}>
      <li key={item._id} className={classes['a3media-list__item']}>
        {item.name}
      </li>
    </Link>
  })
}

export default ListOfSites
