import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {useRoute} from "@react-navigation/native"
import {ChevronLeftIcon} from "react-native-heroicons/outline"
import {HeartIcon} from "react-native-heroicons/solid"
import {styles, theme} from "../theme"
import {useNavigation} from "@react-navigation/native"
import LinearGradient from 'react-native-linear-gradient';
import CastMember from './CastMember';
import MoviesList from "../components/MoviesList"
import InternalHeader from '../components/InternalHeader';
import Loading from '../components/Loading';
import { fetchMovie, fetchMovieCredits,  fetchMovieSimilar,  image500 } from '../apis/moviesdb';

var {width,height} = Dimensions.get('window')
const topMargin = (Platform.OS === 'ios')?"":" mt-3"

const Movies = () => {

    const {params: item} = useRoute();
    const navigation = useNavigation();
    const [isLikes,setIsLiked] = useState(false);
    const [cast,setCast] = useState([])
    const [similarmovies,setSimilarmovies] = useState([])
    const [loading,setLoading] = useState(true);
    const [details,setDetails] = useState(null)

    useEffect(()=>{
        getMoviesdetails();
        getMovieCredits();
        getSimilarMovies();
    }, [item])

    const getMoviesdetails = async ()=>{
        const data = await fetchMovie(item.id);
        if(data){
            setDetails(data)
        }
        setLoading(false)
    }

    const getMovieCredits = async ()=>{
        const data = await fetchMovieCredits(item.id);
        if(data){
            setCast(data.cast)
        }
        setLoading(false)
    }

    const getSimilarMovies = async ()=>{
        const data = await fetchMovieSimilar(item.id);
        if(data){
            setSimilarmovies(data.results)
        }
        console.log(similarmovies)
        setLoading(false)
    }

  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom:20}} >
        {
            loading?(
                <Loading/>
            ):(
            <View>

                <View className="w-full">
                    <InternalHeader styleClass={"absolute z-20 w-full flex-row justify-between items-center px-4"+topMargin}/>
                    <View>
                        <Image
                            source={{uri:image500(details?.poster_path)}}
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
                                    {details?.original_title}
                            </Text>
                            <Text className="text-neutral-400 text-semibold text-baser text-center">
                                    Relese Date • {details?.release_date} • {details?.runtime} min
                            </Text>

                            <View className="flex-row justify-center mx-4 space-x-2">
                                {
                                    details && 
                                        details?.genres?.map((inData, geren)=>{
                                            return (    
                                                <Text className="text-neutral-400 text-semibold text-baser text-center">
                                                    {inData?.name}{(details?.genres?.length!=geren+1)?" • ":""}
                                                </Text>
                                            )
                                        })
                                }
                            </View>
                            <Text className="text-neutral-400 mx-4 tracking-wide">
                                {details?.overview}
                            </Text>
                    </View>
                </View>
                <CastMember navigation={navigation} cast={cast}/>
                
                <MoviesList list={similarmovies} hideSeeAll={true} title={"Simillar Movies"}/>

            </View>
            )
        }
    </ScrollView>
  )
}

export default Movies