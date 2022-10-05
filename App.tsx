import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView,  } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-black ">
        <Text className="text-white">
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="light" />
      </View>
    </TailwindProvider>
  );
}
