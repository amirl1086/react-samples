import { Fragment, useContext } from 'react';
import Home from './components/Home/Home';
import LoginReducer from './components/Login/LoginReducer';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const context = useContext(AuthContext);
  return (
    <Fragment>
      <MainHeader />
      <main>
        {/* {!isLoggedIn && <Login />} */}
        {!context.isLoggedIn && <LoginReducer />}
        {context.isLoggedIn && <Home />}
      </main>
    </Fragment>
    // <AuthContext.Provider value={{ isLoggedIn, onLogout: logoutHandler }}>

    // </AuthContext.Provider>
  );
}

export default App;
