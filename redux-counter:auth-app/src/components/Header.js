import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch()

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout())
  }

  const nav = 
    <nav>
      <ul>
        <li>
          <a href='/'>My Products</a>
        </li>
        <li>
          <a href='/'>My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && nav}
    </header>
  );
};

export default Header;
