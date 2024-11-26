import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';
import { Gift } from 'lucide-react';
import { Icon } from 'lucide-react-native';
import { View } from 'react-native';
import TabBar from '@/src/components/atom/TabBar';

const TabLayout=()=>{
return(
  <Tabs tabBar={props=><TabBar {...props} />} >
    <Tabs.Screen name='index' options={{title:'Home'}} />
    <Tabs.Screen name='MarKetPlace' options={{title:'MarketPlace'}}  />
    <Tabs.Screen name='myList' options={{title:'Mylist'}}  />
    <Tabs.Screen name='Account' options={{title:'Account'}}  />
  </Tabs>
)
}

export default TabLayout;