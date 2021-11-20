import React, {useEffect, useRef, useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import Toast from 'react-native-easy-toast';

import {FirebaseContext} from '../../firebase';
import Loading from '../../components/Loading';
import UserInfo from '../../components/Account/UserInfo';
import AccountOptions from '../../components/Account/AccountOptions';
import colors from '../../styles/palette';

const User = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState('');
  const [reloadUser, setReloadUser] = useState(null);

  const {firebase} = useContext(FirebaseContext);

  const toastRef = useRef();

  useEffect(() => {
    (async () => {
      const user = await firebase.auth.currentUser;
      setUserInfo(user);
    })();
  }, [reloadUser]);

  return (
    <View style={styles.viewUserInfo}>
      {userInfo && (
        <>
          <UserInfo
            toastRef={toastRef}
            userInfo={userInfo}
            setIsLoading={setIsLoading}
            setReloadUser={setReloadUser}
            setLoadingInfo={setLoadingInfo}
          />
          <AccountOptions
            toastRef={toastRef}
            userInfo={userInfo}
            setIsLoading={setIsLoading}
            setReloadUser={setReloadUser}
            setLoadingInfo={setLoadingInfo}
          />
        </>
      )}
      <Button
        title="Log out"
        buttonStyle={styles.btnLogout}
        titleStyle={styles.btnLogoutText}
        onPress={() => firebase.auth.signOut()}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading isVisible={isLoading} text={loadingInfo} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  viewUserInfo: {minHeight: '100%', backgroundColor: '#f2f2f2'},
  btnLogout: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomColor: '#e3e3e3',
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnLogoutText: {color: colors.light1},
});
