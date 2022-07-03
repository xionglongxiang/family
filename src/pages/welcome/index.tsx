import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect } from 'react'
import './index.scss'

export default function Index () {
  useEffect(() => {
    setTimeout(() => {
      Taro.navigateTo({ url: '/pages/tree/index' })
    }, 2000)
  }, [])

  return (
    <View className='index'>
      <view className='name'>南昌市 安义县 前泽村 家谱</view>
      <Text>Hello world!2</Text>
    </View>
  )
}
