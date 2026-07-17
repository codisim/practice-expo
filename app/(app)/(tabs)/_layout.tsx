import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";

function Layout(){
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        headerShown: false,
        title: 'Home',
        tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size}/>
        ),
      }} />


      <Tabs.Screen name="history" options={{
              headerShown: false,
              title: 'History',
              tabBarIcon: ({color, size}) => (
                  <AntDesign name="home" color={color} size={size}/>
              ),
            }} />



      <Tabs.Screen name="profile" options={{
              headerShown: false,
              title: 'Profile',
              tabBarIcon: ({color, size}) => (
                  <AntDesign name="home" color={color} size={size}/>
              ),
            }} />


          </Tabs>
  )
}


export default Layout;