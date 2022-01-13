import React, { useEffect } from 'react';
import AppHeaderIcon from '../components/AppHeaderIcon';
import {
    HeaderButtons,
    Item,
  } from 'react-navigation-header-buttons';
import PostList from '../components/PostList';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../store/actions/post';
import {  StyleSheet, ActivityIndicator, View, } from 'react-native';
import { THEME } from '../theme';

const MainScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    }
    const  dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allposts)
    const loading = useSelector(state => state.post.loading)
    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])
    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color={THEME.MAIN_COLOR}/>
            </View>
        )
    }
    return (
        <PostList data={allPosts} onOpen={openPostHandler}/>
    );
};

MainScreen.navigationOptions = ({navigation}) => ({
    title: 'My blog',
    headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Take foto" iconName="ios-camera" onPress={() => navigation.push('Create')}/>
    </HeaderButtons>),
    headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>),
  })

export default MainScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})
