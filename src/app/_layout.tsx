import "../global.css";
import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="chapters/[id]" options={{
        title: '',
        headerBackTitleVisible: false
      }} />
    </Stack>
  );
}