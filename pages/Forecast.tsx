import { TouchableOpacity, View, Image, ScrollView } from "react-native";
import { Txt } from "../components/Txt";
import { Container } from "../components/Container";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getWeatherInterpretation } from "../services/meteo-service";

export function Forecast() {
    const { params } = useRoute<any>();
    const nav = useNavigation();

    return (
        <Container>
            <ScrollView className="flex-1">
                <TouchableOpacity onPress={() => nav.goBack()} className="absolute top-4 left-4 z-10 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Txt className="text-white text-base">Retour</Txt>
                </TouchableOpacity>

                <View className="pt-20 px-4 pb-6">
                    <View className="items-center mb-8">
                        <Txt className="text-3xl text-white/90 font-light tracking-wider">{params?.city}</Txt>
                    </View>

                    {params?.weathercode?.map((code: number, index: number) => {
                        const interpretation = getWeatherInterpretation(code);
                        const date = new Date(params.time?.[index] || Date.now() + index * 24 * 60 * 60 * 1000);
                        const dayName = date.toLocaleDateString('fr-FR', { weekday: 'short' });
                        const dayNum = date.getDate();

                        return (
                            <View key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-3 border border-white/20 flex-row items-center">
                                <View className="w-20">
                                    <Txt className="text-white/90 text-base capitalize">{dayName}</Txt>
                                    <Txt className="text-white/60 text-sm">{dayNum}</Txt>
                                </View>

                                <View className="flex-1 items-center">
                                    <Image className="w-12 h-12" source={interpretation?.image} resizeMode="contain" />
                                </View>

                                <View className="flex-row items-center gap-2 w-28 justify-end">
                                    <Txt className="text-white/60 text-base">{Math.round(params.temperature_2m_min[index])}°</Txt>
                                    <View className="w-12 h-1 bg-white/40 rounded-full" />
                                    <Txt className="text-white text-base">{Math.round(params.temperature_2m_max[index])}°</Txt>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </Container>
    );
}
