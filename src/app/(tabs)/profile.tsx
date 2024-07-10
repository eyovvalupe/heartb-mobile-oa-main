import { SafeAreaView } from "react-native";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text } from '@ui-kitten/components';

const ProfileScreen = () => (
    <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-slate-800">Profile Tab</Text>
    </SafeAreaView>
);

export default function Page() {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <ProfileScreen />
        </ApplicationProvider>
    );
}