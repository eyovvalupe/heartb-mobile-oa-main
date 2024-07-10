import { SafeAreaView } from "react-native";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text } from '@ui-kitten/components';

const Followcreen = () => (
    <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-slate-800">Following Tab</Text>
    </SafeAreaView>
  );

export default function Page() {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
        <Followcreen />
      </ApplicationProvider>
    );
  }