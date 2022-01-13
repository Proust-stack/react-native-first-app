import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Post = ({post, onOpen}) => {
    const image = { uri: post.img };
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
            <View style={styles.post}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.textWrap}>
                    <Text style={styles.title}>
                        {new Date(post.date).toLocaleDateString()}
                    </Text>
                </View>
            </ImageBackground>
        </View>
        </TouchableOpacity>
    );
};

export default Post;

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,

    },
    textWrap: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 15,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        color: 'white',
        fontFamily: 'open-regular',
    }
})