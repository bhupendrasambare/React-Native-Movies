import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { image185 } from '../apis/moviesdb'

const CastMember = ({cast,navigation}) => {
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
                            onPress={()=>navigation.push("Person",person)}
                            className="mr-4 items-center"
                        >
                            <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500 ">
                                <Image className="rounded-2xl h-24 w-24" source={{uri:image185(person?.profile_path)}}/>
                            </View>
                            <Text className="text-white text-xs mt-1">
                                {person?.name}
                            </Text>
                            <Text className="text-neutral-400 text-xs mt-1">
                                {person?.original_name}
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