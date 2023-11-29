import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {useRoute} from "@react-navigation/native"
import {ChevronLeftIcon} from "react-native-heroicons/outline"
import {HeartIcon} from "react-native-heroicons/solid"
import {styles, theme} from "../theme"
import {useNavigation} from "@react-navigation/native"
import LinearGradient from 'react-native-linear-gradient';
import CastMember from './CastMember';

var {width,height} = Dimensions.get('window')
const topMargin = (Platform.OS === 'ios')?"":" mt-3"

const Movies = () => {

    const {params: item} = useRoute();
    const navigation = useNavigation();
    const [isLikes,setIsLiked] = useState(false);
    const [cast,setCast] = useState([1,2,3,4,5])

    useEffect(()=>{

    },[item])

  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom:20}} >
        <View className="w-full">
            <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4"+topMargin}>
                <TouchableOpacity style={styles.background} className="rounded-xl mx-2 p-1" onPress={()=>navigation.goBack()}>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setIsLiked(!isLikes)} className="rounded-xl p-1">
                    <HeartIcon size="35" strokeWidth={2.5} color={isLikes? theme.background:"white"} />
                </TouchableOpacity>
            </SafeAreaView>
            <View>
                <Image
                    source={require("../assets/dummy.jpg")}
                    style={{width, height:height*0.55 }} 
                    />
                    <LinearGradient 
                        colors={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
                        style={{width,height: height*0.40}}
                        start={{x:0.5, y:0}}    
                        end={{x:0.5, y:1}}    
                        className="absolute bottom-0"
                    />
            </View>
            <View
                style={{marginTop:-(height*0.09)}}
                className="space-y-3">
                    <Text className="text-white text-center text-3xl font-bold tracking-wider">
                            Asphalt: 9 The Legends
                    </Text>
                    <Text className="text-neutral-400 text-semibold text-baser text-center">
                            Relese Date • 2023 • 170 min
                    </Text>

                    <View className="flex-row justify-center mx-4 space-x-2">
                        <Text className="text-neutral-400 text-semibold text-baser text-center">
                            Action •
                        </Text>
                        <Text className="text-neutral-400 text-semibold text-baser text-center">
                            Racing •
                        </Text>
                        <Text className="text-neutral-400 text-semibold text-baser text-center">
                            Celebration
                        </Text>
                    </View>
                    <Text className="text-neutral-400 mx-4 tracking-wide">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ut hic deserunt voluptates repellendus repellat amet cum doloribus nemo eveniet, quos, inventore ipsum placeat cupiditate praesentium provident facilis totam, minima sequi ex? Molestiae aperiam iure impedit doloremque voluptatem eveniet at nemo. Blanditiis animi vitae quaerat deserunt nesciunt quo id voluptatem!
                    </Text>
            </View>
        </View>
        <CastMember cast={cast}/>
    </ScrollView>
  )
}

export default Movies