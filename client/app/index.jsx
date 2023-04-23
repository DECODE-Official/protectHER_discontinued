import {View, Text, SafeAreaView } from 'react-native';
import {Stack, useRouter} from "expo-router";
import LoadingScreen from "./LoadingScreen";

const Home = () => {
    const router = useRouter();
  return (
    <SafeAreaView>
        <Stack.Screen style={{backgroundColor: "#fff", flex: 1}}
            options={{
                title: "",
                headerShown: false,
            }}
        />
        <LoadingScreen/>
    </SafeAreaView>
  )
}

export default Home;