import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home';
import { QuestionScreen } from './screens/questions';
import { InterviewScreen } from './screens/interview';
import { screenRoute } from './constants/screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screenRoute.HOME} component={HomeScreen} />
        <Stack.Screen name={screenRoute.QUESTION} component={QuestionScreen} />
        <Stack.Screen
          name={screenRoute.INTERVIEW}
          component={InterviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
