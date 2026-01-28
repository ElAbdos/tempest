import { ImageBackground, View } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import img_background from "../assets/background.jpg";

export function Container({ children }) {
    return (
        <ImageBackground source={img_background} className="flex-1 opacity-95 p-6">
            <View className="flex-1">
                <SafeAreaView className="flex-1">
                    {children}
                </SafeAreaView>
            </View>
        </ImageBackground>
    );
}