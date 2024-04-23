import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen } from '../Screens/IntroScreen';
import { LogIn } from '../Screens/LogIn';
import { SignUp } from '../Screens/SignUp';
import { HomePage } from '../Screens/HomePage';
import { Profile } from '../Screens/Profile';
import { PostNote } from '../Screens/PostNote';
import { Charts } from '../Screens/Charts';
import { ViewNote } from '../Screens/ViewNote';

const Stack = createStackNavigator();

export function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name='Charts' component={Charts} />
            <Stack.Screen name='Intro' component={IntroScreen} options={{ headerShown: false }} />
            <Stack.Screen name='LogIn' component={LogIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='PostNote' component={PostNote} />
            <Stack.Screen name='ViewNote' component={ViewNote} />
        </Stack.Navigator>
    )
}
