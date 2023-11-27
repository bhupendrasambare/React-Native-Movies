import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import {Bars3BottomLeftIcon, MagnifyingGlass, MagnifyingGlassIcon} from "react-native-heroicons/outline"
import TrendingMovies from '../components/TrendingMovies';


const HomeScreen = () => {

    const[trendingList,setTrendingList] = useState([1,2,3,4]);

  return (
    <View className="flex-1 bg-neutral-800">
        <SafeAreaView className="mb-2">
            <StatusBar barStyle="light"/>
            <View className="flex-row justify-between items-center mx-4">
                <Bars3BottomLeftIcon size="30" strokeWidth={2} color="white" />

                <Text className="text-white text-3xl font-bold">
                    <Text className='text-yellow-500 italic'>M</Text>
                    ovies
                </Text>

                <TouchableOpacity>
                    <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
            <TrendingMovies data={trendingList}/>
        </ScrollView>
    </View>
  )
}

export default HomeScreen