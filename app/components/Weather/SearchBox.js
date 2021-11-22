import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import {Input, Icon, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {isEmpty} from 'lodash';

import colors from '../../styles/palette';
import {SearchSchema} from '../../utils/validation';
import Error from '../Error';
import Loading from '../Loading';

const SearchBox = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {};

  return (
    <>
      <Formik
        initialValues={{searchValue: ''}}
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
              onChangeText={handleChange('searchValue')}
              onBlur={handleBlur('searchValue')}
              value={values.searchValue}
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
            {errors.searchValue && touched.searchValue && (
              <Error error={errors.searchValue} />
            )}
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
