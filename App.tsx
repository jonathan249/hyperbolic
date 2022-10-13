import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function parseTasks(data: string) {
    JSON.parse("tasks", data);
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetch("https://hyperbolic.vercel.app/api/tasks")
        .then((response) => response.json())
        .then((response) => parseTasks(response))
        .then((response) => setTasks(response));

      console.log(data);
    };

    fetchTasks().catch(console.error);
  }, []);

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
