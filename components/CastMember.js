import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const CastMember = ({cast}) => {
  return (
    <View className="my-6">
        <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{padding: 15}}
        >
            {
                cast && cast.map((person,index)=>{
                    return (
                        <TouchableOpacity
                            key={index}
                            className="mr-4 items-center"
                        >
                            <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                <Image className="rounded-2xl h-24 w-24" source={require("../assets/dummy.jpg")}/>
                            </View>
                            <Text className="text-white text-xs mt-1">
                                John Wick
                            </Text>
                            <Text className="text-neutral-400 text-xs mt-1">
                                Keaunu Reevs
                            </Text>
                        </TouchableOpacity>

                    )
                })
            }
        </ScrollView>
    </View>
  )
}

export default CastMember