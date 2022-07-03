import { Text, View } from '@tarojs/components'
import './index.scss'

export default function Index (props) {
  const { name, gender, hasChild, isRoot } = props
  return (
    <View className='container'>
      <view className='name'>{name}</view>
      <Text>{gender}</Text>
      {!hasChild && <view className='bottom-line'></view>}
      {!isRoot && <view className='top-line'></view>}
      {/* {hasChild && <view className='bottom-circle'>+</view>} */}
      {hasChild && <view className='top-circle'>+</view>}
    </View>
  )
}
