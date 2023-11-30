import { View, Text, Dimensions, Platform, ScrollView,  Image } from 'react-native'
import React, { useState } from 'react'
import MoviesList from "../components/MoviesList"
import InternalHeader from '../components/InternalHeader'
import Loading from '../components/Loading'

var {width,height} = Dimensions.get('window')
const verticalMargin = (Platform.OS === 'ios')?" ":" my-3"
export default function Person() {

    const [personMovies,setPersonMovies] = useState([1,2,3,4])
    const [loading,setLoading] = useState(false);


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
                                source={require("../assets/dummy.jpg")}
                                style={{height:height*0.48, width:width*0.74}}
                            />
                        </View>
                    </View>
                    <View className="mt-6">
                        <Text className="text-3xl text-white font-bold text-center">
                            Asphalt: 9
                        </Text>
                        <Text className="text-base text-neutral-500 text-center">
                            London, United Kingdom
                        </Text>
                    </View>
                    <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-600 rounded-full">
                        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                            <Text className="text-white font-semibold">Gender</Text>
                            <Text className="text-neutral-300 text-sm">Male</Text>
                        </View>
                        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                            <Text className="text-white font-semibold">Birthday</Text>
                            <Text className="text-neutral-300 text-sm">09-19-1982</Text>
                        </View>
                        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                            <Text className="text-white font-semibold">Known for</Text>
                            <Text className="text-neutral-300 text-sm">Acting</Text>
                        </View>
                        <View className="px-2 items-center">
                            <Text className="text-white font-semibold">Popularity</Text>
                            <Text className="text-neutral-300 text-sm">64.23</Text>
                        </View>
                    </View>
                    <View className="my-6 mx-4 xpace-y-2">
                        <Text className="text-white text-lg">Biography</Text>
                        <Text className="text-neutral-400 tracking-wide">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque assumenda totam dolore asperiores similique natus magnam quia, iure minima sed culpa quidem veniam nemo esse, debitis minus omnis fugiat quis alias earum quos quisquam facere officiis? Aliquid pariatur ab soluta nemo aut facere explicabo? Debitis optio at nulla voluptatibus rem? Impedit aut facere consequuntur doloribus nobis dolorem quibusdam cupiditate magnam quas sunt illum pariatur et sequi quae tempore, ullam temporibus blanditiis, cum nulla rem, accusamus cumque. Animi error quia at voluptatibus repudiandae optio autem, obcaecati corrupti laudantium. Iure est error magnam ipsa magni aspernatur culpa ullam consequatur soluta itaque dicta, iusto corporis obcaecati, sequi fugit deleniti dolorum perferendis omnis? Molestiae adipisci aperiam consectetur aspernatur, saepe voluptatem modi odit voluptatibus ab cumque velit quia. Architecto et, voluptas accusamus fuga neque saepe sed! Consequatur ea commodi perferendis voluptatem. Sunt illum voluptatum velit. Quas tempore similique incidunt eos nesciunt consequuntur sequi provident eaque veniam reiciendis, quidem, iure, praesentium earum. At ipsam quas maxime corporis iste dicta nostrum pariatur vero autem magni explicabo earum consectetur sed magnam, neque reprehenderit tempora distinctio voluptatem, vel aspernatur! Et inventore neque, at aspernatur laudantium dolores molestias officia, suscipit accusantium ipsa sint quia cum itaque minima impedit exercitationem.
                        </Text>
                    </View>
                    <MoviesList hideSeeAll={true} title={"Featured movies"} list={personMovies} />
                </View>
            </View>
            )
        }
    </ScrollView>
  )
}