import React, { useRef, useState } from 'react';
import {
  Button,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { THEME } from '../theme';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/actions/post';
import PhotoPicker from '../components/PhotoPicker';

const CreateScreen = ({navigation}) => {
	const  dispatch = useDispatch()
  const [text, setText] = useState('')
	const imageRef = useRef()
  const createPostHandler = () => {
		const post = {
			img: imageRef.current,
			text,
			date: new Date().toJSON(),
			booked: false
		}
		dispatch(addPost(post))
		navigation.navigate('Main')
	};
	const photoPickHandler = (uri) => {
		imageRef.current = uri
	}
  return (
    <ScrollView>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.wrapper}>
        <Text style={styles.title}>Create image</Text>
        <TextInput
          style={styles.textArea}
          placeholder="enter text"
          value={text}
          onChangeText={setText}
          multiline
        />
        <PhotoPicker onPick={photoPickHandler}/>
        <Button
          title="Create post"
          color={THEME.MAIN_COLOR}
          onPress={createPostHandler}
					disabled={!text}
        />
      </View>
			</TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default CreateScreen;

CreateScreen.navigationOptions = ({ navigation }) => ({
  title: 'Create post',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10,
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});
