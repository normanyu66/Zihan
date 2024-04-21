import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import discoverData from '../assets/data/discoverData';

Feather.loadFont();
Entypo.loadFont();

const Home = ({ navigation }) => {

    const renderDiscoverItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', {
                    item: item,
                })}
            >
                <ImageBackground
                    source={item.image}
                    style={[styles.discoverItem, { marginLeft: item.id === 'discover-1' ? 20 : 0 }]}
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name="location-pin" size={18} color={colors.white} />
                        <Text style={styles.discoverItemLocationText}>{item.cont}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <Text style={styles.descriptionText}>Hello</Text>
                    <View style={styles.discoverItemsWrapper}>
                        <FlatList
                            data={discoverData}
                            horizontal
                            renderItem={renderDiscoverItem}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    discoverWrapper: {
        marginTop: 20,
    },
    discoverTitle: {
        marginHorizontal: 20,
        fontSize: 32,
    },
    discoverItemsWrapper: {
        paddingVertical: 20,
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage: {
        borderRadius: 20
    },
    discoverItemTitle: {
        fontSize: 18,
        color: colors.white
    },
    discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    discoverItemLocationText: {
        marginLeft: 5,
        fontSize: 14,
        color: colors.white
    },
    descriptionText: {
        marginLeft: 30,
        marginTop: 20,
        fontSize: 16,
        color: colors.darkGray,
    },
    button: {
        marginHorizontal: 20,
        marginTop: 40,
        backgroundColor: colors.orange,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        color: colors.white
    },
    wrapper: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
});

export default Home;
