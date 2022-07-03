import { ScrollView, View } from '@tarojs/components'
import Person from '../../components/person'

import './index.scss'

export default function Index () {
  const scrollStyle = {
    width: '750rpx',
    height: 'calc(100vh - 150rpx)'
  }

  const onScroll = e => {
    // console.log(e.detail)
  }
  const style = {
    width: '1200rpx',
    height: '1200rpx',
    padding: '30rpx'
  }

  const tree = [
    {
      id: '001',
      name: '熊隆祥',
      gender: 'male',
      children: [
        {
          id: '002',
          name: '熊昌霖',
          gender: 'male'
        },
        {
          id: '003',
          name: '熊昌权',
          gender: 'male'
        }
      ]
    },
    {
      id: '004',
      name: '熊芳狗',
      gender: 'female',
      children: [
        {
          id: '002',
          name: '熊芳1',
          gender: 'male',
          children: [
            {
              id: '002',
              name: '熊芳1',
              gender: 'male'
            },
            {
              id: '003',
              name: '熊芳2',
              gender: 'male'
            }
          ]
        },
        {
          id: '003',
          name: '熊芳2',
          gender: 'male',
          children: [
            {
              id: '002',
              name: '熊芳1',
              gender: 'male',
              children: [
                {
                  id: '002',
                  name: '熊芳1',
                  gender: 'male'
                },
                {
                  id: '003',
                  name: '熊芳2',
                  gender: 'male'
                }
              ]
            },
            {
              id: '003',
              name: '熊芳2',
              gender: 'male'
            }
          ]
        }
      ]
    }
  ]

  interface IPerson {
    id: string
    name: string
    gender: string
    children?: IPerson[]
  }
  const Tree = props => {
    const { trees, isRoot } = props

    if (!trees || trees.length === 0) return null
    console.log('trees', trees)
    return (
      <view className='table'>
        {!isRoot && <view className='vertical-line'></view>}

        {trees.map((item: IPerson) => (
          <view className='td' key={item.id}>
            <view className='table'>
              <view className='tr tr0'>
                <view className='td td2'>
                  <Person
                    isRoot={isRoot}
                    id={item.id}
                    name={item.name}
                    gender={item.gender}
                    hasChild={!item.children?.length}
                  />
                </view>
              </view>

              {!!item.children && item.children.length > 0 && (
                <view className='tr tr2'>
                  <Tree trees={item.children || []} isRoot={false}></Tree>
                </view>
              )}
            </view>
          </view>
        ))}
      </view>
    )
  }

  return (
    <ScrollView scrollX scrollY style={scrollStyle} onScroll={onScroll}>
      <View className='index' style={style}>
        <Tree trees={tree} isRoot />
      </View>
    </ScrollView>
  )
}
