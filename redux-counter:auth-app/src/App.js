import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../src/store/index";
import UserProfile from "./components/UserProfile"


function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isLoggedIn);


  return (
    <>
    <Header></Header>
    {!isAuth && <Auth/>}
    {isAuth && <UserProfile/>}
    <Counter />
    </>
  );
}

export default App;
