import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {Input, Icon, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import {WeatherApiContext} from '../../weatherapi';
import colors from '../../styles/palette';
import {SearchSchema} from '../../utils/validation';
import Error from '../Error';
import Loading from '../Loading';

const SearchBox = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [_error, set_error] = useState(null);

  const navigation = useNavigation();
  const weatherApi = useContext(WeatherApiContext);

  const showWeather = weather => {
    navigation.navigate('search-result', {weather});
  };

  const handleSearch = async values => {
    try {
      set_error(null);
      setIsLoading(true);
      const weather = await weatherApi.currentWeather(values.city);
      setIsLoading(false);
      showWeather(weather.data);
    } catch (err) {
      //404 entra aca
      set_error('No se encontro la ciudad. El nombre debe ser exacto!');
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{city: ''}}
        validationSchema={SearchSchema}
        onSubmit={values => handleSearch(values)}>
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
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              value={values.city}
              placeholder="Ciudad..."
              containerStyle={styles.inputForm}
              rightIcon={
                <Icon
                  type="material"
                  name="search"
                  iconStyle={styles.iconRight}
                  onPress={handleSubmit}
                />
              }
            />
            {errors.city && touched.city && <Error error={errors.city} />}
            {_error && <Error error={_error} />}
            <Button
              title="Buscar!"
              containerStyle={styles.btnContainerSearch}
              buttonStyle={styles.btnSearch}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <Loading isVisible={isLoading} text="Viendo por la ventana" />
    </>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  inputForm: {
    width: '100%',
    marginTop: 20,
  },
  iconRight: {
    color: colors.dark1,
  },
  btnContainerSearch: {
    marginTop: 20,
    width: '95%',
  },
  btnSearch: {
    backgroundColor: colors.light1,
  },
  btnFilter: {
    backgroundColor: colors.light2,
  },
});
