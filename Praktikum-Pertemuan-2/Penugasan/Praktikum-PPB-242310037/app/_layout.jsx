import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <StatusBar style="auto" />
            <Stack.Screen name="index" Options={{ headerShown: false }} />
        </Stack>
    ); 
}