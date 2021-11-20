import React, {useEffect, useState, useContext} from 'react';

import {FirebaseContext} from '../../firebase';

import Loading from '../../components/Loading';
import Login from './Login';
import User from './User';

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(user => {
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });
  }, [firebase]);

  if (isLoggedIn === null) {
    return <Loading isVisible={true} text="loading..." />;
  } else {
    return isLoggedIn ? <User /> : <Login />;
  }
};

export default Account;
