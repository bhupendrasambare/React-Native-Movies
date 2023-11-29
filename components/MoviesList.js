import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View,Dimensions} from 'react-native'
import { styles } from '../theme'
import {useNavigation} from "@react-navigation/native"

const { width, height } = Dimensions.get('window');
const MoviesList = ({title,list, hideSeeAll}) => {
    const navigation = useNavigation()
    let movieName = "Jon Doe: eht movie of future";
  return (
    <View className="space-y-4 mt-8">
        <View className="mx-4 flex-row justify-between items-center">
            <Text className="text-white text-xl">{title}</Text>
            {
                !hideSeeAll &&(
                    <TouchableOpacity>
                        <Text style={styles.text} className="text-lg">See all</Text>
                    </TouchableOpacity>
                )
            }
        </View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15}}>
            {
                list.map((item, index)=>{
                    return (
                        <View>
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={()=>navigation.push("Movie",item)}
                            >
                                <View className="space-y-1 mr-4">
                                    <Image source={require("../assets/dummy.jpg")}
                                    className="rounded-3xl"
                                    style={{width: width*0.33, height:height*0.22}} />
                                    <Text className="text-neutral-300 ml-1">{
                                        movieName.length>14?movieName.slice(0,14)+"...":movieName
                                    }</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        )
                })
            }
        </ScrollView>
    </View>
  )
}

export default MoviesList