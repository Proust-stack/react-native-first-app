import React, { useEffect } from 'react';
import AppHeaderIcon from '../components/AppHeaderIcon';
import {
    HeaderButtons,
    Item,
  } from 'react-navigation-header-buttons';
import PostList from '../components/PostList';
import { useSelector } from 'react-redux';

const BookMarkedScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    }
    const bookedPosts = useSelector(state => state.post.bookedPosts)
    return <PostList data={bookedPosts} onOpen={openPostHandler}/>
};

BookMarkedScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Favourites',
    headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>),
  })

export default BookMarkedScreen;

