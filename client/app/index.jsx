import {View, Text, SafeAreaView } from 'react-native';
import {Stack, useRouter} from "expo-router";
import LoadingScreen from "./LoadingScreen";
import {useState} from "react";
import Login from '../BeforeAuth/login'

const Home = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false)
    },3000)
  return (
    <SafeAreaView>
        <Stack.Screen style={{backgroundColor: "#fff", flex: 1}}
            options={{
                title: "",
                headerShown: false,
            }}
        />
        {
            loading ? <LoadingScreen/>: <Login/>
        }
    </SafeAreaView>
  )
}

export default Home;