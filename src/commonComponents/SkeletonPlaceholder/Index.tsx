import { View} from 'react-native'
import React from 'react'
import { style } from './style'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const CommonPropertyCardPlaceholder = () => {
  return (
    <SkeletonPlaceholder>
      <View style={style.container}/>
    </SkeletonPlaceholder>
  )
}

export default CommonPropertyCardPlaceholder

export const MyPostPlaceholder=()=>{
  return (
    <SkeletonPlaceholder>
      <View style={style.containerPost}/>
    </SkeletonPlaceholder>
  )
}

export const ImagePlaceholder = () => {
  return (
    <SkeletonPlaceholder>
      <View style={style.Imagecontainer}/>
    </SkeletonPlaceholder>
  )
}
