import { View, Image, ScrollView } from "react-native";
import { Txt } from "./Txt";

export function MeteoBasic({ temperature, city, interpretation }) {
    return (
        <ScrollView className="flex-1">
            <View className="px-4 pt-4">
                <View className="items-center mb-1">
                    <Txt className="text-2xl text-white/60 font-light">Clock</Txt>
                </View>

                <View className="items-center mb-6">
                    <Txt className="text-3xl text-white/90 font-light tracking-wider">{city}</Txt>
                </View>

                <View className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-4 border border-white/20">
                    <View className="items-center">
                        <Image
                            className="w-32 h-32 mb-4"
                            source={interpretation.image}
                            resizeMode="contain"
                        />

                        <Txt className="text-8xl text-white font-light tracking-tighter">
                            {temperature}°
                        </Txt>

                        <Txt className="text-xl text-white/70 capitalize mt-2 tracking-wide">
                            {interpretation.label}
                        </Txt>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
