import { Text, View } from 'react-native';
import Fruits from '../types/options.types';
import Checklist from '../components/Checklist';

export default function ListScreen() {

    const fruits: Fruits[] = [
        { id: 1, name: "orange", color: "orange", calories: 12, checked: false}, 
        { id: 2, name: "strawberry", color: "red", calories: 15, checked: false}
    ]; 

    return(
        <View> 
            <Text> this is the list screen</Text>
            <Checklist
                fruits={fruits}
            />
        </View>
    );
}