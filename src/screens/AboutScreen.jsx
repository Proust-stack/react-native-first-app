import React from 'react';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { StyleSheet, Text, View } from 'react-native';
import {HeaderButtons, Item } from 'react-navigation-header-buttons';

const AboutScreen = () => {
    return (
        <View style={styles.center}>
            <Text>Test version <Text style={styles.bold}>1.0</Text></Text>
        </View>
    );
};

export default AboutScreen;

AboutScreen.navigationOptions = ({navigation}) => ({
    title: 'About app',
    headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>),
  })

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bold: {
        fontFamily: 'open-bold'
    }
})