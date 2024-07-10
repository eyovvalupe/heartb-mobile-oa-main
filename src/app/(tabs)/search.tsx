import * as eva from '@eva-design/eva';
import { SafeAreaView } from "react-native";
import { ApplicationProvider, Text } from '@ui-kitten/components';

const SearchScreen = () => (
    <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-slate-800">Search Tab</Text>
    </SafeAreaView>
  );

export default function Page() {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
        <SearchScreen />
      </ApplicationProvider>
    );
  }