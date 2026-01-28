import "./global.css";
import { useFonts } from "expo-font";
import Recursive from "./assets/fonts/Recursive-Black.ttf";
import { Home } from "./pages/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Forecast} from "./pages/Forecast";

const navTheme = {
    dark: false,
    colors: {
        primary: "#fff",
        background: "transparent",
        card: "transparent",
        text: "#fff",
        border: "transparent",
        notification: "#fff",
    },
    fonts: {
        regular: { fontFamily: "Recursive-Black", fontWeight: "normal" as const },
        medium: { fontFamily: "Recursive-Black", fontWeight: "500" as const },
        bold: { fontFamily: "Recursive-Black", fontWeight: "bold" as const },
        heavy: { fontFamily: "Recursive-Black", fontWeight: "900" as const },
    }
}
const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        "Recursive-Black": Recursive,
    });

    return (
        <SafeAreaProvider>
            <NavigationContainer  theme={navTheme}>
                            {fontsLoaded ? (
                                <Stack.Navigator screenOptions={{animation: "fade", headerShown: false}} id="Main" initialRouteName="Home">
                                    <Stack.Screen name="Home" component={Home} />
                                    <Stack.Screen name="ForeCast" component={Forecast} />
                                </Stack.Navigator>
                            ) : null}
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
