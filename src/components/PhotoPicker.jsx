import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image,  StyleSheet,  View, Alert } from 'react-native';
import { Camera } from 'expo-camera';


  

const PhotoPicker = ({onPick}) => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 0.7,
        });
    
        if (result.uri) {
        console.log(result)
          setImage(result.uri);
          onPick(result.uri)
        }
      };
      
    return (
        <View style={styles.wrapper}>
            <Button title='Make photo' onPress={pickImage}/>
            {image && <Image source={{uri: image}} style={styles.image}/>}
        </View>
    );
};

export default PhotoPicker;

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10,
    }
})