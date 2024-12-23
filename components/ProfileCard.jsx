import { TouchableOpacity, Text, View, Image} from 'react-native';
import { styleObj } from '../app/App.style';

export function ProfileCard() {
    return (
    <View style={styleObj.container}>
        <View style={styleObj.header}></View>
        <View style={styleObj.row}>
            <Image 
                style={styleObj.avatar} 
                source={{ uri: 'https://i.pravatar.cc/311'}} 
            />
            <View style={styleObj.textContainer}>
                <Text style={styleObj.name}>Kumar TheDev</Text>
                <Text>Hi I am React Native developer, let's get in touch, and soon</Text>
            </View>
        </View>
        <View style={styleObj.social}></View>
    </View>
)
    
}