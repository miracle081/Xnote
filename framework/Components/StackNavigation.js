import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen } from '../Screens/IntroScreen';
import { LogIn } from '../Screens/LogIn';
import { SignUp } from '../Screens/SignUp';
import { HomePage } from '../Screens/HomePage';
import { Profile } from '../Screens/Profile';
import { PostNote } from '../Screens/PostNote';
import { Charts } from '../Screens/Charts';
import { ViewNote } from '../Screens/ViewNote';
import { Fund } from '../Screens/Fund';
import { EditProfile } from '../Screens/EditProfile';
import { Pay } from '../Screens/Pay';

const Stack = createStackNavigator();

export function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName='Intro'>
            <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />
            {/* <Stack.Screen name='Charts' component={Charts} /> */}
            <Stack.Screen name='Intro' component={IntroScreen} options={{ headerShown: false }} />
            <Stack.Screen name='LogIn' component={LogIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='PostNote' component={PostNote} />
            <Stack.Screen name='ViewNote' component={ViewNote} />
            <Stack.Screen name='Fund' component={Fund} />
            <Stack.Screen name='EditProfile' component={EditProfile} />
            <Stack.Screen name='Pay' component={Pay} />
        </Stack.Navigator>
    )
}
