import React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { SearchBar } from "react-native-screens";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = () => {
    console.log("Rendering SearchScreen");
    return (
        <ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.exploreText}>Let's explore the world!</Text>
                <Image source={require("../../assets/icons/explorer.png")} style={styles.icon}></Image>
            </View>
            <View>
                <SearchBar placeholder="Search"
                    style={styles.searchBar}>
                </SearchBar>
            </View>
            <View style={styles.exploreTypeGeneralView}>
                <View style={styles.exploreTypeView}>
                    <Image source={require("../../assets/icons/sun.png")}></Image>
                    <Text>Summer</Text>
                </View>
                <View style={styles.exploreTypeView}>
                    <Image source={require("../../assets/icons/sun.png")}></Image>
                    <Text>Summer</Text>
                </View>
                <View style={styles.exploreTypeView}>
                    <Image source={require("../../assets/icons/sun.png")}></Image>
                    <Text>Summer</Text>
                </View>
            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    headerView: {
        display: "flex",
        flexDirection: "row",
        marginTop: 50,
        justifyContent: "space-evenly"
    },
    exploreText: {
        fontSize: 28,
        width: 200,
        fontWeight: "bold"
    },
    searchBar: {
        width: 60,
        backgroundColor: "#000080"
    },
    exploreTypeView: {
        display: "flex",
        flexDirection: "column",
    },
    exploreTypeGeneralView: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-evenly",
        flex:2
    }
});

export default HomeScreen;