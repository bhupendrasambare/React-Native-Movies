import { Image, Text, TouchableWithoutFeedback, View ,Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from "@react-navigation/native"

const { width, height } = Dimensions.get('window');
const TrendingMovies = ({data,item}) => {

    const navigation = useNavigation()

    const handelClick = (item) =>{
        navigation.navigate("Movie",item)
    }

  return (
    <View classname="mb-8">
        <Text className="text-white text-xl mx-4 mb-5">Trending Movies</Text>

        <Carousel data={data}
        renderItem={({item})=><MoviewCard item={item} handelClick={handelClick} />}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width*0.62}
        slideStyle={{display:'flex', alignItems:"center"}}/>
    </View>
  )
}

export default TrendingMovies

const MoviewCard = ({item,handelClick})=>{
    return (
        <TouchableWithoutFeedback onPress={()=>handelClick(item)}>
            <Image
            className="rounded-3xl"
            source={require('../assets/dummy.jpg')}
                style={{
                    width: width*0.6,
                    height: height*0.4
                }}
            />
        </TouchableWithoutFeedback>
    )
}