import classes from './Main.module.css'

const Main = (props) => {
  return <main className={classes['a3media-main']}>
    {props.children}
  </main>
}

export default Main
