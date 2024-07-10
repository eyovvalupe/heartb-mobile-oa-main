import { Iconify } from 'react-native-iconify';
import { Tabs } from 'expo-router';
import React from 'react';
import mockUserData from '@/data/mock_users_data';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Text , View} from 'react-native';
export default function TabLayout() {
    const userProfileImg = mockUserData?.avatarurl;
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#f97316',
            tabBarInactiveTintColor: '#6B7280'
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color }) => <View style = {{justifyContent: 'center', alignItems: 'center'}}><Iconify icon="akar-icons:home-alt1" size={24} color={color} /><Text>Home</Text></View>,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <View style = {{justifyContent: 'center', alignItems: 'center'}}><MaterialIcons name="explore" size={24} color={color} /><Text>Explore</Text></View>,
                }}
            />
            <Tabs.Screen
                name="follow"
                options={{
                    title: 'Following',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <View style = {{justifyContent: 'center', alignItems: 'center'}}><Ionicons name="notifications-outline" size={24} color={color} /><Text>Noti</Text></View>,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarShowLabel: false,
                    tabBarIcon: () => (userProfileImg ? (
                        <Image
                            // source={{ uri: "https://xximg1.meitudata.com/98qvJ5YCbyexRLR33YE4ivJEXBKP2G.jpg" }}
                            source={require('src/public/images/user.jpg')}
                            className="w-[35px] h-[35px] rounded-full"
                            // style={{width: 50, height: 50}}
                            resizeMode="cover"
                        />
                    ) : (
                        <View>
                        <Image
                            source={require('src/public/images/avatar-default-icon.png')}
                            className="w-[24px] h-[24px] rounded-full"
                            resizeMode="cover"
                        />
                        <Text>User</Text>
                        </View>
                    ))
                }}
            />
        </Tabs>
    );
}
