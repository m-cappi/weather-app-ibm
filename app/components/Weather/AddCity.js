import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

import { FirebaseContext } from "../../firebase";
import colors from "../../styles/palette";

const AddCity = ({ city }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        firebase.auth.onAuthStateChanged((user) => {
            user ? setIsLoggedIn(true) : setIsLoggedIn(false);
        });
    }, [firebase]);

    useEffect(() => {
        if (isLoggedIn) {
            firebase
                .checkFavoriteStatus(city)
                .then((res) => {
                    if (res.docs.length === 1) {
                        setIsFavorite(true);
                    }
                })
                .catch((err) => console.log(err));
        }
    }, [firebase]);

    const handleFavorite = () => {
        if (isFavorite) {
            firebase.removeFavorite(city);
        } else {
            firebase.addFavorite(city);
        }
    };

    return (
        isLoggedIn && (
            <View>
                <Button
                    title={
                        isFavorite
                            ? "Quitar de Favoritos"
                            : "Agregar a Favoritos"
                    }
                    buttonStyle={styles.btnAddCity}
                    titleStyle={styles.btnAddCityText}
                    onPress={handleFavorite}
                />
            </View>
        )
    );
};

export default AddCity;

const styles = StyleSheet.create({
    btnAddCity: {
        marginTop: 30,
        borderRadius: 0,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#e3e3e3",
        borderBottomColor: "#e3e3e3",
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: "center",
        width: "60%",
        borderRadius: 20,
    },
    btnAddCityText: { color: colors.light1 },
});
