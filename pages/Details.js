import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, TextInput, Button, FlatList, Alert } from 'react-native';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const height = Dimensions.get('window').height;

const Details = ({ route, navigation }) => {
    const { item } = route.params || {};

    return (
        <View style={styles.container}>
            <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={colors.white} />
                </TouchableOpacity>

                <View style={styles.titleWrapper}>
                    <Text style={[styles.itemTitle, { color: colors.white }]}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                        <Entypo name="location-pin" size={24} color={colors.white} />
                        <Text style={[styles.locationText, { color: colors.white }]}>{item.cont}</Text>
                    </View>
                </View>

            </ImageBackground>

            <View style={styles.descriptionWrapper}>
                <View style={styles.heartWrapper}>
                    <Entypo name="heart" size={32} color={colors.orange} />
                </View>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    backgroundImage: {
        height: height * 0.4,
        justifyContent: 'space-between'
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 20,
        marginTop: -20
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 50
    },
    titleWrapper: {
        marginHorizontal: 20,
        marginBottom: 40
    },
    itemTitle: {
        fontSize: 32
    },
    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    locationText: {
        fontSize: 16
    },
    heartWrapper: {
        position: 'absolute',
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: colors.white,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal: 20
    },
    descriptionTitle: {
        fontSize: 24,
        color: colors.black,
        fontWeight: 'bold'
    },
    descriptionText: {
        marginTop: 20,
        fontSize: 16,
        color: colors.darkGray,
        height: 85
    },
    editButton: {
        marginRight: 10
    },
    deleteButton: {
        marginRight: 10
    },
  
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Details;
