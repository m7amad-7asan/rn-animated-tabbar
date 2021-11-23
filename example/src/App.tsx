import React, { useEffect } from 'react'
import {SafeAreaView, StatusBar, View} from 'react-native'

import RNAnimatedTabbarModule, { BottomTabs } from 'rn-animated-tabbar'

import {Currency, CurrencyLG, Converter, ConverterLG, Gold, GoldLg, Settings, SettingsLG} from './core'

const BottomTabsData = [
  {
    id: 'Currency',
    title: 'Currency',
    icon: Currency,
    activeIcon: CurrencyLG,
  },
  {
    id: 'Converter',
    title: 'Converter',
    icon: Converter,
    activeIcon: ConverterLG,
  },
  {
    id: 'Gold',
    title: 'Gold',
    icon: Gold,
    activeIcon: GoldLg,
  },
  {
    id: 'Settings',
    title: 'Settings',
    icon: Settings,
    activeIcon: SettingsLG,
  },
];

const App = () => {
  useEffect(() => {
    console.log(RNAnimatedTabbarModule)
  })

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#513070" />
      <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF"}}>
      <View style={{position: 'absolute', bottom: 0, right: 0, left: 0, backgroundColor: '#513070', paddingBottom: 16}}>
        <BottomTabs 
          tabsData={BottomTabsData} 
          tabBarBackground="#513070"
          activeTabBackground="#FFFFFF"
          navigationHandler={(screen: string) => console.log(screen)} 
          textColor="#FFFFFF"  />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default App
