import React, { useEffect, useCallback } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View, Alert  } from 'react-native';
import { THEME } from '../theme';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { useDispatch, useSelector } from 'react-redux';
import { removePost, toggleBooked } from '../store/actions/post';

const PostScreen = ({navigation}) => {
    const postId = navigation.getParam('postId')
    const post = useSelector(state => state.post.allposts.find(post => post.id === postId))
    const  dispatch = useDispatch()
    const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId))
    useEffect(() => {
        navigation.setParams({toggleHandler})
    }, [toggleHandler])
    useEffect(() => {
        navigation.setParams({booked})
    }, [booked])

    const removeHandler = () => {
        Alert.alert(
            "Post deletion",
            `You are deleting post: ${post.text}`,
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                navigation.navigate('Main')
                dispatch(removePost(postId))
              } }
            ]
          );
    }
    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(post))
    }, [dispatch, post])

    if (!post) {
        return null
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img}} style={styles.image}/>
            <View style={styles.textWrap}>
                <Text style={styles.title}>
                    {post.text}
                </Text>
            </View>
            <Button title="delete" color={THEME.DANGER_COLOR} onPress={removeHandler}/>
        </ScrollView>
    );
};

PostScreen.navigationOptions = ({navigation}) => {
    
    const date = navigation.getParam('date')
    const booked = navigation.getParam('booked')
    const toggleHandler = navigation.getParam('toggleHandler')
    const iconName = booked ? 'ios-star' : 'ios-star-outline'
    return {
        title: 'Post from ' + new Date(date).toLocaleDateString(),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take foto" iconName={iconName} onPress={toggleHandler}/>
            </HeaderButtons>),
    }
}

export default PostScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    textWrap: {
        padding: 10,

    },
    title: {
        fontFamily: 'open-regular',
    }
})