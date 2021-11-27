import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import { map } from "lodash";
import { WeatherApiContext } from "../../weatherapi";
import AddCity from "../../components/Weather/AddCity";

const SearchResult = ({ navigation, route }) => {
    const { weather } = route.params;
    const weatherApi = useContext(WeatherApiContext);

    useEffect(() => {
        if (weather?.name) {
            navigation.setOptions({ title: weather.name });
        }
    }, [weather]);

    const iconUrl = weatherApi.getLargeIcon(weather.weather[0].icon);
    const windDirection = weatherApi.getDirection(weather.wind.deg);

    const weatherItems = [
        { title: "Temperatura", value: `${weather.main.temp} °C` },
        { title: "Sensacion Termica", value: `${weather.main.feels_like} °C` },
        { title: "Humedad Relativa", value: `${weather.main.humidity} %` },
        { title: "Viento", value: `${weather.wind.speed} ${windDirection}` },
        { title: "Presion Atmosferica", value: `${weather.main.pressure} hPA` },
    ];

    return (
        <View>
            <View style={styles.viewBanner}>
                <Avatar
                    rounded
                    size="large"
                    showEditButton
                    containerStyle={styles.avatarContainer}
                    source={
                        iconUrl
                            ? { uri: iconUrl }
                            : require("../../../assets/img/avatar-default.jpg")
                    }
                />
                <View>
                    <Text style={styles.cityName}>
                        {weather.name}, {weather.sys.country}
                    </Text>
                    <Text>{weather.weather[0].description}</Text>
                </View>
            </View>
            <View style={styles.list}>
                {map(weatherItems, (item, index) => (
                    <ListItem key={index} bottomDivider>
                        <ListItem.Content style={styles.listItem}>
                            <ListItem.Subtitle>{item.title}</ListItem.Subtitle>
                            <ListItem.Title>{item.value}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </View>
            <AddCity city={weather.name} />
        </View>
    );
};

export default SearchResult;

const styles = StyleSheet.create({
    viewBanner: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f2f2f2",
        paddingVertical: 30,
    },
    avatarContainer: {
        marginRight: 20,
        backgroundColor: "#fcfcfc",
    },
    cityName: {
        fontWeight: "bold",
        paddingBottom: 5,
    },
    list: { backgroundColor: "#fcfcfc" },
    listItem: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },
});
