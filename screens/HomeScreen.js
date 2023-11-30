import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import {Bars3BottomLeftIcon, MagnifyingGlass, MagnifyingGlassIcon} from "react-native-heroicons/outline"
import TrendingMovies from '../components/TrendingMovies';
import MoviesList from '../components/MoviesList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/Loading';
import {fetchTopRatedMovies, fetchTrendingMovies, fetchUpcommingMovies} from "../apis/moviesdb"

const HomeScreen = () => {

    const navigation = useNavigation()
    const[trendingList,setTrendingList] = useState([]);
    const[upcommingMoview,setUpcommingMovies] = useState([]);
    const[topRatedMoview,setTopRatedMovies] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        getTrendingMovies();
        getUpcommingMovies();
        getTopRatedMovies();
    }, [])

    const getTrendingMovies = async ()=>{
        const data = await fetchTrendingMovies()
        if(data && data.results){
            setTrendingList(data.results);
        }
        setLoading(false)
    }

    const getUpcommingMovies = async ()=>{
        const data = await fetchUpcommingMovies()
        if(data && data.results){
            setUpcommingMovies(data.results);
        }
        setLoading(false)
    }

    const getTopRatedMovies = async ()=>{
        const data = await fetchTopRatedMovies()
        if(data && data.results){
            setTopRatedMovies(data.results);
        }
        setLoading(false)
    }
    

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

                <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
                    <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        {loading?(
            <Loading/>
        ):(
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
                {trendingList.length>0 && <TrendingMovies data={trendingList}/>}

                {/* Adding upcomming movies */}
                {upcommingMoview.length>0 &&  <MoviesList list={upcommingMoview} title={"Upcomming Movies"}/>}
               

                {/* Adding Top Rated movies */}
                {topRatedMoview.length>0 && <MoviesList list={topRatedMoview} title={"Top Rated Movies"}/>}
                
            </ScrollView>
            
        )}
    </View>
  )
}

export default HomeScreen