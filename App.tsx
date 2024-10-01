import { EventProvider } from 'react-native-outside-press';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home';
import { QuestionScreen } from './screens/questions';
import { InterviewScreen } from './screens/interview';
import { screenRoute } from './constants/screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    SUIT_Thin: require('./assets/fonts/SUIT-Thin.otf'),
    SUIT_Medium: require('./assets/fonts/SUIT-Medium.otf'),
    SUIT_Bold: require('./assets/fonts/SUIT-Bold.otf'),
    SUIT_ExtraBold: require('./assets/fonts/SUIT-ExtraBold.otf'),
    Gmarket: require('./assets/fonts/GmarketSansBold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <EventProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
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
    </EventProvider>
  );
}
