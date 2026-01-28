import { Txt } from "./Txt";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function MeteoAdvanced({dusk , dawn , wind}: {dusk?: string , dawn?: string , wind?: number}) {
    return (
        <View className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mx-4 mb-4 border border-white/20">
            <View className="flex-row justify-between">

                <View className="items-center flex-1">
                    <Ionicons name="sunny-outline" size={32} color="#ffffff" />
                    <Txt className="text-white/50 text-xs mb-1 mt-2">Aube</Txt>
                    <Txt className="text-white text-base font-light">{dusk}</Txt>
                </View>

                <View className="grid columw-px bg-white/20 mx-4" />

                <View className="items-center flex-1">
                    <Ionicons name="moon-outline" size={32} color="#ffffff" />
                    <Txt className="text-white/50 text-xs mb-1 mt-2">Crépuscule</Txt>
                    <Txt className="text-white text-base font-light">{dawn}</Txt>
                </View>

                <View className="w-px bg-white/20 mx-4 colum" />

                <View className="items-center flex-1">
                    <Ionicons name="leaf-outline" size={32} color="#ffffff" />
                    <Txt className="text-white/50 text-xs mb-1 mt-2">Vent</Txt>
                    <Txt className="text-white text-base font-light">{wind} km</Txt>
                </View>
            </View>
        </View>
    );
}
