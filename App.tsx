import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home';
import { QuestionScreen } from './screens/questions';
import { InterviewScreen } from './screens/interview';
import { screenRoute } from './constants/screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import setDefaultProps from 'react-native-simple-default-props';
import { Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const defaultText = {
  style: [{ fontFamily: 'SUIT-Medium' }],
};

export default function App() {
  const [fontsLoaded] = useFonts({
    SUIT: require('./assets/fonts/SUIT-Medium.otf'),
    Gmarket: require('./assets/fonts/GmarketSansBold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  // setDefaultProps(Text, defaultText);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1 }}
        onLayout={onLayoutRootView}
        edges={['top']}
      >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={screenRoute.HOME}
          >
            <Stack.Screen name={screenRoute.HOME} component={HomeScreen} />
            <Stack.Screen
              name={screenRoute.QUESTION}
              component={QuestionScreen}
            />
            <Stack.Screen
              name={screenRoute.INTERVIEW}
              component={InterviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
