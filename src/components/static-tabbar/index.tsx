/* eslint-disable react-native/no-inline-styles */
import React, { Fragment, useEffect, useState } from 'react'
import {
  Animated,
  Dimensions,
  I18nManager,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

interface Tab {
  id: string
  title: string
  icon: any
  activeIcon: any
}

interface StaticProps {
  tabs: Tab[]
  value: Animated.Value
  navigate: (title: string) => void
  tabBarBackground: string
  textColor: string
}

const AnimatedView = Animated.createAnimatedComponent(View)

const { width } = Dimensions.get('window')
export const tabHeight = 64

export const StaticTabbar: React.FC<StaticProps> = ({
  tabs,
  value,
  navigate,
  tabBarBackground,
  textColor,
}) => {
  const tabWidth = width / tabs.length

  const [values, setValues] = useState<Animated.Value[]>([])

  useEffect(() => {
    setValues(tabs.map((_, index) => new Animated.Value(index === 0 ? 1 : 0)))
  }, [tabs])

  const onNavigate = (index: number) => {
    Animated.sequence([
      ...values.map((v) =>
        Animated.timing(v, {
          toValue: 0,
          duration: 1,
          useNativeDriver: true,
        })
      ),
      Animated.parallel([
        Animated.spring(values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.spring(value, {
          toValue: I18nManager.isRTL
            ? width / 1.33 - tabWidth * index
            : -width + tabWidth * index,
          useNativeDriver: true,
        }),
      ]),
    ]).start()
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {tabs.map(({ id, title, icon: Icon, activeIcon: ActiveIcon }, index) => {
        const activeValue = values[index]
        const opacity = value.interpolate({
          inputRange: I18nManager.isRTL
            ? [
                width / 1.33 - tabWidth * (index + 1),
                width / 1.33 - tabWidth * index,
                width / 1.33 - tabWidth * (index - 1),
              ]
            : [
                -width + tabWidth * (index - 1),
                -width + tabWidth * index,
                -width + tabWidth * (index + 1),
              ],
          outputRange: [1, 0, 1],
          extrapolate: 'clamp',
        })
        const translateY = activeValue?.interpolate({
          inputRange: [0, 1],
          outputRange: [2 * tabHeight, 0],
        })
        return (
          <Fragment key={`icon-${index}`}>
            <TouchableWithoutFeedback
              onPress={() => {
                onNavigate(index)
                navigate(id)
              }}
            >
              <AnimatedView
                style={{
                  flex: 1,
                  height: tabHeight - 4,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity,
                }}
              >
                <Icon />
                <View style={{ marginTop: 8 }}>
                  <Text
                    style={{
                      color: textColor,
                      fontSize: 12,
                      textAlign: 'center',
                    }}
                  >
                    {title}
                  </Text>
                </View>
              </AnimatedView>
            </TouchableWithoutFeedback>
            <AnimatedView
              style={{
                position: 'absolute',
                top: -32,
                width: tabWidth,
                height: tabHeight,
                left: tabWidth * index,
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ translateY: translateY || 0 }],
              }}
            >
              <View
                style={{
                  height: tabWidth > 100 ? tabWidth / 2.25 : tabWidth / 1.6,
                  width: tabWidth > 100 ? tabWidth / 2.25 : tabWidth / 1.6,
                  borderRadius: 48,
                  backgroundColor: tabBarBackground,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ActiveIcon />
              </View>
            </AnimatedView>
          </Fragment>
        )
      })}
    </View>
  )
}
