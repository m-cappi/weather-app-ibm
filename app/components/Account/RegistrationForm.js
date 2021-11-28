import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Input, Icon, Button} from 'react-native-elements';
import {Formik} from 'formik';

import {FirebaseContext} from '../../firebase';
import Loading from '../Loading';
import colors from '../../styles/palette';
import {SignupSchema} from '../../utils/validation';
import Error from '../Error';

const RegistrationForm = ({toastRef}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {firebase} = useContext(FirebaseContext);
  const navigation = useNavigation();
  const register = values => {
    setIsLoading(true);
    firebase.auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        navigation.navigate('account');
      })
      .catch(() => {
        setIsLoading(false);
        toastRef.current.show('Ese email ya esta en uso!', 4000);
      });
  };
  return (
    <>
      <Formik
        initialValues={{email: '', password: '', confirmationPassword: ''}}
        validationSchema={SignupSchema}
        onSubmit={values => register(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <Input
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Tu email"
              containerStyle={styles.inputForm}
              rightIcon={
                <Icon
                  type="material-community"
                  name="at"
                  iconStyle={styles.iconRight}
                />
              }
            />
            {errors.email && touched.email && <Error error={errors.email} />}
            <Input
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Contraseña"
              password={true}
              secureTextEntry={showPassword ? false : true}
              containerStyle={styles.inputForm}
              rightIcon={
                <Icon
                  type="material-community"
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                  iconStyle={styles.iconRight}
                />
              }
            />
            {errors.password && touched.password && (
              <Error error={errors.password} />
            )}
            <Input
              onChangeText={handleChange('confirmationPassword')}
              onBlur={handleBlur('confirmationPassword')}
              value={values.confirmationPassword}
              placeholder="Confirme la contraseña"
              password={true}
              secureTextEntry={showPassword ? false : true}
              containerStyle={styles.inputForm}
              rightIcon={
                <Icon
                  type="material-community"
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                  iconStyle={styles.iconRight}
                />
              }
            />
            {errors.confirmationPassword && touched.confirmationPassword && (
              <Error error={errors.confirmationPassword} />
            )}
            <Button
              title="Registrate!"
              containerStyle={styles.btnContainerRegister}
              buttonStyle={styles.btnRegister}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <Loading isVisible={isLoading} text="Estamos creando tu cuenta..." />
    </>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  inputForm: {
    width: '100%',
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: '95%',
  },
  btnRegister: {
    backgroundColor: colors.light1,
  },
  iconRight: {
    color: colors.dark1,
  },
});
