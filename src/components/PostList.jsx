import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Post from './Post';

const PostList = ({data, onOpen}) => {
  if (!data.length) {
    return (
      <View style={styles.wrapper}>
      <Text style={styles.text}>
        No posts yet
      </Text>
    </View>
    )
  }
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      />
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    },
    text: {
        fontFamily: 'open-regular',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 18
    }
})
