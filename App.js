import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { AppNavigation } from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { useEffect } from 'react';
import { DB } from './src/db';

export default function App() {
  let [fontsLoaded] = Font.useFonts({
    'open-regular': require('./assets/font/OpenSans-Regular.ttf'),
    'open-bold': require('./assets/font/OpenSans-Bold.ttf'),
  });
  useEffect(() => {
    async function bootstrap() {
      await DB.init();
    }
    try {
       bootstrap();
       console.log('db started')
    } catch (error) {
      console.log(error)
    }
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <AppNavigation/>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
