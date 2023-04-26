import {SafeAreaView } from 'react-native';
import {useRouter, Stack} from "expo-router";
import LoadingScreen from "./LoadingScreen";
import {useState} from "react";
import Login from './auth/login'

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
                header: () => null
            }}
        />
        {
            loading ? <LoadingScreen/>: <Login/>
        }
    </SafeAreaView>
  )
}

export default Home;