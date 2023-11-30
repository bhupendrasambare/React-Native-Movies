import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading';

const { width, height } = Dimensions.get('window');
export default function Search() {
    const navigation = useNavigation()

    const [movies,setMovies] = useState([1,2,4,56,6]);
    const [loading,setLoading] = useState(false);
    var movieName = "Asphalt: 9 Legends - Racing game for fun"

  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
            placeholder='Search Movies'
            placeholderTextColor={'lightgray'}
            className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
            onPress={()=>navigation.navigate("Home")}
            className="rounded-full p-3 m-1 bg-neutral-500"
        >
            <XMarkIcon size="25" color="white"/>
        </TouchableOpacity>
      </View>

      {
        loading?(
            <Loading/>
        ):(
            movies.length>0?(
                <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal:15}}
                className="spacing-y-3"
                >
                    <Text className="text-white font-semibold m-1">Results {movies.length}</Text>
                    
                    <View className="flex-row justify-between flex-wrap">
                    {
                        movies.map((item,index)=>{
                            return (
                                <TouchableWithoutFeedback
                                key={index}
                                onPress={()=>navigation.push("Movie",item)}
                                >
                                    <View className="space-y-2 mb-4">
                                        <Image className="rounded-3xl"
                                            source={require("../assets/dummy.jpg")}
                                            style={{width:width*0.44, height: height*0.3}}
                                        ></Image>
                                        <Text className="text-neutral-300 ml-1">
                                        {movieName.length>20 ? movieName.slice(0,20)+"...":movieName}
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                    </View>
                </ScrollView>
                ):(
                <View className="flex-row justify-center">  
                    <Image source={require("../assets/movieTime.png")}
                    className="h-95 w-96"/>
                </View>
            ) 
        )}
                
    </SafeAreaView>
  )
}