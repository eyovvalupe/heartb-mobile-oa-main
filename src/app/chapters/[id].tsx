import * as eva from '@eva-design/eva';
import { useLocalSearchParams } from 'expo-router';
import { View, SafeAreaView, Text, Pressable, ScrollView } from "react-native";
import { ApplicationProvider, Avatar, Layout } from '@ui-kitten/components';
import mockChaptersMap from '@/data/mock_chapter_data';
import { Iconify } from 'react-native-iconify';
import { useState } from 'react';

const ChapterScreen = ({ chapterDocId }: { chapterDocId: string }) => (
    <Layout style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
            <Content chapterDocId={chapterDocId} />
            <Footer />
        </SafeAreaView>
    </Layout>
);

export default function Page() {
    const { id } = useLocalSearchParams();
    // Ensure id is a string
    const chapterDocId = Array.isArray(id) ? id[0] : id;
    const canFindChapter = chapterDocId in mockChaptersMap;
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            {canFindChapter ? (
                <ChapterScreen chapterDocId={chapterDocId} />
            ) : (
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Chapter Not Found</Text>
                </Layout>
            )}
        </ApplicationProvider>
    );
}


function Content({ chapterDocId }: { chapterDocId: string }) {
    const chapterData = mockChaptersMap[chapterDocId];
    const chapterTitleLine = `Chapter ${chapterData?.chapteridint}: ${chapterData?.chaptertitle}`;
    const avatarUrl = chapterData?.avatarurl;
    const followButtonPress = () => {
        console.log('Follow button pressed');
    };
    return (
        <View className="flex-1 px-5">
            <View className="flex-row py-4 justify-between items-center self-stretch">
                <View className="flex-row justify-center items-center gap-2">
                    {avatarUrl ? (
                        <Avatar
                            size='small'
                            source={{ uri: avatarUrl }}
                        />
                    ) : (
                        <Avatar
                            size='small'
                            source={require('src/public/images/avatar-default-icon.png')}
                        />
                    )}
                    <Text className="text-base text-black text-left">{chapterData?.creatorusername}</Text>
                </View>
                <Pressable onPress={followButtonPress} className="rounded-lg border border-orange-500 bg-orange-500 flex-row items-center px-2 py-1.5 justify-center transition-colors hover:bg-orange-600 active:bg-orange-700 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-orange-800 disabled:pointer-events-none disabled:opacity-50" >
                    <Iconify icon="ic:round-add" size={24} color="white" />
                    <Text className="text-base text-white text-left pl-1">Follow</Text>
                </Pressable>

            </View>
            <View className="flex-1 w-full">
                <View className="pb-2">
                    <Text className="text-xl font-semibold text-black text-left">{chapterData?.storytitle}</Text>
                    <Text className="text-base text-gray-500 mt-2 text-left font-normal">{chapterTitleLine}</Text>
                </View>
                <ScrollView className="flex-1 mt-3">
                    <Text className="text-lg leading-8 text-gray-800">
                        {chapterData?.content}
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}


function Footer() {
    const [menuIconColor, setMenuIconColor] = useState('#6B7280');
    const [addIconColor, setAddIconColor] = useState('#6B7280');
    const [shareIconColor, setShareIconColor] = useState('#6B7280');
    const [heartIconColor, setHeartIconColor] = useState('#6B7280');

    const handleMenuPress = () => {
        console.log('Menu pressed');
    };

    const handleAddPress = () => {
        console.log('Add pressed');
    };

    const handleSharePress = () => {
        console.log('Share pressed');
    };

    const handleHeartPress = () => {
        console.log('Heart pressed');
    };

    const handlePressIn = (setColor) => {
        setColor('#f97316'); // Active color
    };

    const handlePressOut = (setColor) => {
        setColor('#6B7280'); // Original color
    };
    return (
        <View className="self-stretch w-full flex-row items-center justify-between px-5 py-6">
            <Pressable
                onPress={handleMenuPress}
                onPressIn={() => handlePressIn(setMenuIconColor)}
                onPressOut={() => handlePressOut(setMenuIconColor)}
                className="items-center justify-center"
            >
                <Iconify icon="heroicons-solid:menu-alt-2" size={30} color={menuIconColor} />
            </Pressable>
            <Pressable
                onPress={handleAddPress}
                onPressIn={() => handlePressIn(setAddIconColor)}
                onPressOut={() => handlePressOut(setAddIconColor)}
                className="items-center justify-center"
            >
                <Iconify icon="gg:add-r" size={30} color={addIconColor} />
            </Pressable>
            <Pressable
                onPress={handleSharePress}
                onPressIn={() => handlePressIn(setShareIconColor)}
                onPressOut={() => handlePressOut(setShareIconColor)}
                className="items-center justify-center"
            >
                <Iconify icon="fluent:share-16-filled" size={30} color={shareIconColor} />
            </Pressable>
            <Pressable
                onPress={handleHeartPress}
                onPressIn={() => handlePressIn(setHeartIconColor)}
                onPressOut={() => handlePressOut(setHeartIconColor)}
                className="items-center justify-center"
            >
                <Iconify icon="ph:heart-bold" size={30} color={heartIconColor} />
            </Pressable>
        </View>
    );
}