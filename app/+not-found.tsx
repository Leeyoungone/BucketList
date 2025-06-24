import { Link } from 'expo-router';
import { View } from 'react-native';

export default function NotFoundScreen(){
    return(
        <View>
            <Link href="/">
                Go back to the home screen
            </Link>
        </View>
    )
}