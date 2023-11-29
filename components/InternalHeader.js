import { View,  Platform, TouchableOpacity,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import {ChevronLeftIcon} from "react-native-heroicons/outline"
import {HeartIcon} from "react-native-heroicons/solid"
import { styles, theme } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function InternalHeader({styleClass,viewClass}) {    
    const navigation = useNavigation();
    const [isLikes,setIsLiked] = useState(false);
  return (
        <SafeAreaView className={styleClass}>
            <TouchableOpacity style={styles.background} className="rounded-xl mx-2 p-1" onPress={()=>navigation.goBack()}>
                <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setIsLiked(!isLikes)} className="rounded-xl p-1">
                <HeartIcon size="35" strokeWidth={2.5} color={isLikes? "red":"white"} />
            </TouchableOpacity>
        </SafeAreaView>
  )
}