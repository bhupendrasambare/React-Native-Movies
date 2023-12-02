import { View, Text, Dimensions, Platform, ScrollView,  Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import MoviesList from "../components/MoviesList"
import InternalHeader from '../components/InternalHeader'
import Loading from '../components/Loading'
import { useRoute } from '@react-navigation/native'
import { fallbackPersonImage, fetchCast, fetchCastMovies, image500 } from '../apis/moviesdb'

var {width,height} = Dimensions.get('window')
const verticalMargin = (Platform.OS === 'ios')?" ":" my-3"
export default function Person() {

    const {params: item} = useRoute();
    const [person,setPerson] = useState({})
    const [personMovies,setPersonMovies] = useState([])
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getPersonDetails();
        getPersonMovies();
    },[item])

    const getPersonDetails = async ()=>{
        const data = await fetchCast(item.id);
        if(data){
            setPerson(data)
        }
        setLoading(false)
    }

    const getPersonMovies = async ()=>{
        const data = await fetchCastMovies(item.id);
        if(data){
            setPersonMovies(data.cast)
        }
        setLoading(false)
    }


  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom:20}}>
        {
            loading?(
                <Loading/>
            ):(
            <View>
                <InternalHeader styleClass={"z-20 w-full flex-row justify-between items-center px-4 "+ verticalMargin}/>

                <View>
                    <View className="flex-row justify-center"
                            style={{
                                shadowColor:'gray',
                                shadowOffset: {width:0, height:5},
                                shadowRadius:40,
                                shadowOpacity:1
                            }}>
                        <View 
                            className="items-center rounded-full overflow-hidden border-2 h-72 w-72 border-neutral-900">
                            <Image
                                source={{uri:image500(person?.profile_path) || fallbackPersonImage}}
                                style={{height:height*0.48, width:width*0.74}}
                            />
                        </View>
                    </View>
                    <View className="mt-6">
                        <Text className="text-3xl text-white font-bold text-center">
                            {person?.name}
                        </Text>
                        <Text className="text-base text-neutral-500 text-center">
                            {person?.place_of_birth}
                        </Text>
                    </View>
                    <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-600 rounded-full">
                        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                            <Text className="text-white font-semibold">Gender</Text>
                            <Text className="text-neutral-300 text-sm">{(person?.gender == 1)?"Female":(person?.gender == 2)?"Male":"Non-binary" }</Text>
                        </View>
                        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                            <Text className="text-white font-semibold">Birthday</Text>
                            <Text className="text-neutral-300 text-sm">{person?.birthday}</Text>
                        </View>
                        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                            <Text className="text-white font-semibold">Known for</Text>
                            <Text className="text-neutral-300 text-sm">{person?.known_for_department}</Text>
                        </View>
                        <View className="px-2 items-center">
                            <Text className="text-white font-semibold">Popularity</Text>
                            <Text className="text-neutral-300 text-sm">{person?.popularity}</Text>
                        </View>
                    </View>
                    <View className="my-6 mx-4 xpace-y-2">
                        <Text className="text-white text-lg">Biography</Text>
                        <Text className="text-neutral-400 tracking-wide">
                        {person?.biography || "N/A"}
                        </Text>
                    </View>
                    {personMovies.length>0 && <MoviesList hideSeeAll={true} title={"Featured movies"} list={personMovies} />}
                    
                </View>
            </View>
            )
        }
    </ScrollView>
  )
}