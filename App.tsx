import "./global.css";
import { useFonts } from "expo-font";
import Recursive from "./assets/fonts/Recursive-Black.ttf";
import img_background from "./assets/background.jpg";
import { Home } from "./pages/Home";
import { ImageBackground, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Recursive-Black": Recursive,
    });

    return (
        <View className="flex-1 bg-gray-900">
                <SafeAreaProvider>
                    <SafeAreaView className="flex-1">
                       <Home/>
                    </SafeAreaView>
                </SafeAreaProvider>
        </View>
    );
}
