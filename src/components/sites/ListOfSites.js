import classes from './ListOfSites.module.css'

const ListOfSites = (props) => {
  return props.sites.map((item) => {
    return <li key={item._id} className={classes['a3media-list__item']}>
      {item.name}
    </li>
  })
}

export default ListOfSites
